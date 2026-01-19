
import React, { useState, useMemo } from 'react';
import { BondParams } from './types';
import FormulaView from './components/FormulaView';
import PriceYieldChart from './components/PriceYieldChart';
import CashFlowTimeline from './components/CashFlowTimeline';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  const [params, setParams] = useState<BondParams>({
    parValue: 1000,
    couponRate: 5,
    yearsToMaturity: 10,
    marketInterestRate: 4,
  });

  const currentPrice = useMemo(() => {
    const r = params.marketInterestRate / 100;
    const C = (params.parValue * params.couponRate) / 100;
    let price = 0;
    if (r === 0) {
      return (C * params.yearsToMaturity) + params.parValue;
    }
    for (let i = 1; i <= params.yearsToMaturity; i++) {
      price += C / Math.pow(1 + r, i);
    }
    price += params.parValue / Math.pow(1 + r, params.yearsToMaturity);
    return price;
  }, [params]);

  const handleInputChange = (key: keyof BondParams, value: number) => {
    // Basic validation to prevent negative values where not applicable
    const safeValue = isNaN(value) ? 0 : Math.max(0, value);
    setParams(prev => ({ ...prev, [key]: safeValue }));
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto transition-colors duration-300">
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.title}</h1>
          <p className="text-slate-600">{t.subtitle}</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-white border-2 border-slate-200 rounded-lg px-4 py-2 text-sm font-bold text-slate-700 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer pr-10"
            >
              <option value="es">🇪🇸 Español</option>
              <option value="en">🇺🇸 English</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => handleInputChange('couponRate', 0)}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {t.zeroCoupon}
            </button>
            <button
              onClick={() => setParams({ parValue: 1000, couponRate: 5, yearsToMaturity: 10, marketInterestRate: 4 })}
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              {t.reset}
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2">{t.paramsTitle}</h2>

            <div className="space-y-6">
              {/* Par Value Buttons */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-3">
                  {t.parValue}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[100, 1000].map(val => (
                    <button
                      key={val}
                      onClick={() => handleInputChange('parValue', val)}
                      className={`py-2 rounded-lg border-2 font-black transition-all ${params.parValue === val
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                        }`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
              </div>

              {/* Coupon Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.couponRate}</label>
                  <div className="flex items-center space-x-1">
                    <input
                      type="number" step="0.1" min="0" max="100"
                      value={params.couponRate}
                      onChange={(e) => handleInputChange('couponRate', parseFloat(e.target.value))}
                      className="w-16 px-2 py-1 text-sm font-bold text-blue-600 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-right"
                    />
                    <span className="text-xs font-bold text-slate-400">%</span>
                  </div>
                </div>
                <input
                  type="range" min="0" max="20" step="0.1"
                  value={params.couponRate}
                  onChange={(e) => handleInputChange('couponRate', parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Maturity Years */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.maturity}</label>
                  <div className="flex items-center space-x-1">
                    <input
                      type="number" step="1" min="1" max="100"
                      value={params.yearsToMaturity}
                      onChange={(e) => handleInputChange('yearsToMaturity', parseInt(e.target.value))}
                      className="w-16 px-2 py-1 text-sm font-bold text-blue-600 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-right"
                    />
                    <span className="text-xs font-bold text-slate-400">{t.years.substring(0, 1).toLowerCase()}</span>
                  </div>
                </div>
                <input
                  type="range" min="1" max="30" step="1"
                  value={params.yearsToMaturity}
                  onChange={(e) => handleInputChange('yearsToMaturity', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Yield to Maturity */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-900 uppercase">{t.marketRate}</label>
                  <div className="flex items-center space-x-1">
                    <input
                      type="number" step="0.1" min="0" max="100"
                      value={params.marketInterestRate}
                      onChange={(e) => handleInputChange('marketInterestRate', parseFloat(e.target.value))}
                      className="w-16 px-2 py-1 text-sm font-bold text-emerald-600 border-2 border-emerald-100 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    />
                    <span className="text-xs font-bold text-emerald-500">%</span>
                  </div>
                </div>
                <input
                  type="range" min="0" max="20" step="0.1"
                  value={params.marketInterestRate}
                  onChange={(e) => handleInputChange('marketInterestRate', parseFloat(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                />
                <p className="text-[10px] text-slate-400 mt-2 italic">{t.marketRateHint}</p>
              </div>
            </div>
          </div>

          <FormulaView params={params} totalPrice={currentPrice} lang={lang} />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t.statusTitle}</span>
              <div className={`text-2xl font-black mt-2 ${currentPrice > params.parValue ? 'text-emerald-600' : currentPrice < (params.parValue - 0.01) ? 'text-red-600' : 'text-slate-500'}`}>
                {currentPrice > params.parValue ? t.atPremium : currentPrice < (params.parValue - 0.01) ? t.atDiscount : t.atPar}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center border-l-4 border-l-blue-500">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t.fairPrice}</span>
              <div className="text-3xl font-black mt-2 text-slate-800">
                ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          <CashFlowTimeline params={params} currentPrice={currentPrice} lang={lang} />
          <PriceYieldChart params={params} currentPrice={currentPrice} lang={lang} />
        </div>
      </div>

      <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-medium tracking-tight uppercase pb-12">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;
