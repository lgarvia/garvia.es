
import React, { useState, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FinancialSlider from '../components/FinancialSlider';
import FormulaCard from '../components/FormulaCard';
import { LanguageContext } from '../App';

const Level2Perpetuity: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [c, setC] = useState(100);
  const [i, setI] = useState(5);
  const [vizN, setVizN] = useState(50);

  const rate = i / 100;
  const pvTotal = c / rate;

  const data = Array.from({ length: vizN }, (_, index) => {
    const period = index + 1;
    const pv_contribution = c / Math.pow(1 + rate, period);
    return {
      period,
      pv_contribution: pv_contribution,
      discount_gap: c - pv_contribution, // The 'Future' part of the flow
    };
  });

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50/30">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">{t.perp.title}</h2>
        <p className="text-slate-600 mb-8">{t.perp.desc}</p>

        <FinancialSlider label={t.perp.payment} value={c} min={1} max={5000} step={1} prefix="$" onChange={setC} />
        <FinancialSlider label={t.perp.rate} value={i} min={0.1} max={50} step={0.1} suffix="%" onChange={setI} />
        <FinancialSlider label={t.perp.vizPeriods} value={vizN} min={10} max={200} step={1} onChange={setVizN} />

        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="bg-emerald-600 text-white p-4 rounded-xl shadow-lg">
            <span className="text-sm opacity-80 uppercase font-bold">{t.perp.result}</span>
            <div className="text-3xl font-black mt-1">${pvTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>
          <p className="mt-4 text-xs text-slate-500 italic">{t.perp.note}</p>
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FormulaCard
            title={t.perp.formulaTitle}
            formula={
              <span>
                PV = <span className="inline-block align-middle text-center">
                  <span className="block border-b border-slate-800 pb-1">C</span>
                  <span className="block pt-1">i</span>
                </span>
              </span>
            }
            description={t.perp.formulaDesc}
          />
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">{t.perp.effectTitle}</h3>
            <p className="text-sm text-slate-600 mb-4">{t.perp.effectDesc}</p>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 rounded shadow-sm"></div>
                <span className="font-semibold text-slate-700">Flujo Futuro Nominal (C)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-100 border border-emerald-200 rounded shadow-sm"></div>
                <span className="text-slate-500">{t.perp.legendPV} (Suavizado)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[300px] md:min-h-[400px] bg-slate-50 rounded-xl border border-slate-100 p-2 md:p-4">
          <h3 className="text-center text-slate-400 font-semibold mb-4 uppercase text-[10px] md:text-xs tracking-widest">{t.perp.chartTitle} ({vizN})</h3>
          <div className="h-[250px] md:h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="period"
                  stroke="#94a3b8"
                  fontSize={10}
                  tickMargin={5}
                  interval={vizN > 50 ? (window.innerWidth < 640 ? 49 : 19) : (window.innerWidth < 640 ? 24 : 9)}
                />
                <YAxis stroke="#94a3b8" fontSize={10} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number, name: string) => {
                    if (name === "pv_contribution") return [`$${value.toFixed(2)}`, t.perp.legendPV];
                    if (name === "discount_gap") return [`$${value.toFixed(2)}`, "Valor temporal"];
                    return [`$${value.toFixed(2)}`, name];
                  }}
                />
                <Bar dataKey="pv_contribution" fill="#d1fae5" stackId="a" radius={[0, 0, 0, 0]} stroke="#a7f3d0" />
                <Bar dataKey="discount_gap" fill="#059669" stackId="a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level2Perpetuity;
