import React, { useState, useEffect } from 'react';
import { Controls } from './components/Controls';
import { OptionChart } from './components/OptionChart';
import { FormulaDisplay } from './components/FormulaDisplay';
import { BSParams, OptionType } from './types';
import { calculateGreeks } from './services/blackScholes';

const App: React.FC = () => {
  // Initial State
  const [params, setParams] = useState<BSParams>({
    S: 100,
    K: 100,
    T: 1,
    r: 0.05,
    sigma: 0.2
  });

  const [optionType, setOptionType] = useState<OptionType>(OptionType.Call);
  const [greeks, setGreeks] = useState<any>({});

  // Update Greeks when params change
  useEffect(() => {
    setGreeks(calculateGreeks(params, optionType));
  }, [params, optionType]);

  return (
    <div className="flex h-screen w-screen bg-slate-900 overflow-hidden">
      
      {/* Sidebar Controls (Left) */}
      <div className="w-80 flex-shrink-0 h-full shadow-2xl z-10">
        <Controls 
          params={params} 
          setParams={setParams} 
          optionType={optionType}
          setOptionType={setOptionType}
        />
      </div>

      {/* Main Content Area (Right) */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Bar / Header */}
        <header className="h-16 bg-slate-800/80 backdrop-blur-md border-b border-slate-700 flex items-center px-8 justify-between">
           <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${optionType === OptionType.Call ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
              <h1 className="text-lg font-bold text-slate-100">
                Modelo Black-Scholes <span className="opacity-50 mx-2">|</span> Simulador Educativo
              </h1>
           </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* Top Section: Chart and Greeks */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 min-h-[500px]">
             
             {/* Chart Container */}
             <div className="xl:col-span-3 bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
                <OptionChart params={params} type={optionType} />
             </div>

             {/* Greeks Panel */}
             <div className="xl:col-span-1 space-y-4">
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg h-full">
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                    Las Griegas (Sensibilidad)
                  </h3>
                  <div className="space-y-4">
                    <GreekRow label="Delta (Δ)" value={greeks.delta} format={(v) => v.toFixed(3)} desc="Cambio precio / Cambio activo" />
                    <GreekRow label="Gamma (Γ)" value={greeks.gamma} format={(v) => v.toFixed(3)} desc="Aceleración de Delta" />
                    <GreekRow label="Vega (ν)" value={greeks.vega} format={(v) => v.toFixed(3)} desc="Sensibilidad a volatilidad" />
                    <GreekRow label="Theta (Θ)" value={greeks.theta} format={(v) => v.toFixed(3)} desc="Decaimiento temporal (diario)" />
                    <GreekRow label="Rho (ρ)" value={greeks.rho} format={(v) => v.toFixed(3)} desc="Sensibilidad a tasa interés" />
                  </div>
                </div>
             </div>
          </div>

          {/* Bottom Section: Formula */}
          <div className="w-full">
            <FormulaDisplay type={optionType} params={params} />
          </div>

        </main>
      </div>
    </div>
  );
};

// Helper Component for Greeks
const GreekRow = ({ label, value, format, desc }: { label: string, value: number, format: (v: number) => string, desc: string }) => (
  <div className="group">
    <div className="flex justify-between items-end">
      <span className="text-slate-300 font-medium text-lg">{label}</span>
      <span className="text-slate-100 font-mono text-lg font-bold">{value ? format(value) : '-'}</span>
    </div>
    <p className="text-xs text-slate-500 mt-1 group-hover:text-slate-400 transition-colors">{desc}</p>
  </div>
);

export default App;