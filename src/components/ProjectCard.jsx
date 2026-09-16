import React from 'react';
import * as Icons from 'lucide-react';
import { Info } from 'lucide-react';
import { getTechIcon } from '../data/techIcons.js';

const categoryColors = {
  'AI & Data': 'var(--accent-green)',
  'Embedded': 'var(--accent-purple)',
  'Networking': 'var(--accent-orange)',
  'Web': 'var(--accent-blue)',
  'Web Application': 'var(--accent-blue)',
  'Frontend': 'var(--accent-blue)',
};

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

// variant: "featured" (web projects — clickable, opens modal) or "compact" (other technical work)
export default function ProjectCard({ project, variant = 'compact', onOpen }) {
  const color = categoryColors[project.category] || project.accent || 'var(--accent-blue)';
  const isFeatured = variant === 'featured';
  const BannerIcon = Icons[project.bannerIcon] || Icons.Code2;
  const bannerColor = project.accent || color;

  return (
    <div
      className="card project-card"
      onClick={isFeatured ? () => onOpen(project) : undefined}
      style={isFeatured ? { cursor: 'pointer', padding: 0, overflow: 'hidden' } : { padding: 0, overflow: 'hidden' }}
      role={isFeatured ? 'button' : undefined}
      tabIndex={isFeatured ? 0 : undefined}
      onKeyDown={isFeatured ? (e) => { if (e.key === 'Enter') onOpen(project); } : undefined}
    >
      <div
        className="project-card-banner"
        style={{ background: `linear-gradient(135deg, ${bannerColor}33, ${bannerColor}0d)` }}
      >
        <BannerIcon size={variant === 'featured' ? 40 : 32} color={bannerColor} strokeWidth={1.6} />
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="project-card-top">
          <span className="project-cat-tag" style={{ color, background: `${color}1a` }}>
            {project.category}
          </span>
          {isFeatured && <Info size={15} color="var(--text-tertiary)" />}
        </div>
        <div className="project-card-name">{project.name}</div>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-tech-row">
          {project.tech.map((t) => <TechIconPill name={t} key={t} />)}
        </div>
        {isFeatured && (
          <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--accent-blue)' }}>
            View details →
          </span>
        )}
      </div>
    </div>
  );
}
