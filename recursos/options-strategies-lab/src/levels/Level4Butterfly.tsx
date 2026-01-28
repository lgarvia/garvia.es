import { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';

export default function Level4Butterfly({ t }: { t: any }) {
    const [strike, setStrike] = useState(100);
    const [width, setWidth] = useState(20);
    const [premium, setPremium] = useState(3);

    const data = useMemo(() => {
        const labels = [];
        const profitData = [];
        const leg1Data = [];
        const leg2Data = [];
        const leg3Data = [];

        const k1 = strike - width;
        const k2 = strike;
        const k3 = strike + width;

        for (let s = 0; s <= 200; s += 2) {
            labels.push(s.toString());
            const p1 = Math.max(0, s - k1);
            const p2 = -2 * Math.max(0, s - k2);
            const p3 = Math.max(0, s - k3);

            leg1Data.push(p1);
            leg2Data.push(p2);
            leg3Data.push(p3);
            profitData.push(p1 + p2 + p3 - premium);
        }

        return {
            labels,
            datasets: [
                {
                    label: `+1 ${t.call} ${k1}`,
                    data: leg1Data,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: `-2 ${t.call} ${k2}`,
                    data: leg2Data,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: `+1 ${t.call} ${k3}`,
                    data: leg3Data,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: 'P/L',
                    data: profitData,
                    borderColor: '#34d399',
                    backgroundColor: 'rgba(52, 211, 153, 0.1)',
                    fill: true,
                    borderWidth: 4,
                    pointRadius: 0,
                    tension: 0
                }
            ]
        };
    }, [strike, width, premium, t]);

    const profitRange = useMemo(() => {
        const values = data.datasets[3].data;
        const min = Math.min(...values);
        const max = Math.max(...values);
        const padding = Math.max(Math.abs(max - min) * 0.2, 5);
        return { min: min - padding, max: max + padding };
    }, [data]);

    return (
        <div className="grid">
            <aside className="sidebar">
                <div className="card">
                    <div className="ctrl-panel">
                        <div className="input-group">
                            <label>{t.centerStrike}</label>
                            <input type="number" value={strike} onChange={e => setStrike(Number(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>{t.wingsWidth}</label>
                            <input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>{t.premium}</label>
                            <input type="number" step="0.5" value={premium} onChange={e => setPremium(Number(e.target.value))} />
                        </div>
                    </div>
                </div>

                <div className="card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.75rem', color: '#10b981', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.ingredients}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>+1 {t.call} (K={strike - width})</span>
                            <span style={{ color: 'var(--success)' }}>{t.long}</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>-2 {t.call} (K={strike})</span>
                            <span style={{ color: 'var(--danger)' }}>{t.short}</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>+1 {t.call} (K={strike + width})</span>
                            <span style={{ color: 'var(--success)' }}>{t.long}</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <main>
                <div className="metrics-grid">
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxProfit}</div>
                        <div className="metric-value" style={{ color: 'var(--success)' }}>{(width - premium).toFixed(2)} €</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxLoss}</div>
                        <div className="metric-value" style={{ color: 'var(--danger)' }}>{premium.toFixed(2)} €</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.breakEven}</div>
                        <div className="metric-value" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
                            {(strike - width + premium).toFixed(0)} | {(strike + width - premium).toFixed(0)}
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
