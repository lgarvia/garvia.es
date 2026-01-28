import React from 'react';
import { Scale, Target, TrendingUp, AlertCircle } from 'lucide-react';
import { StockData } from '../types';

interface AnalysisPanelProps {
  stocks: StockData[];
  riskFreeRate: number;
  marketStats: { return: number; volatility: number };
}

const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ stocks, riskFreeRate, marketStats }) => {
  const marketPremium = marketStats.return - riskFreeRate;

  // Calculate Metrics
  const analyzedStocks = stocks.map(stock => {
    const sharpe = (stock.expectedReturn - riskFreeRate) / stock.volatility;
    const expectedReturnCAPM = riskFreeRate + stock.beta * marketPremium;
    const alpha = stock.expectedReturn - expectedReturnCAPM;

    return {
      ...stock,
      sharpe,
      alpha,
      capmReturn: expectedReturnCAPM
    };
  });

  // Sort for rankings
  const sortedBySharpe = [...analyzedStocks].sort((a, b) => b.sharpe - a.sharpe);
  const sortedByAlpha = [...analyzedStocks].sort((a, b) => b.alpha - a.alpha);

  const bestSharpe = sortedBySharpe[0];
  const bestAlpha = sortedByAlpha[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Sharpe Analysis Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <Scale size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Sharpe Ratio Analysis</h3>
            <p className="text-xs text-slate-500">Metric: Risk-Adjusted Return (Efficiency)</p>
          </div>
        </div>

        <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-600 mb-4 italic">
          "Is the return I'm getting worth the total volatility I'm accepting?"
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="text-green-500 mt-1" size={18} />
            <div>
              <p className="text-sm font-semibold text-slate-700">Winner: {bestSharpe.ticker}</p>
              <p className="text-xs text-slate-500">
                With a Sharpe of <strong className="text-slate-700">{bestSharpe.sharpe.toFixed(2)}</strong>, 
                this asset offers the best "bang for your buck" regarding total risk. 
                Graphically, it has the steepest slope connecting to the Risk-Free rate.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Rankings</h4>
            <ul className="space-y-2">
              {sortedBySharpe.map((s, i) => (
                <li key={s.ticker} className="flex justify-between text-sm border-b border-slate-100 pb-1 last:border-0">
                  <span className="flex items-center gap-2">
                    <span className="text-slate-400 w-4">{i + 1}.</span>
                    <span style={{ color: s.color }} className="font-medium">{s.ticker}</span>
                  </span>
                  <span className="font-mono text-slate-600">{s.sharpe.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Alpha Analysis Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
          <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
            <Target size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Jensen's Alpha Analysis</h3>
            <p className="text-xs text-slate-500">Metric: Abnormal Return (Valuation)</p>
          </div>
        </div>

        <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-600 mb-4 italic">
          "Is this stock beating the market given its systematic risk (Beta)?"
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            {bestAlpha.alpha > 0 ? (
              <TrendingUp className="text-green-500 mt-1" size={18} />
            ) : (
               <AlertCircle className="text-amber-500 mt-1" size={18} />
            )}
            <div>
              <p className="text-sm font-semibold text-slate-700">
                {bestAlpha.alpha > 0 ? `Top Pick: ${bestAlpha.ticker}` : "Market is Efficient"}
              </p>
              <p className="text-xs text-slate-500">
                {bestAlpha.alpha > 0 
                  ? `${bestAlpha.ticker} lies ${(bestAlpha.alpha * 100).toFixed(2)}% ABOVE the Security Market Line (SML). According to CAPM, it is undervalued.`
                  : `No assets are generating positive alpha. They are all lying on or below the SML.`
                }
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Alpha Generation (Excess Return)</h4>
            <ul className="space-y-2">
              {sortedByAlpha.map((s, i) => (
                <li key={s.ticker} className="flex justify-between text-sm border-b border-slate-100 pb-1 last:border-0">
                  <span className="flex items-center gap-2">
                    <span className="text-slate-400 w-4">{i + 1}.</span>
                    <span style={{ color: s.color }} className="font-medium">{s.ticker}</span>
                  </span>
                  <span className={`font-mono ${s.alpha > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {s.alpha > 0 ? '+' : ''}{(s.alpha * 100).toFixed(2)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AnalysisPanel;