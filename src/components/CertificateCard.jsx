import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export default function CertificateCard({ cert }) {
  const isDone = cert.status === 'Completed';
  return (
    <div className="card cert-card">
      <div className="cert-emoji">{cert.emoji}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="cert-title">{cert.title}</div>
        <div className="cert-issuer">{cert.issuer}{cert.year ? ` · ${cert.year}` : ''}</div>
        <div className={`cert-status ${isDone ? 'completed' : 'progress'}`}>
          {isDone ? <CheckCircle2 size={12} /> : <Clock size={12} />}
          {cert.status}
        </div>
      </div>
    </div>
  );
}
