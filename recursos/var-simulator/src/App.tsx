import { useState, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
    Info,
    ShieldAlert,
    Activity,
    Database,
    ArrowDownRight,
    TrendingDown,
    Zap
} from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

// Auxiliar functions for statistics
const normalPDF = (x: number) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);

// Approximation for inverse normal CDF (Z-score)
const inverseNormalCDF = (p: number) => {
    const a = [-39.6968302866538, 220.946098424521, -275.928510446969, 138.357751867269, -30.6647980661472, 2.50662827745924];
    const b = [-54.4760987982241, 161.585836858041, -155.698979859887, 66.8013118877197, -13.2806815528857];
    const c = [-0.00778489400243029, -0.322396458041136, -2.40075827716184, -2.54973253934373, 4.37466414146497, 2.93816398269878];
    const d = [0.00778469570904146, 0.32246712907004, 2.445134137143, 3.75440866190742];
    const p_low = 0.02425;
    const p_high = 1 - p_low;
    let q, r;

    if (p < p_low) {
        q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    } else if (p < p_high) {
        q = p - 0.5;
        r = q * q;
        return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
            (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
    } else {
        q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }
};

function App() {
    // Inputs
    const [portfolioValue, setPortfolioValue] = useState(2000000);
    const [portfolioInput, setPortfolioInput] = useState("2.000.000");
    const [volatility, setVolatility] = useState(20); // Annual %
    const [timeHorizon, setTimeHorizon] = useState(10); // Days
    const [confidence, setConfidence] = useState(0.99);
    const [method, setMethod] = useState<'parametric' | 'montecarlo'>('parametric');
    const [distribution, setDistribution] = useState<'normal' | 'tstudent'>('normal');

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

    const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\./g, "");
        const num = val === "" ? 0 : parseInt(val, 10);
        if (!isNaN(num)) {
            setPortfolioValue(num);
            setPortfolioInput(num.toLocaleString('es-ES'));
        }
    };

    const calculations = useMemo(() => {
        const horizonYears = timeHorizon / 252;
        const horizonVol = (volatility / 100) * Math.sqrt(horizonYears);

        let varPercent = 0;
        let esPercent = 0;
        let scenarios: number[] = [];

        if (method === 'parametric') {
            const z = inverseNormalCDF(1 - confidence); // Z for the loss tail (negative)
            const alpha = 1 - confidence;

            if (distribution === 'normal') {
                varPercent = z * horizonVol; // Returns are negative for losses
                esPercent = - (normalPDF(z) / alpha) * horizonVol;
            } else {
                // Simplified Student-t (nu=4 for heavy tails)
                // Real Student-t VaR would use T-inverse, here we apply a scale factor for didactic purposes
                const tailFactor = 1.4; // Heuristic for fat tails vs normal at 99%
                varPercent = z * horizonVol * tailFactor;
                esPercent = varPercent * 1.3; // ES is always deeper in the tail
            }
        } else {
            // Monte Carlo
            const nSims = 10000;
            for (let i = 0; i < nSims; i++) {
                let rand = 0;
                if (distribution === 'normal') {
                    // Box-Muller
                    const u1 = Math.random();
                    const u2 = Math.random();
                    rand = Math.sqrt(-2 * Math.log(u1 || 0.00001)) * Math.cos(2 * Math.PI * u2);
                } else {
                    // Cauchy-ish / T-Student nu=3 approx
                    const u = Math.random() - 0.5;
                    rand = Math.tan(Math.PI * u) * 0.5; // Very fat tails
                    if (Math.abs(rand) > 5) rand = Math.sign(rand) * 5; // Cap for stability
                }
                scenarios.push(rand * horizonVol);
            }
            scenarios.sort((a, b) => a - b);
            const index = Math.floor((1 - confidence) * nSims);
            varPercent = scenarios[index];

            const tailScenarios = scenarios.slice(0, index);
            const sum = tailScenarios.reduce((acc, val) => acc + val, 0);
            esPercent = sum / (tailScenarios.length || 1);
        }

        const varValue = Math.abs(varPercent * portfolioValue);
        const esValue = Math.abs(esPercent * portfolioValue);

        return {
            varValue,
            esValue,
            varPercent: Math.abs(varPercent) * 100,
            esPercent: Math.abs(esPercent) * 100,
            scenarios: scenarios.length > 0 ? scenarios : [],
            horizonVol
        };
    }, [portfolioValue, volatility, timeHorizon, confidence, method, distribution]);

    const chartData = useMemo(() => {
        const bins = 50;

        const scenarios = calculations.scenarios.length > 0
            ? calculations.scenarios
            : Array.from({ length: 2000 }).map(() => {
                const u1 = Math.random();
                const u2 = Math.random();
                return Math.sqrt(-2 * Math.log(u1 || 0.00001)) * Math.cos(2 * Math.PI * u2) * calculations.horizonVol;
            });

        const min = Math.min(...scenarios);
        const max = Math.max(...scenarios);
        const step = (max - min) / bins;

        const counts = new Array(bins).fill(0);
        scenarios.forEach(s => {
            const bin = Math.min(Math.floor((s - min) / step), bins - 1);
            counts[bin]++;
        });

        const varThreshold = - (calculations.varPercent / 100);

        return {
            labels: counts.map((_, i) => ((min + i * step) * 100).toFixed(1) + "%"),
            datasets: [
                {
                    label: 'Frecuencia Escenarios',
                    data: counts,
                    backgroundColor: counts.map((_, i) => {
                        const val = min + i * step;
                        return val < varThreshold ? 'rgba(239, 68, 68, 0.6)' : 'rgba(139, 92, 246, 0.4)';
                    }),
                    borderColor: counts.map((_, i) => {
                        const val = min + i * step;
                        return val < varThreshold ? '#ef4444' : '#8b5cf6';
                    }),
                    borderWidth: 1,
                }
            ]
        };
    }, [calculations]);

    return (
        <div className="container">
            <header>
                <h1>VaR & Expected Shortfall Lab</h1>
                <p className="subtitle">Explorador predictivo de riesgo de mercado y colas de distribución</p>
            </header>

            <div className="grid">
                <aside className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        <Activity color="#a78bfa" size={24} />
                        <h2 style={{ fontSize: '1.25rem' }}>Configuración</h2>
                    </div>

                    <div className="method-selector">
                        <button
                            className={`method-btn ${method === 'parametric' ? 'active' : ''}`}
                            onClick={() => setMethod('parametric')}
                        >
                            Paramétrico
                        </button>
                        <button
                            className={`method-btn ${method === 'montecarlo' ? 'active' : ''}`}
                            onClick={() => setMethod('montecarlo')}
                        >
                            Monte Carlo
                        </button>
                    </div>

                    <div className="input-group">
                        <label>Valor de la Cartera (€)</label>
                        <input
                            type="text"
                            value={portfolioInput}
                            onChange={handlePortfolioChange}
                            placeholder="Ej: 2.000.000"
                        />
                    </div>

                    <div className="input-group">
                        <label>Volatilidad Anual (%)</label>
                        <input
                            type="number"
                            value={volatility}
                            onChange={(e) => setVolatility(Number(e.target.value))}
                            step="1"
                        />
                    </div>

                    <div className="input-group">
                        <label>Plazo (Días)</label>
                        <input
                            type="number"
                            value={timeHorizon}
                            onChange={(e) => setTimeHorizon(Number(e.target.value))}
                        />
                    </div>

                    <div className="input-group">
                        <label>Confianza (α)</label>
                        <select value={confidence} onChange={(e) => setConfidence(Number(e.target.value))}>
                            <option value={0.90}>90%</option>
                            <option value={0.95}>95%</option>
                            <option value={0.99}>99%</option>
                            <option value={0.999}>99.9%</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Modelo de Distribución</label>
                        <select value={distribution} onChange={(e) => setDistribution(e.target.value as any)}>
                            <option value="normal">Gaussiana (Normal)</option>
                            <option value="tstudent">t-Student (Fat Tails)</option>
                        </select>
                    </div>

                    <div className="info-banner">
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Info size={16} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <p>
                                El <strong>Expected Shortfall</strong> (o CVaR) cuantifica la pérdida media
                                <em> una vez que se ha superado</em> el límite del VaR. Según Basilea III, es la medida preferida para capturar el riesgo sistémico.
                            </p>
                        </div>
                    </div>
                </aside>

                <main>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-label">Value at Risk (VaR)</div>
                            <div className="stat-value danger">{formatCurrency(calculations.varValue)}</div>
                            <div style={{ fontSize: '0.8rem', color: '#fca5a5', marginTop: '0.5rem' }}>
                                Peor escenario con {confidence * 100}% de prob.
                            </div>
                            <ArrowDownRight style={{ position: 'absolute', right: '1rem', top: '1rem', opacity: 0.1 }} size={48} />
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Expected Shortfall (ES)</div>
                            <div className="stat-value" style={{ color: '#f87171' }}>{formatCurrency(calculations.esValue)}</div>
                            <div style={{ fontSize: '0.8rem', color: '#fca5a5', marginTop: '0.5rem' }}>
                                Pérdida media en la zona crítica.
                            </div>
                            <TrendingDown style={{ position: 'absolute', right: '1rem', top: '1rem', opacity: 0.1 }} size={48} />
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Riesgo Relativo</div>
                            <div className="stat-value secondary">{calculations.varPercent.toFixed(2)}%</div>
                            <div style={{ fontSize: '0.8rem', color: '#6ee7b7', marginTop: '0.5rem' }}>
                                Sobre el valor total expuesto.
                            </div>
                            <ShieldAlert style={{ position: 'absolute', right: '1rem', top: '1rem', opacity: 0.1 }} size={48} />
                        </div>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Database size={20} color="#a78bfa" />
                                <h3 style={{ fontSize: '1.1rem' }}>Distribución de Probabilidad y "Colas"</h3>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span className={`badge ${method === 'montecarlo' ? 'badge-primary' : 'badge-secondary'}`}>
                                    {method.toUpperCase()}
                                </span>
                                <span className="badge badge-secondary">
                                    {distribution.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        <div className="chart-container">
                            <Bar
                                data={chartData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { display: false },
                                        tooltip: {
                                            backgroundColor: '#1f2937',
                                            titleColor: '#f3f4f6',
                                            bodyColor: '#9ca3af',
                                            padding: 12,
                                            cornerRadius: 8
                                        }
                                    },
                                    scales: {
                                        y: {
                                            grid: { color: 'rgba(255,255,255,0.05)' },
                                            ticks: { color: '#6b7280' }
                                        },
                                        x: {
                                            grid: { display: false },
                                            ticks: { color: '#6b7280', maxRotation: 0 }
                                        }
                                    }
                                }}
                            />
                        </div>

                        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '0.75rem' }}>
                                    <Zap color="#ef4444" size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Interpretación VaR</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                                        Existe un {(1 - confidence) * 100}% de probabilidad de que la pérdida supere los {formatCurrency(calculations.varValue)} en {timeHorizon} días.
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.75rem' }}>
                                    <Activity color="#a78bfa" size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Densidad de Cola</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                                        El ES de {formatCurrency(calculations.esValue)} captura el "Fat Tail Risk" que el VaR suele ignorar en mercados volátiles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >
            </div >
        </div >
    );
}

export default App;
