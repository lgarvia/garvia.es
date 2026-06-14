import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { BookOpen, FileText, Link, Home, Search, Moon, Sun, ArrowLeft } from 'lucide-react';

const App = () => {
  const [currentPath, setCurrentPath] = useState('index.md');
  const [content, setContent] = useState('Cargando contenido...');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Cargar contenido markdown
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setContent('Cargando...');
        // Limpiamos la ruta y hacemos fetch
        const cleanPath = currentPath.replace(/^\//, '');
        const response = await fetch(`./${cleanPath}`);
        if (!response.ok) {
          throw new Error(`No se pudo cargar el archivo: ${cleanPath}`);
        }
        const text = await response.text();
        
        // Parsear markdown
        setContent(marked.parse(text));
      } catch (err) {
        setContent(`
          <div style="color: #cf222e; padding: 20px; border: 1px solid var(--border); border-radius: 6px;">
            <h2>Error de carga</h2>
            <p>${err.message}</p>
          </div>
        `);
      }
    };

    fetchContent();
  }, [currentPath]);

  // Manejo de clicks en el contenido renderizado (para interceptar enlaces Markdown locales)
  const handleContentClick = (e) => {
    const target = e.target.closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (!href) return;

    // Si es enlace externo o de simulador (que apunta a index.html)
    if (href.startsWith('http') || href.startsWith('mailto:') || href.includes('index.html') || href.startsWith('#')) {
      return; // Comportamiento por defecto
    }

    e.preventDefault();
    // Resolver ruta relativa rudimentaria
    let newPath = href;
    if (href.startsWith('./')) {
      newPath = href.substring(2);
    }
    
    // Si la ruta apunta a un directorio sin archivo específico, asumimos index.md
    if (newPath.endsWith('/')) {
      newPath += 'index.md';
    } else if (!newPath.endsWith('.md')) {
      newPath += '/index.md';
    }

    // Si el path original tiene carpeta (ej. asignaturas/index.md) y hacemos clic en ./tutela, resolvemos
    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    const resolvedPath = currentDir ? `${currentDir}${newPath}` : newPath;

    setCurrentPath(resolvedPath.replace(/\/\/+/g, '/'));
  };

  const navItems = [
    { label: 'Inicio', path: 'index.md', icon: Home },
    { label: 'Asignaturas', path: 'asignaturas/index.md', icon: BookOpen },
    { label: 'Publicaciones', path: 'publicaciones/index.md', icon: FileText },
    { label: 'Recursos', path: 'recursos/index.md', icon: Link },
  ];

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <aside className="sidebar">
        <div className="logo-section">
          <h1>garvia.es</h1>
          <p>Docencia, publicaciones y recursos</p>
        </div>

        <div style={{ position: 'relative' }}>
          <Search style={{ position: 'absolute', left: 10, top: 12, width: 16, height: 16, color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="search-box"
            placeholder="Buscar..."
            style={{ paddingLeft: '32px' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path || currentPath.startsWith(item.path.split('/')[0] + '/');
            return (
              <button
                key={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentPath(item.path)}
                style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%' }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
          <button 
            className="nav-link" 
            onClick={() => history.back()} 
            style={{ flexGrow: 1, justifyContent: 'center', background: 'none', border: '1px solid var(--border)' }}
          >
            <ArrowLeft size={16} />
            <span>Volver</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        {currentPath !== 'index.md' && (
          <button 
            onClick={() => {
              const parts = currentPath.split('/');
              if (parts.length > 1) {
                parts.pop();
                setCurrentPath(parts.join('/') + '/index.md');
              } else {
                setCurrentPath('index.md');
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              background: 'none',
              color: 'var(--accent)',
              cursor: 'pointer',
              marginBottom: '1rem',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={16} /> Volver al nivel anterior
          </button>
        )}
        
        <div 
          className="markdown-body" 
          dangerouslySetInnerHTML={{ __html: content }} 
          onClick={handleContentClick}
        />
      </main>
    </div>
  );
};

export default App;
