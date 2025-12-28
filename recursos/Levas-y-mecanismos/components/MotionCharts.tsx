import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartDataPoint } from '../types';

interface MotionChartsProps {
  data: ChartDataPoint[];
}

const MotionCharts: React.FC<MotionChartsProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 w-full h-full p-4 bg-slate-800/50 rounded-xl border border-slate-700">
      <h3 className="text-xl font-bold text-accent mb-2">Diagramas Cinemáticos</h3>
      
      {/* Displacement Chart */}
      <div className="h-48 w-full">
        <h4 className="text-sm text-gray-400 mb-1">Desplazamiento (mm) vs Ángulo (°)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="angle" stroke="#94a3b8" type="number" domain={[0, 360]} tickCount={9} />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
              itemStyle={{ color: '#38bdf8' }}
              labelFormatter={(val) => `${val}°`}
            />
            <Line type="monotone" dataKey="displacement" stroke="#38bdf8" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Velocity Chart */}
      <div className="h-48 w-full">
        <h4 className="text-sm text-gray-400 mb-1">Velocidad (mm/s) vs Ángulo (°)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="angle" stroke="#94a3b8" type="number" domain={[0, 360]} tickCount={9}/>
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
              itemStyle={{ color: '#34d399' }}
              labelFormatter={(val) => `${val}°`}
            />
            <Line type="monotone" dataKey="velocity" stroke="#34d399" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Acceleration Chart */}
      <div className="h-48 w-full">
        <h4 className="text-sm text-gray-400 mb-1">Aceleración (mm/s²) vs Ángulo (°)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="angle" stroke="#94a3b8" type="number" domain={[0, 360]} tickCount={9}/>
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
              itemStyle={{ color: '#f472b6' }}
              labelFormatter={(val) => `${val}°`}
            />
            <Line type="monotone" dataKey="acceleration" stroke="#f472b6" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MotionCharts;