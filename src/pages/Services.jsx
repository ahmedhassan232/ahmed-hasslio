import React from 'react';
import { services } from '../data/services.js';
import ServiceCard from '../components/ServiceCard.jsx';

export default function Services() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">Development</span>
        <h1 className="page-title">Services</h1>
        <p className="page-subtitle">What I can help build</p>
      </div>

      <div className="grid grid-2">
        {services.map((s) => <ServiceCard service={s} key={s.id} />)}
      </div>
    </div>
  );
}
