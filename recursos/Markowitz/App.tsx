import React, { useState } from 'react';
import { TrendingUp, Info, ArrowRightLeft } from 'lucide-react';
import TickerInput from './components/TickerInput';
import PriceChart from './components/Charts/PriceChart';
import MarkowitzChart from './components/Charts/MarkowitzChart';
import CAPMChart from './components/Charts/CAPMChart';
import StatsTable from './components/StatsTable';
import AnalysisPanel from './components/AnalysisPanel';
import { fetchFinancialParameters } from './services/financialService';
import { runSimulation } from './utils/finance';
import { SimulationResult } from './types';

const App: React.FC = () => {
  const [tickers, setTickers] = useState<string[]>(['AAPL', 'GOOG', 'TSLA', 'XOM']);
  const [riskFreeRate, setRiskFreeRate] = useState<number>(3.5); // Default 3.5%
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hoveredTicker, setHoveredTicker] = useState<string | null>(null);

  const handleRunModel = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // 1. Fetch Parameters locally
      const data = await fetchFinancialParameters(tickers);

      // 2. Run Mathematics & Simulation Locally
      // Convert Percentage input to decimal for calculation
      const rfDecimal = riskFreeRate / 100;
      const simResult = runSimulation(data, rfDecimal);

      setResult(simResult);
    } catch (err) {
      setError("Failed to generate model. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-12 bg-slate-50/50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <TrendingUp size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Markowitz Lab</h1>
              <p className="text-xs text-slate-500">Modern Portfolio Theory & CAPM Explorer</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">

        {/* Intro */}
        <section className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg flex items-start gap-3">
          <Info className="text-indigo-600 shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-indigo-900">
            <p className="font-semibold mb-1">How to use this lab</p>
            <p>
              This tool connects <strong>Markowitz Portfolio Theory</strong> (diversification of total risk) with the <strong>CAPM</strong> (pricing of systematic risk).
              Input tickers to generate the Efficient Frontier (Left) and the Security Market Line (Right). Hover over a stock to see its position in both models simultaneously.
            </p>
          </div>
        </section>

        {/* Input Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TickerInput
              tickers={tickers}
              setTickers={setTickers}
              riskFreeRate={riskFreeRate}
              setRiskFreeRate={setRiskFreeRate}
              onRun={handleRunModel}
              isLoading={isLoading}
            />

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
                {error}
              </div>
            )}

            {result && (
              <div className="mt-8">
                <StatsTable
                  stocks={result.stats}
                  correlationMatrix={result.correlationMatrix}
                  riskFreeRate={riskFreeRate / 100}
                  marketStats={result.marketStats}
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-3 space-y-8">
            {!result ? (
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl h-[500px] flex items-center justify-center text-slate-400 flex-col gap-2">
                <TrendingUp size={48} className="opacity-20" />
                <p>Run the model to visualize the Efficient Frontier & CAPM</p>
              </div>
            ) : (
              <>
                {/* Dual Chart Container */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <MarkowitzChart
                    portfolios={result.portfolios}
                    efficientFrontier={result.efficientFrontier}
                    maxSharpe={result.maxSharpeRatioPortfolio}
                    stocks={result.stats}
                    riskFreeRate={riskFreeRate / 100}
                    marketStats={result.marketStats}
                    hoveredTicker={hoveredTicker}
                    setHoveredTicker={setHoveredTicker}
                  />

                  <CAPMChart
                    stocks={result.stats}
                    riskFreeRate={riskFreeRate / 100}
                    marketStats={result.marketStats}
                    hoveredTicker={hoveredTicker}
                    setHoveredTicker={setHoveredTicker}
                  />
                </div>

                {/* Investment Decision Dashboard */}
                <AnalysisPanel
                  stocks={result.stats}
                  riskFreeRate={riskFreeRate / 100}
                  marketStats={result.marketStats}
                />

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <ArrowRightLeft size={20} className="text-slate-400" />
                    Connecting the Models
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Markowitz (Left)</h4>
                      <p className="mb-2">Plots <strong>Total Risk</strong> (Volatility, $\sigma$).</p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Diversification moves portfolios to the <strong>left</strong> (lowering risk).</li>
                        <li>The <strong>Market Portfolio</strong> (S&P 500) is usually inside the cloud, as it is a diversified index but not necessarily the mathematically optimal Sharpe ratio for this specific basket.</li>
                        <li>Relevant for looking at the portfolio as a whole.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">CAPM & SML (Right)</h4>
                      <p className="mb-2">Plots <strong>Systematic Risk</strong> (Beta, $\beta$).</p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Systematic risk</strong> cannot be diversified away.</li>
                        <li>The <strong>SML</strong> shows the "fair" return for a given Beta.</li>
                        <li>Assets <strong>above</strong> the line have positive Alpha (undervalued/outperforming).</li>
                        <li>Assets <strong>below</strong> the line have negative Alpha (overvalued/underperforming).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <PriceChart
                  data={result.dailyPrices}
                  stocks={result.stats}
                />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;