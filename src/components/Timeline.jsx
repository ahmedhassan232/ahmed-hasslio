import React from 'react';

export default function Timeline({ entries }) {
  return (
    <div className="timeline-wrap">
      <div className="timeline-line" aria-hidden="true" />
      {entries.map((entry, i) => (
        <div className="timeline-entry" key={i}>
          <div className="timeline-dot" aria-hidden="true" />
          <span className="timeline-year mono">{entry.year}</span>
          <div className="card timeline-card">
            <div className="timeline-title">{entry.title}</div>
            <div className="timeline-place">{entry.place}</div>
            <p className="timeline-desc">{entry.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
