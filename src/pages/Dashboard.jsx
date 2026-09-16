import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, FileDown, Zap, Code2, Smartphone, Target,
  TrendingUp, PieChart, BarChart3, ArrowRight, CalendarDays, Award, PenSquare,
  Globe, LayoutDashboard, Boxes, PenTool,
} from 'lucide-react';
import LineChart from '../components/LineChart.jsx';
import DonutChart from '../components/DonutChart.jsx';
import BarChart from '../components/BarChart.jsx';
import { projectActivity, projectsByField, dashboardSkillChart } from '../data/skills.js';
import { webProjects, verifiedWebProjectCount } from '../data/projects.js';
import { useToast } from '../App.jsx';

function useCountUp(target, isNumeric, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(target);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, isNumeric, duration]);

  return [value, ref];
}

const kpis = [
  { icon: Zap, value: verifiedWebProjectCount, suffix: '+', label: 'Web Projects', trend: '↑ Actively building', color: 'var(--accent-blue)' },
  { icon: Code2, value: null, display: 'React', label: 'Frontend Technologies', trend: '↑ Primary stack', color: 'var(--accent-green)' },
  { icon: Smartphone, value: null, display: 'Yes', label: 'Responsive Design', trend: '↑ Mobile-first', color: 'var(--accent-purple)' },
  { icon: Target, value: null, display: 'Open', label: 'Availability', trend: '↑ Seeking opportunities', color: 'var(--accent-orange)' },
];

function KpiCard({ kpi }) {
  const isNumeric = kpi.value != null;
  const [count, ref] = useCountUp(kpi.value || 0, isNumeric);
  return (
    <div className="card kpi-card" ref={ref}>
      <div className="card-top-accent" style={{ background: kpi.color, position: 'absolute', top: 0, left: 0, right: 0 }} />
      <div className="kpi-icon" style={{ background: `${kpi.color}1a`, color: kpi.color }}>
        <kpi.icon size={20} />
      </div>
      <div className="kpi-value">{isNumeric ? count + (kpi.suffix || '') : kpi.display}</div>
      <div className="kpi-label">{kpi.label}</div>
      <div className="kpi-trend">
        <TrendingUp size={12} />
        {kpi.trend}
      </div>
    </div>
  );
}

const whatIBuild = [
  { icon: Globe, title: 'Responsive Websites', desc: 'Modern responsive websites that work across desktop, tablet, and mobile devices.', color: 'var(--accent-blue)' },
  { icon: LayoutDashboard, title: 'Admin Dashboards', desc: 'Interactive dashboards with cards, tables, charts, filters, forms, and dark mode.', color: 'var(--accent-green)' },
  { icon: Boxes, title: 'Frontend Applications', desc: 'Component-based frontend applications using modern JavaScript frameworks.', color: 'var(--accent-purple)' },
  { icon: PenTool, title: 'UI Development', desc: 'Clean reusable interfaces with attention to spacing, typography, usability, and visual consistency.', color: 'var(--accent-orange)' },
];

const quickCards = [
  { icon: CalendarDays, title: 'Timeline', desc: 'Journey from 2022', to: '/timeline', color: 'var(--accent-blue)' },
  { icon: Award, title: 'Certificates', desc: 'Completed & in progress', to: '/certificates', color: 'var(--accent-orange)' },
  { icon: PenSquare, title: 'Blog', desc: 'Articles coming soon', to: '/blog', color: 'var(--accent-purple)' },
];

export default function Dashboard() {
  const pushToast = useToast();

  function handleDownloadCV() {
    pushToast('Opening CV — use Print to save as PDF.', 'info');
  }

  return (
    <div>
      <div className="page-header dashboard-header-row">
        <div>
          <span className="eyebrow">Web Developer — Overview</span>
          <h1 className="page-title">Welcome, I'm <span style={{ color: 'var(--accent-blue)' }}>Ahmed</span> 👋</h1>
          <h2 style={{ fontSize: 19, fontWeight: 600, margin: '4px 0 8px', color: 'var(--text-primary)' }}>
            I Build Modern Web Experiences
          </h2>
          <p className="page-subtitle">
            Web Developer and Software Engineering student focused on building responsive websites,
            interactive dashboards, modern interfaces, and practical frontend applications.
          </p>
        </div>
        <div className="header-actions">
          <Link to="/projects" className="btn btn-secondary"><Zap size={15} /> View Projects</Link>
          <Link to="/contact" className="btn btn-secondary"><Mail size={15} /> Contact Me</Link>
          <Link to="/cv" className="btn btn-primary" onClick={handleDownloadCV}><FileDown size={15} /> Download CV</Link>
        </div>
      </div>

      <div className="grid grid-4">
        {kpis.map((k) => <KpiCard kpi={k} key={k.label} />)}
      </div>

      <div style={{ marginTop: 24, marginBottom: 6 }}>
        <div className="section-card-title" style={{ marginBottom: 4 }}>What I Build</div>
      </div>
      <div className="grid grid-4">
        {whatIBuild.map((w) => (
          <div className="card spec-card" key={w.title}>
            <div className="spec-icon" style={{ background: `${w.color}1a`, color: w.color }}>
              <w.icon size={20} />
            </div>
            <div className="spec-title" style={{ fontSize: 14 }}>{w.title}</div>
            <p className="spec-desc" style={{ fontSize: 12.5 }}>{w.desc}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-charts-row">
        <div className="card section-card">
          <div className="section-card-header">
            <div className="section-card-title"><TrendingUp size={17} color="var(--accent-blue)" /> Project Activity</div>
          </div>
          <div className="section-card-subtitle">Monthly output — 2024</div>
          <LineChart data={projectActivity} />
        </div>

        <div className="card section-card">
          <div className="section-card-header">
            <div className="section-card-title"><PieChart size={17} color="var(--accent-purple)" /> Projects by Field</div>
          </div>
          <div className="section-card-subtitle">4 domains</div>
          <DonutChart data={projectsByField} />
        </div>
      </div>

      <div className="dashboard-charts-row">
        <div className="card section-card">
          <div className="section-card-header">
            <div className="section-card-title"><BarChart3 size={17} color="var(--accent-green)" /> Core Skills</div>
          </div>
          <div className="section-card-subtitle">Self-assessed proficiency</div>
          <BarChart data={dashboardSkillChart} />
        </div>

        <div className="card section-card">
          <div className="section-card-header">
            <div className="section-card-title">⚡ Featured Web Projects</div>
            <Link to="/projects" className="view-all-link">View all <ArrowRight size={13} /></Link>
          </div>
          <div className="section-card-subtitle">Verified web development work</div>
          {webProjects.map((p) => (
            <div className="recent-project-item" key={p.id}>
              <div className="recent-project-icon"><Code2 size={16} color="var(--text-secondary)" /></div>
              <div>
                <div className="recent-project-name">{p.name}</div>
                <div className="recent-project-cat">{p.category}</div>
              </div>
              <span
                className="status-badge"
                style={p.status !== 'Done' ? { background: 'rgba(217,119,6,0.12)', color: 'var(--accent-orange)' } : undefined}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-cards-row">
        {quickCards.map((q) => (
          <Link to={q.to} className="card quick-card" key={q.title}>
            <div className="quick-card-icon" style={{ background: `${q.color}1a`, color: q.color }}>
              <q.icon size={20} />
            </div>
            <div>
              <div className="quick-card-title">{q.title}</div>
              <div className="quick-card-desc">{q.desc}</div>
            </div>
            <ArrowRight size={16} className="quick-card-arrow" />
          </Link>
        ))}
      </div>
    </div>
  );
}
