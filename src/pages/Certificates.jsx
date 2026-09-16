import React from 'react';
import { certificates } from '../data/certificates.js';
import CertificateCard from '../components/CertificateCard.jsx';

export default function Certificates() {
  const completed = certificates.filter((c) => c.status === 'Completed');
  const inProgress = certificates.filter((c) => c.status === 'In Progress');

  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">06 — Credentials</span>
        <h1 className="page-title">My Certificates</h1>
        <p className="page-subtitle">Completed &amp; in-progress certifications</p>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div className="section-card-title" style={{ marginBottom: 14 }}>Completed</div>
        <div className="grid grid-2">
          {completed.map((c) => <CertificateCard cert={c} key={c.id} />)}
        </div>
      </div>

      <div>
        <div className="section-card-title" style={{ marginBottom: 14 }}>In Progress</div>
        <div className="grid grid-2">
          {inProgress.map((c) => <CertificateCard cert={c} key={c.id} />)}
        </div>
      </div>
    </div>
  );
}
