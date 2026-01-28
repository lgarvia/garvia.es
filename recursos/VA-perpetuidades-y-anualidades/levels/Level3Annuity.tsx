
import React, { useState, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import FinancialSlider from '../components/FinancialSlider';
import FormulaCard from '../components/FormulaCard';
import { LanguageContext } from '../App';

const Level3Annuity: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [c, setC] = useState(200);
  const [i, setI] = useState(8);
  const [n, setN] = useState(10);

  const rate = i / 100;
  const factor = (1 - Math.pow(1 + rate, -n)) / rate;
  const pvTotal = c * factor;

  // Show up to n + 2 periods to see "life after annuity"
  const totalPeriodsToDisplay = n + 2;
  const data = Array.from({ length: totalPeriodsToDisplay }, (_, index) => {
    const period = index + 1;
    const isWithinAnnuity = period <= n;
    const pv_contribution = isWithinAnnuity ? c / Math.pow(1 + rate, period) : 0;
    return {
      period,
      pv_contribution: pv_contribution,
      discount_gap: isWithinAnnuity ? c - pv_contribution : 0,
      payment: isWithinAnnuity ? c : 0,
    };
  });

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50/30">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">{t.annuity.title}</h2>
        <p className="text-slate-600 mb-8">{t.annuity.desc}</p>

        <FinancialSlider label={t.annuity.payment} value={c} min={1} max={5000} step={1} prefix="$" onChange={setC} />
        <FinancialSlider label={t.annuity.rate} value={i} min={0.1} max={50} step={0.1} suffix="%" onChange={setI} />
        <FinancialSlider label={t.annuity.duration} value={n} min={1} max={50} step={1} onChange={setN} />

        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="bg-indigo-600 text-white p-4 rounded-xl shadow-lg">
            <span className="text-sm opacity-80 uppercase font-bold">{t.annuity.result}</span>
            <div className="text-3xl font-black mt-1">${pvTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FormulaCard
            title={t.annuity.formulaTitle}
            formula={
              <span className="text-xl">
                PV = C · <span className="inline-block align-middle text-center">
                  <span className="block border-b border-slate-800 pb-1">1 - (1 + i)⁻ⁿ</span>
                  <span className="block pt-1">i</span>
                </span>
              </span>
            }
            description={t.annuity.formulaDesc}
          />
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">{t.annuity.obsTitle}</h3>
            <p className="text-sm text-slate-600 mb-4">{t.annuity.obsDesc}</p>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-indigo-600 rounded shadow-sm"></div>
                <span className="font-semibold text-slate-700">Flujo Futuro Nominal (C)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-indigo-100 border border-indigo-200 rounded shadow-sm"></div>
                <span className="text-slate-500">{t.annuity.legendDiscounted} (Suavizado)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[300px] md:min-h-[400px] bg-slate-50 rounded-xl border border-slate-100 p-2 md:p-4">
          <h3 className="text-center text-slate-400 font-semibold mb-4 uppercase text-[10px] md:text-xs tracking-widest">
            Flujos de la Anualidad (Fin en t={n})
          </h3>
          <div className="h-[250px] md:h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="period"
                  stroke="#94a3b8"
                  fontSize={10}
                  tickMargin={5}
                  interval={n > 20 ? (window.innerWidth < 640 ? 9 : 4) : 0}
                />
                <YAxis stroke="#94a3b8" fontSize={10} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(v: any) => `$${v.toFixed(2)}`}
                />
                <Bar dataKey="pv_contribution" fill="#e0e7ff" stackId="a" stroke="#c7d2fe" />
                <Bar dataKey="discount_gap" fill="#4f46e5" stackId="a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level3Annuity;
