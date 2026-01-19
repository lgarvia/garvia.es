
import React from 'react';

interface FinancialSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  suffix?: string;
  prefix?: string;
}

const FinancialSlider: React.FC<FinancialSliderProps> = ({
  label, value, min, max, step, onChange, suffix = "", prefix = ""
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val)) return;
    onChange(val);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{label}</label>
        <div className="flex items-center gap-1 bg-blue-50 border border-blue-100 rounded-lg px-2 py-1">
          {prefix && <span className="text-blue-400 font-bold">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={handleInputChange}
            className="w-20 bg-transparent text-lg font-bold text-blue-600 focus:outline-none text-right"
          />
          {suffix && <span className="text-blue-400 font-bold">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
};

export default FinancialSlider;
