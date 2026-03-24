import { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, BarChart, Bar, Area, AreaChart
} from 'recharts';
import {
  ShieldCheck, ShieldAlert, Activity, ArrowRightLeft,
  TrendingUp, Info, Zap, ChevronRight, Globe
} from 'lucide-react';
import { t, type Lang } from './i18n';

const fmt = (n: number, d = 2) =>
  n.toLocaleString('es-ES', { minimumFractionDigits: d, maximumFractionDigits: d });

/* ───────────────────────────── NIVEL 1 ───────────────────────────── */
function BasicScenario({ lang }: { lang: Lang }) {
  const [liabT, setLiabT] = useState(10);
  const [a1T, setA1T] = useState(3);
  const [a2T, setA2T] = useState(20);
  const [yPct, setYPct] = useState(5);

  const FV = 1_000_000;
  const y = yPct / 100;

  const pvL = FV / Math.pow(1 + y, liabT);
  const cvL = (liabT * (liabT + 1)) / Math.pow(1 + y, 2);

  const w1 = (a2T - liabT) / (a2T - a1T);
  const w2 = (liabT - a1T) / (a2T - a1T);
  const ok = w1 >= 0 && w2 >= 0;
  const cw1 = ok ? w1 : 0.5;
  const cw2 = ok ? w2 : 0.5;

  const fv1 = cw1 * pvL * Math.pow(1 + y, a1T);
  const fv2 = cw2 * pvL * Math.pow(1 + y, a2T);

  const cv1 = (a1T * (a1T + 1)) / Math.pow(1 + y, 2);
  const cv2 = (a2T * (a2T + 1)) / Math.pow(1 + y, 2);
  const cvA = cw1 * cv1 + cw2 * cv2;

  const durA = cw1 * a1T + cw2 * a2T;
  const immunized = ok && cvA > cvL;

  const barData = useMemo(() => {
    const maxT = Math.max(a2T, liabT) + 2;
    const rows = [];
    for (let ti = 1; ti <= maxT; ti++) {
      let activos = 0;
      let pasivo = 0;
      if (ok) {
        if (ti === a1T) activos += fv1;
        if (ti === a2T) activos += fv2;
      }
      if (ti === liabT) pasivo = -FV;
      if (activos === 0 && pasivo === 0) continue;
      rows.push({ t: ti, [t('assets', lang)]: activos, [t('liabSing', lang)]: pasivo });
    }
    return rows;
  }, [a1T, a2T, liabT, fv1, fv2, ok, FV, lang]);

  const lineData = useMemo(() => {
    const rows = [];
    for (let r = 0.5; r <= 15; r += 0.25) {
      const rate = r / 100;
      const pL = FV / Math.pow(1 + rate, liabT);
      const pA = ok
        ? fv1 / Math.pow(1 + rate, a1T) + fv2 / Math.pow(1 + rate, a2T)
        : 0;
      rows.push({ y: r, [t('assets', lang)]: pA, [t('liabSing', lang)]: pL });
    }
    return rows;
  }, [ok, fv1, fv2, a1T, a2T, liabT, FV, lang]);

  const assetsKey = t('assets', lang);
  const liabKey = t('liabSing', lang);

  return (
    <div className="two-col">
      <aside className="panel ctrl-panel">
        <div className="ctrl-group">
          <h3><Activity size={16} /> {t('interestRate', lang)}</h3>
          <Slider label={t('targetYield', lang)} val={`${yPct}%`}
            min={1} max={15} step={0.5} value={yPct}
            cls="" onChange={v => setYPct(v)} />
        </div>

        <div className="ctrl-group">
          <h3><ShieldAlert size={16} color="var(--liab)" /> {t('liability', lang)}</h3>
          <Slider label={t('liabMat', lang)} val={`${liabT} ${t('years', lang)}`}
            min={2} max={25} step={1} value={liabT} cls="liab-sl"
            onChange={v => {
              setLiabT(v);
              if (a1T >= v) setA1T(v - 1);
              if (a2T <= v) setA2T(v + 1);
            }} />
        </div>

        <div className="ctrl-group">
          <h3><ShieldCheck size={16} color="var(--asset)" /> {t('portfolio', lang)}</h3>
          <Slider label={t('shortBond', lang)} val={`${a1T} ${t('years', lang)}`}
            min={1} max={Math.max(1, liabT - 1)} step={1}
            value={a1T} cls="asset-sl" onChange={v => setA1T(v)} />
          <Slider label={t('longBond', lang)} val={`${a2T} ${t('years', lang)}`}
            min={Math.min(30, liabT + 1)} max={30} step={1}
            value={a2T} cls="asset-sl" onChange={v => setA2T(v)} />
        </div>

        {!ok && (
          <div className="alert warn">
            <Info size={20} />
            <span>{t('bracketWarn', lang)}</span>
          </div>
        )}
      </aside>

      <section className="main">
        <div className="kpi-row">
          <KPI accent="liab" title={t('pvLiab', lang)} value={`$${fmt(pvL, 0)}`}
            sub1={`${t('dur', lang)}: ${fmt(liabT)}`} sub2={`${t('conv', lang)}: ${fmt(cvL)}`} />
          <KPI accent="asset" title={t('pvPortf', lang)} value={`$${fmt(ok ? pvL : 0, 0)}`}
            sub1={`${t('dur', lang)}: ${fmt(durA)}`} sub2={`${t('conv', lang)}: ${fmt(cvA)}`} />
          <KPI accent={immunized ? 'ok' : 'warn'}
            title={t('status', lang)}
            value={immunized ? t('immunized', lang) : t('vulnerable', lang)}
            sub1={`W₁: ${(cw1 * 100).toFixed(1)}%`}
            sub2={`W₂: ${(cw2 * 100).toFixed(1)}%`} />
        </div>

        <div className="charts-row">
          <div className="chart-card">
            <h4><Activity size={16} /> {t('cfTitle', lang)}</h4>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="t" stroke="#666" tickFormatter={v => `${v}Y`}
                    label={{ value: t('yearLabel', lang), position: 'insideBottomRight', offset: -5, fill: '#666' }} />
                  <YAxis stroke="#666" tickFormatter={v => `${(v / 1e6).toFixed(1)}M`} />
                  <Tooltip content={<CfTooltip lang={lang} />} />
                  <ReferenceLine y={0} stroke="#555" />
                  <Bar dataKey={assetsKey} fill="var(--asset)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey={liabKey} fill="var(--liab)" radius={[0, 0, 4, 4]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <h4><TrendingUp size={16} /> {t('pvTitle', lang)}</h4>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="y" stroke="#666" tickFormatter={v => `${v}%`}
                    label={{ value: 'Yield', position: 'insideBottomRight', offset: -5, fill: '#666' }} />
                  <YAxis stroke="#666" tickFormatter={v => `$${(v / 1e3).toFixed(0)}k`} />
                  <Tooltip content={<PvTooltip />} />
                  <ReferenceLine x={yPct} stroke="#555" strokeDasharray="6 3"
                    label={{ value: t('actual', lang), fill: '#888', position: 'top' }} />
                  {ok && (
                    <Line type="monotone" dataKey={assetsKey} stroke="var(--asset)"
                      strokeWidth={2.5} dot={false} />
                  )}
                  <Line type="monotone" dataKey={liabKey} stroke="var(--liab)"
                    strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="cond-row">
          <Cond ok={ok} n={1} title={t('c1Title', lang)} desc={t('c1Desc', lang)} />
          <Cond ok={ok && Math.abs(durA - liabT) < 0.01} n={2}
            title={t('c2Title', lang)} desc={t('c2Desc', lang)} />
          <Cond ok={cvA > cvL} n={3}
            title={t('c3Title', lang)} desc={t('c3Desc', lang)} />
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────── NIVEL 2 ─────────────────────────────── */
interface Liab { time: number; fv: number }

const LIABS: Liab[] = [
  { time: 3, fv: 500_000 },
  { time: 7, fv: 1_200_000 },
  { time: 12, fv: 800_000 },
];

const BASE_ASSETS: { time: number; name: string }[] = [
  { time: 1, name: 'ZCB-1Y' },
  { time: 5, name: 'ZCB-5Y' },
  { time: 10, name: 'ZCB-10Y' },
  { time: 20, name: 'ZCB-20Y' },
];

type Preset = 'short' | 'long' | 'barbell' | 'immunize';

const presetWeights: Record<Preset, number[]> = {
  short: [1, 0, 0, 0],
  long: [0, 0, 0, 1],
  barbell: [0.5, 0, 0, 0.5],
  immunize: [0.3401, 0.25, 0.25, 0.1599],
};

function ComplexScenario({ lang }: { lang: Lang }) {
  const [preset, setPreset] = useState<Preset>('immunize');
  const baseY = 0.05;

  const weights = presetWeights[preset];

  let pvL = 0;
  LIABS.forEach(l => { pvL += l.fv / Math.pow(1 + baseY, l.time); });
  let durL = 0, cvL = 0;
  LIABS.forEach(l => {
    const pv = l.fv / Math.pow(1 + baseY, l.time);
    durL += (pv / pvL) * l.time;
    cvL += (pv / pvL) * (l.time * (l.time + 1)) / Math.pow(1 + baseY, 2);
  });

  let durA = 0, cvA = 0;
  BASE_ASSETS.forEach((a, i) => {
    durA += weights[i] * a.time;
    cvA += weights[i] * (a.time * (a.time + 1)) / Math.pow(1 + baseY, 2);
  });

  const durMatch = Math.abs(durA - durL) < 0.5;
  const cvMatch = cvA > cvL;
  const fullMatch = durMatch && cvMatch;

  const assetsKey = t('assets', lang);
  const liabKey = t('liabSing', lang);

  const cfData = useMemo(() => {
    const rows = [];
    for (let ti = 1; ti <= 22; ti++) {
      let a = 0, l = 0;
      LIABS.forEach(lb => { if (lb.time === ti) l -= lb.fv; });
      BASE_ASSETS.forEach((ast, i) => {
        if (ast.time === ti) {
          const Di = weights[i] * pvL;
          a += Di * Math.pow(1 + baseY, ast.time);
        }
      });
      rows.push({ t: ti, [assetsKey]: a, [liabKey]: l });
    }
    return rows;
  }, [preset, pvL, assetsKey, liabKey]);

  const stressData = useMemo(() => {
    const rows = [];
    for (let r = 0.5; r <= 10; r += 0.25) {
      const rate = r / 100;
      let pL = 0;
      LIABS.forEach(l => { pL += l.fv / Math.pow(1 + rate, l.time); });
      let pA = 0;
      BASE_ASSETS.forEach((a, i) => {
        const Di = weights[i] * pvL;
        const Fi = Di * Math.pow(1 + baseY, a.time);
        pA += Fi / Math.pow(1 + rate, a.time);
      });
      rows.push({ y: r, [assetsKey]: pA, [liabKey]: pL, Surplus: pA - pL });
    }
    return rows;
  }, [preset, pvL, assetsKey, liabKey]);

  const presetButtons: { id: Preset; icon: any; label: string; sub: string }[] = [
    { id: 'short', icon: <ShieldAlert size={16} />, label: t('preShort', lang), sub: t('preShortSub', lang) },
    { id: 'long', icon: <ShieldAlert size={16} />, label: t('preLong', lang), sub: t('preLongSub', lang) },
    { id: 'barbell', icon: <ArrowRightLeft size={16} />, label: t('preBarbell', lang), sub: t('preBarbellSub', lang) },
    { id: 'immunize', icon: <ShieldCheck size={16} />, label: t('preImmunize', lang), sub: t('preImmSub', lang) },
  ];

  return (
    <div className="two-col">
      <aside className="panel ctrl-panel complex-aside">
        <div className="complex-header">
          <Zap size={22} color="var(--warn)" />
          <div>
            <h2>{t('complex', lang)}</h2>
            <p>{t('complexSub', lang)}</p>
          </div>
        </div>

        <div className="ctrl-group">
          <h3><ShieldAlert size={16} color="var(--liab)" /> {t('liabsToCover', lang)}</h3>
          <table className="mini-table">
            <thead><tr><th>{t('colYear', lang)}</th><th>{t('colAmount', lang)}</th><th>PV (5 %)</th></tr></thead>
            <tbody>
              {LIABS.map(l => (
                <tr key={l.time}>
                  <td>{l.time}</td>
                  <td className="liab-text">${fmt(l.fv, 0)}</td>
                  <td>${fmt(l.fv / Math.pow(1 + baseY, l.time), 0)}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td></td><td></td><td><strong>${fmt(pvL, 0)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ctrl-group">
          <h3><Activity size={16} /> {t('strategy', lang)}</h3>
          <div className="preset-list">
            {presetButtons.map(p => (
              <button key={p.id}
                className={`preset-btn ${preset === p.id ? 'active' : ''}`}
                onClick={() => setPreset(p.id)}>
                {p.icon}
                <div>
                  <span className="preset-label">{p.label}</span>
                  <span className="preset-sub">{p.sub}</span>
                </div>
                {preset === p.id && <ChevronRight size={14} className="preset-arrow" />}
              </button>
            ))}
          </div>
        </div>

        <div className="ctrl-group">
          <h3><TrendingUp size={16} /> {t('weights', lang)}</h3>
          <div className="weight-bars">
            {BASE_ASSETS.map((a, i) => (
              <div className="weight-item" key={a.name}>
                <span className="weight-name">{a.name}</span>
                <div className="weight-bar-bg">
                  <div className="weight-bar-fill"
                    style={{ width: `${weights[i] * 100}%` }} />
                </div>
                <span className="weight-pct">{(weights[i] * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className="main">
        <div className="kpi-row">
          <KPI accent="liab" title={t('liabsComb', lang)} value={`$${fmt(pvL, 0)}`}
            sub1={`${t('dur', lang)}: ${fmt(durL)}`} sub2={`${t('conv', lang)}: ${fmt(cvL)}`} />
          <KPI accent="asset" title={t('portfProj', lang)} value={`$${fmt(pvL, 0)}`}
            sub1={`${t('dur', lang)}: ${fmt(durA)}`} sub2={`${t('conv', lang)}: ${fmt(cvA)}`} />
          <KPI accent={fullMatch ? 'ok' : 'warn'}
            title={t('globalResult', lang)}
            value={fullMatch ? t('immunized', lang) : durMatch ? t('partial', lang) : t('vulnerable', lang)}
            sub1={durMatch ? `${t('dur', lang)} ✓` : `${t('durGap', lang)}: ${fmt(Math.abs(durA - durL))}`}
            sub2={cvMatch ? `${t('conv', lang)} ✓` : t('convInsuf', lang)} />
        </div>

        <div className="charts-row">
          <div className="chart-card">
            <h4><Activity size={16} /> {t('cfMap', lang)}</h4>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cfData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="t" stroke="#666" tickFormatter={v => `${v}Y`} />
                  <YAxis stroke="#666" tickFormatter={v => `${(v / 1e6).toFixed(1)}M`} />
                  <Tooltip content={<CfTooltip lang={lang} />} />
                  <ReferenceLine y={0} stroke="#555" />
                  <Bar dataKey={assetsKey} fill="var(--asset)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey={liabKey} fill="var(--liab)" radius={[0, 0, 4, 4]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <h4><TrendingUp size={16} /> {t('stressTitle', lang)}</h4>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stressData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                  <defs>
                    <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--asset)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--asset)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gL" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--liab)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--liab)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="y" stroke="#666" tickFormatter={v => `${v}%`} />
                  <YAxis stroke="#666" tickFormatter={v => `$${(v / 1e3).toFixed(0)}k`} />
                  <Tooltip content={<PvTooltip />} />
                  <ReferenceLine x={5} stroke="#555" strokeDasharray="6 3"
                    label={{ value: `${t('base', lang)} 5%`, fill: '#888', position: 'top' }} />
                  <Area type="monotone" dataKey={assetsKey} stroke="var(--asset)"
                    strokeWidth={2.5} fill="url(#gA)" />
                  <Area type="monotone" dataKey={liabKey} stroke="var(--liab)"
                    strokeWidth={2.5} fill="url(#gL)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="chart-card full-width">
          <h4><Zap size={16} /> {t('surplusTitle', lang)}</h4>
          <div className="chart-wrap short">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stressData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                <defs>
                  <linearGradient id="gS" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={fullMatch ? 'var(--ok)' : 'var(--warn)'} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={fullMatch ? 'var(--ok)' : 'var(--warn)'} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="y" stroke="#666" tickFormatter={v => `${v}%`} />
                <YAxis stroke="#666" tickFormatter={v => `$${(v / 1e3).toFixed(0)}k`} />
                <Tooltip content={<SurplusTooltip lang={lang} />} />
                <ReferenceLine y={0} stroke="var(--liab)" strokeDasharray="4 2" />
                <ReferenceLine x={5} stroke="#555" strokeDasharray="6 3" />
                <Area type="monotone" dataKey="Surplus"
                  stroke={fullMatch ? 'var(--ok)' : 'var(--warn)'}
                  strokeWidth={2.5} fill="url(#gS)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════ COMPONENTES AUXILIARES ═══════════════════ */

function Slider({ label, val, min, max, step, value, cls, onChange }: {
  label: string; val: string; min: number; max: number; step: number;
  value: number; cls: string; onChange: (v: number) => void;
}) {
  return (
    <div className="slider-row">
      <label>{label} <span className="val">{val}</span></label>
      <input type="range" className={cls} min={min} max={max} step={step}
        value={value} onChange={e => onChange(parseFloat(e.target.value))} />
    </div>
  );
}

function KPI({ accent, title, value, sub1, sub2 }: {
  accent: string; title: string; value: string; sub1: string; sub2: string;
}) {
  return (
    <div className={`kpi ${accent}`}>
      <span className="kpi-t">{title}</span>
      <span className="kpi-v">{value}</span>
      <div className="kpi-sub"><span>{sub1}</span><span>{sub2}</span></div>
    </div>
  );
}

function Cond({ ok, n, title, desc }: { ok: boolean; n: number; title: string; desc: string }) {
  return (
    <div className={`cond ${ok ? 'pass' : 'fail'}`}>
      <div className="cond-n">{ok ? '✓' : '✗'}</div>
      <strong>C{n}: {title}</strong>
      <span>{desc}</span>
    </div>
  );
}

function CfTooltip({ active, payload, label, lang }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="tt">
      <strong>{t('ttYear', lang || 'es')} {label}</strong>
      {payload.map((p: any) => (
        <div key={p.dataKey} style={{ color: p.fill || p.stroke }}>
          {p.dataKey}: ${fmt(Math.abs(p.value), 0)}
          {p.value < 0 ? ` (${t('ttPayment', lang || 'es')})` : p.value > 0 ? ` (${t('ttReceipt', lang || 'es')})` : ''}
        </div>
      ))}
    </div>
  );
}

function PvTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="tt">
      <strong>Yield: {label}%</strong>
      {payload.filter((p: any) => p.dataKey !== 'Surplus').map((p: any) => (
        <div key={p.dataKey} style={{ color: p.stroke }}>
          {p.dataKey}: ${fmt(p.value, 0)}
        </div>
      ))}
    </div>
  );
}

function SurplusTooltip({ active, payload, label, lang }: any) {
  if (!active || !payload?.length) return null;
  const s = payload[0]?.value ?? 0;
  return (
    <div className="tt">
      <strong>Yield: {label}%</strong>
      <div style={{ color: s >= 0 ? 'var(--ok)' : 'var(--liab)' }}>
        {t('ttSurplus', lang || 'es')}: ${fmt(s, 0)} {s >= 0 ? '✓' : '✗'}
      </div>
    </div>
  );
}

/* ═══════════════════════════ APP ═══════════════════════════════════ */
export default function App() {
  const [tab, setTab] = useState<'basic' | 'complex'>('basic');
  const [lang, setLang] = useState<Lang>('es');

  return (
    <div className="app">
      <header>
        <div className="header-top">
          <h1>{t('title', lang)}</h1>
          <button className="lang-btn"
            onClick={() => setLang(l => l === 'es' ? 'en' : 'es')}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}>
            <Globe size={16} />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>
        <p>{t('subtitle', lang)}</p>
      </header>

      <nav className="tabs">
        <button className={tab === 'basic' ? 'active' : ''}
          onClick={() => setTab('basic')}>
          <ShieldCheck size={16} /> {t('tab1', lang)}
        </button>
        <button className={tab === 'complex' ? 'active' : ''}
          onClick={() => setTab('complex')}>
          <Zap size={16} /> {t('tab2', lang)}
        </button>
      </nav>

      {tab === 'basic' ? <BasicScenario lang={lang} /> : <ComplexScenario lang={lang} />}
    </div>
  );
}
