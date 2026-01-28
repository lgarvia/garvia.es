import React, { useState } from 'react';
import { Plus, X, Play, Percent } from 'lucide-react';

interface TickerInputProps {
  tickers: string[];
  setTickers: (tickers: string[]) => void;
  riskFreeRate: number;
  setRiskFreeRate: (rate: number) => void;
  onRun: () => void;
  isLoading: boolean;
}

const TickerInput: React.FC<TickerInputProps> = ({ 
  tickers, 
  setTickers, 
  riskFreeRate, 
  setRiskFreeRate, 
  onRun, 
  isLoading 
}) => {
  const [currentInput, setCurrentInput] = useState('');

  const handleAdd = () => {
    if (currentInput && !tickers.includes(currentInput.toUpperCase())) {
      setTickers([...tickers, currentInput.toUpperCase()]);
      setCurrentInput('');
    }
  };

  const handleRemove = (t: string) => {
    setTickers(tickers.filter(ticker => ticker !== t));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Model Inputs</h2>
      
      {/* Risk Free Rate Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Risk Free Rate (Annual %)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Percent size={16} className="text-slate-400" />
          </div>
          <input
            type="number"
            step="0.1"
            value={riskFreeRate}
            onChange={(e) => setRiskFreeRate(Number(e.target.value))}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            disabled={isLoading}
          />
        </div>
        <p className="text-xs text-slate-400 mt-1">Used for Sharpe Ratio & CAL (e.g., T-Bill yield)</p>
      </div>

      <hr className="border-slate-100 mb-6" />

      {/* Ticker Input */}
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Portfolio Assets
      </label>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter ticker (e.g. AAPL)..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all uppercase"
          disabled={isLoading}
        />
        <button
          onClick={handleAdd}
          disabled={!currentInput || isLoading}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
        >
          <Plus size={20} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 min-h-[50px]">
        {tickers.map(t => (
          <span key={t} className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {t}
            <button onClick={() => handleRemove(t)} disabled={isLoading} className="hover:text-blue-900">
              <X size={14} />
            </button>
          </span>
        ))}
        {tickers.length === 0 && (
          <span className="text-slate-400 text-sm italic py-1">No assets selected</span>
        )}
      </div>

      <button
        onClick={onRun}
        disabled={tickers.length < 2 || isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform active:scale-[0.98]"
      >
        {isLoading ? (
          <span className="animate-pulse">Processing Model...</span>
        ) : (
          <>
            <Play size={18} fill="currentColor" />
            Run Markowitz Model
          </>
        )}
      </button>
      {tickers.length < 2 && (
        <p className="text-xs text-red-500 mt-2 text-center">Please add at least 2 assets.</p>
      )}
    </div>
  );
};

export default TickerInput;