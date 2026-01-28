import { useState, useMemo } from 'react';
import { translations } from './translations';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Calculator, BookOpen, LineChart, Globe, Coins, Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function App() {
    const [lang, setLang] = useState<'es' | 'en'>('es');
    const t = translations[lang] as any;

    const [inputs, setInputs] = useState({
        coupon: 5,
        frequency: 1,
        maturity: 5,
        yield: 4,
    });
    const nominal = 1000;

    const [deltaY, setDeltaY] = useState(0); // Center at 0
    const [zoom, setZoom] = useState<'micro' | 'standard' | 'macro'>('standard');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    const handleDeltaChange = (val: number) => {
        const cleanedVal = Math.min(10, Math.max(-10, parseFloat(val.toFixed(2))));
        setDeltaY(cleanedVal);
    };

    const calculatePrice = (y: number, coupon: number, freq: number, mat: number, nom: number) => {
        const y_dec = y / 100;
        const c_dec = coupon / 100;
        const n_periods = mat * freq;
        const pmt = (nom * c_dec) / freq;
        const y_per_period = y_dec / freq;

        let price = 0;
        if (y === 0) {
            price = pmt * n_periods + nom;
        } else {
            for (let t = 1; t <= n_periods; t++) {
                price += pmt / Math.pow(1 + y_per_period, t);
            }
            price += nom / Math.pow(1 + y_per_period, n_periods);
        }
        return price;
    };

    const results = useMemo(() => {
        const { coupon, frequency, maturity, yield: y } = inputs;
        const y_dec = y / 100;
        const c_dec = coupon / 100;
        const n_periods = maturity * frequency;
        const pmt = (nominal * c_dec) / frequency;
        const y_per_period = y_dec / frequency;

        let price = 0;
        let weightedSum = 0;

        for (let t = 1; t <= n_periods; t++) {
            const pv = pmt / Math.pow(1 + y_per_period, t);
            price += pv;
            weightedSum += (t / frequency) * pv;
        }

        const principalPV = nominal / Math.pow(1 + y_per_period, n_periods);
        price += principalPV;
        weightedSum += (n_periods / frequency) * principalPV;

        const macDuration = weightedSum / price;
        const modDuration = macDuration / (1 + y_per_period);

        return {
            price,
            macDuration,
            modDuration,
        };
    }, [inputs]);

    const sensitivity = useMemo(() => {
        const dy = deltaY / 100;
        const newYield = inputs.yield + deltaY;

        const pctChangeLin = -results.modDuration * dy;
        const priceLin = results.price * (1 + pctChangeLin);

        const priceReal = calculatePrice(newYield, inputs.coupon, inputs.frequency, inputs.maturity, nominal);
        const pctChangeReal = (priceReal - results.price) / (results.price || 1);

        const error = priceReal - priceLin;

        return {
            newYield,
            priceLin,
            priceReal,
            pctChangeLin: pctChangeLin * 100,
            pctChangeReal: pctChangeReal * 100,
            error
        };
    }, [results, deltaY, inputs]);

    const chartData = useMemo(() => {
        const yields = [];
        const prices = [];
        const tangents = [];
        const baseYield = inputs.yield;

        let startY = 0;
        let endY = 12;
        let step = 0.5;

        if (zoom === 'micro') {
            startY = Math.max(0, baseYield - 2.5);
            endY = baseYield + 2.5;
            step = 0.1;
        } else if (zoom === 'macro') {
            startY = 0;
            endY = 40;
            step = 1;
        }

        for (let y = startY; y <= endY; y += step) {
            yields.push(y);
            const p = calculatePrice(y, inputs.coupon, inputs.frequency, inputs.maturity, nominal);
            prices.push(p);

            const dy = (y - baseYield) / 100;
            const pTangent = results.price * (1 - results.modDuration * dy);
            tangents.push(pTangent > 0 ? pTangent : 0);
        }

        return {
            labels: yields.map(y => `${y.toFixed(1)}%`),
            datasets: [
                {
                    label: t.results.price,
                    data: prices,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.2,
                    pointRadius: yields.map(y => Math.abs(y - baseYield) < (step * 0.6) ? 6 : 0),
                    pointBackgroundColor: '#3b82f6',
                },
                {
                    label: t.results.tangent,
                    data: tangents,
                    borderColor: '#ef4444',
                    borderDash: [5, 5],
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0,
                    pointRadius: 0,
                }
            ]
        };
    }, [inputs, results, t.results.price, t.results.tangent, zoom]);

    const cashFlows = useMemo(() => {
        const { coupon, frequency, maturity } = inputs;
        const n_periods = maturity * frequency;
        const pmt = (nominal * (coupon / 100)) / frequency;
        const flows = [];
        for (let i = 1; i <= n_periods; i++) {
            flows.push({
                t: (i / frequency).toFixed(1),
                amount: i === n_periods ? pmt + nominal : pmt,
                type: i === n_periods ? 'principal' : 'coupon'
            });
        }
        return flows;
    }, [inputs]);

    return (
        <div className="container">
            <button className="lang-switch" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
                <Globe size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                {t.labels.switchLanguage}
            </button>

            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1>{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>
            </motion.header>

            <div className="grid">
                <motion.section
                    className="card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '8px' }}>
                        <Calculator className="text-primary" />
                        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.inputs.calculate}</h2>
                    </div>

                    <div className="input-field">
                        <label>{t.inputs.nominal}</label>
                        <input type="text" value="1.000" disabled style={{ background: 'rgba(0,0,0,0.05)', cursor: 'not-allowed' }} />
                    </div>
                    <div className="input-field">
                        <label>{t.inputs.coupon}</label>
                        <input type="number" name="coupon" value={inputs.coupon} onChange={handleInputChange} />
                    </div>
                    <div className="input-field">
                        <label>{t.inputs.maturity}</label>
                        <input type="number" name="maturity" value={inputs.maturity} onChange={handleInputChange} />
                    </div>
                    <div className="input-field">
                        <label>{t.inputs.yield}</label>
                        <input type="number" step="0.1" name="yield" value={inputs.yield} onChange={handleInputChange} />
                    </div>
                </motion.section>

                <motion.section
                    className="card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '8px' }}>
                        <LineChart className="text-primary" />
                        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.results.approximation}</h2>
                    </div>

                    <div style={{ padding: '1.25rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '1rem', border: '1px dashed var(--primary)' }}>
                        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                            <code style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                                ΔP/P ≈ -Dmod · Δy
                            </code>
                        </div>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
                                <button className="step-btn" onClick={() => handleDeltaChange(deltaY - 0.1)}><Minus size={14} /></button>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="delta-input"
                                    value={deltaY}
                                    onChange={(e) => handleDeltaChange(parseFloat(e.target.value) || 0)}
                                />
                                <button className="step-btn" onClick={() => handleDeltaChange(deltaY + 0.1)}><Plus size={14} /></button>
                                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>% (Δy)</span>
                            </div>

                            <div className="slider-container">
                                <div className="slider-zero-mark"></div>
                                <div className="slider-track-bg">
                                    <div className="slider-track-fill" style={{
                                        left: deltaY >= 0 ? '50%' : `${50 + deltaY * 5}%`,
                                        width: `${Math.abs(deltaY) * 5}%`,
                                        background: deltaY >= 0 ? '#3b82f6' : '#ef4444'
                                    }}></div>
                                </div>
                                <input
                                    type="range"
                                    min="-10"
                                    max="10"
                                    step="0.01"
                                    className="slider-native"
                                    value={deltaY}
                                    onChange={(e) => handleDeltaChange(parseFloat(e.target.value))}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span className="text-muted">{t.results.originalPrice}</span>
                                <span style={{ fontWeight: 600 }}>{results.price.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ef4444' }}>
                                <span>{t.results.predictedPrice}</span>
                                <span style={{ fontWeight: 700 }}>{sensitivity.priceLin.toFixed(2)} ({sensitivity.pctChangeLin.toFixed(2)}%)</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#3b82f6' }}>
                                <span>{t.results.actualPrice}</span>
                                <span style={{ fontWeight: 700 }}>{sensitivity.priceReal.toFixed(2)} ({sensitivity.pctChangeReal.toFixed(2)}%)</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                                <span style={{ fontWeight: 600 }}>{t.results.convexityEffect}</span>
                                <span style={{ fontWeight: 800, color: '#10b981' }}>+{sensitivity.error.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="result-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span className="text-muted" style={{ fontSize: '0.75rem' }}>Dur. Modificada</span>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{results.modDuration.toFixed(4)}</span>
                        </div>
                        <div className="result-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span className="text-muted" style={{ fontSize: '0.75rem' }}>Macaulay (años)</span>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{results.macDuration.toFixed(4)}</span>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Cash Flow Timeline */}
            <motion.section
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '8px' }}>
                    <Coins className="text-primary" />
                    <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.results.timeline}</h2>
                </div>
                <div style={{ position: 'relative', height: '140px', display: 'flex', alignItems: 'flex-end', gap: '4px', paddingBottom: '30px', overflowX: 'auto' }}>
                    <div style={{ position: 'absolute', bottom: '25px', left: 0, right: 0, height: '2px', background: 'var(--border)', zIndex: 0 }} />
                    {cashFlows.map((cf, i) => {
                        const isPrincipal = cf.type === 'principal';
                        const principalHeight = 110;
                        const couponHeight = principalHeight / 3;
                        const finalHeight = isPrincipal ? principalHeight : couponHeight;

                        return (
                            <div key={i} style={{ flex: 1, minWidth: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                                <div className={isPrincipal ? "broken-bar" : ""} style={{
                                    width: isPrincipal ? '16px' : '10px',
                                    height: `${finalHeight}px`,
                                    background: isPrincipal ? '#3b82f6' : '#94a3b8',
                                    borderRadius: '4px 4px 0 0',
                                    transition: 'height 0.3s ease',
                                    position: 'relative'
                                }}>
                                    {isPrincipal && <div className="zigzag"></div>}
                                </div>
                                <span style={{ position: 'absolute', top: '100%', marginTop: '4px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                                    t={cf.t}
                                </span>
                                <span style={{ position: 'absolute', bottom: '100%', marginBottom: '4px', fontSize: '0.7rem', fontWeight: 800, color: isPrincipal ? '#3b82f6' : 'inherit' }}>
                                    {cf.amount.toFixed(0)}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </motion.section>

            {/* Chart */}
            <motion.section
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{t.chart.title}</h2>
                    <div style={{ display: 'flex', background: 'rgba(0,0,0,0.05)', padding: '4px', borderRadius: '8px', gap: '4px' }}>
                        {(['micro', 'standard', 'macro'] as const).map(lvl => (
                            <button
                                key={lvl}
                                onClick={() => setZoom(lvl)}
                                style={{
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    background: zoom === lvl ? 'var(--primary)' : 'transparent',
                                    color: zoom === lvl ? 'white' : 'var(--text-muted)',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {t.chart.zoomLevels[lvl]}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="chart-container" style={{ position: 'relative', height: '400px' }}>
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            interaction: { mode: 'index', intersect: false },
                            plugins: {
                                legend: { display: true, position: 'bottom' },
                                tooltip: {
                                    enabled: true,
                                    callbacks: {
                                        label: function (context: any) {
                                            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}`;
                                        }
                                    }
                                },
                            },
                            scales: {
                                y: {
                                    min: Math.floor(Math.min(...chartData.datasets[0].data) * 0.98),
                                    grid: { color: 'rgba(0,0,0,0.05)' },
                                    title: { display: true, text: t.chart.priceAxis },
                                    suggestedMax: Math.max(...chartData.datasets[0].data) * 1.02
                                },
                                x: {
                                    grid: { display: false },
                                    title: { display: true, text: t.chart.yieldAxis }
                                }
                            }
                        }}
                    />
                </div>
            </motion.section>

            <footer style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.8rem', paddingBottom: '2rem' }}>
                © {new Date().getFullYear()} garvia.es | Educando en finanzas
            </footer>
        </div>
    );
}

export default App;
