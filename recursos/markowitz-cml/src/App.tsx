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
  Info
} from 'lucide-react';
import { motion } from 'framer-motion';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [mode, setMode] = useState<'single' | 'multi'>('multi');
  const t = translations[lang] as any;

  const [rf, setRf] = useState(2);
  const [assets, setAssets] = useState({
    r1: 10,
    s1: 15,
    r2: 6,
    s2: 10,
    rho: 0.2
  });
  const [targetRisk, setTargetRisk] = useState(12);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'rf') setRf(parseFloat(value) || 0);
    else setAssets(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const results = useMemo(() => {
    const { r1, s1, r2, s2, rho } = assets;
    const rf_dec = rf / 100;
    const r1_dec = r1 / 100;
    const s1_dec = s1 / 100;
    const r2_dec = r2 / 100;
    const s2_dec = s2 / 100;

    // 1. Markowitz Frontier (Risky Assets only)
    const pointsFrontier = [];
    if (mode === 'multi') {
      for (let w1 = -0.5; w1 <= 1.501; w1 += 0.01) {
        const w2 = 1 - w1;
        const muP = w1 * r1_dec + w2 * r2_dec;
        const varP = Math.pow(w1 * s1_dec, 2) + Math.pow(w2 * s2_dec, 2) + 2 * w1 * w2 * s1_dec * s2_dec * rho;
        const sigmaP = Math.sqrt(Math.max(0, varP));
        pointsFrontier.push({ x: sigmaP * 100, y: muP * 100, w1 });
      }
    }

    // 2. Tangency Portfolio
    let w1_tan, w2_tan, mu_tan, sigma_tan;

    if (mode === 'single') {
      w1_tan = 1;
      w2_tan = 0;
      mu_tan = r1_dec;
      sigma_tan = s1_dec;
    } else {
      const er1 = r1_dec - rf_dec;
      const er2 = r2_dec - rf_dec;
      const v1 = Math.pow(s1_dec, 2);
      const v2 = Math.pow(s2_dec, 2);
      const cov = s1_dec * s2_dec * rho;

      const num = er1 * v2 - er2 * cov;
      const den = er1 * v2 + er2 * v1 - (er1 + er2) * cov;

      if (Math.abs(den) < 1e-10) {
        w1_tan = 0.5;
      } else {
        w1_tan = num / den;
      }
      w2_tan = 1 - w1_tan;
      mu_tan = w1_tan * r1_dec + w2_tan * r2_dec;
      const var_tan = Math.pow(w1_tan * s1_dec, 2) + Math.pow(w2_tan * s2_dec, 2) + 2 * w1_tan * w2_tan * s1_dec * s2_dec * rho;
      sigma_tan = Math.sqrt(Math.max(0, var_tan));
    }

    const sharpe = sigma_tan > 0 ? (mu_tan - rf_dec) / sigma_tan : 0;

    // 3. CML Points (from 0 to 1.5 * max asset risk or target risk)
    const pointsCML = [];
    const maxRiskLine = Math.max(s1, s2, targetRisk, sigma_tan * 100) * 1.5;
    for (let s = 0; s <= maxRiskLine; s += 0.5) {
      const r = rf + s * sharpe;
      pointsCML.push({ x: s, y: r });
    }

    // 4. Target Portfolio (Composition)
    const s_target = targetRisk / 100;
    const w_risky = sigma_tan > 0 ? s_target / sigma_tan : 0;
    const w_rf = 1 - w_risky;
    const mu_target = rf_dec + s_target * sharpe;

    return {
      pointsFrontier,
      tangency: { x: sigma_tan * 100, y: mu_tan * 100, w1: w1_tan, w2: w2_tan },
      pointsCML,
      sharpe,
      target: {
        x: targetRisk,
        y: mu_target * 100,
        w_rf,
        w_risky,
        w_a: w1_tan,
        w_b: w2_tan
      }
    };
  }, [assets, rf, mode, targetRisk]);

  const chartData = {
    datasets: [
      {
        label: t.chart.frontier,
        data: results.pointsFrontier,
        showLine: true,
        borderColor: 'rgba(139, 92, 246, 0.3)',
        borderWidth: 2,
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0,
        hidden: mode === 'single'
      },
      {
        label: t.chart.cml,
        data: results.pointsCML,
        showLine: true,
        borderColor: '#8b5cf6',
        borderWidth: 4,
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0,
        zIndex: 5
      },
      {
        label: t.chart.tangency,
        data: [results.tangency],
        backgroundColor: '#ef4444',
        pointRadius: 8,
        pointStyle: 'circle',
        zIndex: 10
      },
      {
        label: t.chart.target,
        data: [{ x: results.target.x, y: results.target.y }],
        backgroundColor: '#f59e0b',
        pointRadius: 10,
        pointStyle: 'star',
        zIndex: 11
      },
      {
        label: 'A',
        data: [{ x: assets.s1, y: assets.r1 }],
        backgroundColor: 'rgba(239, 68, 68, 1)',
        pointRadius: 6,
        pointStyle: 'rect'
      },
      {
        label: 'B',
        data: [{ x: assets.s2, y: assets.r2 }],
        backgroundColor: 'rgba(16, 185, 129, 1)',
        pointRadius: 6,
        pointStyle: 'rect',
        hidden: mode === 'single'
      }
    ]
  };

  return (
    <div className="container">
      <button className="lang-switch" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
        <Globe size={16} />
        {t.labels.switchLanguage}
      </button>

      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
      </motion.header>

      <div className="grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="sharpe-meter">
            <div className="sharpe-label">{t.results.sharpe}</div>
            <div className="sharpe-value">{results.sharpe.toFixed(3)}</div>
          </div>

          <motion.section className="card" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="mode-selector">
              <button
                className={`mode-btn ${mode === 'single' ? 'active' : ''}`}
                onClick={() => setMode('single')}
              >
                {t.modes.single}
              </button>
              <button
                className={`mode-btn ${mode === 'multi' ? 'active' : ''}`}
                onClick={() => setMode('multi')}
              >
                {t.modes.multi}
              </button>
            </div>

            <div className="asset-header">
              <Settings2 size={20} className="text-primary" />
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{t.inputs.settings}</h2>
            </div>

            <div className="input-field" style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '1rem', borderRadius: '1rem' }}>
              <label>{t.inputs.rf}</label>
              <input type="number" name="rf" step="0.1" value={rf} onChange={handleInputChange} />
            </div>

            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <div className="asset-dot" style={{ background: '#ef4444' }} />
                <span style={{ fontWeight: 800 }}>{t.inputs.asset1}</span>
              </div>
              <div className="input-field">
                <label>{t.inputs.return}</label>
                <input type="number" name="r1" step="0.1" value={assets.r1} onChange={handleInputChange} />
              </div>
              <div className="input-field">
                <label>{t.inputs.risk}</label>
                <input type="number" name="s1" step="0.1" value={assets.s1} onChange={handleInputChange} />
              </div>
            </div>

            {mode === 'multi' && (
              <>
                <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '1rem', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <div className="asset-dot" style={{ background: '#10b981' }} />
                    <span style={{ fontWeight: 800 }}>{t.inputs.asset2}</span>
                  </div>
                  <div className="input-field">
                    <label>{t.inputs.return}</label>
                    <input type="number" name="r2" step="0.1" value={assets.r2} onChange={handleInputChange} />
                  </div>
                  <div className="input-field">
                    <label>{t.inputs.risk}</label>
                    <input type="number" name="s2" step="0.1" value={assets.s2} onChange={handleInputChange} />
                  </div>
                </div>

                <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '1rem', marginTop: '1rem' }}>
                  <label>{t.inputs.correlation}: {assets.rho.toFixed(2)}</label>
                  <input type="range" name="rho" min="-1" max="1" step="0.01" value={assets.rho} onChange={handleInputChange} />
                </div>
              </>
            )}
          </motion.section>

          <motion.section className="card" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="asset-header">
              <Zap size={20} color="#f59e0b" />
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{t.inputs.targetRisk}</h2>
            </div>
            <div className="input-field">
              <input
                type="range" min="0" max="40" step="0.5"
                value={targetRisk}
                onChange={(e) => setTargetRisk(parseFloat(e.target.value))}
              />
              <div style={{ fontWeight: 800, fontSize: '1.5rem', textAlign: 'center', color: '#f59e0b', margin: '1rem 0' }}>
                {targetRisk.toFixed(1)} %
              </div>
            </div>

            <div className="stats-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="stat-item" style={{ borderColor: '#f59e0b' }}>
                <div className="stat-label">{t.results.composition}</div>
                <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{t.results.w_rf}:</span>
                    <span style={{ fontWeight: 800 }}>{(results.target.w_rf * 100).toFixed(1)}%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{t.results.w_risky}:</span>
                    <span style={{ fontWeight: 800 }}>{(results.target.w_risky * 100).toFixed(1)}%</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '8px', fontSize: '0.8rem', opacity: 0.8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span>{t.results.w_a} ({t.inputs.asset1}):</span>
                      <span>{(results.target.w_a * 100).toFixed(1)}%</span>
                    </div>
                    {mode === 'multi' && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{t.results.w_b} ({t.inputs.asset2}):</span>
                        <span>{(results.target.w_b * 100).toFixed(1)}%</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <motion.section className="card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '8px' }}>
              <LineChart className="text-primary" />
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Capital Market Line</h2>
            </div>

            <div className="chart-container">
              <Scatter
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      title: { display: true, text: t.chart.x },
                      min: 0,
                      suggestedMax: 30
                    },
                    y: {
                      title: { display: true, text: t.chart.y },
                      min: 0,
                      suggestedMax: 20
                    }
                  },
                  plugins: {
                    legend: {
                      labels: {
                        filter: (item) => !['A', 'B'].includes(item.text)
                      }
                    }
                  }
                }}
              />
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-label">{t.results.expectedReturn}</div>
                <div className="stat-value" style={{ color: '#f59e0b' }}>{results.target.y.toFixed(2)}%</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">{t.results.totalRisk}</div>
                <div className="stat-value">{results.target.x.toFixed(2)}%</div>
              </div>
            </div>
          </motion.section>

          <motion.section className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
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
