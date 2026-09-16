import React, { useEffect } from 'react';
import * as Icons from 'lucide-react';
import { X, ExternalLink, Github } from 'lucide-react';
import { getTechIcon } from '../data/techIcons.js';

function TechIconPill({ name }) {
  const { icon, color } = getTechIcon(name);
  const Icon = Icons[icon] || Icons.Code2;
  return (
    <span className="tech-icon-pill">
      <Icon size={12} color={color} />
      {name}
    </span>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;
  const BannerIcon = Icons[project.bannerIcon] || Icons.Code2;
  const bannerColor = project.accent || 'var(--accent-blue)';

  return (
    <div className="cp-overlay" onClick={onClose} style={{ alignItems: 'center', paddingTop: 0 }}>
      <div
        className="cp-box"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} details`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 620, maxHeight: '85vh', overflowY: 'auto', padding: 0, overflow: 'hidden' }}
      >
        <div
          className="project-card-banner"
          style={{ background: `linear-gradient(135deg, ${bannerColor}33, ${bannerColor}0d)`, height: 110 }}
        >
          <BannerIcon size={48} color={bannerColor} strokeWidth={1.6} />
        </div>
        <div style={{ padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div>
              <span
                className="project-cat-tag"
                style={{ color: 'var(--accent-blue)', background: 'rgba(0,120,212,0.1)' }}
              >
                {project.category}
              </span>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 10 }}>{project.name}</h2>
            </div>
            <button className="icon-btn" onClick={onClose} aria-label="Close project details">
              <X size={20} />
            </button>
          </div>

          <div className="cv-section" style={{ marginTop: 18 }}>
            <div className="cv-section-title">Overview</div>
            <p className="project-card-desc">{project.overview}</p>
          </div>

          <div className="cv-section">
            <div className="cv-section-title">Key Features</div>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {project.features.map((f) => (
                <li key={f} style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <div className="cv-section-title">Technologies</div>
            <div className="project-tech-row">
              {project.tech.map((t) => <TechIconPill name={t} key={t} />)}
            </div>
          </div>

          <div className="cv-section" style={{ marginBottom: 0 }}>
            <div className="cv-section-title">Challenges</div>
            <p className="project-card-desc">{project.challenges || 'Details coming soon'}</p>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
            {project.demoUrl ? (
              <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} /> Live Demo
              </a>
            ) : null}
            {project.sourceUrl ? (
              <a className="btn btn-secondary" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github size={15} /> Source Code
              </a>
            ) : null}
            {!project.demoUrl && !project.sourceUrl && (
              <span style={{ fontSize: 12.5, color: 'var(--text-tertiary)' }}>Links not available yet.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
