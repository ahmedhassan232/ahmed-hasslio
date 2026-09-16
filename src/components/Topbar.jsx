import React, { useState, useEffect } from 'react';
import { Menu, Search, Moon, Sun, Command } from 'lucide-react';

export default function Topbar({ theme, toggleTheme, onBurgerClick, onSearchClick }) {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-burger" onClick={onBurgerClick} aria-label="Toggle navigation menu">
          <Menu size={20} />
        </button>
        <div className="topbar-brand">
          <div className="brand-avatar">AH</div>
          <div className="brand-name">Ahmed<span>Hassan</span></div>
        </div>
      </div>

      <div className="topbar-center">
        <button className="search-trigger" onClick={onSearchClick} aria-label="Open command palette">
          <Search size={15} />
          <span>Search... or press Ctrl+K</span>
          <span className="kbd">{isMac ? '⌘K' : 'Ctrl+K'}</span>
        </button>
      </div>

      <div className="topbar-right">
        <div className="availability-pill">
          <span className="pulse-dot" aria-hidden="true"></span>
          <span className="hide-sm">Available</span>
        </div>
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn" onClick={onSearchClick} aria-label="Open command palette">
          <Command size={18} />
        </button>
        <div className="topbar-avatar" aria-label="Ahmed Hassan Sayed">
          <img src="/images/ahmed-photo.jpg" alt="Ahmed Hassan Sayed" />
        </div>
      </div>
    </header>
  );
}
