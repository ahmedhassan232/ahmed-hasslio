import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, User, Zap, BarChart3, CalendarDays,
  FileText, Award, PenSquare, Mail, Briefcase,
} from 'lucide-react';
import { verifiedWebProjectCount } from '../data/projects.js';

const navSections = [
  {
    title: 'Overview',
    items: [
      { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
      { to: '/about', label: 'About Me', icon: User },
    ],
  },
  {
    title: 'Development',
    items: [
      { to: '/projects', label: 'Projects', icon: Zap, badge: verifiedWebProjectCount },
      { to: '/skills', label: 'Skills', icon: BarChart3 },
      { to: '/services', label: 'Services', icon: Briefcase },
    ],
  },
  {
    title: 'Career',
    items: [
      { to: '/cv', label: 'CV / Resume', icon: FileText },
      { to: '/certificates', label: 'Certificates', icon: Award },
      { to: '/timeline', label: 'Timeline', icon: CalendarDays },
      { to: '/blog', label: 'Blog', icon: PenSquare },
    ],
  },
  {
    title: 'Connect',
    items: [
      { to: '/contact', label: 'Contact', icon: Mail },
    ],
  },
];

export default function Sidebar({ collapsed }) {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <nav>
        {navSections.map((section) => (
          <div key={section.title}>
            <div className="nav-section-title">{section.title}</div>
            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon size={18} />
                <span className="nav-label">{item.label}</span>
                {item.badge != null && <span className="badge">{item.badge}</span>}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-profile">
        <div className="sidebar-profile-avatar">
          <img src="/images/ahmed-photo.jpg" alt="Ahmed Hassan Sayed" />
        </div>
        <div className="sidebar-profile-info">
          <div className="sidebar-profile-name">Ahmed Hassan Sayed</div>
          <div className="sidebar-profile-role">Web Developer · Egypt</div>
        </div>
      </div>
    </aside>
  );
}
