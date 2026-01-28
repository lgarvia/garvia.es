import { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';

export default function Level1Spreads({ t }: { t: any }) {
    const [strategy, setStrategy] = useState<'bull' | 'bear'>('bull');
    const [instrument, setInstrument] = useState<'call' | 'put'>('call');
    const [lowStrike, setLowStrike] = useState(90);
    const [highStrike, setHighStrike] = useState(110);
    const [premium, setPremium] = useState(5);

    const data = useMemo(() => {
        const labels = [];
        const profitData = [];
        const leg1Data = [];
        const leg2Data = [];
        const range = 200;

        for (let s = 0; s <= range; s += 2) {
            labels.push(s.toString());
            let p1 = 0;
            let p2 = 0;

            if (strategy === 'bull') {
                if (instrument === 'call') {
                    p1 = Math.max(0, s - lowStrike);
                    p2 = -Math.max(0, s - highStrike);
                } else {
                    p1 = Math.max(0, s - lowStrike);
                    p2 = -Math.max(0, s - highStrike);
                }
            } else {
                p1 = -Math.max(0, s - lowStrike);
                p2 = Math.max(0, s - highStrike);
            }

            leg1Data.push(p1);
            leg2Data.push(p2);
            profitData.push(p1 + p2 - premium);
        }

        return {
            labels,
            datasets: [
                {
                    label: strategy === 'bull' ? `+1 ${instrument.toUpperCase()} ${lowStrike}` : `-1 ${instrument.toUpperCase()} ${lowStrike}`,
                    data: leg1Data,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: strategy === 'bull' ? `-1 ${instrument.toUpperCase()} ${highStrike}` : `+1 ${instrument.toUpperCase()} ${highStrike}`,
                    data: leg2Data,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                },
                {
                    label: t.profitLabel || 'P/L',
                    data: profitData,
                    borderColor: strategy === 'bull' ? '#10b981' : '#ef4444',
                    backgroundColor: strategy === 'bull' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    borderWidth: 4,
                    pointRadius: 0,
                    tension: 0.1
                }
            ]
        };
    }, [strategy, instrument, lowStrike, highStrike, premium, t]);

    const metrics = useMemo(() => {
        return {
            maxP: Math.abs(highStrike - lowStrike) - premium,
            maxL: premium,
            be: strategy === 'bull' ? lowStrike + premium : highStrike - premium
        };
    }, [strategy, lowStrike, highStrike, premium]);

    const profitRange = useMemo(() => {
        const values = data.datasets[2].data; // El dataset del P/L neto
        const min = Math.min(...values);
        const max = Math.max(...values);
        const padding = Math.max(Math.abs(max - min) * 0.2, 10);
        return { min: min - padding, max: max + padding };
    }, [data]);

    return (
        <div className="grid">
            <aside className="sidebar">
                <div className="card">
                    <div className="ctrl-panel">
                        <div className="input-group">
                            <label>{t.strategy}</label>
                            <div className="toggle-group">
                                <button className={`toggle-item ${strategy === 'bull' ? 'active' : ''}`} onClick={() => setStrategy('bull')}>{t.bullSpread}</button>
                                <button className={`toggle-item ${strategy === 'bear' ? 'active' : ''}`} onClick={() => setStrategy('bear')}>{t.bearSpread}</button>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>{t.optionType}</label>
                            <div className="toggle-group">
                                <button className={`toggle-item ${instrument === 'call' ? 'active' : ''}`} onClick={() => setInstrument('call')}>CALLS</button>
                                <button className={`toggle-item ${instrument === 'put' ? 'active' : ''}`} onClick={() => setInstrument('put')}>PUTS</button>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>{t.lowerStrike} (K1)</label>
                            <input type="number" value={lowStrike} onChange={e => setLowStrike(Number(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>{t.upperStrike} (K2)</label>
                            <input type="number" value={highStrike} onChange={e => setHighStrike(Number(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>{t.premium}</label>
                            <input type="number" step="0.5" value={premium} onChange={e => setPremium(Number(e.target.value))} />
                        </div>
                    </div>
                </div>

                <div className="card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.ingredients}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{strategy === 'bull' ? `+1 ${t.call}` : `-1 ${t.call}`} (K={lowStrike})</span>
                            <span style={{ color: strategy === 'bull' ? 'var(--success)' : 'var(--danger)' }}>{strategy === 'bull' ? t.long : t.short}</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{strategy === 'bull' ? `-1 ${t.call}` : `+1 ${t.call}`} (K={highStrike})</span>
                            <span style={{ color: strategy === 'bull' ? 'var(--danger)' : 'var(--success)' }}>{strategy === 'bull' ? t.short : t.long}</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <main>
                <div className="metrics-grid">
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxProfit}</div>
                        <div className="metric-value" style={{ color: 'var(--success)' }}>{metrics.maxP.toFixed(2)} €</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.maxLoss}</div>
                        <div className="metric-value" style={{ color: 'var(--danger)' }}>{metrics.maxL.toFixed(2)} €</div>
                    </div>
                    <div className="metric-pill">
                        <div className="metric-label">{t.breakEven}</div>
                        <div className="metric-value" style={{ color: 'var(--primary)' }}>{metrics.be.toFixed(2)} €</div>
                    </div>
                </div>

                <div className="card">
                    <div className="chart-wrapper">
                        <Line
                            data={data}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        grid: { color: 'rgba(255,255,255,0.1)' },
                                        title: { display: true, text: t.spotAxis, color: '#fff' },
                                        ticks: { color: '#fff' }
                                    },
                                    y: {
                                        grid: { color: 'rgba(255,255,255,0.1)' },
                                        title: { display: true, text: t.resultAxis, color: '#fff' },
                                        ticks: { color: '#fff' },
                                        min: profitRange.min,
                                        max: profitRange.max
                                    }
                                },
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top',
                                        align: 'end',
                                        labels: { color: 'rgba(255,255,255,0.5)', boxWidth: 15, font: { size: 10 } }
                                    },
                                    tooltip: { backgroundColor: 'rgba(15, 23, 42, 0.9)', cornerRadius: 8 }
                                }
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
