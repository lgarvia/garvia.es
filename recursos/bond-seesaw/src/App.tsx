import { useState, useMemo } from 'react';
import { translations } from './translations';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  BookOpen,
  Settings,
  Globe,
  Scale,
  ArrowDown
} from 'lucide-react';

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang] as any;

  const [inputs, setInputs] = useState({
    coupon: 6,
    maturity: 10,
    yield: 5,
    nominal: 1000
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const data = useMemo(() => {
    const { coupon, maturity, yield: y, nominal } = inputs;
    const y_dec = y / 100;
    const c_dec = coupon / 100;
    const pmt = nominal * c_dec;

    let price = 0;
    const flows = [];

    for (let i = 1; i <= maturity; i++) {
      const amount = i === maturity ? pmt + nominal : pmt;
      const pv = amount / Math.pow(1 + y_dec, i);
      price += pv;
      flows.push({
        t: i,
        amount,
        pv,
        type: i === maturity ? 'principal' : 'coupon'
      });
    }

    const processedFlows = flows.map(f => ({
      ...f,
      weight: f.pv / price,
      contribution: (f.pv / price) * f.t
    }));

    const macDuration = processedFlows.reduce((sum, f) => sum + f.contribution, 0);

    return {
      price,
      flows: processedFlows,
      macDuration
    };
  }, [inputs]);

  // Viewport mapping for the seesaw with safety margins (5% to 95%)
  const MAX_YEARS = Math.max(15, inputs.maturity + 2);
  const getX = (t: number) => 5 + (t / MAX_YEARS) * 90;

  return (
    <div className="container">
      <button className="lang-switch" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
        <Globe size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
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
        {/* Sidebar Inputs */}
        <motion.section
          className="card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '8px' }}>
            <Settings className="text-primary" />
            <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.inputs.settings}</h2>
          </div>

          <div className="input-field">
            <label>{t.inputs.nominal}</label>
            <input type="text" value={inputs.nominal.toLocaleString()} disabled style={{ background: 'rgba(0,0,0,0.05)', cursor: 'not-allowed' }} />
          </div>

          <div className="input-field">
            <label>{t.inputs.coupon} (%)</label>
            <input
              type="range" min="0" max="20" step="0.5"
              name="coupon" value={inputs.coupon} onChange={handleInputChange}
            />
            <div style={{ textAlign: 'right', fontWeight: 700 }}>{inputs.coupon}%</div>
          </div>

          <div className="input-field">
            <label>{t.inputs.maturity} ({t.seesaw.years})</label>
            <input
              type="range" min="1" max="30" step="1"
              name="maturity" value={inputs.maturity} onChange={handleInputChange}
            />
            <div style={{ textAlign: 'right', fontWeight: 700 }}>{inputs.maturity}</div>
          </div>

          <div className="input-field">
            <label>{t.inputs.yield} (%)</label>
            <input
              type="range" min="0" max="25" step="0.1"
              name="yield" value={inputs.yield} onChange={handleInputChange}
            />
            <div style={{ textAlign: 'right', fontWeight: 700 }}>{inputs.yield}%</div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '0.5rem', border: '1px solid var(--primary)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{t.seesaw.price}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>${data.price.toFixed(2)}</div>
          </div>
        </motion.section>

        {/* Main Content: Seesaw */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <motion.section
            className="card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '8px' }}>
              <Scale className="text-primary" />
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Visualización Física</h2>
            </div>

            {/* Seesaw Arena */}
            <div style={{ position: 'relative', width: '100%', height: '350px', background: 'linear-gradient(to bottom, transparent 90%, rgba(0,0,0,0.02) 90%)', borderRadius: '1rem', padding: '2rem 0' }}>
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Year ticks on X-axis */}
                {Array.from({ length: MAX_YEARS + 1 }).map((_, i) => (
                  <line
                    key={i}
                    x1={getX(i)} y1="80" x2={getX(i)} y2="83"
                    stroke="var(--border)" strokeWidth="0.2"
                  />
                ))}

                {/* Main Lever Bar */}
                <line x1={getX(0)} y1="80" x2={getX(inputs.maturity)} y2="80" stroke="var(--text-main)" strokeWidth="0.8" strokeLinecap="round" />

                {/* Cash Flow Weights */}
                <AnimatePresence>
                  {data.flows.map((cf) => {
                    const nominalHeight = (cf.amount / (inputs.nominal + inputs.nominal * (inputs.coupon / 100))) * 70;
                    const pvHeight = (cf.pv / (inputs.nominal + inputs.nominal * (inputs.coupon / 100))) * 70;

                    return (
                      <g key={cf.t}>
                        {/* Ghost/Nominal Box */}
                        <motion.rect
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: nominalHeight, y: 80 - nominalHeight }}
                          x={getX(cf.t) - 1.5}
                          width="3"
                          fill="none"
                          stroke={cf.type === 'principal' ? 'var(--primary)' : 'var(--secondary)'}
                          strokeWidth="0.15"
                          strokeDasharray="1,0.5"
                          style={{ opacity: 0.5 }}
                          rx="0.5"
                          transition={{ duration: 0.5 }}
                        />
                        {/* PV Solid Box */}
                        <motion.rect
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: pvHeight, y: 80 - pvHeight }}
                          x={getX(cf.t) - 1.5}
                          width="3"
                          fill={cf.type === 'principal' ? 'var(--primary)' : 'rgba(59, 130, 246, 0.4)'}
                          rx="0.5"
                          className="weight-block"
                          transition={{ duration: 0.5 }}
                        />
                      </g>
                    );
                  })}
                </AnimatePresence>

                {/* Fulcrum (Balance Point) */}
                <motion.path
                  animate={{ d: `M ${getX(data.macDuration) - 3} 92 L ${getX(data.macDuration) + 3} 92 L ${getX(data.macDuration)} 80 Z` }}
                  fill="var(--primary)"
                  transition={{ type: 'spring', stiffness: 50, bounce: 0.5 }}
                />

                {/* Vertical line from fulcrum to check balance */}
                <motion.line
                  animate={{ x1: getX(data.macDuration), x2: getX(data.macDuration) }}
                  y1="10" y2="80"
                  stroke="var(--primary)"
                  strokeWidth="0.15"
                  strokeDasharray="1,1"
                  style={{ opacity: 0.4 }}
                />
              </svg>

              {/* HTML X-Axis Labels for perfect rendering */}
              <div style={{ position: 'absolute', bottom: '15px', left: 0, right: 0, pointerEvents: 'none' }}>
                {Array.from({ length: MAX_YEARS + 1 }).map((_, i) => {
                  const shouldShowLabel = inputs.maturity <= 15 || i % 5 === 0 || i === inputs.maturity;
                  if (!shouldShowLabel) return null;
                  return (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        left: `${getX(i)}%`,
                        transform: 'translateX(-50%)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        fontFamily: 'inherit'
                      }}
                    >
                      {i}
                    </div>
                  );
                })}
              </div>

              {/* Macaulay HUD */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: `${getX(data.macDuration)}%`,
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                  zIndex: 10
                }}
                animate={{ left: `${getX(data.macDuration)}%` }}
              >
                <div style={{ background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, whiteSpace: 'nowrap', boxShadow: 'var(--shadow)' }}>
                  Duración: {data.macDuration.toFixed(2)} {t.seesaw.years}
                </div>
                <ArrowDown size={20} color="var(--primary)" style={{ marginTop: '2px' }} />
              </motion.div>

              <div style={{ position: 'absolute', bottom: '15px', right: '20px', fontSize: '0.7rem', display: 'flex', gap: '15px', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '10px', height: '10px', border: '1px dashed var(--secondary)', borderRadius: '2px' }} /> {lang === 'es' ? 'Nominal' : 'Face Value'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '2px' }} /> {t.seesaw.legendPrincipal}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Level 2: The Math Breakdown */}
          <motion.section
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '8px' }}>
              <Calculator className="text-primary" />
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.table.total}</h2>
            </div>

            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '0.5rem', border: '1px dashed var(--primary)', textAlign: 'center' }}>
              <code style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                D = Σ (t · [PVt / Price])
              </code>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>{t.table.year} (t)</th>
                    <th>{t.table.cf}</th>
                    <th>{t.table.pv}</th>
                    <th>{t.table.weight} (w)</th>
                    <th>{t.table.contribution}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.flows.map((f) => (
                    <tr key={f.t}>
                      <td>{f.t}</td>
                      <td>${f.amount.toLocaleString()}</td>
                      <td>${f.pv.toFixed(2)}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div className="weight-bar" style={{ width: `${f.weight * 50}px` }} />
                          {(f.weight * 100).toFixed(1)}%
                        </div>
                      </td>
                      <td style={{ fontWeight: 700 }}>{f.contribution.toFixed(3)}</td>
                    </tr>
                  ))}
                  <tr style={{ background: 'rgba(0,0,0,0.02)', fontWeight: 800 }}>
                    <td colSpan={2}>{t.table.total}</td>
                    <td>${data.price.toFixed(2)}</td>
                    <td>100%</td>
                    <td style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>{data.macDuration.toFixed(4)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Intuition Box */}
      <motion.section
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '8px' }}>
          <BookOpen className="text-primary" />
          <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{t.intuition.title}</h2>
        </div>
        <ul className="intuition" style={{ padding: 0 }}>
          {t.intuition.lines.map((line: string, i: number) => (
            <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.05 }}>
              {line}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <footer style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.8rem', paddingBottom: '2rem' }}>
        © {new Date().getFullYear()} garvia.es | {lang === 'es' ? 'Educando en finanzas' : 'Educating in finance'}
      </footer>
    </div>
  );
}

export default App;
