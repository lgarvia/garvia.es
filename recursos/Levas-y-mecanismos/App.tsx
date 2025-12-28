import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CamParams, MotionProfile, ChartDataPoint, AppMode, CrankParams } from './types';
import MotionCharts from './components/MotionCharts';
import CamVisualizer from './components/CamVisualizer';
import EngineVisualizer from './components/EngineVisualizer';
import CrankVisualizer from './components/CrankVisualizer';
import WankelVisualizer from './components/WankelVisualizer';
import FormulaSheet from './components/FormulaSheet';
import { explainCamProfile, generateQuizQuestion } from './services/geminiService';

const App: React.FC = () => {
  // --- Global State ---
  const [mode, setMode] = useState<AppMode>(AppMode.CAM_DESIGN);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentAngle, setCurrentAngle] = useState(0); 

  // --- AI State ---
  const [aiExplanation, setAiExplanation] = useState<string>("");
  const [quizText, setQuizText] = useState<string>("");
  const [loadingAI, setLoadingAI] = useState(false);

  // --- Cam Mode State ---
  const [camParams, setCamParams] = useState<CamParams>({
    baseRadius: 40,
    lift: 20,
    rpm: 60,
    profile: MotionProfile.SHM,
    riseAngle: 90,
    fallAngle: 90,
    dwell1: 90, 
  });

  // --- Crank Mode State ---
  const [crankParams, setCrankParams] = useState<CrankParams>({
    crankRadius: 50,
    rodLength: 150,
    rpm: 60
  });

  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>();

  // --- Data Calculations ---
  
  // 1. Cam Data
  const camData = useMemo(() => {
    if (mode !== AppMode.CAM_DESIGN) return [];
    
    const points: ChartDataPoint[] = [];
    const { lift, riseAngle, dwell1, fallAngle, rpm, profile } = camParams;
    const endRise = riseAngle;
    const endDwell1 = endRise + dwell1;
    const endFall = endDwell1 + fallAngle;
    const omega = (rpm * 2 * Math.PI) / 60; 

    for (let angle = 0; angle < 360; angle++) {
      let disp = 0, vel = 0, accel = 0;
      const thetaRad = angle * (Math.PI / 180);

      if (angle < endRise) {
        const thetaLocal = angle * (Math.PI / 180);
        const beta = riseAngle * (Math.PI / 180);
        if (profile === MotionProfile.SHM) {
          disp = (lift / 2) * (1 - Math.cos((Math.PI * thetaLocal) / beta));
          vel = ((Math.PI * lift * omega) / (2 * beta)) * Math.sin((Math.PI * thetaLocal) / beta);
          accel = ((Math.PI * Math.PI * lift * omega * omega) / (2 * beta * beta)) * Math.cos((Math.PI * thetaLocal) / beta);
        } else if (profile === MotionProfile.UNIFORM) {
          disp = lift * (thetaLocal / beta);
          vel = (lift * omega) / beta;
        } else if (profile === MotionProfile.CYCLOIDAL) {
          disp = lift * ((thetaLocal / beta) - (1 / (2 * Math.PI)) * Math.sin((2 * Math.PI * thetaLocal) / beta));
          vel = (lift * omega) / beta * (1 - Math.cos((2 * Math.PI * thetaLocal) / beta));
          accel = ((2 * Math.PI * lift * omega * omega) / (beta * beta)) * Math.sin((2 * Math.PI * thetaLocal) / beta);
        }
      } else if (angle < endDwell1) {
        disp = lift;
      } else if (angle < endFall) {
        const angleInSector = angle - endDwell1;
        const thetaLocal = angleInSector * (Math.PI / 180);
        const beta = fallAngle * (Math.PI / 180);
        if (profile === MotionProfile.SHM) {
          disp = (lift / 2) * (1 + Math.cos((Math.PI * thetaLocal) / beta));
          vel = -((Math.PI * lift * omega) / (2 * beta)) * Math.sin((Math.PI * thetaLocal) / beta);
          accel = -((Math.PI * Math.PI * lift * omega * omega) / (2 * beta * beta)) * Math.cos((Math.PI * thetaLocal) / beta);
        } else if (profile === MotionProfile.UNIFORM) {
          disp = lift * (1 - thetaLocal / beta);
          vel = -(lift * omega) / beta;
        } else if (profile === MotionProfile.CYCLOIDAL) {
          disp = lift * (1 - (thetaLocal/beta) + (1/(2*Math.PI))*Math.sin(2*Math.PI*thetaLocal/beta));
          vel = -(lift * omega) / beta * (1 - Math.cos(2*Math.PI*thetaLocal/beta));
          accel = -((2 * Math.PI * lift * omega * omega) / (beta * beta)) * Math.sin((2 * Math.PI * thetaLocal) / beta);
        }
      } else {
        disp = 0;
      }
      points.push({ angle, displacement: disp, velocity: vel, acceleration: accel });
    }
    return points;
  }, [camParams, mode]);

  // 2. Crank Slider Data
  const crankData = useMemo(() => {
    if (mode !== AppMode.CRANK_SLIDER) return [];
    const points: ChartDataPoint[] = [];
    const { crankRadius: r, rodLength: l, rpm } = crankParams;
    const omega = (rpm * 2 * Math.PI) / 60;

    for (let angle = 0; angle < 360; angle++) {
      const theta = (angle * Math.PI) / 180;
      
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      const sqrtTerm = Math.sqrt(l*l - r*r*sinTheta*sinTheta);
      const disp = r * cosTheta + sqrtTerm;

      const vel = -r * omega * (sinTheta + (r * Math.sin(2*theta))/(2*l));
      const accel = -r * omega * omega * (cosTheta + (r * Math.cos(2*theta))/l);

      points.push({ angle, displacement: disp, velocity: vel, acceleration: accel });
    }
    return points;
  }, [crankParams, mode]);


  // --- Animation Loop ---
  const animate = (time: number) => {
    if (lastTimeRef.current !== undefined) {
      const deltaTime = time - lastTimeRef.current;
      
      const currentRPM = mode === AppMode.CRANK_SLIDER ? crankParams.rpm : camParams.rpm;
      const degPerSec = currentRPM * 6; 
      
      const deltaAngle = (deltaTime / 1000) * degPerSec;
      
      // Determine Max Angle based on Mode
      let maxAngle = 360;
      if (mode === AppMode.FOUR_STROKE) maxAngle = 720;
      if (mode === AppMode.WANKEL) maxAngle = 1080; // 3 turns of shaft = 1 turn of rotor (1 cycle face)
      
      setCurrentAngle(prev => (prev + deltaAngle) % maxAngle);
    }
    lastTimeRef.current = time;
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      lastTimeRef.current = undefined;
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, camParams.rpm, crankParams.rpm, mode]);


  // --- Handlers ---
  const updateCamParam = (key: keyof CamParams, value: any) => setCamParams(p => ({ ...p, [key]: value }));
  const updateCrankParam = (key: keyof CrankParams, value: any) => setCrankParams(p => ({ ...p, [key]: value }));

  const handleAskAI = async () => {
    setLoadingAI(true);
    setAiExplanation("Generando análisis...");
    const text = await explainCamProfile(camParams);
    setAiExplanation(text);
    setLoadingAI(false);
  };
  
  const handleQuiz = async () => {
    setLoadingAI(true);
    setQuizText("Generando pregunta...");
    const text = await generateQuizQuestion();
    setQuizText(text);
    setLoadingAI(false);
  }

  const jumpToCycle = (angle: number) => {
    setIsPlaying(false);
    setCurrentAngle(angle);
  };

  const activeData = mode === AppMode.CRANK_SLIDER ? crankData : camData;

  return (
    <div className="min-h-screen bg-engineering-blue text-slate-100 font-sans flex flex-col">
      
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 p-4 flex flex-col xl:flex-row justify-between items-center shadow-md z-10 gap-4">
        <div className="flex items-center gap-4 w-full xl:w-auto overflow-x-auto">
          <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
             <h1 className="text-2xl font-bold text-accent tracking-wider uppercase">CamLearn</h1>
          </div>
          <nav className="flex bg-slate-800 rounded-lg p-1 overflow-x-auto">
            <button 
              onClick={() => { setMode(AppMode.CAM_DESIGN); setCurrentAngle(0); }}
              className={`whitespace-nowrap px-3 py-2 text-sm font-semibold rounded-md transition-all ${mode === AppMode.CAM_DESIGN ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              1. Leva
            </button>
            <button 
              onClick={() => { setMode(AppMode.CRANK_SLIDER); setCurrentAngle(0); }}
              className={`whitespace-nowrap px-3 py-2 text-sm font-semibold rounded-md transition-all ${mode === AppMode.CRANK_SLIDER ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              2. Biela-Manivela
            </button>
            <button 
              onClick={() => { setMode(AppMode.FOUR_STROKE); setCurrentAngle(0); }}
              className={`whitespace-nowrap px-3 py-2 text-sm font-semibold rounded-md transition-all ${mode === AppMode.FOUR_STROKE ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              3. Motor 4T
            </button>
            <button 
              onClick={() => { setMode(AppMode.WANKEL); setCurrentAngle(0); }}
              className={`whitespace-nowrap px-3 py-2 text-sm font-semibold rounded-md transition-all ${mode === AppMode.WANKEL ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              4. Wankel
            </button>
          </nav>
        </div>
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex-shrink-0 px-6 py-2 rounded font-bold transition-colors shadow-lg ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
        >
          {isPlaying ? 'PAUSAR' : 'ANIMAR'}
        </button>
      </header>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6 overflow-hidden">
        
        {/* LEFT COLUMN: Controls */}
        <section className="lg:col-span-3 flex flex-col gap-6 h-full overflow-y-auto pr-2">
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-slate-600 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.532 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
              Configuración
            </h2>

            {/* --- CONTROLS: CRANK SLIDER --- */}
            {mode === AppMode.CRANK_SLIDER && (
              <div className="space-y-4">
                 <div>
                  <label className="text-xs text-slate-400 block mb-1">Velocidad (RPM): {crankParams.rpm}</label>
                  <input type="range" min="10" max="300" step="10" value={crankParams.rpm} onChange={(e) => updateCrankParam('rpm', Number(e.target.value))} className="w-full accent-accent" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Radio Manivela (r): {crankParams.crankRadius}</label>
                  <input type="range" min="20" max="100" value={crankParams.crankRadius} onChange={(e) => updateCrankParam('crankRadius', Number(e.target.value))} className="w-full accent-accent" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Longitud Biela (l): {crankParams.rodLength}</label>
                  <input type="range" min="100" max="300" value={crankParams.rodLength} onChange={(e) => updateCrankParam('rodLength', Number(e.target.value))} className="w-full accent-accent" />
                </div>
                {crankParams.rodLength < crankParams.crankRadius && <div className="text-red-500 text-xs font-bold">¡Error! Biela más corta que manivela.</div>}
              </div>
            )}
            
            {/* --- CONTROLS: 4 STROKE --- */}
            {mode === AppMode.FOUR_STROKE && (
              <div className="space-y-4">
                <div className="text-xs text-yellow-400 mb-2 p-2 bg-yellow-400/10 rounded">
                  Ciclo Otto completo (720°).
                </div>
                <div className="grid grid-cols-2 gap-2">
                   <button onClick={() => jumpToCycle(0)} className="bg-sky-500/20 hover:bg-sky-500/40 text-sky-300 border border-sky-500/50 p-2 rounded text-xs text-left">1. Admisión</button>
                   <button onClick={() => jumpToCycle(180)} className="bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-300 border border-indigo-500/50 p-2 rounded text-xs text-left">2. Compresión</button>
                   <button onClick={() => jumpToCycle(360)} className="bg-orange-500/20 hover:bg-orange-500/40 text-orange-300 border border-orange-500/50 p-2 rounded text-xs text-left">3. Explosión</button>
                   <button onClick={() => jumpToCycle(540)} className="bg-slate-500/20 hover:bg-slate-500/40 text-slate-300 border border-slate-500/50 p-2 rounded text-xs text-left">4. Escape</button>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <label className="text-xs text-slate-400 block mb-1">Velocidad (RPM): {camParams.rpm}</label>
                  <input type="range" min="10" max="200" step="10" value={camParams.rpm} onChange={(e) => updateCamParam('rpm', Number(e.target.value))} className="w-full accent-accent" />
                </div>
              </div>
            )}

            {/* --- CONTROLS: WANKEL --- */}
            {mode === AppMode.WANKEL && (
              <div className="space-y-4">
                <div className="text-xs text-yellow-400 mb-2 p-2 bg-yellow-400/10 rounded">
                   El ciclo de una cara del rotor dura 1080° (3 vueltas de eje).
                </div>
                <div className="grid grid-cols-2 gap-2">
                   <button onClick={() => jumpToCycle(0)} className="bg-sky-500/20 hover:bg-sky-500/40 text-sky-300 border border-sky-500/50 p-2 rounded text-xs text-left">1. Admisión</button>
                   <button onClick={() => jumpToCycle(270)} className="bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-300 border border-indigo-500/50 p-2 rounded text-xs text-left">2. Compresión</button>
                   <button onClick={() => jumpToCycle(540)} className="bg-orange-500/20 hover:bg-orange-500/40 text-orange-300 border border-orange-500/50 p-2 rounded text-xs text-left">3. Explosión</button>
                   <button onClick={() => jumpToCycle(810)} className="bg-slate-500/20 hover:bg-slate-500/40 text-slate-300 border border-slate-500/50 p-2 rounded text-xs text-left">4. Escape</button>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <label className="text-xs text-slate-400 block mb-1">Velocidad Eje (RPM): {camParams.rpm}</label>
                  <input type="range" min="10" max="200" step="10" value={camParams.rpm} onChange={(e) => updateCamParam('rpm', Number(e.target.value))} className="w-full accent-accent" />
                </div>
              </div>
            )}

            {/* --- CONTROLS: CAM DESIGN --- */}
            {mode === AppMode.CAM_DESIGN && (
              <div className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Perfil de Movimiento</label>
                    <select 
                      className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm text-white focus:border-accent outline-none"
                      value={camParams.profile}
                      onChange={(e) => updateCamParam('profile', e.target.value as MotionProfile)}
                    >
                      <option value={MotionProfile.SHM}>Armónico Simple (SHM)</option>
                      <option value={MotionProfile.UNIFORM}>Velocidad Constante</option>
                      <option value={MotionProfile.CYCLOIDAL}>Cicloidal</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Velocidad (RPM): {camParams.rpm}</label>
                    <input type="range" min="10" max="300" step="10" value={camParams.rpm} onChange={(e) => updateCamParam('rpm', Number(e.target.value))} className="w-full accent-accent" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Radio Base (mm): {camParams.baseRadius}</label>
                    <input type="range" min="20" max="80" value={camParams.baseRadius} onChange={(e) => updateCamParam('baseRadius', Number(e.target.value))} className="w-full accent-accent" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Elevación (mm): {camParams.lift}</label>
                    <input type="range" min="5" max="50" value={camParams.lift} onChange={(e) => updateCamParam('lift', Number(e.target.value))} className="w-full accent-accent" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Subida (°)</label>
                      <input type="number" className="w-full bg-slate-900 border border-slate-600 rounded p-1 text-sm" value={camParams.riseAngle} onChange={(e) => updateCamParam('riseAngle', Number(e.target.value))} />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Bajada (°)</label>
                      <input type="number" className="w-full bg-slate-900 border border-slate-600 rounded p-1 text-sm" value={camParams.fallAngle} onChange={(e) => updateCamParam('fallAngle', Number(e.target.value))} />
                    </div>
                  </div>
                  <div>
                      <label className="text-xs text-slate-400 block mb-1">Dwell Superior (°)</label>
                      <input type="number" className="w-full bg-slate-900 border border-slate-600 rounded p-1 text-sm" value={camParams.dwell1} onChange={(e) => updateCamParam('dwell1', Number(e.target.value))} />
                  </div>
              </div>
            )}
          </div>

          <FormulaSheet mode={mode} camProfile={camParams.profile} />

        </section>

        {/* CENTER COLUMN: Visualizer */}
        <section className="lg:col-span-5 flex flex-col gap-6">
           <div className="flex-grow min-h-[400px]">
             {mode === AppMode.CAM_DESIGN && (
                <CamVisualizer params={camParams} data={activeData} currentAngle={currentAngle} />
             )}
             {mode === AppMode.CRANK_SLIDER && (
                <CrankVisualizer params={crankParams} angle={currentAngle} />
             )}
             {mode === AppMode.FOUR_STROKE && (
                <EngineVisualizer crankAngle={currentAngle} />
             )}
             {mode === AppMode.WANKEL && (
                <WankelVisualizer shaftAngle={currentAngle} />
             )}
           </div>
           
           {/* AI Panel */}
           <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg flex-grow max-h-[300px] flex flex-col">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-white flex items-center gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                   Profesor IA
                 </h3>
                 <div className="flex gap-2">
                   <button onClick={handleQuiz} disabled={loadingAI} className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-xs rounded text-white font-semibold disabled:opacity-50 transition-colors">
                     Quiz Rápido
                   </button>
                   {mode === AppMode.CAM_DESIGN && (
                    <button onClick={handleAskAI} disabled={loadingAI} className="px-3 py-1 bg-accent hover:bg-sky-600 text-slate-900 text-xs rounded font-semibold disabled:opacity-50 transition-colors">
                      Analizar Leva
                    </button>
                   )}
                 </div>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-lg flex-grow overflow-y-auto text-sm text-slate-300">
                {loadingAI ? (
                  <div className="flex items-center justify-center h-full gap-2 animate-pulse">
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-200"></div>
                  </div>
                ) : (
                  <>
                    {aiExplanation && !quizText && <div className="prose prose-invert prose-sm"><div dangerouslySetInnerHTML={{ __html: aiExplanation.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} /></div>}
                    {quizText && <div className="prose prose-invert prose-sm border-l-4 border-purple-500 pl-4"><div dangerouslySetInnerHTML={{ __html: quizText.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} /></div>}
                    {!aiExplanation && !quizText && (
                      <div className="flex flex-col items-center justify-center h-full text-center text-slate-500 gap-2">
                        <p className="italic">
                          {mode === AppMode.CAM_DESIGN ? 'Diseña tu leva y pide una explicación.' : 
                           mode === AppMode.FOUR_STROKE ? 'Observa los 4 tiempos del motor paso a paso.' :
                           mode === AppMode.WANKEL ? 'Descubre cómo giran el rotor y el eje excéntrico.' :
                           'Analiza la geometría de la biela.'}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
           </div>
        </section>

        {/* RIGHT COLUMN: Graphs */}
        <section className="lg:col-span-4 h-full overflow-hidden">
          {mode === AppMode.FOUR_STROKE ? (
            <div className="h-full bg-slate-800/50 rounded-xl border border-slate-700 p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-accent mb-4">Diagrama P-V (Teórico)</h3>
              <div className="w-full h-64 bg-slate-900 rounded border border-slate-600 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/P-V_Otto_cycle.svg/1200px-P-V_Otto_cycle.svg.png')] bg-contain bg-center bg-no-repeat"></div>
                <p className="text-slate-400 px-4 text-sm">
                  Gráfico del Ciclo Otto Ideal.
                  <br/><br/>
                  <span className="text-sky-400">1. Admisión</span><br/>
                  <span className="text-indigo-400">2. Compresión</span><br/>
                  <span className="text-orange-400">3. Explosión</span><br/>
                  <span className="text-slate-400">4. Escape</span>
                </p>
              </div>
            </div>
          ) : mode === AppMode.WANKEL ? (
            <div className="h-full bg-slate-800/50 rounded-xl border border-slate-700 p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-accent mb-4">Ventajas del Wankel</h3>
               <div className="space-y-4 text-sm text-slate-300">
                  <div className="bg-slate-900 p-3 rounded text-left">
                     <h4 className="font-bold text-white mb-1">🔥 Alta Densidad de Potencia</h4>
                     <p>Al tener 3 explosiones por vuelta de rotor, genera mucha potencia en poco espacio.</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded text-left">
                     <h4 className="font-bold text-white mb-1">🔄 Menos Vibraciones</h4>
                     <p>Al no haber movimiento recíproco (pistones subiendo y bajando), es muy suave.</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded text-left">
                     <h4 className="font-bold text-white mb-1">🛠️ Pocas Piezas</h4>
                     <p>Sin válvulas, levas o bielas complejas.</p>
                  </div>
               </div>
            </div>
          ) : (
            <MotionCharts data={activeData} />
          )}
        </section>

      </main>
    </div>
  );
};

export default App;