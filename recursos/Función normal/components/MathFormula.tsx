
import React from 'react';

interface MathFormulaProps {
  label: string;
  formula: React.ReactNode;
}

const MathFormula: React.FC<MathFormulaProps> = ({ label, formula }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
      <h4 className="text-[9px] font-black text-indigo-400 mb-4 uppercase tracking-[0.2em]">{label}</h4>
      <div className="text-xl math-font text-slate-900 w-full flex items-center justify-center select-none overflow-hidden">
        {formula}
      </div>
    </div>
  );
};

export const PDFFormula = () => (
  <MathFormula 
    label="PDF - Densidad"
    formula={
      <div className="flex items-center scale-90">
        <span className="mr-1 italic text-sm">f(x)=</span>
        <div className="flex flex-col items-center">
          <span className="border-b border-slate-900 px-1 text-xs">1</span>
          <span className="pt-0.5 px-1 text-[10px]">&sigma;&radic;2&pi;</span>
        </div>
        <span className="mx-1 italic text-sm">e</span>
        <div className="relative -top-3 -ml-1 scale-75">
           <span className="flex items-center text-[10px]">
             <span className="mr-0.5">-&frac12;</span>
             <span>(</span>
             <div className="flex flex-col items-center mx-0.5">
               <span className="border-b border-slate-800">x-&mu;</span>
               <span>&sigma;</span>
             </div>
             <span>)</span>
             <sup className="ml-0.5 font-bold">2</sup>
           </span>
        </div>
      </div>
    }
  />
);

export const CDFFormula = () => (
  <MathFormula 
    label="CDF - Acumulada"
    formula={
      <div className="flex items-center scale-90">
        <span className="mr-1 italic text-sm">F(x)=</span>
        <div className="flex flex-col items-center">
          <span className="border-b border-slate-900 px-1 text-xs">1</span>
          <span className="pt-0.5 px-1 text-xs">2</span>
        </div>
        <span className="mx-0.5 text-xl font-light">[</span>
        <span className="text-[10px]">1+erf(</span>
        <div className="flex flex-col items-center mx-0.5 scale-90">
          <span className="border-b border-slate-800 text-[10px]">x-&mu;</span>
          <span className="text-[10px]">&sigma;&radic;2</span>
        </div>
        <span className="text-[10px]">)</span>
        <span className="mx-0.5 text-xl font-light">]</span>
      </div>
    }
  />
);
