
import React from 'react';

interface FormulaCardProps {
  title: string;
  formula: React.ReactNode;
  description: string;
}

const FormulaCard: React.FC<FormulaCardProps> = ({ title, formula, description }) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 h-full">
      <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">{title}</h3>
      <div className="flex items-center justify-center py-6 bg-white rounded-lg border border-slate-100 mb-4 shadow-sm">
        <div className="text-2xl font-mono text-slate-800">
          {formula}
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FormulaCard;
