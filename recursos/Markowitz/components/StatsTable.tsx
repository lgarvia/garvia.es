import React from 'react';
import { StockData } from '../types';

interface StatsTableProps {
  stocks: StockData[];
  correlationMatrix: number[][];
  riskFreeRate: number;
  marketStats: { return: number; volatility: number };
}

const StatsTable: React.FC<StatsTableProps> = ({ stocks, correlationMatrix, riskFreeRate, marketStats }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Model Parameters & Derived Metrics</h3>
      
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 uppercase font-medium text-xs">
            <tr>
              <th className="px-4 py-3">Ticker</th>
              <th className="px-4 py-3">Exp. Return</th>
              <th className="px-4 py-3">Volatility</th>
              <th className="px-4 py-3 bg-blue-50 text-blue-700">Sharpe Ratio</th>
              <th className="px-4 py-3">Beta (β)</th>
              <th className="px-4 py-3 bg-indigo-50 text-indigo-700">Alpha (α)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {stocks.map((stock) => {
              // Calculate dynamic metrics
              const sharpe = (stock.expectedReturn - riskFreeRate) / stock.volatility;
              const capmExpected = riskFreeRate + stock.beta * (marketStats.return - riskFreeRate);
              const alpha = stock.expectedReturn - capmExpected;

              return (
                <tr key={stock.ticker} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{backgroundColor: stock.color}}></span>
                      {stock.ticker}
                  </td>
                  <td className="px-4 py-3 text-green-600 font-mono">{(stock.expectedReturn * 100).toFixed(2)}%</td>
                  <td className="px-4 py-3 text-red-600 font-mono">{(stock.volatility * 100).toFixed(2)}%</td>
                  <td className="px-4 py-3 bg-blue-50/50 font-mono font-semibold text-blue-700">{sharpe.toFixed(2)}</td>
                  <td className="px-4 py-3 font-mono">{stock.beta.toFixed(2)}</td>
                  <td className={`px-4 py-3 bg-indigo-50/50 font-mono font-bold ${alpha > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {alpha > 0 ? '+' : ''}{(alpha * 100).toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h4 className="text-sm font-semibold text-slate-700 mb-2">Correlation Matrix</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-center border-collapse">
          <thead>
            <tr>
              <th className="p-2 border border-slate-200 bg-slate-50"></th>
              {stocks.map(s => <th key={s.ticker} className="p-2 border border-slate-200 bg-slate-50 text-slate-600">{s.ticker}</th>)}
            </tr>
          </thead>
          <tbody>
            {correlationMatrix.map((row, i) => (
              <tr key={i}>
                <th className="p-2 border border-slate-200 bg-slate-50 text-slate-600 text-left">{stocks[i].ticker}</th>
                {row.map((val, j) => (
                  <td 
                    key={j} 
                    className="p-2 border border-slate-200"
                    style={{ backgroundColor: `rgba(59, 130, 246, ${Math.abs(val) * 0.2})` }}
                  >
                    {val.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsTable;