import React from 'react';
import { Moon, Sun } from 'lucide-react';

// Standalone theme toggle button, usable anywhere theme/toggleTheme is passed down.
export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
