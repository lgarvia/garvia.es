
import React, { useState, useContext } from 'react';
import { Users, ShieldCheck, Activity } from 'lucide-react';
import { LanguageContext } from '../App';

export const LawOfLargeNumbers: React.FC = () => {
  const context = useContext(LanguageContext);
  const [population, setPopulation] = useState<number>(500);
  const [deaths, setDeaths] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);

  if (!context) return null;
  const { t } = context;

  const simulate = () => {
    setIsRunning(true);
    let count = 0;
    const mortalityProb = 0.05;
    for (let i = 0; i < population; i++) {
      if (Math.random() < mortalityProb) count++;
    }
    setTimeout(() => {
      setDeaths(count);
      setIsRunning(false);
    }, 600);
  };

  const expectedDeaths = population * 0.05;
  const deviation = population > 0 ? Math.abs(deaths - expectedDeaths) / expectedDeaths * 100 : 0;

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-xl sm:text-2xl font-black mb-6 text-slate-800 tracking-tight">{t.lgn.title}</h3>
      <p className="text-slate-600 mb-8 text-sm leading-relaxed">{t.lgn.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-bold uppercase text-slate-500">{t.lgn.portfolio}</label>
              <span className="text-sm font-black text-emerald-600">{population.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="10" max="5000" step="10" value={population} 
              onChange={(e) => setPopulation(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>
          
          <button 
            onClick={simulate}
            disabled={isRunning}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-4 rounded-xl transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isRunning ? <Activity className="animate-spin" size={20}/> : <ShieldCheck size={20}/>}
            <span className="uppercase tracking-widest text-xs">{t.lgn.button}</span>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-5 rounded-xl text-center border border-emerald-100">
              <p className="text-[10px] text-emerald-600 font-black uppercase tracking-wider mb-1">{t.lgn.realClaims}</p>
              <p className="text-3xl font-black text-emerald-800 leading-none">{deaths}</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl text-center border border-slate-100">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider mb-1">{t.lgn.deviation}</p>
              <p className="text-3xl font-black text-slate-700 leading-none">{isRunning ? '...' : `${deviation.toFixed(1)}%`}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600">
              <Users size={24}/>
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight">{t.lgn.pooling}</h4>
              <p className="text-xs text-slate-500 italic mt-0.5">"{t.lgn.poolingQuote}"</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {t.lgn.poolingDesc}
          </p>
        </div>
      </div>
    </div>
  );
};
