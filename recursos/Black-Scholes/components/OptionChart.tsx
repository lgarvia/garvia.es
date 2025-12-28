import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
  Area,
  ComposedChart
} from 'recharts';
import { BSParams, OptionType, ChartPoint } from '../types';
import { calculateOptionPrice } from '../services/blackScholes';

interface OptionChartProps {
  params: BSParams;
  type: OptionType;
}

export const OptionChart: React.FC<OptionChartProps> = ({ params, type }) => {
  
  const data = useMemo(() => {
    const points: ChartPoint[] = [];
    const rangeMin = Math.max(0, params.K * 0.5);
    const rangeMax = params.K * 1.5;
    const step = (rangeMax - rangeMin) / 100;

    for (let s = rangeMin; s <= rangeMax; s += step) {
      // Create a temporary params object for the varying spot price
      const currentParams = { ...params, S: s };
      
      const price = calculateOptionPrice(currentParams, type);
      
      let payoff = 0;
      if (type === OptionType.Call) {
        payoff = Math.max(0, s - params.K);
      } else {
        payoff = Math.max(0, params.K - s);
      }

      points.push({
        spot: parseFloat(s.toFixed(2)),
        price: parseFloat(price.toFixed(2)),
        payoff: parseFloat(payoff.toFixed(2)),
        intrinsic: 0
      });
    }
    return points;
  }, [params, type]);

  const currentPrice = calculateOptionPrice(params, type);
  const currentPayoff = type === OptionType.Call ? Math.max(0, params.S - params.K) : Math.max(0, params.K - params.S);

  // Determine colors based on option type
  const priceColor = type === OptionType.Call ? "#10b981" : "#ef4444"; // Emerald or Red
  const payoffColor = "#64748b"; // Slate 500

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-end mb-4 px-2">
         <div>
            <h2 className="text-2xl font-bold text-white">Perfil de Valoración</h2>
            <p className="text-slate-400 text-sm">
              Comparación entre el Payoff al Vencimiento y el Precio Teórico (Curva).
            </p>
         </div>
         <div className="text-right">
            <p className="text-sm text-slate-400">Precio Opción Actual</p>
            <p className={`text-3xl font-bold font-mono ${type === OptionType.Call ? 'text-emerald-400' : 'text-red-400'}`}>
              ${currentPrice.toFixed(2)}
            </p>
         </div>
      </div>

      <div className="flex-grow min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
            <XAxis 
              dataKey="spot" 
              label={{ value: 'Precio del Activo Subyacente (S)', position: 'insideBottom', offset: -10, fill: '#94a3b8' }} 
              stroke="#94a3b8"
              tickFormatter={(val) => `$${val}`}
            />
            <YAxis 
              label={{ value: 'Valor de la Opción', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} 
              stroke="#94a3b8"
              tickFormatter={(val) => `$${val}`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ color: '#f8fafc' }}
              formatter={(value: number) => [`$${value}`, '']}
              labelFormatter={(label) => `Spot: $${label}`}
            />
            
            {/* Payoff Area/Line */}
            <Area 
               type="monotone" 
               dataKey="payoff" 
               name="Payoff al Vencimiento"
               stroke={payoffColor} 
               fill={payoffColor} 
               fillOpacity={0.1}
               strokeDasharray="5 5"
               strokeWidth={2}
            />

            {/* Black Scholes Price Line */}
            <Line 
              type="monotone" 
              dataKey="price" 
              name="Precio Black-Scholes"
              stroke={priceColor} 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />

            {/* Current Spot Price Reference */}
            <ReferenceLine x={params.S} stroke="#fbbf24" strokeDasharray="3 3" label={{ position: 'top', value: 'Spot Actual', fill: '#fbbf24', fontSize: 12 }} />
            
            {/* Strike Price Reference */}
            <ReferenceLine x={params.K} stroke="#94a3b8" strokeDasharray="3 3" label={{ position: 'top', value: 'Strike (K)', fill: '#94a3b8', fontSize: 12 }} />

            {/* The Dot representing current state */}
            <ReferenceDot x={params.S} y={currentPrice} r={6} fill="#fbbf24" stroke="#fff" />
            
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
