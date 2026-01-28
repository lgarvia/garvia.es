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
import { ShieldCheck, Landmark, Info, Settings2 } from 'lucide-react';
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

    const [strike, setStrike] = useState(100);
    const [rate, setRate] = useState(4);
    const [time, setTime] = useState(1);
    const [spotRange, setSpotRange] = useState(200);

    const getChartData = (type: 'protective' | 'fiduciary') => {
        const steps = 100;
        const labels: string[] = [];
        const component1Data: number[] = [];
        const component2Data: number[] = [];
        const totalData: number[] = [];


        for (let s = 0; s <= spotRange; s += spotRange / steps) {
            labels.push(s.toFixed(0));

            if (type === 'protective') {
                const stock = s;
                const putValueAtMaturity = Math.max(0, strike - s);
                component1Data.push(stock);
                component2Data.push(putValueAtMaturity);
                totalData.push(stock + putValueAtMaturity);
            } else {
                const callValueAtMaturity = Math.max(0, s - strike);
                const bondAtMaturity = strike; // Bond grows to K
                component1Data.push(callValueAtMaturity);
                component2Data.push(bondAtMaturity);
                totalData.push(callValueAtMaturity + bondAtMaturity);
            }
        }

        return {
            labels,
            datasets: [
                {
                    label: type === 'protective' ? t.stock : t.call,
                    data: component1Data,
                    borderColor: type === 'protective' ? '#3b82f6' : '#ec4899',
                    borderWidth: 1.5,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [5, 5]
                },
                {
                    label: type === 'protective' ? t.put : t.bond,
                    data: component2Data,
                    borderColor: type === 'protective' ? '#ec4899' : '#10b981',
                    borderWidth: 1.5,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [5, 5]
                },
                {
                    label: t.total,
                    data: totalData,
                    borderColor: '#a78bfa',
                    backgroundColor: 'rgba(167, 139, 250, 0.1)',
                    borderWidth: 4,
                    pointRadius: 0,
                    fill: true,
                    tension: 0
                }
            ]
        };
    };

    const protectiveData = useMemo(() => getChartData('protective'), [strike, rate, time, spotRange, t]);
    const fiduciaryData = useMemo(() => getChartData('fiduciary'), [strike, rate, time, spotRange, t]);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: { display: true, text: t.spot, color: '#94a3b8' },
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#64748b' }
            },
            y: {
                title: { display: true, text: t.value, color: '#94a3b8' },
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#64748b' }
            }
        },
        plugins: {
            legend: { labels: { color: '#94a3b8', font: { size: 11 } } },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                callbacks: {
                    label: (context: any) => `${context.dataset.label}: ${context.parsed.y.toFixed(2)} €`
                }
            }
        }
    };

    return (
        <div className="container">
            <header>
                <div className="lang-selector">
                    <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
                    <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                </div>
                <h1>{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>
            </header>

            <div className="grid">
                <aside>
                    <div className="card">
                        <div className="chart-title">
                            <Settings2 size={20} color="#a78bfa" />
                            <span>{t.settings}</span>
                        </div>

                        <div className="input-group">
                            <label>{t.strike}</label>
                            <input type="number" value={strike} onChange={(e) => setStrike(Number(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>{t.rate}</label>
                            <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>{t.time}</label>
                            <input type="number" value={time} step="0.1" onChange={(e) => setTime(Number(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>{lang === 'es' ? 'Rango del Gráfico' : 'Chart Range'}</label>
                            <input type="number" value={spotRange} onChange={(e) => setSpotRange(Number(e.target.value))} />
                        </div>
                    </div>

                    <div className="formula-card">
                        <h3 style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.formulaTitle}</h3>
                        <div className="formula-text">
                            S + P = C + K·e<sup style={{ fontSize: '0.6em' }}>-rT</sup>
                        </div>
                    </div>

                    <div className="card" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <Info size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>
                                {t.info}
                            </p>
                        </div>
                    </div>
                </aside>

                <main>
                    <div className="card">
                        <div className="chart-title">
                            <ShieldCheck size={24} color="#3b82f6" />
                            <span>{t.portfolio1}</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>{t.explanation1}</p>
                        <div className="chart-container">
                            <Line data={protectiveData} options={chartOptions} />
                        </div>
                    </div>

                    <div className="card">
                        <div className="chart-title">
                            <Landmark size={24} color="#10b981" />
                            <span>{t.portfolio2}</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>{t.explanation2}</p>
                        <div className="chart-container">
                            <Line data={fiduciaryData} options={chartOptions} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
