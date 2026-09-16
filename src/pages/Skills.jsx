import React, { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Wrench } from 'lucide-react';
import {
  frontendTags, uiUxTags, devToolTags, coreProficiency,
  otherTechnicalGroups, tools,
} from '../data/skills.js';
import BarChart from '../components/BarChart.jsx';

function TagCard({ icon: Icon, color, title, tags }) {
  return (
    <div className="card skill-group-card">
      <div className="section-card-title" style={{ marginBottom: 16 }}>
        <Icon size={18} color={color} />
        {title}
      </div>
      <div className="tools-row">
        {tags.map((t) => <span className="tool-tag" key={t}>{t}</span>)}
      </div>
    </div>
  );
}

function SecondaryGroup({ group }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="card skill-group-card" ref={ref} style={{ opacity: 0.92 }}>
      <div className="section-card-title" style={{ marginBottom: 16, fontSize: 14 }}>{group.title}</div>
      {group.skills.map((s) => (
        <div className="skill-row" key={s.name}>
          <div className="skill-row-top">
            <span className="skill-row-name" style={{ fontSize: 12.5 }}>{s.name}</span>
            <span className="skill-row-pct mono">{s.level}%</span>
          </div>
          <div className="skill-bar-track" style={{ height: 6 }}>
            <div className="skill-bar-fill" style={{ width: visible ? `${s.level}%` : '0%', background: 'var(--text-tertiary)' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">03 — Competencies</span>
        <h1 className="page-title">My Skills</h1>
        <p className="page-subtitle">Frontend development first, with a technical foundation to back it up</p>
      </div>

      <div className="grid grid-3">
        <TagCard icon={Code2} color="var(--accent-blue)" title="Frontend" tags={frontendTags} />
        <TagCard icon={Palette} color="var(--accent-purple)" title="UI / UX" tags={uiUxTags} />
        <TagCard icon={Wrench} color="var(--accent-green)" title="Development Tools" tags={devToolTags} />
      </div>

      <div className="card section-card" style={{ marginTop: 18 }}>
        <div className="section-card-title">Core Proficiency</div>
        <div className="section-card-subtitle">Self-assessed, based on hands-on project work</div>
        <BarChart data={coreProficiency} />
      </div>

      <div style={{ marginTop: 30, marginBottom: 6 }}>
        <div className="section-card-title" style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>Other Technical Experience</div>
        <p className="section-card-subtitle">Coursework and personal projects outside web development</p>
      </div>
      <div className="grid grid-3">
        {otherTechnicalGroups.map((g) => <SecondaryGroup group={g} key={g.id} />)}
      </div>

      <div className="card section-card" style={{ marginTop: 18 }}>
        <div className="section-card-title">Tools &amp; Platforms</div>
        <div className="tools-row">
          {tools.map((t) => (
            <div className="tool-tag" key={t.name}>
              <span>{t.emoji}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
