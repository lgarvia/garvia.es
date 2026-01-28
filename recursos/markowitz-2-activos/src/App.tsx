import { useState, useMemo } from 'react';
import { translations } from './translations';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import {
  Zap,
  Settings2,
  Globe,
  LineChart,
  Info,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const crosshairPlugin = {
  id: 'crosshair',
  afterDraw: (chart: any) => {
    if (chart.tooltip?._active?.length) {
      const { x, y } = chart.tooltip._active[0].element;
      const { ctx, chartArea: { left, right, top, bottom } } = chart;
      const xValue = chart.scales.x.getValueForPixel(x);
      const yValue = chart.scales.y.getValueForPixel(y);

      if (xValue === undefined || yValue === undefined) return;

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.5)';

      // Horizontal line
      ctx.moveTo(left, y);
      ctx.lineTo(right, y);

      // Vertical line
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.stroke();

      // Axis labels
      ctx.font = 'bold 11px Inter';
      ctx.fillStyle = '#8b5cf6';

      // X Label (Internal)
      ctx.textAlign = 'center';
      ctx.fillText(xValue.toFixed(2) + '%', x, bottom - 10);

      // Y Label (Internal)
      ctx.textAlign = 'left';
      ctx.fillText(yValue.toFixed(2) + '%', left + 10, y - 5);

      ctx.restore();
    }
  }
};

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  crosshairPlugin
);

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang] as any;

  const [assets, setAssets] = useState({
    mu1: 7,
    sigma1: 8,
    mu2: 3,
    sigma2: 5,
    rho: 0.2
  });

  const [simWeightA, setSimWeightA] = useState(50);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAssets(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const results = useMemo(() => {
    const { mu1, sigma1, mu2, sigma2, rho } = assets;
    const s1 = sigma1 / 100;
    const s2 = sigma2 / 100;
    const r1 = mu1 / 100;
    const r2 = mu2 / 100;

    const pointsLong = [];
    const pointsShortA = [];
    const pointsShortB = [];

    for (let w1 = -0.5; w1 <= 1.5001; w1 += 0.005) {
      const w2 = 1 - w1;
      const muP = w1 * r1 + w2 * r2;
      const varP = Math.pow(w1 * s1, 2) + Math.pow(w2 * s2, 2) + 2 * w1 * w2 * s1 * s2 * rho;
      const sigmaP = Math.sqrt(Math.max(0, varP));
      const point = { x: sigmaP * 100, y: muP * 100, w1 };

      if (w1 < -0.0001) pointsShortA.push(point);
      else if (w1 > 1.0001) pointsShortB.push(point);
      else {
        pointsLong.push(point);
      }
    }

    // Connect Short B to Long
    if (pointsLong.length > 0 && pointsShortB.length > 0) {
      pointsShortB.unshift(pointsLong[pointsLong.length - 1]);
    }

    const denom = Math.pow(s1, 2) + Math.pow(s2, 2) - 2 * s1 * s2 * rho;
    let w1_mvp = 0.5;
    if (Math.abs(denom) > 1e-10) {
      w1_mvp = (Math.pow(s2, 2) - s1 * s2 * rho) / denom;
    }

    const w2_mvp = 1 - w1_mvp;
    const mu_mvp = w1_mvp * r1 + w2_mvp * r2;
    const var_mvp = Math.pow(w1_mvp * s1, 2) + Math.pow(w2_mvp * s2, 2) + 2 * w1_mvp * w2_mvp * s1 * s2 * rho;
    const sigma_mvp = Math.sqrt(Math.max(0, var_mvp));

    // Simulated Portfolio
    const sw1 = simWeightA / 100;
    const sw2 = 1 - sw1;
    const smu = sw1 * r1 + sw2 * r2;
    const svar = Math.pow(sw1 * s1, 2) + Math.pow(sw2 * s2, 2) + 2 * sw1 * sw2 * s1 * s2 * rho;
    const ssigma = Math.sqrt(Math.max(0, svar));

    return {
      pointsLong,
      pointsShortA,
      pointsShortB,
      mvp: { x: sigma_mvp * 100, y: mu_mvp * 100, w1: w1_mvp, w2: w2_mvp },
      sim: { x: ssigma * 100, y: smu * 100, w1: sw1, w2: sw2 },
      diversificationBenefit: ((w1_mvp * s1 + w2_mvp * s2) - sigma_mvp) * 100
    };
  }, [assets, simWeightA]);

  const chartData = {
    datasets: [
      {
        label: t.chart.longOnly,
        data: results.pointsLong,
        showLine: true,
        borderColor: '#8b5cf6',
        borderWidth: 4,
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0,
        pointHitRadius: 20
      },
      {
        label: t.chart.shortSelling,
        data: results.pointsShortA,
        showLine: true,
        borderColor: 'rgba(139, 92, 246, 0.4)',
        borderWidth: 2,
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0,
        pointHitRadius: 20
      },
      {
        label: t.chart.shortSelling,
        data: results.pointsShortB,
        showLine: true,
        borderColor: 'rgba(139, 92, 246, 0.4)',
        borderWidth: 2,
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0,
        pointHitRadius: 20
      },
      {
        label: t.results.mvp,
        data: [results.mvp],
        backgroundColor: '#3b82f6',
        pointRadius: 8,
        zIndex: 10
      },
      {
        label: 'Simulación',
        data: [results.sim],
        backgroundColor: '#f59e0b',
        pointRadius: 10,
        pointStyle: 'star',
        zIndex: 11
      },
      {
        label: t.inputs.asset1,
        data: [{ x: assets.sigma1, y: assets.mu1 }],
        backgroundColor: '#ef4444',
        pointRadius: 10,
        pointStyle: 'rectRot'
      },
      {
        label: t.inputs.asset2,
        data: [{ x: assets.sigma2, y: assets.mu2 }],
        backgroundColor: '#10b981',
        pointRadius: 10,
        pointStyle: 'rectRot'
      }
    ],
  };

  return (
    <div className="container">
      <button className="lang-switch" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
        <Globe size={16} />
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
        {/* Left Column: Config & Simulator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <motion.section
            className="card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="asset-header">
              <Settings2 size={20} className="text-primary" />
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{t.inputs.settings}</h2>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <div className="asset-dot" style={{ background: '#ef4444' }} />
                <span style={{ fontWeight: 800 }}>{t.inputs.asset1}</span>
              </div>
              <div className="input-field">
                <label>{t.inputs.return}</label>
                <input type="number" name="mu1" step="0.1" value={assets.mu1} onChange={handleInputChange} />
              </div>
              <div className="input-field">
                <label>{t.inputs.risk}</label>
                <input type="number" name="sigma1" step="0.1" value={assets.sigma1} onChange={handleInputChange} />
              </div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <div className="asset-dot" style={{ background: '#10b981' }} />
                <span style={{ fontWeight: 800 }}>{t.inputs.asset2}</span>
              </div>
              <div className="input-field">
                <label>{t.inputs.return}</label>
                <input type="number" name="mu2" step="0.1" value={assets.mu2} onChange={handleInputChange} />
              </div>
              <div className="input-field">
                <label>{t.inputs.risk}</label>
                <input type="number" name="sigma2" step="0.1" value={assets.sigma2} onChange={handleInputChange} />
              </div>
            </div>

            <div style={{ padding: '1.25rem', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '1rem', border: '1px solid var(--primary)' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                {t.inputs.correlation}
                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{assets.rho.toFixed(2)}</span>
              </label>
              <input
                type="range" min="-1" max="1" step="0.01"
                name="rho" value={assets.rho} onChange={handleInputChange}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: '4px', opacity: 0.6 }}>
                <span>-1 (Inversa)</span>
                <span>0</span>
                <span>+1 (Directa)</span>
              </div>
            </div>
          </motion.section>

          <motion.section className="card" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="asset-header">
              <Zap size={20} color="#f59e0b" />
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{t.simulator.title}</h2>
            </div>

            <div className="input-field">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ margin: 0 }}>{t.simulator.weightA}</label>
                <input
                  type="number"
                  step="0.1"
                  value={simWeightA}
                  onChange={(e) => setSimWeightA(parseFloat(e.target.value) || 0)}
                  style={{
                    width: '70px',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    textAlign: 'right',
                    fontWeight: 800,
                    color: '#f59e0b'
                  }}
                />
              </div>
              <input
                type="range" min="-50" max="150" step="1"
                value={simWeightA}
                onChange={(e) => setSimWeightA(parseFloat(e.target.value))}
                style={{ width: '100%', margin: '10px 0' }}
              />
              <div style={{ position: 'relative', width: '100%', height: '20px', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                <span style={{ position: 'absolute', left: '0%', transform: 'translateX(-50%)' }}>-50%</span>
                <span style={{ position: 'absolute', left: '25%', transform: 'translateX(-50%)' }}>0%</span>
                <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>50%</span>
                <span style={{ position: 'absolute', left: '75%', transform: 'translateX(-50%)' }}>100%</span>
                <span style={{ position: 'absolute', left: '100%', transform: 'translateX(-50%)' }}>150%</span>
              </div>
            </div>

            <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
              <div className="stat-item" style={{ borderColor: '#f59e0b', background: 'rgba(245, 158, 11, 0.03)' }}>
                <div className="stat-label">{t.simulator.resultReturn}</div>
                <div className="stat-value" style={{ fontSize: '1.4rem' }}>{results.sim.y.toFixed(2)}%</div>
              </div>
              <div className="stat-item" style={{ borderColor: '#f59e0b', background: 'rgba(245, 158, 11, 0.03)' }}>
                <div className="stat-label">{t.simulator.resultRisk}</div>
                <div className="stat-value" style={{ fontSize: '1.4rem' }}>{results.sim.x.toFixed(2)}%</div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Right Column: Chart & Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <motion.section
            className="card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '8px' }}>
              <LineChart className="text-primary" />
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Frontera de Inversión</h2>
            </div>

            <div className="chart-container">
              <Scatter
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  interaction: {
                    mode: 'nearest',
                    intersect: false,
                    axis: 'xy'
                  },
                  scales: {
                    x: {
                      title: { display: true, text: t.chart.x },
                      min: 0,
                      grid: {
                        color: (context) => context.tick?.value === 0 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'
                      },
                      suggestedMax: Math.max(assets.sigma1, assets.sigma2, results.sim.x) * 1.2
                    },
                    y: {
                      title: { display: true, text: t.chart.y },
                      min: 0,
                      grid: {
                        color: (context) => context.tick?.value === 0 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'
                      },
                      suggestedMax: Math.max(assets.mu1, assets.mu2, results.sim.y) * 1.2
                    }
                  },
                  plugins: {
                    legend: {
                      labels: {
                        filter: (item) => item.text !== t.chart.shortSelling && item.text !== 'Simulación'
                      }
                    },
                    tooltip: {
                      position: 'nearest',
                      filter: (_item: any, index: number) => index === 0,
                      callbacks: {
                        label: (context: any) => {
                          const p = context.raw as any;
                          if (p.w1 !== undefined) {
                            return `W_A: ${(p.w1 * 100).toFixed(1)}% | W_B: ${(100 - p.w1 * 100).toFixed(1)}%`;
                          }
                          return `${context.dataset.label}`;
                        }
                      }
                    }
                  }
                }}
              />
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-label">
                  <ShieldCheck size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  {t.results.mvpRisk}
                </div>
                <div className="stat-value">{results.mvp.x.toFixed(2)}%</div>
                <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                  W_A: {(results.mvp.w1 * 100).toFixed(1)}% | W_B: {(results.mvp.w2 * 100).toFixed(1)}%
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">
                  <Zap size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  {t.results.diversificationBenefit}
                </div>
                <div className="stat-value" style={{ color: '#10b981' }}>
                  -{results.diversificationBenefit.toFixed(2)}%
                </div>
                <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>Riesgo ahorrado vs lineal</div>
              </div>
            </div>
          </motion.section>

          {/* Formulas Section */}
          <motion.section className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '8px' }}>
              <Zap className="text-primary" size={20} />
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.formulas.title}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 1.2fr)', gap: '1rem' }}>
              <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.02)', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>RETORNO ESPERADO</div>
                <code style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)' }}>E[Rp] = wA·rA + wB·rB</code>
              </div>
              <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.02)', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>RIESGO (VARIANZA)</div>
                <code style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)' }}>{t.formulas.variance}</code>
              </div>
            </div>
          </motion.section>

          {/* Intuition */}
          <motion.section
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '8px' }}>
              <Info className="text-primary" />
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.intuition.title}</h2>
            </div>
            <ul className="intuition" style={{ padding: 0 }}>
              {t.intuition.lines.map((line: string, i: number) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.8rem', paddingBottom: '2rem' }}>
        © {new Date().getFullYear()} garvia.es | Educando en Finanzas
      </footer>
    </div>
  );
}

export default App;
