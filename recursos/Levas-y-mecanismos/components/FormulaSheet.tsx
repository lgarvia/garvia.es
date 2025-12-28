import React from 'react';
import { MotionProfile, AppMode } from '../types';

interface FormulaSheetProps {
  mode: AppMode;
  camProfile: MotionProfile;
}

const FormulaSheet: React.FC<FormulaSheetProps> = ({ mode, camProfile }) => {
  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 text-slate-200 h-full overflow-y-auto">
      <h3 className="text-xl font-bold text-accent mb-4 border-b border-slate-600 pb-2">
        Base Teórica
      </h3>

      {/* --- MODE: CAM DESIGN --- */}
      {mode === AppMode.CAM_DESIGN && (
        <>
          {camProfile === MotionProfile.SHM && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                El <strong>Movimiento Armónico Simple (SHM)</strong> proporciona aceleraciones finitas y suaves, ideal para velocidades medias.
              </p>
              <div className="font-mono text-sm space-y-3 bg-slate-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Desplazamiento (y):</span>
                  <span className="text-accent">y = (h/2) * [1 - cos(πθ / β)]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Velocidad (v):</span>
                  <span className="text-green-400">v = (πhω / 2β) * sin(πθ / β)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Aceleración (a):</span>
                  <span className="text-pink-400">a = (π²hω² / 2β²) * cos(πθ / β)</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Donde: h=altura, ω=velocidad angular, β=ángulo subida, θ=ángulo actual.</p>
            </div>
          )}

          {camProfile === MotionProfile.UNIFORM && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                La <strong>Velocidad Uniforme</strong> genera aceleraciones infinitas en los extremos. Solo para velocidades muy bajas.
              </p>
              <div className="font-mono text-sm space-y-3 bg-slate-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Desplazamiento (y):</span>
                  <span className="text-accent">y = h * (θ / β)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Velocidad (v):</span>
                  <span className="text-green-400">v = hω / β</span>
                </div>
              </div>
            </div>
          )}

          {camProfile === MotionProfile.CYCLOIDAL && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                El <strong>Movimiento Cicloidal</strong> es el mejor para alta velocidad (sin saltos en aceleración).
              </p>
              <div className="font-mono text-sm space-y-3 bg-slate-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Desplazamiento (y):</span>
                  <span className="text-accent">y = h[(θ/β) - (1/2π)sin(2πθ/β)]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Aceleración (a):</span>
                  <span className="text-pink-400">a = (2πhω²/β²)sin(2πθ/β)</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* --- MODE: CRANK SLIDER --- */}
      {mode === AppMode.CRANK_SLIDER && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            El mecanismo <strong>Biela-Manivela</strong> transforma movimiento rotacional en lineal.
            <br/><em>r = radio manivela, l = longitud biela, θ = ángulo, ω = velocidad angular.</em>
          </p>
          <div className="font-mono text-sm space-y-3 bg-slate-900 p-4 rounded-lg">
            <div className="flex flex-col gap-1">
              <span className="text-slate-400">Posición del Pistón (x):</span>
              <span className="text-accent">x = r·cos(θ) + √(l² - r²·sin²(θ))</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-400">Velocidad (v):</span>
              <span className="text-green-400">v ≈ -r·ω·(sin(θ) + (r/2l)·sin(2θ))</span>
              <span className="text-xs text-slate-500">(Aprox. armónica)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-400">Aceleración (a):</span>
              <span className="text-pink-400">a ≈ -r·ω²·(cos(θ) + (r/l)·cos(2θ))</span>
            </div>
          </div>
        </div>
      )}

      {/* --- MODE: 4 STROKE ENGINE --- */}
      {mode === AppMode.FOUR_STROKE && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            El <strong>Ciclo Otto (4 Tiempos)</strong> sincroniza el pistón con las válvulas mediante levas. El árbol de levas gira a la <strong>mitad</strong> de velocidad que el cigüeñal.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="bg-slate-900 p-2 rounded border-l-2 border-blue-500">
              <strong className="text-blue-400">1. Admisión:</strong> Válvula abierta. Pistón baja succionando mezcla.
            </li>
            <li className="bg-slate-900 p-2 rounded border-l-2 border-purple-500">
              <strong className="text-purple-400">2. Compresión:</strong> Válvulas cerradas. Pistón sube comprimiendo.
            </li>
            <li className="bg-slate-900 p-2 rounded border-l-2 border-orange-500">
              <strong className="text-orange-400">3. Explosión:</strong> Chispa. Expansión adiabática de gases.
            </li>
            <li className="bg-slate-900 p-2 rounded border-l-2 border-gray-500">
              <strong className="text-gray-400">4. Escape:</strong> Válvula escape abierta. Pistón sube expulsando.
            </li>
          </ul>
        </div>
      )}

      {/* --- MODE: WANKEL --- */}
      {mode === AppMode.WANKEL && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            El <strong>Motor Wankel</strong> utiliza un rotor triangular en lugar de pistones. 
            <br/><br/>
            <strong>Características Clave:</strong>
          </p>
          <ul className="space-y-3 text-sm">
            <li className="bg-slate-900 p-2 rounded border-l-2 border-yellow-500">
              <strong className="text-yellow-400">Relación de Giro:</strong> El eje excéntrico gira 3 veces por cada 1 vuelta completa del rotor.
            </li>
            <li className="bg-slate-900 p-2 rounded border-l-2 border-green-500">
              <strong className="text-green-400">Potencia Continua:</strong> Ocurren 3 explosiones por cada revolución del rotor (1 por cada revolución del eje de salida).
            </li>
            <li className="bg-slate-900 p-2 rounded border-l-2 border-indigo-500">
              <strong className="text-indigo-400">Sin Válvulas:</strong> Usa lumbreras (agujeros) en la carcasa cubiertos y descubiertos por el propio rotor.
            </li>
          </ul>
          <div className="mt-4 text-xs text-slate-500">
            Geometría: Carcasa Epitrocoide con rotor en forma de Triángulo de Reuleaux.
          </div>
        </div>
      )}

    </div>
  );
};

export default FormulaSheet;