
import React, { useState, useMemo, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MORTALITY_TABLE } from '../constants/mortalityData';
import { SimulationResult } from '../types';
import { LanguageContext } from '../App';

export const AnnuitySimulator: React.FC = () => {
  const context = useContext(LanguageContext);
  const [age, setAge] = useState<number>(65);
  const [interest, setInterest] = useState<number>(4);
  const [amount, setAmount] = useState<number>(1000);

  if (!context) return null;
  const { t } = context;

  const simulationData = useMemo((): SimulationResult[] => {
    const results: SimulationResult[] = [];
    const i = interest / 100;
    const v = 1 / (1 + i);
    const startLx = MORTALITY_TABLE.find(r => r.age === age)?.lx || 1;

    for (let t_idx = 0; t_idx <= 25; t_idx++) {
      const currentAge = age + t_idx;
      if (currentAge > 100) break;
      const currentLx = MORTALITY_TABLE.find(r => r.age === currentAge)?.lx || 0;
      const tpx = currentLx / startLx;
      const vt = Math.pow(v, t_idx);
      results.push({
        year: t_idx,
        survivalProb: Number(tpx.toFixed(4)),
        presentValueFactor: Number(vt.toFixed(4)),
        actuarialPV: Number((amount * vt * tpx).toFixed(2)),
        fixedPV: Number((amount * vt).toFixed(2)),
      });
    }
    return results;
  }, [age, interest, amount]);

  const actuarialPresentValue = useMemo(() => 
    simulationData.reduce((acc, curr) => acc + curr.actuarialPV, 0), 
  [simulationData]);

  const certainPresentValue = useMemo(() => 
    simulationData.reduce((acc, curr) => acc + curr.fixedPV, 0), 
  [simulationData]);

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-xl sm:text-2xl font-black mb-6 text-slate-800 tracking-tight">{t.annuity.title}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-4 space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-slate-700">{t.annuity.age}</label>
              <span className="text-sm font-black text-blue-600">{age}</span>
            </div>
            <input 
              type="range" min="20" max="90" value={age} 
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-slate-700">{t.annuity.interest}</label>
              <span className="text-sm font-black text-blue-600">{interest}%</span>
            </div>
            <input 
              type="range" min="0" max="15" value={interest} 
              onChange={(e) => setInterest(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 text-center sm:text-left">
            <h4 className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">{t.annuity.apv}</h4>
            <p className="text-3xl font-black text-blue-700 leading-none mb-2">
              ${actuarialPresentValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-[10px] text-blue-600 font-bold italic">
              {t.annuity.fixed}: ${certainPresentValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="h-[250px] sm:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={simulationData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" tick={{fontSize: 10}} />
                <YAxis tick={{fontSize: 10}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 'bold' }} />
                <Bar dataKey="fixedPV" name={t.annuity.labelFinancial} fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="actuarialPV" name={t.annuity.labelActuarial} fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
        <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider mb-2">{t.annuity.conceptTitle}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{t.annuity.conceptDesc}</p>
      </div>
    </div>
  );
};
