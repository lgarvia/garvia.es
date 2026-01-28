
import React, { useState, useMemo, useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { AlertTriangle, TrendingDown, Target, Zap } from 'lucide-react';
import { LanguageContext } from '../App';

export const RiskTheorySimulator: React.FC = () => {
  const context = useContext(LanguageContext);
  const [initialCapital, setInitialCapital] = useState<number>(5000);
  const [safetyLoading, setSafetyLoading] = useState<number>(15);
  
  if (!context) return null;
  const { t } = context;

  const YEARS = 20;
  const EXPECTED_CLAIMS = 1000;
  const CLAIM_VOLATILITY = 0.4;

  const simulationPaths = useMemo(() => {
    const paths = [];
    const premium = EXPECTED_CLAIMS * (1 + safetyLoading / 100);
    for (let p = 0; p < 3; p++) {
      let currentCapital = initialCapital;
      const pathData = [{ time: 0, capital: currentCapital }];
      for (let t_idx = 1; t_idx <= YEARS; t_idx++) {
        const randomFactor = 1 + (Math.random() - 0.5) * 2 * CLAIM_VOLATILITY;
        const actualClaims = EXPECTED_CLAIMS * randomFactor;
        currentCapital = currentCapital + premium - actualClaims;
        pathData.push({ time: t_idx, capital: Math.max(currentCapital, -2000) });
      }
      paths.push(pathData);
    }
    return paths;
  }, [initialCapital, safetyLoading]);

  const ruinProb = useMemo(() => {
    const theta = safetyLoading / 100;
    const variance = Math.pow(EXPECTED_CLAIMS * CLAIM_VOLATILITY, 2);
    const prob = Math.exp(-2 * theta * initialCapital / (variance / 400));
    return Math.min(prob * 100, 100);
  }, [initialCapital, safetyLoading]);

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
          <AlertTriangle size={20} />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">{t.ruin.title}</h3>
      </div>
      <p className="text-slate-600 mb-8 text-sm leading-relaxed">{t.ruin.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        <div className="lg:col-span-4 space-y-8">
          <div>
            <div className="flex justify-between mb-2 text-xs font-bold uppercase text-slate-500">
              <label>{t.ruin.initialCapital}</label>
              <span className="text-slate-900">${initialCapital.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="500" max="15000" step="500" value={initialCapital} 
              onChange={(e) => setInitialCapital(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2 text-xs font-bold uppercase text-slate-500">
              <label>{t.ruin.safetyLoading}</label>
              <span className="text-slate-900">{safetyLoading}%</span>
            </div>
            <input 
              type="range" min="0" max="50" step="1" value={safetyLoading} 
              onChange={(e) => setSafetyLoading(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
          </div>

          <div className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center transition-colors ${ruinProb < 0.05 ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'}`}>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{t.ruin.estimatedProb}</p>
            <p className={`text-4xl font-black ${ruinProb < 0.05 ? 'text-emerald-700' : 'text-amber-700'}`}>
              {ruinProb > 0.01 ? ruinProb.toFixed(3) : '< 0.001'}%
            </p>
            {ruinProb < 0.05 && (
              <div className="flex items-center gap-1.5 mt-3 text-[10px] text-emerald-600 font-black uppercase tracking-tighter">
                <Target size={14} /> {t.ruin.solvencyTarget}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="h-[280px] sm:h-[350px] relative w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" type="number" domain={[0, YEARS]} tick={{fontSize: 10}} />
                <YAxis tick={{fontSize: 10}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="5 5" />
                {simulationPaths.map((path, i) => (
                  <Line 
                    key={i} 
                    data={path} 
                    type="monotone" 
                    dataKey="capital" 
                    stroke={i === 0 ? '#3b82f6' : '#94a3b8'} 
                    strokeWidth={i === 0 ? 3 : 1.5} 
                    strokeOpacity={i === 0 ? 1 : 0.4}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
          <Zap className="text-amber-500 shrink-0" size={18} />
          <div>
            <h5 className="text-[10px] font-black uppercase text-slate-800 tracking-wider">{t.ruin.claimsVol}</h5>
            <p className="text-[10px] text-slate-500 leading-tight">{t.ruin.claimsVolDesc}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
          <TrendingDown className="text-blue-500 shrink-0" size={18} />
          <div>
            <h5 className="text-[10px] font-black uppercase text-slate-800 tracking-wider">{t.ruin.safetyLoading}</h5>
            <p className="text-[10px] text-slate-500 leading-tight">{t.ruin.loadingDesc}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
          <Target className="text-emerald-500 shrink-0" size={18} />
          <div>
            <h5 className="text-[10px] font-black uppercase text-slate-800 tracking-wider">Target 0.05%</h5>
            <p className="text-[10px] text-slate-500 leading-tight">{t.ruin.targetDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
