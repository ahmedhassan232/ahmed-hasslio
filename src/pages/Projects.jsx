import React, { useState, useMemo } from 'react';
import { webProjects, otherProjects, projectFilters, matchesFilter } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';

export default function Projects() {
  const [active, setActive] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  const filteredWeb = useMemo(
    () => webProjects.filter((p) => matchesFilter(p, active)),
    [active]
  );

  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">02 — Portfolio</span>
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">Verified web projects, built with React and modern frontend tools</p>
      </div>

      <div className="filter-row" role="tablist" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button
            key={f}
            className={`filter-chip ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
            role="tab"
            aria-selected={active === f}
          >
            {f}
          </button>
        ))}
      </div>

      {filteredWeb.length > 0 ? (
        <div className="grid grid-2">
          {filteredWeb.map((p) => (
            <ProjectCard project={p} key={p.id} variant="featured" onOpen={setOpenProject} />
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--text-tertiary)', fontSize: 13.5 }}>No web projects match this filter.</p>
      )}

      <div style={{ marginTop: 36 }}>
        <div className="section-card-title" style={{ marginBottom: 6 }}>Other Technical Work</div>
        <p className="section-card-subtitle">Real coursework and personal projects outside web development</p>
        <div className="grid grid-3">
          {otherProjects.map((p) => (
            <ProjectCard project={p} key={p.id} variant="compact" />
          ))}
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}
