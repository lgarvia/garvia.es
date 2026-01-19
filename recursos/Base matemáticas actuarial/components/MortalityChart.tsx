
import React, { useContext } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Legend 
} from 'recharts';
import { MORTALITY_TABLE } from '../constants/mortalityData';
import { LanguageContext } from '../App';

export const MortalityChart: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) return null;
  const { t } = context;

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-xl sm:text-2xl font-black mb-4 text-slate-800 tracking-tight">{t.mortality.title}</h3>
      <p className="text-slate-600 mb-8 text-sm leading-relaxed">{t.mortality.description}</p>
      
      <div className="h-[280px] sm:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MORTALITY_TABLE} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="age" tick={{ fontSize: 10, fontWeight: 'bold' }} />
            <YAxis tick={{ fontSize: 10, fontWeight: 'bold' }} domain={[0, 1]} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              formatter={(value: number) => [`${(value * 100).toFixed(2)}%`, '']}
            />
            <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 'bold' }} />
            <Area 
              type="monotone" 
              dataKey="px" 
              name={t.mortality.px} 
              stackId="1"
              stroke="#10b981" 
              fill="#10b981"
              fillOpacity={0.15}
            />
            <Area 
              type="monotone" 
              dataKey="qx" 
              name={t.mortality.qx} 
              stackId="1"
              stroke="#ef4444" 
              fill="#ef4444"
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 flex flex-col justify-center">
          <h4 className="text-xs font-black uppercase text-emerald-800 tracking-widest mb-2 italic">{t.mortality.goldenRule}</h4>
          <p className="text-xl font-mono text-emerald-700 font-black mb-2">
            p_x + q_x = 1
          </p>
          <p className="text-xs text-emerald-600 leading-relaxed font-bold">{t.mortality.ruleDesc}</p>
        </div>
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest mb-3">{t.mortality.lx}</h4>
          <div className="h-[120px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MORTALITY_TABLE}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="age" hide />
                <YAxis hide />
                <Line type="monotone" dataKey="lx" stroke="#3b82f6" dot={false} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] font-bold text-slate-400 text-center mt-3 uppercase tracking-tighter">{t.mortality.popDesc}</p>
        </div>
      </div>
    </div>
  );
};
