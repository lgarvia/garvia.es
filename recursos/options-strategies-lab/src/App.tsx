import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { translations } from './translations';
import Level1Spreads from './levels/Level1Spreads';
import Level2Volatility from './levels/Level2Volatility';
import Level3Condor from './levels/Level3Condor';
import Level4Butterfly from './levels/Level4Butterfly';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function App() {
    const [lang, setLang] = useState<'es' | 'en'>('es');
    const [activeLevel, setActiveLevel] = useState(1);
    const t = translations[lang];

    return (
        <div className="container">
            <div className="lang-toggle">
                <button className={`lang-btn-small ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
                <button className={`lang-btn-small ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>

            <header>
                <h1>{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>
            </header>

            <nav className="nav-bar">
                <button className={`nav-btn ${activeLevel === 1 ? 'active' : ''}`} onClick={() => setActiveLevel(1)}>{t.level1}</button>
                <button className={`nav-btn ${activeLevel === 2 ? 'active' : ''}`} onClick={() => setActiveLevel(2)}>{t.level2}</button>
                <button className={`nav-btn ${activeLevel === 3 ? 'active' : ''}`} onClick={() => setActiveLevel(3)}>{t.level3}</button>
                <button className={`nav-btn ${activeLevel === 4 ? 'active' : ''}`} onClick={() => setActiveLevel(4)}>{t.level4}</button>
            </nav>

            {activeLevel === 1 && <Level1Spreads t={t} />}
            {activeLevel === 2 && <Level2Volatility t={t} />}
            {activeLevel === 3 && <Level3Condor t={t} />}
            {activeLevel === 4 && <Level4Butterfly t={t} />}

            <footer style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.75rem', opacity: 0.5 }}>
                &copy; {new Date().getFullYear()} Garvia.es - Options Strategies Lab
            </footer>
        </div>
    );
}

export default App;
