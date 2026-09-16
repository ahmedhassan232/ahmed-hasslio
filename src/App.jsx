import React, { useState, useEffect, useCallback, createContext, useContext, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Loader from './components/Loader.jsx';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import BackToTop from './components/BackToTop.jsx';
import Toast from './components/Toast.jsx';

import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Services from './pages/Services.jsx';
import TimelinePage from './pages/TimelinePage.jsx';
import CV from './pages/CV.jsx';
import Certificates from './pages/Certificates.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';

/* ---------------- Toast Context ---------------- */
const ToastContext = createContext(() => {});
export const useToast = () => useContext(ToastContext);

/* ---------------- Theme helpers ---------------- */
function getInitialTheme() {
  const saved = localStorage.getItem('ahmed-portfolio-theme');
  if (saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ahmed-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }, []);

  // Loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(t);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname]);

  // Toast system
  const pushToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3600);
  }, []);

  // Keyboard shortcuts: Ctrl/Cmd+K palette, H/P/S/C nav shortcuts
  useEffect(() => {
    function onKeyDown(e) {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((p) => !p);
        return;
      }
      if (paletteOpen) return;
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      switch (e.key.toLowerCase()) {
        case 'h': navigate('/'); break;
        case 'p': navigate('/projects'); break;
        case 's': navigate('/skills'); break;
        case 'c': navigate('/contact'); break;
        default: break;
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [paletteOpen, navigate]);

  // Custom cursor (desktop only)
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    function onMove(e) {
      mouseX = e.clientX; mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
      }
    }
    function onOver(e) {
      const interactive = e.target.closest('a, button, .nav-item, .card, input, textarea, [role="button"]');
      if (ringRef.current) {
        ringRef.current.classList.toggle('hover', !!interactive);
      }
    }
    let raf;
    function animateRing() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }
      raf = requestAnimationFrame(animateRing);
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    animateRing();
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ToastContext.Provider value={pushToast}>
      <Loader visible={loading} />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true"></div>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"></div>

      <ProgressBar />
      <Topbar
        theme={theme}
        toggleTheme={toggleTheme}
        onBurgerClick={() => {
          if (window.innerWidth <= 768) setMobileNavOpen((v) => !v);
          else setSidebarCollapsed((v) => !v);
        }}
        onSearchClick={() => setPaletteOpen(true)}
      />

      <div className={`app-shell ${sidebarCollapsed ? 'collapsed' : ''} ${mobileNavOpen ? 'mobile-open' : ''}`}>
        <Sidebar collapsed={sidebarCollapsed} />
        {mobileNavOpen && (
          <div className="mobile-nav-overlay" onClick={() => setMobileNavOpen(false)} />
        )}
        <main className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </div>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        toggleTheme={toggleTheme}
      />
      <BackToTop />
      <Toast toasts={toasts} />
    </ToastContext.Provider>
  );
}
