import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StockData } from '../../types';

interface PriceChartProps {
  data: { day: number;[ticker: string]: number }[];
  stocks: StockData[];
}

const PriceChart: React.FC<PriceChartProps> = ({ data, stocks }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[400px] flex flex-col">
      <h3 className="text-lg font-semibold text-slate-800 mb-1">Simulated 1-Year Price History</h3>
      <p className="text-xs text-slate-400 mb-4">Normalized to 100 base. Generated via Correlated Geometric Brownian Motion.</p>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
              label={{ value: 'Trading Days', position: 'insideBottom', offset: -5, fontSize: 12, fill: '#94a3b8' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
              domain={['auto', 'auto']}
            />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ fontSize: '12px' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
            {stocks.map(stock => (
              <Line
                key={stock.ticker}
                type="monotone"
                dataKey={stock.ticker}
                stroke={stock.color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;
