
import React from 'react';
import { BondParams } from '../types';
import { translations, Language } from '../translations';

interface CashFlowTimelineProps {
  params: BondParams;
  currentPrice: number;
  lang: Language;
}

const CashFlowTimeline: React.FC<CashFlowTimelineProps> = ({ params, currentPrice, lang }) => {
  const t = translations[lang];
  const r = params.marketInterestRate / 100;
  const C = (params.parValue * params.couponRate) / 100;
  
  const flows: Array<{period: number, payment: number, pv: number}> = [];
  for (let i = 1; i <= params.yearsToMaturity; i++) {
    const payment = i === params.yearsToMaturity ? C + params.parValue : C;
    const pv = payment / Math.pow(1 + r, i);
    flows.push({ period: i, payment, pv });
  }

  const maxCoupon = C || 1; 
  const couponVisualHeight = 100;
  const parLabelPosition = 230; 

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{t.timelineTitle}</h3>
          <p className="text-xs text-slate-500">{t.timelineSubtitle}</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-right group transition-all hover:bg-red-50 hover:border-red-100">
          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-tight group-hover:text-red-400">{t.initialInvestment}</span>
          <span className="text-xl font-black text-red-600">-${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>

      <div className="relative mt-12 mb-20 h-[280px]">
        {/* Eje Y (Estilizado y Roto) */}
        <div className="absolute left-20 top-0 bottom-0 w-px bg-slate-300 z-10">
          {/* Ticks inferiores (Cupones) */}
          {[0, 1].map((ratio) => (
            <div 
              key={ratio}
              className="absolute w-2 h-px bg-slate-400 -left-1 z-0"
              style={{ bottom: `${ratio * couponVisualHeight}px` }}
            >
              <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 w-14 text-right">
                ${(ratio * maxCoupon).toFixed(ratio === 0 ? 0 : 1)}
              </span>
            </div>
          ))}

          {/* Rotura del Eje Y */}
          {params.parValue > (C * 2) && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[140px] w-4 h-6 bg-white z-20 flex flex-col justify-center overflow-hidden">
                <div className="w-[200%] h-px bg-slate-300 -rotate-[20deg] -ml-2"></div>
                <div className="w-[200%] h-px bg-slate-300 -rotate-[20deg] -ml-2 mt-1"></div>
            </div>
          )}

          {/* Tick Superior (Valor Nominal) - Formato unificado con los demás labels */}
          <div 
            className="absolute w-2 h-px bg-slate-400 -left-1 z-10"
            style={{ bottom: `${parLabelPosition}px` }}
          >
            <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 w-14 text-right">
              ${params.parValue.toFixed(0)}
            </span>
          </div>

          {/* Punta de Flecha Eje Y - Ajustada para apuntar hacia arriba */}
          <div className="absolute -top-1 -left-[4px] w-2 h-2 border-t-2 border-l-2 border-slate-400 rotate-45"></div>
          
          {/* Label Vertical */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
            {t.axisValue}
          </div>
        </div>

        {/* Eje X */}
        <div className="absolute bottom-0 left-20 right-0 h-px bg-slate-400 z-10">
           <div className="absolute -right-1 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-400 rotate-45"></div>
           <div className="absolute right-0 top-6 text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
             {t.axisTime} <span className="text-slate-300">(T)</span>
           </div>
        </div>
        
        {/* Barras de Flujos */}
        <div className="absolute bottom-0 left-20 right-12 flex items-end justify-between h-full z-20">
          {flows.map((flow) => {
            const isLast = flow.period === params.yearsToMaturity;
            let barHeight;
            if (!isLast) {
                barHeight = C > 0 ? (flow.payment / maxCoupon) * couponVisualHeight : 0;
            } else {
                barHeight = 230; 
            }

            const pvRatio = flow.payment > 0 ? flow.pv / flow.payment : 0;
            
            return (
              <div key={flow.period} className="flex flex-col items-center flex-1 group relative h-full justify-end px-0.5 md:px-1">
                {/* Tooltip Detallado */}
                <div className="absolute -top-24 bg-slate-900/95 backdrop-blur-sm text-white text-[10px] p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-40 pointer-events-none text-center shadow-2xl border border-slate-700 -translate-y-2 group-hover:translate-y-0">
                  <div className="font-black text-blue-400 border-b border-slate-700 pb-1 mb-1">
                    {lang === 'es' ? 'AÑO' : 'YEAR'} {flow.period}
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="flex justify-between w-full gap-4">VN: <b>${flow.payment.toLocaleString()}</b></span>
                    <span className="flex justify-between w-full gap-4">VA: <b>${flow.pv.toLocaleString(undefined, {minimumFractionDigits: 2})}</b></span>
                  </div>
                </div>

                {/* Contenedor de la barra */}
                <div 
                  className={`w-6 sm:w-8 bg-blue-50/50 border-x border-t border-blue-200 relative transition-all duration-300 group-hover:bg-blue-100 group-hover:border-blue-400 ${isLast ? 'border-dashed border-t-2' : 'rounded-t-sm'}`}
                  style={{ height: `${barHeight}px` }}
                >
                  {/* Parte Descontada (VA) */}
                  <div 
                    className="absolute bottom-0 w-full bg-blue-600 transition-all duration-1000 ease-out shadow-[0_-2px_4px_rgba(37,99,235,0.2)]"
                    style={{ height: `${pvRatio * 100}%` }}
                  >
                     <div className="absolute top-0 left-0 right-0 h-px bg-blue-400/50"></div>
                  </div>

                  {/* Visual de Escala Partida (Zig-Zag) */}
                  {isLast && params.parValue > (C * 2) && (
                    <div className="absolute top-[45%] left-0 right-0 h-6 bg-white flex flex-col justify-center overflow-hidden z-30 border-y border-blue-100 shadow-sm">
                      <div className="w-[200%] h-px bg-blue-200 -rotate-[15deg] -ml-4"></div>
                      <div className="w-[200%] h-px bg-blue-200 -rotate-[15deg] -ml-4 mt-1.5"></div>
                    </div>
                  )}

                  {/* Label sobre la barra */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    ${flow.payment >= 100 ? flow.payment.toFixed(0) : flow.payment.toFixed(1)}
                  </div>
                </div>

                {/* Etiquetas Año (X) - Formato unificado para todos los años */}
                <div className="absolute -bottom-8 flex flex-col items-center">
                  <div className={`w-px h-1 bg-slate-300 mb-1`}></div>
                  <span className={`text-[10px] font-bold tracking-tight text-slate-500`}>
                    {flow.period}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leyenda Refinada */}
      <div className="mt-8 bg-slate-50 p-5 rounded-2xl border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.legendTitle}</h4>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-600 rounded shadow-sm"></div>
                <span className="text-xs text-slate-700 font-bold">{t.presentValue}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-50 border-2 border-blue-200 rounded shadow-sm"></div>
                <span className="text-xs text-slate-700 font-bold">{t.nominalValue}</span>
              </div>
            </div>
            {params.parValue > (C * 2) && (
              <div className="flex items-center gap-2 text-[10px] text-blue-500 font-black bg-blue-100/50 px-2 py-1 rounded-full w-fit">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t.brokenScaleNote}
              </div>
            )}
          </div>
          <div className="text-xs text-slate-500 italic leading-relaxed border-l-2 border-blue-100 pl-6 py-1">
            "{t.didacticNote}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFlowTimeline;
