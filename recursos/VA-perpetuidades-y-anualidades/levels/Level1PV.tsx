
import React, { useState, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import FinancialSlider from '../components/FinancialSlider';
import FormulaCard from '../components/FormulaCard';
import { LanguageContext } from '../App';

const Level1PV: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [fv, setFv] = useState(1000);
  const [i, setI] = useState(10);
  const [n, setN] = useState(5);

  const rate = i / 100;
  const pv = fv / Math.pow(1 + rate, n);

  const data = Array.from({ length: n + 1 }, (_, index) => ({
    period: index,
    value: index === n ? fv : index === 0 ? pv : 0,
  }));

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50/30">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">{t.pv.title}</h2>
        <p className="text-slate-600 mb-8">{t.pv.desc}</p>

        <FinancialSlider label={t.pv.fv} value={fv} min={1} max={10000} step={1} prefix="$" onChange={setFv} />
        <FinancialSlider label={t.pv.rate} value={i} min={0.1} max={100} step={0.1} suffix="%" onChange={setI} />
        <FinancialSlider label={t.pv.periods} value={n} min={1} max={100} step={1} onChange={setN} />

        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg">
            <span className="text-sm opacity-80 uppercase font-bold">{t.pv.result}</span>
            <div className="text-3xl font-black mt-1">${pv.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FormulaCard
            title={t.pv.formulaTitle}
            formula={
              <span>
                PV = <span className="inline-block align-middle text-center">
                  <span className="block border-b border-slate-800 pb-1">FV</span>
                  <span className="block pt-1">(1 + i)ⁿ</span>
                </span>
              </span>
            }
            description={t.pv.formulaDesc}
          />
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">{t.pv.analysisTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {t.pv.analysisItems.map((item, idx) => <li key={idx}>• {item}</li>)}
            </ul>
          </div>
        </div>

        <div className="flex-1 min-h-[300px] md:min-h-[400px] bg-slate-50 rounded-xl border border-slate-100 p-2 md:p-4">
          <h3 className="text-center text-slate-400 font-semibold mb-4 uppercase text-[10px] md:text-xs tracking-widest">{t.pv.chartTitle}</h3>
          <div className="h-[250px] md:h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="period" fontSize={10} tickMargin={5} stroke="#94a3b8" />
                <YAxis fontSize={10} stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => `$${value.toFixed(2)}`}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.period === 0 ? '#2563eb' : entry.period === n ? '#94a3b8' : 'transparent'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1PV;
