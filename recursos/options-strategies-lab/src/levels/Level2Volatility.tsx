import { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';

export default function Level2Volatility({ t }: { t: any }) {
    const [type, setType] = useState<'straddle' | 'strangle'>('straddle');
    const [k1, setK1] = useState(90); // Lower strike for strangle
    const [k2, setK2] = useState(110); // Upper strike for strangle
    const [premium, setPremium] = useState(10);

    const data = useMemo(() => {
        const labels = [];
        const profitData = [];
        const leg1Data = [];
        const leg2Data = [];

        for (let s = 0; s <= 200; s += 2) {
            labels.push(s.toString());
            let p1 = 0;
            let p2 = 0;
            const strike = (k1 + k2) / 2;

            if (type === 'straddle') {
                p1 = Math.max(0, s - strike);
                p2 = Math.max(0, strike - s);
            } else {
                p1 = Math.max(0, s - k2);
                p2 = Math.max(0, k1 - s);
            }
            leg1Data.push(p1);
            leg2Data.push(p2);
            profitData.push(p1 + p2 - premium);
        }

        return {
            labels,
            datasets: [
                {
                    label: type === 'straddle' ? `+1 ${t.call} ${((k1 + k2) / 2).toFixed(0)}` : `+1 ${t.call} ${k2}`,
                    data: leg1Data,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: type === 'straddle' ? `+1 ${t.put} ${((k1 + k2) / 2).toFixed(0)}` : `+1 ${t.put} ${k1}`,
                    data: leg2Data,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: 'P/L',
                    data: profitData,
                    borderColor: '#a78bfa',
                    backgroundColor: 'rgba(167, 139, 250, 0.1)',
                    fill: true,
                    borderWidth: 4,
                    pointRadius: 0,
                    tension: 0.1
                }
            ]
        };
    }, [type, k1, k2, premium, t]);

    const profitRange = useMemo(() => {
        const values = data.datasets[2].data;
        const min = Math.min(...values);
        const max = Math.max(...values);
        const padding = Math.max(Math.abs(max - min) * 0.2, 10);
        // Para estrategias de volatilidad long, el max puede ser infinito, así que ponemos un tope razonable
        return { min: min - padding, max: Math.min(max + padding, 150) };
    }, [data]);

    return (
        <div className="grid">
            <aside className="sidebar">
                <div className="card">
                    <div className="ctrl-panel">
                        <div className="input-group">
                            <label>{t.strategy}</label>
                            <div className="toggle-group">
                                <button className={`toggle-item ${type === 'straddle' ? 'active' : ''}`} onClick={() => setType('straddle')}>{t.straddle}</button>
                                <button className={`toggle-item ${type === 'strangle' ? 'active' : ''}`} onClick={() => setType('strangle')}>{t.strangle}</button>
                            </div>
                        </div>

                        {type === 'straddle' ? (
                            <div className="input-group">
                                <label>{t.centerStrike}</label>
                                <input type="number" value={(k1 + k2) / 2} onChange={e => { setK1(Number(e.target.value) - 10); setK2(Number(e.target.value) + 10); }} />
                            </div>
                        ) : (
                            <>
                                <div className="input-group">
                                    <label>{t.lowerStrike} (Put)</label>
                                    <input type="number" value={k1} onChange={e => setK1(Number(e.target.value))} />
                                </div>
                                <div className="input-group">
                                    <label>{t.upperStrike} (Call)</label>
                                    <input type="number" value={k2} onChange={e => setK2(Number(e.target.value))} />
                                </div>
                            </>
                        )}

                        <div className="input-group">
                            <label>{t.premium}</label>
                            <input type="number" step="0.5" value={premium} onChange={e => setPremium(Number(e.target.value))} />
                        </div>
                    </div>
                </div>

                <div className="card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.75rem', color: 'var(--secondary)', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.ingredients}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>+1 {t.put} (K={type === 'straddle' ? ((k1 + k2) / 2).toFixed(0) : k1})</span>
                            <span style={{ color: 'var(--success)' }}>{t.long}</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>+1 {t.call} (K={type === 'straddle' ? ((k1 + k2) / 2).toFixed(0) : k2})</span>
                            <span style={{ color: 'var(--success)' }}>{t.long}</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <main>
                <div className="metrics-grid">
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxProfit}</div>
                        <div className="metric-value" style={{ color: 'var(--success)' }}>∞</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxLoss}</div>
                        <div className="metric-value" style={{ color: 'var(--danger)' }}>{premium.toFixed(2)} €</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.breakEven}</div>
                        <div className="metric-value" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
                            {type === 'straddle' ? `${((k1 + k2) / 2 - premium).toFixed(0)} | ${((k1 + k2) / 2 + premium).toFixed(0)}` : `${(k1 - premium).toFixed(0)} | ${(k2 + premium).toFixed(0)}`}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="chart-wrapper">
                        <Line
                            data={data}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top',
                                        align: 'end',
                                        labels: { color: 'rgba(255,255,255,0.5)', boxWidth: 15, font: { size: 10 } }
                                    }
                                },
                                scales: {
                                    x: {
                                        grid: { color: 'rgba(255,255,255,0.1)' },
                                        ticks: { color: '#fff' },
                                        title: { display: true, text: t.spotAxis, color: '#fff' }
                                    },
                                    y: {
                                        grid: { color: 'rgba(255,255,255,0.1)' },
                                        ticks: { color: '#fff' },
                                        title: { display: true, text: t.resultAxis, color: '#fff' },
                                        min: profitRange.min,
                                        max: profitRange.max
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
