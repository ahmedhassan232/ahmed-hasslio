import React from 'react';
import { Printer } from 'lucide-react';
import { webProjects } from '../data/projects.js';
import { frontendTags, coreProficiency } from '../data/skills.js';
import { certificates } from '../data/certificates.js';

const otherTechSkills = ['Python', 'Data Analysis', 'Arduino', 'C++', 'Cisco Packet Tracer', 'VLAN', 'Networking', 'Git', 'GitHub'];

export default function CV() {
  return (
    <div>
      <div className="page-header dashboard-header-row">
        <div>
          <span className="eyebrow">05 — Resume</span>
          <h1 className="page-title">Ahmed Hassan Sayed</h1>
          <p className="page-subtitle">Web Developer</p>
        </div>
        <button className="btn btn-primary no-print" onClick={() => window.print()}>
          <Printer size={15} /> Print / Save PDF
        </button>
      </div>

      <div className="card section-card cv-section">
        <div className="cv-section-title">Profile</div>
        <p className="cv-entry-desc">
          Software Engineering student and Web Developer focused on building responsive websites,
          interactive dashboards, and practical frontend applications with React and modern
          JavaScript tooling.
        </p>
      </div>

      <div className="card section-card cv-section">
        <div className="cv-section-title">Education</div>
        <div className="cv-entry">
          <div className="cv-entry-top">
            <span className="cv-entry-title">Software Engineering — B.Sc.</span>
            <span className="cv-entry-year mono">2022 – Present</span>
          </div>
          <div className="cv-entry-sub">Faculty of Engineering / Technology, Egypt</div>
          <p className="cv-entry-desc">
            Currently studying software engineering fundamentals alongside self-directed frontend
            development and web application projects.
          </p>
        </div>
      </div>

      <div className="card section-card cv-section">
        <div className="cv-section-title">Web Development Skills</div>
        <div className="cv-tags-row">
          {frontendTags.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
        </div>
      </div>

      <div className="card section-card cv-section">
        <div className="cv-section-title">Projects</div>
        {webProjects.map((p) => (
          <div className="cv-entry" key={p.id}>
            <div className="cv-entry-top">
              <span className="cv-entry-title">{p.name}</span>
              <span className="cv-entry-year mono">{p.category}</span>
            </div>
            <div className="cv-entry-sub">{p.tech.join(' · ')}</div>
            <p className="cv-entry-desc">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        <div className="card section-card cv-section" style={{ marginBottom: 0 }}>
          <div className="cv-section-title">Other Technical Skills</div>
          <div className="cv-tags-row">
            {otherTechSkills.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
          </div>
        </div>

        <div className="card section-card cv-section" style={{ marginBottom: 0 }}>
          <div className="cv-section-title">Core Proficiency</div>
          {coreProficiency.map((s) => (
            <div className="skill-row" key={s.name}>
              <div className="skill-row-top">
                <span className="skill-row-name">{s.name}</span>
                <span className="skill-row-pct mono">{s.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: `${s.level}%`, background: 'var(--accent-blue)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card section-card cv-section" style={{ marginTop: 18 }}>
        <div className="cv-section-title">Certificates</div>
        {certificates.map((c) => (
          <div className="cv-lang-row" key={c.id}>
            <span>{c.title} <span style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>— {c.issuer}</span></span>
            <span style={{ fontWeight: 600, color: c.status === 'Completed' ? 'var(--accent-green)' : 'var(--accent-orange)' }}>
              {c.status}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginTop: 18 }}>
        <div className="card section-card cv-section" style={{ marginBottom: 0 }}>
          <div className="cv-section-title">Languages</div>
          <div className="cv-lang-row"><span>Arabic</span><span style={{ fontWeight: 600 }}>Native</span></div>
          <div className="cv-lang-row"><span>English</span><span style={{ fontWeight: 600 }}>Good</span></div>
        </div>

        <div className="card section-card cv-section" style={{ marginBottom: 0 }}>
          <div className="cv-section-title">Contact</div>
          <p style={{ fontWeight: 700, fontSize: 14.5 }}>Ahmed Hassan Sayed</p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: 12.5, marginBottom: 12 }}>Web Developer</p>
          <div className="info-list">
            <div className="info-row"><span className="info-label">Email</span><span className="info-value">ghghghb083@gmail.com</span></div>
            <div className="info-row"><span className="info-label">Phone</span><span className="info-value">01127490096</span></div>
            <div className="info-row"><span className="info-label">Location</span><span className="info-value">Egypt 🇪🇬</span></div>
            <div className="info-row"><span className="info-label">LinkedIn</span><span className="info-value">a7med-hassan-05085536a</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
