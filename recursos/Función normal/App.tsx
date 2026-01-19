
import React, { useState, useMemo } from 'react';
import { 
  Globe, 
  Settings, 
  BookOpen, 
  Sigma, 
  Target, 
  MousePointer2,
  ChevronRight
} from 'lucide-react';
import { Language, DistributionParams } from './types';
import { TRANSLATIONS } from './constants';
import { calculateCDF } from './utils/mathUtils';
import NormalDistributionCharts from './components/NormalDistributionCharts';
import { PDFFormula, CDFFormula } from './components/MathFormula';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [params, setParams] = useState<DistributionParams>({ mean: 0, stdDev: 1 });
  const [selectedX, setSelectedX] = useState<number | null>(0);
  const [intervalLevel, setIntervalLevel] = useState<number>(0);

  const t = TRANSLATIONS[lang];

  const currentProb = useMemo(() => {
    if (selectedX === null) return 0;
    return calculateCDF(selectedX, params.mean, params.stdDev);
  }, [selectedX, params]);

  const toggleLanguage = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  const handleParamChange = (field: keyof DistributionParams, value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      let finalValue = num;
      if (field === 'stdDev') finalValue = Math.max(0.1, Math.min(10, num));
      if (field === 'mean') finalValue = Math.max(-20, Math.min(20, num));
      setParams(prev => ({ ...prev, [field]: finalValue }));
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 lg:overflow-hidden text-slate-900 overflow-y-auto">
      {/* Navbar */}
      <nav className="h-14 bg-white border-b border-slate-200 px-6 flex justify-between items-center flex-shrink-0 shadow-sm z-20 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white shadow-indigo-100 shadow-lg">
            <Sigma size={18} strokeWidth={2.5} />
          </div>
          <h1 className="text-base font-black text-slate-900 tracking-tight">{t.title}</h1>
        </div>
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 transition-all px-4 py-1.5 rounded-full text-[10px] font-bold text-slate-700 active:scale-95"
        >
          <Globe size={14} />
          {lang === 'es' ? 'English' : 'Español'}
        </button>
      </nav>

      {/* Dashboard Layout: Column on mobile, Row on desktop */}
      <main className="flex-1 flex flex-col lg:flex-row p-4 gap-4 lg:overflow-hidden min-h-0">
        
        {/* Left Column: Parameters & Intervals */}
        <aside className="w-full lg:w-72 flex flex-col gap-4 overflow-y-auto lg:pr-1 flex-shrink-0">
          {/* Parameters Panel */}
          <section className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
              <Settings size={14} className="text-indigo-600" />
              <h2 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{t.controls}</h2>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  <span>{t.mean}</span>
                  <input 
                    type="number" 
                    step="0.1" 
                    value={params.mean} 
                    onChange={(e) => handleParamChange('mean', e.target.value)} 
                    className="w-14 bg-slate-100 border-0 text-indigo-700 font-mono font-bold px-1.5 py-1 rounded-lg text-right outline-none focus:ring-2 focus:ring-indigo-500" 
                  />
                </div>
                <input 
                  type="range" 
                  min="-10" max="10" step="0.1" 
                  value={params.mean} 
                  onChange={(e) => handleParamChange('mean', e.target.value)} 
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  <span>{t.stdDev}</span>
                  <input 
                    type="number" 
                    step="0.1" 
                    value={params.stdDev} 
                    onChange={(e) => handleParamChange('stdDev', e.target.value)} 
                    className="w-14 bg-slate-100 border-0 text-indigo-700 font-mono font-bold px-1.5 py-1 rounded-lg text-right outline-none focus:ring-2 focus:ring-indigo-500" 
                  />
                </div>
                <input 
                  type="range" 
                  min="0.1" max="5" step="0.1" 
                  value={params.stdDev} 
                  onChange={(e) => handleParamChange('stdDev', e.target.value)} 
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                />
              </div>
            </div>
          </section>

          {/* Intervals Panel */}
          <section className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Target size={12} className="text-emerald-500" />
              <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{t.intervals}</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[0, 1, 2, 3].map(level => (
                <button
                  key={level}
                  onClick={() => setIntervalLevel(level)}
                  className={`px-4 py-2.5 rounded-xl border text-[11px] font-bold transition-all text-left flex items-center justify-between group ${
                    intervalLevel === level 
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100 translate-x-1' 
                    : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {level === 0 ? (lang === 'es' ? 'Desactivar Sombreado' : 'Disable Shading') : t[`interval${level}` as keyof typeof t]}
                  <ChevronRight size={12} className={`transition-transform ${intervalLevel === level ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          </section>
        </aside>

        {/* Center Column: Charts (Primary Area) */}
        <section className="flex-1 min-w-0 flex flex-col gap-4 lg:overflow-hidden min-h-[600px] lg:min-h-0">
          <NormalDistributionCharts 
            params={params} 
            selectedX={selectedX} 
            onXChange={setSelectedX}
            intervalLevel={intervalLevel}
          />
        </section>

        {/* Right Column: Data & Formulas */}
        <aside className="w-full lg:w-80 flex flex-col gap-4 overflow-y-auto lg:pl-1 flex-shrink-0">
          {/* Selected Interaction Card */}
          <section className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl shrink-0">
            <div className="flex items-center gap-2 mb-4 opacity-40 uppercase tracking-widest text-[9px] font-black">
              <MousePointer2 size={12} />
              Cursor en tiempo real
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em]">{t.currentValue}</p>
                <p className="text-3xl font-mono font-bold tracking-tighter text-white">{selectedX?.toFixed(2)}</p>
              </div>
              <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/10 flex justify-between items-center">
                <p className="text-emerald-300 text-[10px] font-bold uppercase tracking-[0.15em]">P(X ≤ x)</p>
                <p className="text-3xl font-mono font-bold text-emerald-400 tracking-tighter">{(currentProb * 100).toFixed(1)}%</p>
              </div>
            </div>
          </section>

          {/* Formulas Panel */}
          <div className="flex flex-col gap-4 flex-1">
             <PDFFormula />
             <CDFFormula />
             
             {/* Info Card - Moved here for better mobile visibility */}
             <section className="bg-indigo-50 border border-indigo-100 p-6 rounded-[2rem]">
              <div className="flex items-center gap-2 mb-3 text-indigo-700">
                <BookOpen size={14} />
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Guía Rápida</h3>
              </div>
              <p className="text-[11px] text-indigo-900 leading-relaxed font-medium">
                {t.explanation} Las gráficas están centradas en la media y muestran un rango de ±3.5σ.
              </p>
            </section>

             <div className="py-8 text-center mt-auto">
               <div className="flex items-center justify-center gap-2 mb-2">
                 <Sigma size={14} className="text-slate-300" />
                 <span className="text-[10px] font-black text-slate-300 tracking-[0.5em] uppercase">NormalDist Pro</span>
               </div>
               <p className="text-[9px] font-bold text-slate-300 uppercase">Interactive Educational Resource &bull; 2024</p>
             </div>
          </div>
        </aside>

      </main>
    </div>
  );
};

export default App;
