import React, { useState, useMemo } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { PortfolioPoint, StockData } from '../../types';

interface MarkowitzChartProps {
  portfolios: PortfolioPoint[];
  efficientFrontier: PortfolioPoint[];
  maxSharpe?: PortfolioPoint;
  stocks: StockData[];
  riskFreeRate: number;
  marketStats: { return: number; volatility: number };
  hoveredTicker: string | null;
  setHoveredTicker: (ticker: string | null) => void;
}

const MarkowitzChart: React.FC<MarkowitzChartProps> = ({ 
  portfolios, 
  efficientFrontier, 
  maxSharpe, 
  stocks,
  riskFreeRate,
  marketStats,
  hoveredTicker,
  setHoveredTicker
}) => {
  const [showCAL, setShowCAL] = useState(true);

  // Calculate CAL Line Data
  const calData = useMemo(() => {
    if (!maxSharpe) return [];
    
    // Point 1: Risk Free Asset (Vol = 0, Return = Rf)
    const p1 = { x: 0, y: riskFreeRate };
    
    // Slope (Sharpe)
    const slope = (maxSharpe.return - riskFreeRate) / maxSharpe.volatility;
    
    // Point 2: Extend past Max Sharpe for visualization
    const maxVol = Math.max(...portfolios.map(p => p.volatility));
    const targetX = maxVol * 1.1; 
    const targetY = riskFreeRate + slope * targetX;
    
    return [p1, { x: targetX, y: targetY }];
  }, [maxSharpe, riskFreeRate, portfolios]);

  // Format tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const name = payload[0].name;

      if (name === "CAL") {
        return (
          <div className="bg-white p-2 border border-slate-200 shadow-md rounded text-xs">
            <p className="font-bold text-slate-800">Capital Allocation Line</p>
          </div>
        );
      }

      return (
        <div className="bg-white p-3 border border-slate-100 shadow-lg rounded-lg text-xs z-50 relative">
          <p className="font-bold text-slate-700 mb-2">
            {data.ticker ? `${data.ticker} ${data.ticker === 'Market' ? '(S&P 500)' : ''}` : 'Portfolio Stats'}
          </p>
          <p className="text-slate-600">Return: <span className="font-semibold">{(data.return * 100).toFixed(2)}%</span></p>
          <p className="text-slate-600">Risk (Vol): <span className="font-semibold">{(data.volatility * 100).toFixed(2)}%</span></p>
          {data.sharpe !== undefined && (
            <p className="text-slate-600">Sharpe: <span className="font-semibold">{data.sharpe.toFixed(2)}</span></p>
          )}
          
          {data.weights && (
            <div className="mt-2 border-t pt-2">
              <p className="font-bold text-slate-700 mb-1">Weights</p>
              {data.weights.map((w: number, i: number) => (
                 w > 0.01 && (
                   <div key={i} className="flex justify-between gap-4">
                     <span style={{color: stocks[i]?.color}}>{stocks[i]?.ticker}</span>
                     <span>{(w * 100).toFixed(1)}%</span>
                   </div>
                 )
              ))}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[500px] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Efficient Frontier</h3>
          <p className="text-xs text-slate-400">Total Risk (Volatility) vs. Return</p>
        </div>
        
        {/* Controls */}
        <div className="flex flex-col items-end gap-2">
           <label className="flex items-center cursor-pointer gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
              <input 
                type="checkbox" 
                checked={showCAL} 
                onChange={(e) => setShowCAL(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
              <span className="text-sm font-medium text-slate-700 select-none">Show CAL</span>
           </label>
        </div>
      </div>
      
      <div className="flex gap-4 text-xs mb-2 flex-wrap justify-center sm:justify-start">
           <div className="flex items-center gap-1">
             <div className="w-3 h-3 rounded-full bg-blue-200 opacity-50"></div>
             <span>IOS</span>
           </div>
           <div className="flex items-center gap-1">
             <div className="w-3 h-1 bg-indigo-600"></div>
             <span>Frontier</span>
           </div>
           <div className="flex items-center gap-1">
             <div className="w-3 h-3 rounded-full bg-amber-500"></div>
             <span>Max Sharpe</span>
           </div>
           <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full border border-slate-400 bg-white"></div>
              <span>Stocks</span>
           </div>
           <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span>Market</span>
           </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              type="number" 
              dataKey="volatility" 
              name="Volatility" 
              unit="" 
              tickFormatter={(val) => `${(val * 100).toFixed(0)}%`}
              label={{ value: 'Annualized Volatility (Total Risk)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12 }}
              tick={{ fontSize: 12, fill: '#64748b' }}
              domain={[0, 'auto']} 
            />
            <YAxis 
              type="number" 
              dataKey="return" 
              name="Return" 
              unit="" 
              tickFormatter={(val) => `${(val * 100).toFixed(0)}%`}
              label={{ value: 'Expected Return', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }}
              tick={{ fontSize: 12, fill: '#64748b' }}
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            
            {/* The Cloud (Feasible Set) */}
            <Scatter name="Portfolios" data={portfolios} fill="#93c5fd" fillOpacity={0.4} shape="circle" r={2} />
            
            {/* The Efficient Frontier (Line) */}
            <Scatter 
              name="Efficient Frontier" 
              data={efficientFrontier} 
              fill="transparent" 
              line={{ stroke: '#4f46e5', strokeWidth: 3, strokeLinejoin: 'round' }} 
              shape={() => <g />} 
            />

            {/* Capital Allocation Line */}
            {showCAL && maxSharpe && (
              <Scatter 
                name="CAL" 
                data={calData} 
                fill="transparent" 
                line={{ stroke: '#334155', strokeWidth: 2, strokeDasharray: '5 5' }} 
                shape={() => <g />} 
              />
            )}

            {/* Individual Assets with specific colors */}
            <Scatter 
                name="Stocks"
                data={stocks.map((s) => ({ 
                    return: s.expectedReturn, 
                    volatility: s.volatility, 
                    ticker: s.ticker,
                    color: s.color,
                    weights: null
                }))} 
                onMouseEnter={(p) => setHoveredTicker(p.ticker)}
                onMouseLeave={() => setHoveredTicker(null)}
            >
              {stocks.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke={hoveredTicker === entry.ticker ? "#000" : "#fff"} 
                    strokeWidth={hoveredTicker === entry.ticker ? 2 : 2}
                    r={hoveredTicker === entry.ticker ? 8 : 5}
                    className="transition-all duration-200"
                />
              ))}
            </Scatter>
            
            {/* Market Proxy */}
            <Scatter 
                name="Market"
                data={[{ 
                  return: marketStats.return, 
                  volatility: marketStats.volatility, 
                  ticker: 'Market' 
                }]} 
                fill="#94a3b8" 
                shape="square" 
                r={6} 
            />

            {/* Risk Free Asset Dot */}
            {showCAL && (
               <Scatter 
                 data={[{ volatility: 0, return: riskFreeRate, ticker: "Risk Free Asset" }]}
                 fill="#10b981"
                 shape="diamond"
               />
            )}

            {/* Max Sharpe Portfolio */}
            {maxSharpe && (
              <Scatter name="Max Sharpe" data={[maxSharpe]} fill="#f59e0b" shape="star" r={10} stroke="#fff" strokeWidth={1} />
            )}

             {/* Reference line connecting hovered stock across charts (Visual Aid for Return) */}
             {hoveredTicker && (
              <ReferenceLine 
                y={stocks.find(s => s.ticker === hoveredTicker)?.expectedReturn} 
                stroke="#94a3b8" 
                strokeDasharray="3 3" 
                strokeOpacity={0.5}
              />
            )}

          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarkowitzChart;