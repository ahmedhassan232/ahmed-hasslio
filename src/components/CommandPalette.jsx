import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, LayoutDashboard, User, Zap, BarChart3, CalendarDays,
  FileText, Award, PenSquare, Mail, Moon, Printer, Briefcase,
} from 'lucide-react';

export default function CommandPalette({ open, onClose, toggleTheme }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const commands = useMemo(() => [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, action: () => navigate('/') },
    { id: 'about', label: 'About Me', icon: User, action: () => navigate('/about') },
    { id: 'projects', label: 'Projects', icon: Zap, action: () => navigate('/projects') },
    { id: 'skills', label: 'Skills', icon: BarChart3, action: () => navigate('/skills') },
    { id: 'services', label: 'Services', icon: Briefcase, action: () => navigate('/services') },
    { id: 'timeline', label: 'Timeline', icon: CalendarDays, action: () => navigate('/timeline') },
    { id: 'cv', label: 'CV / Resume', icon: FileText, action: () => navigate('/cv') },
    { id: 'certificates', label: 'Certificates', icon: Award, action: () => navigate('/certificates') },
    { id: 'blog', label: 'Blog', icon: PenSquare, action: () => navigate('/blog') },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => navigate('/contact') },
    { id: 'theme', label: 'Toggle Dark Mode', icon: Moon, action: () => toggleTheme() },
    { id: 'print', label: 'Print CV', icon: Printer, action: () => { navigate('/cv'); setTimeout(() => window.print(), 300); } },
  ], [navigate, toggleTheme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [query, commands]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setActiveIndex(0), [query]);

  function runCommand(cmd) {
    if (!cmd) return;
    cmd.action();
    onClose();
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
    if (e.key === 'Enter') { e.preventDefault(); runCommand(filtered[activeIndex]); }
  }

  if (!open) return null;

  return (
    <div className="cp-overlay" onClick={onClose}>
      <div
        className="cp-box"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="cp-input-row">
          <Search size={16} color="var(--text-tertiary)" />
          <input
            ref={inputRef}
            className="cp-input"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search commands"
          />
          <span className="kbd" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-tertiary)' }}>Esc</span>
        </div>
        <div className="cp-list">
          {filtered.length === 0 && <div className="cp-empty">No results found.</div>}
          {filtered.map((cmd, i) => (
            <div
              key={cmd.id}
              className={`cp-item ${i === activeIndex ? 'selected' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => runCommand(cmd)}
            >
              <cmd.icon size={16} />
              <span>{cmd.label}</span>
              {i === activeIndex && <span className="cp-item-hint">Enter ↵</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
