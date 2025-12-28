import React, { useMemo } from 'react';
import { OptionType, BSParams } from '../types';
import { cumulativeDistribution } from '../services/blackScholes';

interface FormulaDisplayProps {
  type: OptionType;
  params: BSParams;
}

export const FormulaDisplay: React.FC<FormulaDisplayProps> = ({ type, params }) => {
  const isCall = type === OptionType.Call;
  const { S, K, T, r, sigma } = params;

  // Calculate intermediate values for display
  const values = useMemo(() => {
    if (T <= 0 || sigma === 0) return null;
    
    const d1 = (Math.log(S / K) + (r + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    const Nd1 = cumulativeDistribution(d1);
    const Nd2 = cumulativeDistribution(d2);
    const NnegD1 = cumulativeDistribution(-d1);
    const NnegD2 = cumulativeDistribution(-d2);
    const discountFactor = Math.exp(-r * T);

    return {
      d1, d2, Nd1, Nd2, NnegD1, NnegD2, discountFactor
    };
  }, [S, K, T, r, sigma]);

  if (!values) return null;

  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-sm overflow-x-auto">
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
        Desglose de la Fórmula ({isCall ? 'Call' : 'Put'})
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Symbolic & Numerical Formula */}
        <div className="space-y-8">
          
          {/* Symbolic Formula */}
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="text-xs text-slate-500 mb-2">Fórmula Teórica</h4>
            <div className="flex items-center space-x-2 text-xl md:text-2xl font-serif text-slate-100 justify-center">
              <span className="font-bold text-emerald-400 italic">C</span>
              <span>=</span>
              {isCall ? (
                <>
                  <span className="text-amber-300">S</span>
                  <span className="text-blue-400">N(d₁)</span>
                  <span>−</span>
                  <span className="text-pink-300">K</span>
                  <span className="text-slate-400">e<sup>−rT</sup></span>
                  <span className="text-purple-400">N(d₂)</span>
                </>
              ) : (
                <>
                  <span className="text-pink-300">K</span>
                  <span className="text-slate-400">e<sup>−rT</sup></span>
                  <span className="text-purple-400">N(−d₂)</span>
                  <span>−</span>
                  <span className="text-amber-300">S</span>
                  <span className="text-blue-400">N(−d₁)</span>
                </>
              )}
            </div>
          </div>

          {/* Numerical Substitution */}
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="text-xs text-slate-500 mb-2">Sustitución de Valores (Datos Actuales)</h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-lg md:text-xl font-mono text-slate-300">
               {isCall ? (
                 <>
                   <div className="flex flex-col items-center group relative">
                      <span className="text-amber-300">{S}</span>
                      <span className="text-[10px] text-slate-500 absolute -bottom-4">S</span>
                   </div>
                   <span>×</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-blue-400 font-bold border-b border-blue-400/30">{values.Nd1.toFixed(4)}</span>
                      <span className="text-[10px] text-blue-500 absolute -bottom-4">N(d₁)</span>
                   </div>
                   <span className="mx-1">−</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-pink-300">{K}</span>
                      <span className="text-[10px] text-slate-500 absolute -bottom-4">K</span>
                   </div>
                   <span>×</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-slate-400">{values.discountFactor.toFixed(4)}</span>
                      <span className="text-[10px] text-slate-500 absolute -bottom-4">e⁻ʳᵀ</span>
                   </div>
                   <span>×</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-purple-400">{values.Nd2.toFixed(4)}</span>
                      <span className="text-[10px] text-purple-500 absolute -bottom-4">N(d₂)</span>
                   </div>
                 </>
               ) : (
                 <>
                   <div className="flex flex-col items-center relative">
                      <span className="text-pink-300">{K}</span>
                   </div>
                   <span>×</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-slate-400">{values.discountFactor.toFixed(4)}</span>
                   </div>
                   <span>×</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-purple-400">{values.NnegD2.toFixed(4)}</span>
                      <span className="text-[10px] text-purple-500 absolute -bottom-4">N(-d₂)</span>
                   </div>
                   <span className="mx-1">−</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-amber-300">{S}</span>
                   </div>
                   <span>×</span>
                   <div className="flex flex-col items-center relative">
                      <span className="text-blue-400 font-bold border-b border-blue-400/30">{values.NnegD1.toFixed(4)}</span>
                      <span className="text-[10px] text-blue-500 absolute -bottom-4">N(-d₁)</span>
                   </div>
                 </>
               )}
            </div>
            
            <div className="mt-8 text-center text-sm text-slate-400">
               Resultado final: <span className={`font-bold ${isCall ? 'text-emerald-400' : 'text-red-400'}`}>${isCall 
                ? (S * values.Nd1 - K * values.discountFactor * values.Nd2).toFixed(2)
                : (K * values.discountFactor * values.NnegD2 - S * values.NnegD1).toFixed(2)
               }</span>
            </div>
          </div>
        </div>

        {/* Right Column: Educational Insights */}
        <div className="space-y-4">
          
          {/* Hedge Ratio Card */}
          <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
             <div className="flex justify-between items-start mb-2">
                <h4 className="text-blue-400 font-bold text-sm uppercase flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Hedge Ratio (Delta)
                </h4>
                <span className="text-2xl font-mono text-white font-bold">
                  {isCall ? values.Nd1.toFixed(3) : (values.Nd1 - 1).toFixed(3)}
                </span>
             </div>
             <p className="text-sm text-blue-200/80 mb-2">
               Representado por <span className="font-mono bg-blue-950 px-1 rounded">{isCall ? 'N(d₁)' : 'N(d₁) - 1'}</span>.
             </p>
             <p className="text-xs text-slate-400">
               Indica cuántas acciones necesitas comprar (o vender) para cubrir el riesgo de una opción. Si es 0.5, necesitas 0.5 acciones por cada opción para estar neutral (Delta Neutral). También se interpreta como la <strong>probabilidad aproximada</strong> de que la opción termine "in the money".
             </p>
          </div>

          {/* Terms Explanation */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <h5 className="text-xs font-bold text-purple-400 mb-1">N(d₂) / Probabilidad</h5>
                <p className="text-xs text-slate-400">
                  La probabilidad de que la opción se ejerza en un mundo neutral al riesgo.
                  Valor actual: <span className="text-white font-mono">{isCall ? values.Nd2.toFixed(3) : values.NnegD2.toFixed(3)}</span>
                </p>
             </div>
             <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <h5 className="text-xs font-bold text-slate-400 mb-1">Factor Descuento (e⁻ʳᵀ)</h5>
                <p className="text-xs text-slate-400">
                  Trae el precio de ejercicio (Strike) del futuro al valor presente.
                  Valor actual: <span className="text-white font-mono">{values.discountFactor.toFixed(3)}</span>
                </p>
             </div>
          </div>

          {/* Intermediate Calculations */}
          <div className="bg-slate-900/30 p-3 rounded-lg border border-slate-800 flex justify-between items-center text-xs font-mono text-slate-500">
             <span>d₁ = {values.d1.toFixed(4)}</span>
             <span>d₂ = {values.d2.toFixed(4)}</span>
          </div>

        </div>

      </div>
    </div>
  );
};