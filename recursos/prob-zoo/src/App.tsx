import { useState, useMemo } from 'react';
import {
  Settings2,
  BookOpen,
  Info,
  Globe,
  Waves,
  Clock,
  TrendingUp,
  Activity,
  BarChart3,
  Dna,
  Layers,
  Binary
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// @ts-ignore
import * as jStatModule from 'jstat';

const jStat = (jStatModule.default || jStatModule.jStat || jStatModule) as any;

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

type Lang = 'es' | 'en';

interface DistParam {
  label: string;
  min: number;
  max: number;
  step: number;
  id: string;
}

interface DistributionContent {
  name: string;
  shortDesc: string;
  desc: string;
  use: string;
  fact: string;
  params: DistParam[];
}

interface Transl {
  title: string;
  subtitle: string;
  changeLang: string;
  parameters: string;
  description: string;
  useCase: string;
  didYouKnow: string;
  distributions: Record<string, DistributionContent>;
}

const CONTENT: Record<Lang, Transl> = {
  es: {
    title: "ProbLab: El Zoo de las Distribuciones",
    subtitle: "Laboratorio visual para entender la probabilidad",
    changeLang: "English",
    parameters: "Parámetros",
    description: "Descripción",
    useCase: "Caso de uso real",
    didYouKnow: "¿Sabías que?",
    distributions: {
      normal: {
        name: "Normal (Opcional)",
        shortDesc: "La madre de todas las distribuciones.",
        desc: "Simétrica y con forma de campana. El Teorema Central del Límite dice que casi cualquier suma de cosas acaba pareciéndose a esto.",
        use: "Precios de activos, estaturas, errores de medición.",
        fact: "Se llama Gaussiana por Carl Friedrich Gauss, aunque De Moivre la describió antes.",
        params: [
          { label: "Media (μ)", min: -5, max: 5, step: 0.1, id: 'mu' },
          { label: "Desv. Estándar (σ)", min: 0.1, max: 2, step: 0.1, id: 'sigma' }
        ]
      },
      tstudent: {
        name: "t-Student",
        shortDesc: "Para cuando no estamos 100% seguros.",
        desc: "Parecida a la Normal pero con 'colas pesadas'. Refleja mayor incertidumbre cuando las muestras son pequeñas.",
        use: "Estimación de retornos financieros con pocos datos.",
        fact: "Fue inventada por un cervecero de Guinness llamado William Gosset, bajo el seudónimo 'Student'.",
        params: [
          { label: "Grados de Libertad (df)", min: 1, max: 30, step: 1, id: 'df' }
        ]
      },
      chisquare: {
        name: "Chi-cuadrado (χ²)",
        shortDesc: "La curva de la independencia.",
        desc: "Solo positiva. Se usa para ver si lo que observamos se ajusta a lo que esperábamos.",
        use: "Tests de bondad de ajuste y tablas de contingencia.",
        fact: "Si sumas el cuadrado de varias variables normales independientes, obtienes una Chi-cuadrado.",
        params: [
          { label: "Grados de Libertad (k)", min: 1, max: 20, step: 1, id: 'k' }
        ]
      },
      weibull: {
        name: "Bañera (Weibull)",
        shortDesc: "El ciclo de la vida (y la muerte).",
        desc: "Representa la tasa de fallo. Describe por qué las cosas mueren al principio o al final de su vida.",
        use: "Fiabilidad técnica, seguros de vida, riesgo de crédito.",
        fact: "Se llama curva de la bañera porque baja rápido al inicio, es plana en medio y sube al final.",
        params: [
          { label: "Forma (k)", min: 0.5, max: 5, step: 0.1, id: 'k' },
          { label: "Escala (λ)", min: 0.5, max: 3, step: 0.1, id: 'lambda' }
        ]
      },
      lognormal: {
        name: "Lognormal",
        shortDesc: "La distribución del crecimiento.",
        desc: "Si el logaritmo de una variable es normal, la variable es lognormal. Siempre es positiva.",
        use: "Precios de acciones, salarios, tamaño de ciudades.",
        fact: "Es básica en el modelo Black-Scholes para valorar opciones.",
        params: [
          { label: "Media Log (μ)", min: -1, max: 1, step: 0.1, id: 'mu' },
          { label: "Desv. Log (σ)", min: 0.1, max: 1, step: 0.1, id: 'sigma' }
        ]
      },
      poisson: {
        name: "Poisson",
        shortDesc: "La distribución de las llamadas.",
        desc: "Discreta. Mide cuántas veces ocurre algo en un tiempo o espacio fijo.",
        use: "Llegada de clientes, fallos de red en un día.",
        fact: "Fue usada originalmente para contar el número de muertes por patada de caballo en el ejército prusiano.",
        params: [
          { label: "Intensidad (λ)", min: 0.5, max: 15, step: 0.5, id: 'lambda' }
        ]
      },
      pareto: {
        name: "Pareto (80/20)",
        shortDesc: "La ley del más fuerte.",
        desc: "Explica que pocos eventos concentran la mayoría del peso. Colas larguísimas.",
        use: "Distribución de riqueza, magnitud de terremotos.",
        fact: "Vilfredo Pareto observó que el 20% de la población italiana poseía el 80% de la tierra.",
        params: [
          { label: "Mínimo (xm)", min: 0.5, max: 2, step: 0.1, id: 'xm' },
          { label: "Alfa (α)", min: 1, max: 5, step: 0.1, id: 'alpha' }
        ]
      },
      fsnedecor: {
        name: "F de Snedecor",
        shortDesc: "Comparador de varianzas.",
        desc: "Surge al comparar dos varianzas. Crucial para saber si hay diferencias reales entre grupos.",
        use: "Modelos ANOVA y contrastes de regresión.",
        fact: "George Snedecor la bautizó en honor a Sir Ronald A. Fisher (por eso la F).",
        params: [
          { label: "GL Numerador (d1)", min: 1, max: 20, step: 1, id: 'd1' },
          { label: "GL Denominador (d2)", min: 1, max: 20, step: 1, id: 'd2' }
        ]
      }
    }
  },
  en: {
    title: "ProbLab: The Distribution Zoo",
    subtitle: "Visual laboratory to understand probability",
    changeLang: "Español",
    parameters: "Parameters",
    description: "Description",
    useCase: "Real-world usage",
    didYouKnow: "Did you know?",
    distributions: {
      normal: {
        name: "Normal (Z)",
        shortDesc: "The mother of all distributions.",
        desc: "Symmetric and bell-shaped. The Central Limit Theorem states that almost any sum of things eventually looks like this.",
        use: "Asset prices, heights, measurement errors.",
        fact: "It's called Gaussian after Carl Friedrich Gauss, though De Moivre described it first.",
        params: [
          { label: "Mean (μ)", min: -5, max: 5, step: 0.1, id: 'mu' },
          { label: "Std Deviation (σ)", min: 0.1, max: 2, step: 0.1, id: 'sigma' }
        ]
      },
      tstudent: {
        name: "t-Student",
        shortDesc: "For when we're not 100% sure.",
        desc: "Similar to Normal but with 'heavy tails'. Reflects greater uncertainty when sample sizes are small.",
        use: "Estimating financial returns with sparse data.",
        fact: "It was invented by a Guinness brewer named William Gosset, under the pseudonym 'Student'.",
        params: [
          { label: "Degrees of Freedom (df)", min: 1, max: 30, step: 1, id: 'df' }
        ]
      },
      chisquare: {
        name: "Chi-square (χ²)",
        shortDesc: "The curve of independence.",
        desc: "Only positive. Used to see if what we observe matches what we expected.",
        use: "Goodness-of-fit tests and contingency tables.",
        fact: "If you sum the square of several independent normal variables, you get a Chi-square.",
        params: [
          { label: "Degrees of Freedom (k)", min: 1, max: 20, step: 1, id: 'k' }
        ]
      },
      weibull: {
        name: "Bathtub (Weibull)",
        shortDesc: "The cycle of life (and death).",
        desc: "Represents failure rate. Describes why things die at the start or end of their life.",
        use: "Technical reliability, life insurance, credit risk.",
        fact: "It's called the bathtub curve because it drops fast at the start, is flat in the middle, and rises at the end.",
        params: [
          { label: "Shape (k)", min: 0.5, max: 5, step: 0.1, id: 'k' },
          { label: "Scale (λ)", min: 0.5, max: 3, step: 0.1, id: 'lambda' }
        ]
      },
      lognormal: {
        name: "Lognormal",
        shortDesc: "The growth distribution.",
        desc: "If the logarithm of a variable is normal, the variable is lognormal. Always positive.",
        use: "Stock prices, wages, city sizes.",
        fact: "It's fundamental in the Black-Scholes model for option pricing.",
        params: [
          { label: "Log Mean (μ)", min: -1, max: 1, step: 0.1, id: 'mu' },
          { label: "Log Std (σ)", min: 0.1, max: 1, step: 0.1, id: 'sigma' }
        ]
      },
      poisson: {
        name: "Poisson",
        shortDesc: "The distribution of calls.",
        desc: "Discrete. Measures how many times something happens in a fixed time or space.",
        use: "Customer arrivals, network failures in a day.",
        fact: "It was originally used to count the number of deaths by horse kick in the Prussian army.",
        params: [
          { label: "Intensity (λ)", min: 0.5, max: 15, step: 0.5, id: 'lambda' }
        ]
      },
      pareto: {
        name: "Pareto (80/20)",
        shortDesc: "The law of the strongest.",
        desc: "Explains that few events concentrate most of the weight. Very long tails.",
        use: "Wealth distribution, earthquake magnitudes.",
        fact: "Vilfredo Pareto observed that 20% of the Italian population owned 80% of the land.",
        params: [
          { label: "Minimum (xm)", min: 0.5, max: 2, step: 0.1, id: 'xm' },
          { label: "Alpha (α)", min: 1, max: 5, step: 0.1, id: 'alpha' }
        ]
      },
      fsnedecor: {
        name: "F-Snedecor",
        shortDesc: "Variance comparator.",
        desc: "Arises from comparing two variances. Crucial for knowing if there are real differences between groups.",
        use: "ANOVA models and regression contrasts.",
        fact: "George Snedecor named it in honor of Sir Ronald A. Fisher (That's the F).",
        params: [
          { label: "Num DF (d1)", min: 1, max: 20, step: 1, id: 'd1' },
          { label: "Denom DF (d2)", min: 1, max: 20, step: 1, id: 'd2' }
        ]
      }
    }
  }
};

const DISTRIBUTION_METADATA = [
  { id: 'normal', color: '#6366f1', icon: <Waves className="w-6 h-6" /> },
  { id: 'tstudent', color: '#8b5cf6', icon: <Activity className="w-6 h-6" /> },
  { id: 'chisquare', color: '#ec4899', icon: <Binary className="w-6 h-6" /> },
  { id: 'weibull', color: '#ef4444', icon: <Clock className="w-6 h-6" /> },
  { id: 'lognormal', color: '#f59e0b', icon: <TrendingUp className="w-6 h-6" /> },
  { id: 'poisson', color: '#10b981', icon: <BarChart3 className="w-6 h-6" /> },
  { id: 'pareto', color: '#06b6d4', icon: <Layers className="w-6 h-6" /> },
  { id: 'fsnedecor', color: '#64748b', icon: <Dna className="w-6 h-6" /> },
];

export default function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [activeDist, setActiveDist] = useState('normal');
  const [params, setParams] = useState<Record<string, number>>({
    mu: 0, sigma: 1, df: 10, k: 3, lambda: 1, xm: 1, alpha: 2.5, d1: 5, d2: 10
  });

  const t = CONTENT[lang];

  const handleParamChange = (id: string, value: number) => {
    setParams(prev => ({ ...prev, [id]: value }));
  };

  const chartData = useMemo(() => {
    const labels: string[] = [];
    const data: number[] = [];

    let xMin = -5;
    let xMax = 5;
    let step = 0.1;

    if (!jStat || !jStat.normal) return { labels: [], datasets: [] };

    switch (activeDist) {
      case 'normal':
        xMin = params.mu - 4 * params.sigma;
        xMax = params.mu + 4 * params.sigma;
        break;
      case 'tstudent':
        xMin = -10; xMax = 10;
        break;
      case 'chisquare':
        xMin = 0; xMax = Math.max(20, params.k * 3);
        break;
      case 'weibull':
        xMin = 0; xMax = 10;
        break;
      case 'lognormal':
        xMin = 0; xMax = Math.exp(params.mu + 3 * params.sigma);
        break;
      case 'poisson':
        xMin = 0; xMax = Math.max(20, params.lambda * 3);
        step = 1;
        break;
      case 'pareto':
        xMin = params.xm; xMax = params.xm + 10;
        break;
      case 'fsnedecor':
        xMin = 0; xMax = 5;
        break;
    }

    for (let x = xMin; x <= xMax; x += step) {
      labels.push(activeDist === 'poisson' ? Math.round(x).toString() : x.toFixed(2));
      let y = 0;
      try {
        switch (activeDist) {
          case 'normal': y = jStat.normal.pdf(x, params.mu, params.sigma); break;
          case 'tstudent': y = jStat.studentt.pdf(x, params.df); break;
          case 'chisquare': y = jStat.chisquare.pdf(x, params.k); break;
          case 'weibull': y = jStat.weibull.pdf(x, params.k, params.lambda); break;
          case 'lognormal': y = jStat.lognormal.pdf(x, params.mu, params.sigma); break;
          case 'poisson': y = jStat.poisson.pdf(Math.round(x), params.lambda); break;
          case 'pareto': y = jStat.pareto.pdf(x, params.xm, params.alpha); break;
          case 'fsnedecor': y = jStat.centralF.pdf(x, params.d1, params.d2); break;
        }
      } catch (e) { y = 0; }
      data.push(y);
    }

    return {
      labels,
      datasets: [{
        label: t.distributions[activeDist].name,
        data,
        borderColor: DISTRIBUTION_METADATA.find(d => d.id === activeDist)?.color,
        backgroundColor: `${DISTRIBUTION_METADATA.find(d => d.id === activeDist)?.color}22`,
        fill: true,
        tension: 0.4,
        pointRadius: activeDist === 'poisson' ? 5 : 0,
      }]
    };
  }, [activeDist, params, lang, t]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleFont: { family: 'Outfit', size: 14 },
        bodyFont: { family: 'Outfit', size: 12 },
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
      x: { grid: { display: false }, ticks: { color: '#94a3b8', maxTicksLimit: 10 } }
    },
    animation: { duration: 800 }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl title-gradient">{t.title}</h1>
          <p className="text-text-muted mt-1">{t.subtitle}</p>
        </div>
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
        >
          <Globe className="w-4 h-4" />
          {t.changeLang}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
        {/* Sidebar Selector */}
        <aside className="lg:col-span-3 glass-panel p-6 overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar">
          <div className="flex flex-col gap-3">
            {DISTRIBUTION_METADATA.map((dist) => (
              <button
                key={dist.id}
                onClick={() => setActiveDist(dist.id)}
                className={`p-4 flex items-center gap-4 text-left transition-all ${activeDist === dist.id
                    ? 'bg-white/10 border-white/20'
                    : 'bg-transparent border-transparent hover:bg-white/5'
                  } rounded-xl border`}
              >
                <div
                  className="distribution-icon"
                  style={{ backgroundColor: `${dist.color}22`, color: dist.color }}
                >
                  {dist.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.distributions[dist.id].name}</div>
                  <div className="text-xs text-text-muted truncate w-32">
                    {t.distributions[dist.id].shortDesc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-6 flex flex-col gap-6">
          <div className="glass-panel p-6 flex-grow min-h-[400px]">
            <Line data={chartData} options={options} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parameters */}
            <div className="glass-panel p-6">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Settings2 className="w-5 h-5" />
                <h3 className="font-semibold">{t.parameters}</h3>
              </div>
              <div className="flex flex-col gap-6">
                {(t.distributions[activeDist] as any).params.map((p: any) => (
                  <div key={p.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <label className="text-text-muted">{p.label}</label>
                      <span className="font-mono text-primary">{params[p.id]}</span>
                    </div>
                    <input
                      type="range"
                      min={p.min}
                      max={p.max}
                      step={p.step}
                      value={params[p.id]}
                      onChange={(e) => handleParamChange(p.id, parseFloat(e.target.value))}
                      className="slider-custom"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Use Case */}
            <div className="glass-panel p-6">
              <div className="flex items-center gap-2 mb-4 text-accent">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-semibold">{t.useCase}</h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                {t.distributions[activeDist].use}
              </p>
              <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 mb-1 text-xs font-bold text-accent uppercase tracking-wider">
                  <Info className="w-3 h-3" />
                  {t.didYouKnow}
                </div>
                <p className="text-xs italic text-text-muted">
                  {t.distributions[activeDist].fact}
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Info Area */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          <div className="glass-panel p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              {t.distributions[activeDist].name}
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              {t.distributions[activeDist].desc}
            </p>
          </div>

          <div className="flex-grow glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers className="w-32 h-32" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Status</h4>
              <p className="text-2xl font-bold">Laboratorio Vivo</p>
              <div className="mt-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs text-success font-semibold">Motor Estadístico Activo</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
