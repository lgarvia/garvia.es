
import React, { useState, createContext, useContext } from 'react';
import { MortalityChart } from './components/MortalityChart';
import { AnnuitySimulator } from './components/AnnuitySimulator';
import { LawOfLargeNumbers } from './components/LawOfLargeNumbers';
import { RiskTheorySimulator } from './components/RiskTheorySimulator';
import { GraduationCap, Shield, BarChart3, BookOpen } from 'lucide-react';
import { translations } from './translations';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  t: typeof translations.es;
  setLang: (l: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const AppContent: React.FC = () => {
  const context = useContext(LanguageContext);

  if (!context) return null;
  const { lang, t, setLang } = context;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <GraduationCap size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none">ActuariaMaster</h1>
              <p className="hidden xs:block text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                {lang === 'es' ? 'Educación Financiera' : 'Financial Education'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              <a href="#mortalidad" className="hover:text-blue-600 transition-colors">{t.nav.mortality}</a>
              <a href="#anualidades" className="hover:text-blue-600 transition-colors">{t.nav.annuities}</a>
              <a href="#riesgo" className="hover:text-blue-600 transition-colors">{t.nav.risk}</a>
              <a href="#ruina" className="hover:text-blue-600 transition-colors">{t.nav.ruin}</a>
            </nav>

            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-[10px] font-black rounded-full transition-all ${lang === 'es' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-[10px] font-black rounded-full transition-all ${lang === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">

        {/* Hero Section - Centered and more compact */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
            {t.hero.title} <span className="text-blue-600">{t.hero.accent}</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-100">
              <BarChart3 size={14} /> {t.hero.badge1}
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-100">
              <Shield size={14} /> {t.hero.badge2}
            </div>
            <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-100">
              <BookOpen size={14} /> {t.hero.badge3}
            </div>
          </div>
        </section>

        {/* Learning Path - Vertical Stack */}
        <div className="space-y-12 sm:space-y-20">
          <section id="mortalidad" className="scroll-mt-20">
            <MortalityChart />
          </section>
          <section id="anualidades" className="scroll-mt-20">
            <AnnuitySimulator />
          </section>
          <section id="riesgo" className="scroll-mt-20">
            <LawOfLargeNumbers />
          </section>
          <section id="ruina" className="scroll-mt-20">
            <RiskTheorySimulator />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-12 sm:mt-24 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs sm:text-sm mb-4 italic max-w-md mx-auto">
            {lang === 'es'
              ? '"En un mundo de riesgos, el actuario es el arquitecto de la seguridad financiera."'
              : '"In a world of risk, the actuary is the architect of financial security."'}
          </p>
          <div className="h-px bg-slate-800 w-16 mx-auto mb-6"></div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ActuariaMaster Education
          </p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      <AppContent />
    </LanguageContext.Provider>
  );
};

export default App;
