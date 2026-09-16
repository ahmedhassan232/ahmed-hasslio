import React from 'react';
import * as Icons from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Code2;
  return (
    <div className="card spec-card">
      <div className="spec-icon" style={{ background: `${service.color}1a`, color: service.color }}>
        <Icon size={22} />
      </div>
      <div className="spec-title">{service.title}</div>
      <p className="spec-desc">{service.description}</p>
    </div>
  );
}
