import React from 'react';
import Timeline from '../components/Timeline.jsx';
import { timeline } from '../data/timeline.js';

export default function TimelinePage() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">04 — Journey</span>
        <h1 className="page-title">Academic Timeline</h1>
        <p className="page-subtitle">Educational path from 2022 to present</p>
      </div>
      <Timeline entries={timeline} />
    </div>
  );
}
