import React, { useState, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Calculator, Info, Table as TableIcon, ChartBar } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
);

function App() {
    const [amount, setAmount] = useState(200000);
    const [amountInput, setAmountInput] = useState("200.000");
    const [interestRate, setInterestRate] = useState(3.5);
    const [years, setYears] = useState(30);
    const [frequency, setFrequency] = useState<'monthly' | 'annual'>('monthly');

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\./g, "");
        const num = val === "" ? 0 : parseInt(val, 10);
        if (!isNaN(num)) {
            setAmount(num);
            setAmountInput(num.toLocaleString('es-ES'));
        }
    };

    const calculations = useMemo(() => {
        const paymentsPerYear = frequency === 'monthly' ? 12 : 1;
        const ratePerPeriod = (interestRate / 100) / paymentsPerYear;
        const totalPeriods = years * paymentsPerYear;

        // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        const periodicPayment =
            (amount * ratePerPeriod * Math.pow(1 + ratePerPeriod, totalPeriods)) /
            (Math.pow(1 + ratePerPeriod, totalPeriods) - 1);

        const totalPaid = periodicPayment * totalPeriods;
        const totalInterest = totalPaid - amount;

        let balance = amount;
        const schedule = [];
        const yearlyData = [];

        let cumulativeInterest = 0;
        let cumulativePrincipal = 0;
        let yearInterest = 0;
        let yearPrincipal = 0;

        for (let i = 1; i <= totalPeriods; i++) {
            const interestPayment = balance * ratePerPeriod;
            const principalPayment = periodicPayment - interestPayment;
            balance -= principalPayment;
            
            yearInterest += interestPayment;
            yearPrincipal += principalPayment;
            cumulativeInterest += interestPayment;
            cumulativePrincipal += principalPayment;

            if (i % paymentsPerYear === 0 || i === totalPeriods) {
                schedule.push({
                    year: Math.ceil(i / paymentsPerYear),
                    payment: periodicPayment * paymentsPerYear,
                    principal: cumulativePrincipal,
                    interest: cumulativeInterest,
                    balance: Math.max(0, balance),
                });

                yearlyData.push({
                    label: `Año ${Math.ceil(i / paymentsPerYear)}`,
                    balance: Math.max(0, balance),
                    interest: yearInterest,
                    principal: yearPrincipal
                });
                
                yearInterest = 0;
                yearPrincipal = 0;
            }
        }

        return {
            periodicPayment,
            totalPaid,
            totalInterest,
            schedule,
            yearlyData,
        };
    }, [amount, interestRate, years, frequency]);

    const barChartData = {
        labels: calculations.yearlyData.map(d => d.label),
        datasets: [
            {
                label: 'Capital',
                data: calculations.yearlyData.map(d => d.principal),
                backgroundColor: '#6366f1',
                borderRadius: 4,
            },
            {
                label: 'Intereses',
                data: calculations.yearlyData.map(d => d.interest),
                backgroundColor: '#10b981',
                borderRadius: 4,
            }
        ],
    };

    const pieChartData = {
        labels: ['Capital Principal', 'Intereses Totales'],
        datasets: [
            {
                data: [amount, calculations.totalInterest],
                backgroundColor: ['#6366f1', '#10b981'],
                borderWidth: 0,
            },
        ],
    };

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(val);

    return (
        <div className="container">
            <header>
                <h1>Simulador de Hipoteca</h1>
                <p className="subtitle">Herramienta didáctica para comprender la amortización de préstamos</p>
            </header>

            <div className="grid">
                <aside className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <Calculator size={24} color="#6366f1" />
                        <h2 style={{ fontSize: '1.25rem' }}>Parámetros</h2>
                    </div>

                    <div className="input-group">
                        <label>Importe del Préstamo</label>
                        <input
                            type="text"
                            value={amountInput}
                            onChange={handleAmountChange}
                            placeholder="Ej: 200.000"
                        />
                    </div>

                    <div className="input-group">
                        <label>Frecuencia de Pago</label>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: '#94a3b8' }}>
                                <input 
                                    type="radio" 
                                    checked={frequency === 'monthly'} 
                                    onChange={() => setFrequency('monthly')}
                                    style={{ width: 'auto' }}
                                />
                                Mensual
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: '#94a3b8' }}>
                                <input 
                                    type="radio" 
                                    checked={frequency === 'annual'} 
                                    onChange={() => setFrequency('annual')}
                                    style={{ width: 'auto' }}
                                />
                                Anual
                            </label>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Tipo de Interés Anual (%)</label>
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            step="0.1"
                        />
                    </div>

                    <div className="input-group">
                        <label>Plazo (Años)</label>
                        <input
                            type="number"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            min="1"
                            max="40"
                        />
                    </div>

                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.75rem', fontSize: '0.875rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                            <Info size={16} color="#818cf8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                            <p style={{ color: '#94a3b8' }}>
                                Este simulador utiliza el <strong>sistema de amortización francés</strong>, el más común en España, donde la cuota mensual es constante.
                            </p>
                        </div>
                    </div>
                </aside>

                <main>
                    <div className="summary-grid">
                        <div className="summary-item">
                            <div className="summary-label">Cuota {frequency === 'monthly' ? 'Mensual' : 'Anual'}</div>
                            <div className="summary-value">{formatCurrency(calculations.periodicPayment)}</div>
                        </div>
                        <div className="summary-item">
                            <div className="summary-label">Total Intereses</div>
                            <div className="summary-value accent">{formatCurrency(calculations.totalInterest)}</div>
                        </div>
                        <div className="summary-item">
                            <div className="summary-label">Total a Pagar</div>
                            <div className="summary-value">{formatCurrency(calculations.totalPaid)}</div>
                        </div>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <ChartBar size={20} color="#6366f1" />
                            <h2 style={{ fontSize: '1.1rem' }}>Descomposición de la Cuota Anual</h2>
                        </div>
                        <div className="charts-container">
                            <div className="chart-wrapper">
                                <Pie
                                    data={pieChartData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
                                    }}
                                />
                            </div>
                            <div className="chart-wrapper">
                                <Bar
                                    data={barChartData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        scales: {
                                            y: { 
                                                stacked: true,
                                                grid: { color: 'rgba(255,255,255,0.05)' }, 
                                                ticks: { color: '#64748b' } 
                                            },
                                            x: { 
                                                stacked: true,
                                                grid: { display: false }, 
                                                ticks: { color: '#64748b' } 
                                            }
                                        },
                                        plugins: { legend: { display: false } }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <TableIcon size={20} color="#6366f1" />
                            <h2 style={{ fontSize: '1.1rem' }}>Tabla de Amortización Anual</h2>
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Año</th>
                                        <th>Cuota Anual</th>
                                        <th>Capital Amortizado</th>
                                        <th>Intereses Acum.</th>
                                        <th>Saldo Pendiente</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {calculations.schedule.map((row) => (
                                        <tr key={row.year}>
                                            <td><span className="badge">Año {row.year}</span></td>
                                            <td>{formatCurrency(row.payment)}</td>
                                            <td>{formatCurrency(row.principal)}</td>
                                            <td>{formatCurrency(row.interest)}</td>
                                            <td>{formatCurrency(row.balance)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
