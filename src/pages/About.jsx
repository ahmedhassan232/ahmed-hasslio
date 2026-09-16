import React from 'react';
import { Code2, BrainCircuit, Network } from 'lucide-react';

const personalInfo = [
  { label: 'Name', value: 'Ahmed Hassan Sayed' },
  { label: 'Role', value: 'Web Developer / Frontend Developer' },
  { label: 'Location', value: 'Egypt 🇪🇬' },
  { label: 'Degree', value: 'Software Engineering' },
  { label: 'Status', value: 'Software Engineering Student' },
  { label: 'Phone', value: '01127490096' },
  { label: 'Email', value: 'ghghghb083@gmail.com' },
];

const interests = ['Web Development', 'React', 'JavaScript', 'UI/UX', 'Data Science', 'Machine Learning', 'Embedded Systems', 'Networking'];

const specializations = [
  {
    icon: Code2,
    color: 'var(--accent-blue)',
    title: 'Frontend & Web Development',
    desc: 'Building responsive websites, interactive dashboards, and component-based frontend applications with React, JavaScript, and CSS.',
  },
  {
    icon: BrainCircuit,
    color: 'var(--accent-green)',
    title: 'AI & Data Analysis',
    desc: 'Building data pipelines, sentiment analysis systems, and ML-based solutions using Python, Pandas, and NumPy.',
  },
  {
    icon: Network,
    color: 'var(--accent-purple)',
    title: 'Embedded & Networking',
    desc: 'Designing Arduino-based hardware systems on Proteus, and configuring enterprise networks with VLANs and Cisco tools.',
  },
];

export default function About() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">01 — About</span>
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Web Developer · Software Engineering Student</p>
      </div>

      <div className="about-hero">
        <div className="card about-avatar-card">
          <div className="about-avatar">
            <img src="/images/ahmed-photo.jpg" alt="Ahmed Hassan Sayed" />
          </div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>Ahmed Hassan Sayed</div>
          <div style={{ color: 'var(--text-tertiary)', fontSize: 12.5, marginTop: 2 }}>Web Developer</div>
          <div className="kpi-trend" style={{ marginTop: 12 }}>Available for Web Development Opportunities</div>

          <div className="info-list">
            {personalInfo.map((row) => (
              <div className="info-row" key={row.label}>
                <span className="info-label">{row.label}</span>
                <span className="info-value">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card section-card">
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: 14 }}>
            I am a Software Engineering student interested in Web Development and modern frontend
            technologies. I enjoy turning ideas and interface concepts into responsive, interactive,
            and practical web applications.
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: 14 }}>
            My projects combine frontend development, dashboard design, data-driven interfaces, and
            software engineering principles.
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--text-primary)', fontWeight: 600 }}>
            🎯 Goal: Become a professional Web Developer specializing in modern frontend applications
            and interactive web experiences.
          </p>

          <div className="interest-tags">
            {interests.map((i) => <span className="interest-tag" key={i}>{i}</span>)}
          </div>
        </div>
      </div>

      <div className="grid grid-3">
        {specializations.map((s) => (
          <div className="card spec-card" key={s.title}>
            <div className="spec-icon" style={{ background: `${s.color}1a`, color: s.color }}>
              <s.icon size={22} />
            </div>
            <div className="spec-title">{s.title}</div>
            <p className="spec-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
