
import React from 'react';
import { BondParams } from '../types';
import { translations, Language } from '../translations';

interface FormulaViewProps {
  params: BondParams;
  totalPrice: number;
  lang: Language;
}

const FormulaView: React.FC<FormulaViewProps> = ({ params, totalPrice, lang }) => {
  const t = translations[lang];
  const { parValue, couponRate, yearsToMaturity, marketInterestRate } = params;
  const r = marketInterestRate / 100;
  const C = (parValue * couponRate) / 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4">{t.formulaTitle}</h3>
      <div className="overflow-x-auto py-4">
        <div className="flex items-center space-x-2 text-xl font-serif text-slate-700 whitespace-nowrap">
          <span className="font-bold">P</span>
          <span>=</span>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(yearsToMaturity, 3) }).map((_, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center mx-2">
                    <span className="border-b border-slate-400 pb-1">{C}</span>
                    <span className="pt-1">(1 + {r})^{i + 1}</span>
                  </div>
                  {i < Math.min(yearsToMaturity, 3) - 1 && <span>+</span>}
                </React.Fragment>
              ))}
              {yearsToMaturity > 3 && <span className="mx-2 text-slate-400">... +</span>}
              <span>+</span>
              <div className="flex flex-col items-center mx-2">
                <span className="border-b border-slate-400 pb-1">{C} + {parValue}</span>
                <span className="pt-1">(1 + {r})^{yearsToMaturity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-900 font-medium">
          {t.formulaResult}: <span className="text-2xl font-bold">${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </p>
        <p className="text-xs text-blue-700 mt-1 italic">
          {t.formulaNote} ({marketInterestRate}%).
        </p>
      </div>
    </div>
  );
};

export default FormulaView;
