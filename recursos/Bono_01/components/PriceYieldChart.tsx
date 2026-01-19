
import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';
import { BondParams, ChartDataPoint } from '../types';
import { translations, Language } from '../translations';

interface PriceYieldChartProps {
  params: BondParams;
  currentPrice: number;
  lang: Language;
}

const PriceYieldChart: React.FC<PriceYieldChartProps> = ({ params, currentPrice, lang }) => {
  const t = translations[lang];
  const data: ChartDataPoint[] = useMemo(() => {
    const points: ChartDataPoint[] = [];
    const minYield = Math.max(0.1, params.marketInterestRate - 5);
    const maxYield = params.marketInterestRate + 15;
    const step = (maxYield - minYield) / 20;

    for (let r = minYield; r <= maxYield; r += step) {
      const rate = r / 100;
      const C = (params.parValue * params.couponRate) / 100;
      let price = 0;
      for (let i = 1; i <= params.yearsToMaturity; i++) {
        price += C / Math.pow(1 + rate, i);
      }
      price += params.parValue / Math.pow(1 + rate, params.yearsToMaturity);
      points.push({ yield: parseFloat(r.toFixed(2)), price });
    }
    return points;
  }, [params]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[400px]">
      <h3 className="text-lg font-bold text-slate-800 mb-4">{t.chartTitle}</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="yield" 
            unit="%" 
            label={{ value: t.chartX, position: 'bottom', offset: 0, fontSize: 11 }} 
          />
          <YAxis 
            domain={['auto', 'auto']} 
            label={{ value: t.chartY, angle: -90, position: 'insideLeft', fontSize: 11 }} 
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toFixed(2)}`, t.chartY]}
            labelFormatter={(label) => `${t.chartX}: ${label}%`}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#2563eb" 
            strokeWidth={3} 
            dot={false} 
            activeDot={{ r: 8 }}
          />
          <ReferenceLine x={params.marketInterestRate} stroke="#ef4444" strokeDasharray="3 3">
            <Label value={t.chartCurrentRate} position="top" fill="#ef4444" fontSize={11} />
          </ReferenceLine>
          <ReferenceLine y={currentPrice} stroke="#ef4444" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-slate-500 mt-2 text-center italic">
        {t.chartNote}
      </p>
    </div>
  );
};

export default PriceYieldChart;
