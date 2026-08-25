import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { marked } from 'marked';
import { 
  BookOpen, 
  FileText, 
  Layers, 
  Home, 
  Search, 
  Moon, 
  Sun, 
  ArrowLeft, 
  ExternalLink,
  Sparkles,
  Compass,
  GraduationCap,
  TrendingUp,
  Cpu,
  X,
  FileDown
} from 'lucide-react';

// Base de datos de búsqueda rápida para el Command Palette
const SEARCH_INDEX = [
  { title: 'Simulador de Hipoteca Sencillo', category: 'Simulador', path: 'recursos/index.md', href: 'recursos/hipoteca-simple/dist/index.html', desc: 'Cálculo de cuotas, cuadro de amortización y sensibilidad' },
  { title: 'El Balancín de Macaulay (Duración)', category: 'Simulador', path: 'recursos/index.md', href: 'recursos/bond-seesaw/dist/index.html', desc: 'Visualización física del centro de masas y duración de bonos' },
  { title: 'BondMaster: Simulador Educativo de Bonos', category: 'Simulador', path: 'recursos/index.md', href: 'recursos/Bono_01/dist/index.html', desc: 'Relación precio-tipo de interés y valor actual' },
  { title: 'ProbLab: El Zoo de las Distribuciones', category: 'Simulador', path: 'recursos/index.md', href: 'recursos/prob-zoo/dist/index.html', desc: 'Laboratorio visual de funciones de probabilidad' },
  { title: 'Black-Scholes Lab', category: 'Simulador', path: 'recursos/index.md', href: 'recursos/Black-Scholes/dist/index.html', desc: 'Valoración de opciones y griegas' },
  { title: 'Cartera Eficiente de Markowitz', category: 'Simulador', path: 'recursos/index.md', href: 'recursos/Markowitz/dist/index.html', desc: 'Optimización de carteras y frontera eficiente' },
  { title: 'Análisis de Servicios Financieros', category: 'Asignatura (ICADE)', path: 'asignaturas/Análisis_de_Servicios_Financieros_ICADE/2026-2027/index.md', desc: 'Curso activo 2026-2027 en ICADE' },
  { title: 'Foundations of Finance', category: 'Asignatura (NYU)', path: 'asignaturas/Foundations_of_Finance_NYU/2026-2027/Fall%202026/index.md', desc: 'Fall 2026 - NYU' },
  { title: 'Financial Markets (Internacional)', category: 'Asignatura (ICADE)', path: 'asignaturas/Mercados_Financieros_ICADE/2026-2027-Internacional/index.md', desc: 'Curso 2026-2027 ICADE Internacional' },
  { title: 'Publicaciones y Medios', category: 'Publicaciones', path: 'publicaciones/index.md', desc: 'Artículos, notas y apariciones en prensa y televisión' },
];

const App = () => {
  // Estado de tema (claro / oscuro)
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const getInitialPath = () => {
    const hash = window.location.hash.replace(/^#/, '').trim();
    return hash || 'index.md';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sincronizar tema con elemento raíz
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Atajo de teclado Ctrl+K / Cmd+K para abrir buscador
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Resolver rutas relativas usando URL nativa
  const resolveRelativePath = useCallback((href, baseFilePath) => {
    if (!href) return '';
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#')) {
      return href;
    }
    const currentDir = baseFilePath.substring(0, baseFilePath.lastIndexOf('/') + 1);
    const dummyBase = 'http://localhost/' + currentDir;
    const resolvedUrl = new URL(href, dummyBase);
    return resolvedUrl.pathname.substring(1);
  }, []);

  const navigateTo = useCallback((path, updateHistory = true) => {
    let target = path.replace(/^\//, '');
    if (target.endsWith('/')) {
      target += 'index.md';
    } else if (!target.endsWith('.md') && !target.endsWith('.html') && !target.endsWith('.pdf')) {
      target += '/index.md';
    }

    setCurrentPath(target);
    if (updateHistory) {
      window.location.hash = '#' + target;
    }
    setSearchOpen(false);
  }, []);

  // Escuchar cambios de hash
  useEffect(() => {
    const handleHashChange = () => {
      const hashPath = window.location.hash.replace(/^#/, '').trim();
      if (hashPath && hashPath !== currentPath) {
        setCurrentPath(hashPath);
      } else if (!hashPath && currentPath !== 'index.md') {
        setCurrentPath('index.md');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  // Cargar contenido Markdown
  useEffect(() => {
    let isMounted = true;

    // Si estamos en la página principal, mostramos la portada interactiva y cargamos el index.md
    setLoading(true);
    const fetchContent = async () => {
      try {
        const cleanPath = currentPath.replace(/^\//, '');
        const response = await fetch(cleanPath);
        if (!response.ok) {
          throw new Error(`Archivo no encontrado: "${cleanPath}"`);
        }
        const markdownText = await response.text();

        const renderer = new marked.Renderer();

        // Renderizado personalizado de enlaces
        renderer.link = (arg1, title, text) => {
          let href = typeof arg1 === 'object' && arg1 !== null ? arg1.href : arg1;
          let linkTitle = typeof arg1 === 'object' && arg1 !== null ? arg1.title : title;
          let linkText = typeof arg1 === 'object' && arg1 !== null ? arg1.text : text;

          if (!href) return linkText || '';

          // Enlaces externos
          if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
            return `<a href="${href}" title="${linkTitle || ''}" target="_blank" rel="noopener noreferrer" class="external-link">${linkText} ↗</a>`;
          }

          const resolved = resolveRelativePath(href, cleanPath);

          // Si es un simulador interactivo (.html en carpeta dist)
          if (resolved.includes('dist/index.html') || resolved.endsWith('.html')) {
            return `<a href="${resolved}" title="${linkTitle || ''}" class="sim-link-btn" target="_blank">⚡ ${linkText}</a>`;
          }

          // Si es un archivo PDF
          if (resolved.endsWith('.pdf')) {
            return `<a href="${resolved}" title="${linkTitle || ''}" target="_blank" class="pdf-link">📄 ${linkText} (PDF)</a>`;
          }

          // Enlace interno a Markdown
          return `<a href="#${resolved}" data-path="${resolved}" title="${linkTitle || ''}">${linkText}</a>`;
        };

        // Renderizado de imágenes
        renderer.image = (arg1, title, text) => {
          let href = typeof arg1 === 'object' && arg1 !== null ? arg1.href : arg1;
          let imgTitle = typeof arg1 === 'object' && arg1 !== null ? arg1.title : title;
          let imgText = typeof arg1 === 'object' && arg1 !== null ? arg1.text : text;
          const resolved = resolveRelativePath(href, cleanPath);
          return `<img src="${resolved}" alt="${imgText || ''}" title="${imgTitle || ''}" style="max-width: 100%; border-radius: 12px; margin: 1.5rem 0;" />`;
        };

        const parsedHtml = marked.parse(markdownText, { renderer });

        if (isMounted) {
          setContent(parsedHtml);
          setLoading(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (err) {
        if (isMounted) {
          setContent(`
            <div style="background-color: var(--bg-subtle); border: 1px solid var(--border); padding: 2rem; border-radius: 12px; text-align: center;">
              <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Documento no disponible</h3>
              <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${err.message}</p>
              <button onclick="window.location.hash='index.md'" class="back-button">
                ← Volver al inicio
              </button>
            </div>
          `);
          setLoading(false);
        }
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, [currentPath, resolveRelativePath]);

  // Manejar clicks en enlaces Markdown
  const handleContentClick = (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const dataPath = link.getAttribute('data-path');
    if (dataPath) {
      e.preventDefault();
      navigateTo(dataPath);
      return;
    }

    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && !href.startsWith('#/')) {
      const anchorId = href.substring(1);
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Filtrado del buscador rápido
  const filteredSearch = useMemo(() => {
    if (!searchQuery.trim()) return SEARCH_INDEX;
    const q = searchQuery.toLowerCase();
    return SEARCH_INDEX.filter(
      (item) => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const isHome = currentPath === 'index.md';

  return (
    <div className={`site-wrapper ${darkMode ? 'dark' : ''}`}>
      {/* Header Sticky Minimalista */}
      <header className="navbar">
        <div className="nav-container">
          <div className="brand-link" onClick={() => navigateTo('index.md')}>
            <div className="brand-logo-icon">G</div>
            <span>garvia.es</span>
            <span className="brand-badge">Docencia & Finanzas</span>
          </div>

          <nav className="nav-links">
            <button 
              className={`nav-btn ${isHome ? 'active' : ''}`}
              onClick={() => navigateTo('index.md')}
            >
              <Home size={16} />
              <span>Inicio</span>
            </button>
            <button 
              className={`nav-btn ${currentPath.startsWith('asignaturas') ? 'active' : ''}`}
              onClick={() => navigateTo('asignaturas/index.md')}
            >
              <GraduationCap size={16} />
              <span>Asignaturas</span>
            </button>
            <button 
              className={`nav-btn ${currentPath.startsWith('recursos') ? 'active' : ''}`}
              onClick={() => navigateTo('recursos/index.md')}
            >
              <Cpu size={16} />
              <span>Simuladores</span>
            </button>
            <button 
              className={`nav-btn ${currentPath.startsWith('publicaciones') ? 'active' : ''}`}
              onClick={() => navigateTo('publicaciones/index.md')}
            >
              <FileText size={16} />
              <span>Publicaciones</span>
            </button>
          </nav>

          <div className="nav-actions">
            <button 
              className="icon-btn" 
              title="Buscar (Ctrl+K)" 
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} />
            </button>
            <button 
              className="icon-btn" 
              title={darkMode ? 'Modo claro' : 'Modo oscuro'} 
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="main-container">
        {/* En la portada mostramos el Hero interactivo y Bento Grid */}
        {isHome && (
          <>
            <section className="hero-card">
              <h1 className="hero-title">Archivo Docente & Laboratorio Financiero</h1>
              <p className="hero-subtitle">
                Espacio de recursos académicos, investigación cuantitativa, simuladores interactivos de mercados financieros y publicaciones del <strong>Prof. Luis Garvía Vega, PhD</strong>.
              </p>
              <div className="hero-chips">
                <span className="chip">🏛️ ICADE Universidad Pontificia Comillas</span>
                <span className="chip">🗽 NYU Stern / NYU Madrid</span>
                <span className="chip">📈 Finanzas Cuantitativas</span>
                <span className="chip">⚡ Simuladores Interactivos</span>
              </div>
            </section>

            <div className="bento-grid">
              <div className="bento-card" onClick={() => navigateTo('asignaturas/index.md')}>
                <div className="bento-icon">
                  <GraduationCap size={22} />
                </div>
                <h3>Docencia & Asignaturas</h3>
                <p>Material organizado por cursos: Análisis de Servicios Financieros, Financial Markets y Foundations of Finance.</p>
                <div className="bento-footer">
                  <span>Ver programas y clases →</span>
                </div>
              </div>

              <div className="bento-card" onClick={() => navigateTo('recursos/index.md')}>
                <div className="bento-icon">
                  <TrendingUp size={22} />
                </div>
                <h3>Simuladores & Herramientas</h3>
                <p>Calculadoras interactivas: Hipotecas, Balancín de Macaulay, Valor Actual, Black-Scholes y Zoo de Distribuciones.</p>
                <div className="bento-footer">
                  <span>Explorar 15+ simuladores →</span>
                </div>
              </div>

              <div className="bento-card" onClick={() => navigateTo('publicaciones/index.md')}>
                <div className="bento-icon">
                  <FileText size={22} />
                </div>
                <h3>Publicaciones & Divulgación</h3>
                <p>Artículos académicos, notas de actualidad en LinkedIn y apariciones en prensa económica y televisión.</p>
                <div className="bento-footer">
                  <span>Leer publicaciones →</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Barra superior de navegación si estamos dentro de una subcarpeta */}
        {!isHome && (
          <div className="nav-breadcrumbs">
            <button 
              className="back-button"
              onClick={() => {
                const parts = currentPath.split('/');
                if (parts.length > 1) {
                  parts.pop();
                  navigateTo(parts.join('/') + '/index.md');
                } else {
                  navigateTo('index.md');
                }
              }}
            >
              <ArrowLeft size={16} /> Volver
            </button>
            <span>/</span>
            <span>{currentPath}</span>
          </div>
        )}

        {/* Vista del documento Markdown */}
        <div className="document-card">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              Cargando documento...
            </div>
          ) : (
            <article 
              className="markdown-body" 
              dangerouslySetInnerHTML={{ __html: content }} 
              onClick={handleContentClick}
            />
          )}
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="site-footer">
        <div className="footer-content">
          <div>
            <strong>garvia.es</strong> — Archivo público docente e investigación.
          </div>
          <div className="footer-links">
            <a href="https://scholar.google.com/citations?user=VginmpAAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://www.linkedin.com/in/lgarvia/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/lgarvia/garvia.es" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>

      {/* Modal de Búsqueda Rápida (Command Palette) */}
      {searchOpen && (
        <div className="search-modal-backdrop" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <Search size={20} color="var(--text-muted)" />
              <input
                type="text"
                className="search-input"
                placeholder="Buscar asignaturas, simuladores o temas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="search-results">
              {filteredSearch.length === 0 ? (
                <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No se encontraron resultados para "{searchQuery}"
                </div>
              ) : (
                filteredSearch.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="search-item"
                    onClick={() => {
                      if (item.href) {
                        window.open(item.href, '_blank');
                      } else {
                        navigateTo(item.path);
                      }
                      setSearchOpen(false);
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                    </div>
                    <span className="chip" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
