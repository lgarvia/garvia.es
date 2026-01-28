import React, { useMemo } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { StockData } from '../../types';

interface CAPMChartProps {
  stocks: StockData[];
  riskFreeRate: number;
  marketStats: { return: number; volatility: number };
  hoveredTicker: string | null;
  setHoveredTicker: (ticker: string | null) => void;
}

const CAPMChart: React.FC<CAPMChartProps> = ({ 
  stocks, 
  riskFreeRate, 
  marketStats,
  hoveredTicker,
  setHoveredTicker
}) => {
  
  // Calculate SML Line Data
  const smlData = useMemo(() => {
    // SML Equation: E(Ri) = Rf + Beta * (Rm - Rf)
    // Point 1: Beta = 0, Return = Rf
    const p1 = { x: 0, y: riskFreeRate };
    
    // Point 2: Beta = 2 (Just to extend line), Return = Rf + 2 * (Rm - Rf)
    const marketPremium = marketStats.return - riskFreeRate;
    const p2 = { x: 2, y: riskFreeRate + 2 * marketPremium };
    
    return [p1, p2];
  }, [riskFreeRate, marketStats]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const name = payload[0].name;

      if (name === "SML") {
        return (
          <div className="bg-white p-2 border border-slate-200 shadow-md rounded text-xs">
            <p className="font-bold text-slate-800">Security Market Line (SML)</p>
            <p>Undervalued assets lie above this line.</p>
          </div>
        );
      }

      return (
        <div className="bg-white p-3 border border-slate-100 shadow-lg rounded-lg text-xs z-50 relative">
          <p className="font-bold text-slate-700 mb-2">{data.ticker || "Market"}</p>
          <p className="text-slate-600">Return: <span className="font-semibold">{(data.y * 100).toFixed(2)}%</span></p>
          <p className="text-slate-600">Beta: <span className="font-semibold">{data.x.toFixed(2)}</span></p>
          {data.ticker && (
             <p className="text-slate-500 mt-1 italic">
               {data.y > (riskFreeRate + data.x * (marketStats.return - riskFreeRate)) 
                 ? "Positive Alpha (Beating Model)" 
                 : "Negative Alpha (Underperforming)"}
             </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[500px] flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">CAPM & SML</h3>
        <p className="text-xs text-slate-400">Expected Return vs. Market Risk (Beta)</p>
      </div>

      <div className="flex gap-4 text-xs mb-2 flex-wrap">
           <div className="flex items-center gap-1">
             <div className="w-3 h-1 bg-indigo-600 border-t border-dashed"></div>
             <span>SML (Equilibrium)</span>
           </div>
           <div className="flex items-center gap-1">
             <div className="w-3 h-3 rounded-full bg-gray-400"></div>
             <span>Market (S&P 500)</span>
           </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Beta" 
              label={{ value: 'Beta (β) - Systematic Risk', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12 }}
              tick={{ fontSize: 12, fill: '#64748b' }}
              domain={[0, 'auto']} 
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Return" 
              unit="" 
              tickFormatter={(val) => `${(val * 100).toFixed(0)}%`}
              label={{ value: 'Expected Return', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }}
              tick={{ fontSize: 12, fill: '#64748b' }}
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            
            {/* SML Line */}
            <Scatter 
              name="SML" 
              data={smlData} 
              fill="transparent" 
              line={{ stroke: '#4f46e5', strokeWidth: 2, strokeDasharray: '5 5' }} 
              shape={() => <g />} 
            />

            {/* Market Point (Beta = 1) */}
            <Scatter
                name="Market"
                data={[{ x: 1, y: marketStats.return, ticker: "S&P 500 (Market)" }]}
                fill="#94a3b8"
                shape="square"
                r={6}
            />

            {/* Stocks */}
            <Scatter 
                name="Stocks"
                data={stocks.map((s) => ({ 
                    y: s.expectedReturn, 
                    x: s.beta, 
                    ticker: s.ticker,
                    color: s.color
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

export default CAPMChart;