
import React, { useContext } from 'react';
import { Level } from '../types';
import { LanguageContext } from '../App';

interface NavigationProps {
  currentLevel: Level;
  onLevelChange: (level: Level) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLevel, onLevelChange }) => {
  const { t } = useContext(LanguageContext);
  
  const levels = [
    { id: Level.PresentValue, label: t.levels[1] },
    { id: Level.Perpetuity, label: t.levels[2] },
    { id: Level.Annuity, label: t.levels[3] },
    { id: Level.Comparison, label: t.levels[4] },
  ];

  return (
    <nav className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
      {levels.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            currentLevel === level.id
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
          }`}
        >
          {level.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
