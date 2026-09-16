import React from 'react';
import { Mail, Linkedin, MapPin, Clock, Code2, LayoutDashboard, Smartphone, PenTool, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';

const whyCards = [
  { icon: Code2, title: 'Frontend Development', color: 'var(--accent-blue)' },
  { icon: LayoutDashboard, title: 'Dashboard Development', color: 'var(--accent-green)' },
  { icon: Smartphone, title: 'Responsive Design', color: 'var(--accent-purple)' },
  { icon: PenTool, title: 'UI Implementation', color: 'var(--accent-orange)' },
];

export default function Contact() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">08 — Connect</span>
        <h1 className="page-title">Let's Build Something Together</h1>
        <p className="page-subtitle">
          I'm open to Web Development opportunities, frontend projects, internships,
          collaborations, and learning opportunities.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card card">
          <div className="contact-info-row">
            <div className="contact-info-icon" style={{ background: 'rgba(0,120,212,0.1)', color: 'var(--accent-blue)' }}><Mail size={18} /></div>
            <div>
              <div className="contact-info-label">Email</div>
              <a className="contact-info-value" href="mailto:ghghghb083@gmail.com">ghghghb083@gmail.com</a>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-info-icon" style={{ background: 'rgba(0,189,125,0.1)', color: 'var(--accent-green)' }}><Phone size={18} /></div>
            <div>
              <div className="contact-info-label">Phone</div>
              <a className="contact-info-value" href="tel:+201127490096">01127490096</a>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-info-icon" style={{ background: 'rgba(120,50,220,0.1)', color: 'var(--accent-purple)' }}><Linkedin size={18} /></div>
            <div>
              <div className="contact-info-label">LinkedIn</div>
              <a className="contact-info-value" href="https://www.linkedin.com/in/a7med-hassan-05085536a" target="_blank" rel="noopener noreferrer">a7med-hassan-05085536a</a>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-info-icon" style={{ background: 'rgba(217,119,6,0.1)', color: 'var(--accent-orange)' }}><MapPin size={18} /></div>
            <div>
              <div className="contact-info-label">Location</div>
              <div className="contact-info-value">Egypt 🇪🇬</div>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-info-icon" style={{ background: 'rgba(0,120,212,0.1)', color: 'var(--accent-blue)' }}><Clock size={18} /></div>
            <div>
              <div className="contact-info-label">Response Time</div>
              <div className="contact-info-value">Within 24 Hours</div>
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <div className="section-card-title" style={{ marginBottom: 12, fontSize: 13.5 }}>What I Can Help With</div>
            <div className="grid grid-2" style={{ gap: 10 }}>
              {whyCards.map((w) => (
                <div key={w.title} style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px',
                  background: 'var(--bg-hover)', borderRadius: 10, fontSize: 12.5, fontWeight: 600,
                }}>
                  <w.icon size={15} color={w.color} /> {w.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
