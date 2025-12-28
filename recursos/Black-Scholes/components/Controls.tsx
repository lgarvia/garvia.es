import React from 'react';
import { BSParams, OptionType } from '../types';

interface ControlsProps {
  params: BSParams;
  setParams: React.Dispatch<React.SetStateAction<BSParams>>;
  optionType: OptionType;
  setOptionType: (type: OptionType) => void;
}

export const Controls: React.FC<ControlsProps> = ({ params, setParams, optionType, setOptionType }) => {
  
  const handleChange = (key: keyof BSParams, value: number) => {
    setParams(prev => ({ ...prev, [key]: value }));
  };

  const sliders = [
    {
      label: 'Precio Activo (S)',
      key: 'S' as keyof BSParams,
      min: 1,
      max: 200,
      step: 1,
      format: (v: number) => `$${v}`,
      description: 'Precio actual de la acción en el mercado.'
    },
    {
      label: 'Precio Ejercicio (K)',
      key: 'K' as keyof BSParams,
      min: 1,
      max: 200,
      step: 1,
      format: (v: number) => `$${v}`,
      description: 'Precio pactado para comprar/vender.'
    },
    {
      label: 'Tiempo (T)',
      key: 'T' as keyof BSParams,
      min: 0.01,
      max: 5,
      step: 0.01,
      format: (v: number) => `${v.toFixed(2)} años`,
      description: 'Tiempo hasta el vencimiento en años.'
    },
    {
      label: 'Volatilidad (σ)',
      key: 'sigma' as keyof BSParams,
      min: 0.01,
      max: 1.5,
      step: 0.01,
      format: (v: number) => `${Math.round(v * 100)}%`,
      description: 'Desviación estándar anualizada.'
    },
    {
      label: 'Tasa Libre Riesgo (r)',
      key: 'r' as keyof BSParams,
      min: 0,
      max: 0.20,
      step: 0.005,
      format: (v: number) => `${(v * 100).toFixed(2)}%`,
      description: 'Tasa de interés libre de riesgo.'
    }
  ];

  return (
    <div className="flex flex-col h-full bg-slate-800 border-r border-slate-700 overflow-y-auto">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold text-white mb-1">Panel de Control</h1>
        <p className="text-slate-400 text-sm">Ajusta los parámetros del modelo.</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Toggle Type */}
        <div className="bg-slate-900 p-1 rounded-lg flex">
          <button
            onClick={() => setOptionType(OptionType.Call)}
            className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${
              optionType === OptionType.Call
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CALL (Compra)
          </button>
          <button
            onClick={() => setOptionType(OptionType.Put)}
            className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${
              optionType === OptionType.Put
                ? 'bg-red-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            PUT (Venta)
          </button>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          {sliders.map((slider) => (
            <div key={slider.key} className="group">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {slider.label}
                </label>
                <span className="text-sm font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded">
                  {slider.format(params[slider.key])}
                </span>
              </div>
              
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={params[slider.key]}
                onChange={(e) => handleChange(slider.key, parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400"
              />
              
              <div className="mt-2 flex justify-between items-center">
                 <p className="text-xs text-slate-500">{slider.description}</p>
                 <input
                    type="number"
                    value={params[slider.key]}
                    onChange={(e) => handleChange(slider.key, parseFloat(e.target.value))}
                    step={slider.step}
                    className="w-16 bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded p-1 text-right focus:border-emerald-500 outline-none"
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto p-6 border-t border-slate-700 text-center">
         <p className="text-xs text-slate-600">
           Valores actualizados en tiempo real.
         </p>
      </div>
    </div>
  );
};