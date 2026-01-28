import { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';

export default function Level3Condor({ t }: { t: any }) {
    const [p1, setP1] = useState(80); // Long Put
    const [p2, setP2] = useState(90); // Short Put
    const [c1, setC1] = useState(110); // Short Call
    const [c2, setC2] = useState(120); // Long Call
    const [credit, setCredit] = useState(4);

    const data = useMemo(() => {
        const labels = [];
        const profitData = [];
        const leg1Data = [];
        const leg2Data = [];
        const leg3Data = [];
        const leg4Data = [];

        for (let s = 0; s <= 200; s += 2) {
            labels.push(s.toString());
            // Short Put Spread + Short Call Spread
            const p1Val = Math.max(0, p1 - s);
            const p2Val = -Math.max(0, p2 - s);
            const c1Val = -Math.max(0, s - c1);
            const c2Val = Math.max(0, s - c2);

            leg1Data.push(p1Val);
            leg2Data.push(p2Val);
            leg3Data.push(c1Val);
            leg4Data.push(c2Val);

            profitData.push(p1Val + p2Val + c1Val + c2Val + credit);
        }

        return {
            labels,
            datasets: [
                {
                    label: `+1 ${t.put} ${p1}`,
                    data: leg1Data,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: `-1 ${t.put} ${p2}`,
                    data: leg2Data,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: `-1 ${t.call} ${c1}`,
                    data: leg3Data,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: `+1 ${t.call} ${c2}`,
                    data: leg4Data,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: 'P/L',
                    data: profitData,
                    borderColor: '#fbbf24',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    fill: true,
                    borderWidth: 4,
                    pointRadius: 0,
                    tension: 0
                }
            ]
        };
    }, [p1, p2, c1, c2, credit, t]);

    const profitRange = useMemo(() => {
        const values = data.datasets[4].data;
        const min = Math.min(...values);
        const max = Math.max(...values);
        const padding = Math.max(Math.abs(max - min) * 0.2, 5);
        return { min: min - padding, max: max + padding };
    }, [data]);

    return (
        <div className="grid">
            <aside className="sidebar">
                <div className="card" style={{ padding: '1.25rem' }}>
                    <div className="ctrl-panel">
                        <h3 style={{ fontSize: '0.8rem', color: '#fbbf24', textTransform: 'uppercase' }}>Bear Call Spread</h3>
                        <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                            <label>K3 ({t.short} {t.call})</label>
                            <input type="number" value={c1} onChange={e => setC1(Number(e.target.value))} />
                        </div>
                        <div className="input-group">
                            <label>K4 ({t.long} {t.call})</label>
                            <input type="number" value={c2} onChange={e => setC2(Number(e.target.value))} />
                        </div>

                        <hr style={{ opacity: 0.1, margin: '1rem 0' }} />

                        <h3 style={{ fontSize: '0.8rem', color: '#3b82f6', textTransform: 'uppercase' }}>Bull Put Spread</h3>
                        <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                            <label>K2 ({t.short} {t.put})</label>
                            <input type="number" value={p2} onChange={e => setP2(Number(e.target.value))} />
                        </div>
                        <div className="input-group">
                            <label>K1 ({t.long} {t.put})</label>
                            <input type="number" value={p1} onChange={e => setP1(Number(e.target.value))} />
                        </div>

                        <hr style={{ opacity: 0.1, margin: '1rem 0' }} />

                        <div className="input-group">
                            <label>{t.credit}</label>
                            <input type="number" step="0.5" value={credit} onChange={e => setCredit(Number(e.target.value))} />
                        </div>
                    </div>
                </div>

                <div className="card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.75rem', color: '#fbbf24', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.ingredients}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.75rem' }}>
                        <li style={{ marginBottom: '0.4rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>+1 {t.put} (K={p1})</span>
                            <span style={{ color: 'var(--success)' }}>{t.long}</span>
                        </li>
                        <li style={{ marginBottom: '0.4rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>-1 {t.put} (K={p2})</span>
                            <span style={{ color: 'var(--danger)' }}>{t.short}</span>
                        </li>
                        <li style={{ marginBottom: '0.4rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>-1 {t.call} (K={c1})</span>
                            <span style={{ color: 'var(--danger)' }}>{t.short}</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>+1 {t.call} (K={c2})</span>
                            <span style={{ color: 'var(--success)' }}>{t.long}</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <main>
                <div className="metrics-grid">
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxProfit}</div>
                        <div className="metric-value" style={{ color: 'var(--success)' }}>{credit.toFixed(2)} €</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxLoss}</div>
                        <div className="metric-value" style={{ color: 'var(--danger)' }}>{(Math.max(p2 - p1, c2 - c1) - credit).toFixed(2)} €</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.breakEven}</div>
                        <div className="metric-value" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
                            {(p2 - credit).toFixed(0)} | {(c1 + credit).toFixed(0)}
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
