
import React, { useState, createContext, useContext } from 'react';
import { Level, Language } from './types';
import Navigation from './components/Navigation';
import Level1PV from './levels/Level1PV';
import Level2Perpetuity from './levels/Level2Perpetuity';
import Level3Annuity from './levels/Level3Annuity';
import Level4Comparison from './levels/Level4Comparison';
import { translations } from './translations';

export const LanguageContext = createContext<{
  language: Language;
  t: typeof translations.es;
}>({ language: Language.ES, t: translations.es });

const App: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<Level>(Level.PresentValue);
  const [language, setLanguage] = useState<Language>(Language.ES);

  const t = translations[language];

  const renderLevel = () => {
    switch (currentLevel) {
      case Level.PresentValue: return <Level1PV />;
      case Level.Perpetuity: return <Level2Perpetuity />;
      case Level.Annuity: return <Level3Annuity />;
      case Level.Comparison: return <Level4Comparison />;
      default: return <Level1PV />;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-slate-900">{t.title}</h1>
              <p className="text-slate-500 text-sm">{t.subtitle}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                  onClick={() => setLanguage(Language.ES)}
                  className={`px-3 py-1 text-xs font-bold rounded ${language === Language.ES ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => setLanguage(Language.EN)}
                  className={`px-3 py-1 text-xs font-bold rounded ${language === Language.EN ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                >
                  EN
                </button>
              </div>
              <Navigation currentLevel={currentLevel} onLevelChange={setCurrentLevel} />
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[600px] overflow-hidden">
            {renderLevel()}
          </div>
        </main>

        <footer className="bg-slate-50 border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} - {t.footer}</p>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
