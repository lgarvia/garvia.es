import { useState, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TrendingUp, TrendingDown, Info, Settings2 } from 'lucide-react';
import { translations } from './translations';

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
    const t = translations[lang];

    const [optionType, setOptionType] = useState<'call' | 'put'>('call');
    const [position, setPosition] = useState<'long' | 'short'>('long');
    const [strike, setStrike] = useState(100);
    const [premium, setPremium] = useState(5);
    const [spotRange, setSpotRange] = useState(200);

    const data = useMemo(() => {
        const steps = 100;
        const labels = [];
        const payoffData = [];
        const profitData = [];

        for (let s = 0; s <= spotRange; s += spotRange / steps) {
            labels.push(s.toFixed(0));
            let payoff = 0;

            if (optionType === 'call') {
                payoff = Math.max(0, s - strike);
            } else {
                payoff = Math.max(0, strike - s);
            }

            if (position === 'short') {
                payoff = -payoff;
            }

            const profit = position === 'long' ? payoff - premium : payoff + premium;

            payoffData.push(payoff);
            profitData.push(profit);
        }

        return {
            labels,
            datasets: [
                {
                    label: t.payoffLabel,
                    data: payoffData,
                    borderColor: 'rgba(148, 163, 184, 0.5)',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    tension: 0,
                },
                {
                    label: t.profitLabel,
                    data: profitData,
                    borderColor: position === 'long' ? '#10b981' : '#ef4444',
                    backgroundColor: position === 'long'
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 0,
                    tension: 0,
                },
            ],
        };
    }, [optionType, position, strike, premium, spotRange, t]);

    const summary = useMemo(() => {
        const breakEven = optionType === 'call'
            ? strike + premium
            : strike - premium;

        let maxProfit = t.unlimited;
        let maxLoss = t.unlimited;

        if (optionType === 'call') {
            if (position === 'long') {
                maxLoss = `${premium} €`;
            } else {
                maxProfit = `${premium} €`;
            }
        } else {
            if (position === 'long') {
                maxProfit = `${(strike - premium).toFixed(2)} €`;
                maxLoss = `${premium} €`;
            } else {
                maxProfit = `${premium} €`;
                maxLoss = `${(strike - premium).toFixed(2)} €`;
            }
        }

        return { breakEven, maxProfit, maxLoss };
    }, [optionType, position, strike, premium, t]);

    return (
        <div className="container">
            <header>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <div className="toggle-group" style={{ margin: 0, maxWidth: '120px' }}>
                        <button className={`toggle-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
                        <button className={`toggle-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                    </div>
                </div>
                <h1>{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>
            </header>

            <div className="grid">
                <aside className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <Settings2 size={20} color="#3b82f6" />
                        <h2 style={{ fontSize: '1.2rem' }}>{t.settings}</h2>
                    </div>

                    <label>{t.optionType}</label>
                    <div className="toggle-group">
                        <button
                            className={`toggle-btn ${optionType === 'call' ? 'active' : ''}`}
                            onClick={() => setOptionType('call')}
                        >
                            CALL
                        </button>
                        <button
                            className={`toggle-btn ${optionType === 'put' ? 'active' : ''}`}
                            onClick={() => setOptionType('put')}
                        >
                            PUT
                        </button>
                    </div>

                    <label>{t.position}</label>
                    <div className="toggle-group">
                        <button
                            className={`toggle-btn ${position === 'long' ? 'active' : ''}`}
                            onClick={() => setPosition('long')}
                        >
                            {t.long}
                        </button>
                        <button
                            className={`toggle-btn ${position === 'short' ? 'active' : ''}`}
                            onClick={() => setPosition('short')}
                        >
                            {t.short}
                        </button>
                    </div>

                    <div className="input-group">
                        <label>{t.strike}</label>
                        <input
                            type="number"
                            value={strike}
                            onChange={(e) => setStrike(Number(e.target.value))}
                        />
                    </div>

                    <div className="input-group">
                        <label>{t.premium}</label>
                        <input
                            type="number"
                            value={premium}
                            onChange={(e) => setPremium(Number(e.target.value))}
                        />
                    </div>

                    <div className="input-group">
                        <label>{t.range}</label>
                        <input
                            type="number"
                            value={spotRange}
                            onChange={(e) => setSpotRange(Number(e.target.value))}
                        />
                    </div>

                    <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.08)', borderRadius: '1.25rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <Info size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                                {t.infoPayoff}
                            </p>
                        </div>
                    </div>
                </aside>

                <main>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-label">{t.breakEven}</div>
                            <div className="stat-value" style={{ color: '#3b82f6' }}>{summary.breakEven.toFixed(2)} €</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">{t.maxProfit}</div>
                            <div className="stat-value" style={{ color: '#10b981' }}>{summary.maxProfit}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">{t.maxLoss}</div>
                            <div className="stat-value" style={{ color: '#ef4444' }}>{summary.maxLoss}</div>
                        </div>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                {position === 'long' ? <TrendingUp size={24} color="#10b981" /> : <TrendingDown size={24} color="#ef4444" />}
                                <h3 style={{ fontSize: '1.25rem' }}>{t.chartTitle}</h3>
                            </div>
                        </div>

                        <div className="chart-container">
                            <Line
                                data={data}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    interaction: {
                                        mode: 'index',
                                        intersect: false,
                                    },
                                    scales: {
                                        x: {
                                            title: { display: true, text: t.spotAxis, color: '#94a3b8', font: { size: 12 } },
                                            grid: { color: 'rgba(255, 255, 255, 0.05)' },
                                            ticks: { color: '#64748b', maxRotation: 0, autoSkip: true, maxTicksLimit: 10 }
                                        },
                                        y: {
                                            title: { display: true, text: t.resultAxis, color: '#94a3b8', font: { size: 12 } },
                                            grid: { color: 'rgba(255, 255, 255, 0.05)' },
                                            ticks: { color: '#64748b' }
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                            align: 'end',
                                            labels: { color: '#94a3b8', boxWidth: 12, padding: 20, font: { size: 12 } }
                                        },
                                        tooltip: {
                                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                            titleColor: '#f8fafc',
                                            bodyColor: '#94a3b8',
                                            borderColor: 'rgba(255, 255, 255, 0.1)',
                                            borderWidth: 1,
                                            padding: 12,
                                            cornerRadius: 8,
                                            callbacks: {
                                                label: (context) => {
                                                    const value = context.parsed?.y;
                                                    return `${context.dataset.label}: ${typeof value === 'number' ? value.toFixed(2) : '0.00'} €`;
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
