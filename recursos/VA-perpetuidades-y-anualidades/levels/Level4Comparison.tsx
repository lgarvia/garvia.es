
import React, { useState, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import FinancialSlider from '../components/FinancialSlider';
import { LanguageContext } from '../App';

const Level4Comparison: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [c, setC] = useState(100);
  const [i, setI] = useState(10);
  const [n, setN] = useState(8);

  const rate = i / 100;
  
  const pvP1 = c / rate;
  const pvP2 = (c / rate) / Math.pow(1 + rate, n);
  const annuityPV = pvP1 - pvP2;

  const data = Array.from({ length: Math.max(20, n + 5) }, (_, index) => {
    const period = index + 1;
    return {
      period,
      p1: c,
      p2: period > n ? c : 0,
      annuity: period <= n ? c : 0
    };
  });

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="p-8 border-b border-slate-100 bg-slate-50/30">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">{t.comp.title}</h2>
          <p className="text-slate-600 mb-6">{t.comp.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <FinancialSlider label={t.comp.payment} value={c} min={1} max={1000} step={1} prefix="$" onChange={setC} />
             <FinancialSlider label={t.comp.rate} value={i} min={0.1} max={50} step={0.1} suffix="%" onChange={setI} />
             <FinancialSlider label={t.comp.cut} value={n} min={1} max={50} step={1} onChange={setN} />
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-end mb-2">
              <h4 className="font-bold text-emerald-600 text-sm uppercase">{t.comp.step1}</h4>
              <span className="text-xs font-mono bg-emerald-600 text-white px-3 py-1 rounded shadow-sm font-bold">
                PV = C/i = ${pvP1.toFixed(2)}
              </span>
            </div>
            <div className="h-24 bg-slate-50 rounded-lg p-2 border border-slate-200">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar dataKey="p1" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <h4 className="font-bold text-rose-600 text-sm uppercase">{t.comp.step2}</h4>
              <span className="text-xs font-mono bg-rose-600 text-white px-3 py-1 rounded shadow-sm font-bold">
                PV = (C/i) / (1+i)ⁿ = ${pvP2.toFixed(2)}
              </span>
            </div>
            <div className="h-24 bg-slate-50 rounded-lg p-2 border border-slate-200">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar dataKey="p2" fill="#f43f5e" />
                </BarChart>
              {/* Fixed: Replaced corrupted 挙Container with ResponsiveContainer */}
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <h4 className="font-bold text-blue-600 text-sm uppercase text-lg">{t.comp.step3}</h4>
              <span className="text-sm font-bold bg-blue-600 text-white px-3 py-1 rounded-full shadow-sm">
                ${annuityPV.toFixed(2)}
              </span>
            </div>
            <div className="h-24 bg-blue-50/50 rounded-lg p-2 border-2 border-dashed border-blue-200">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar dataKey="annuity" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-2xl flex flex-col justify-center">
          <h3 className="text-white text-xl font-bold mb-6 border-b border-slate-700 pb-4">{t.comp.analysisTitle}</h3>
          <div className="space-y-6 font-mono text-sm md:text-base">
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 w-24">PV_infinito</span>
              <span>=</span>
              <span className="text-white">C / i</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-rose-400 w-24">PV_cola</span>
              <span>=</span>
              <span className="text-white">(C / i) · (1 + i)⁻ⁿ</span>
            </div>
            <div className="h-px bg-slate-700 my-4"></div>
            <div className="flex flex-col gap-2">
              <div className="text-blue-400">PV_anualidad = PV_infinito - PV_cola</div>
              <div className="text-white pt-2">
                PV = <span className="text-emerald-400">(C / i)</span> - <span className="text-rose-400">(C / i) · (1 + i)⁻ⁿ</span>
              </div>
              <div className="text-white mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                PV = <span className="text-yellow-400 font-bold"> (C / i) · [ 1 - (1 + i)⁻ⁿ ] </span>
              </div>
            </div>
          </div>
          <p className="mt-8 text-slate-500 text-xs italic leading-relaxed">{t.comp.analysisNote}</p>
        </div>
      </div>
    </div>
  );
};

export default Level4Comparison;
