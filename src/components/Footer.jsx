import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Ahmed Hassan</div>
          <p className="footer-brand-desc">
            Web Developer · Frontend Development · Software Engineering · Egypt 🇪🇬
          </p>
          <div className="footer-social-row">
            <a className="footer-social-btn" href="mailto:ghghghb083@gmail.com" aria-label="Email Ahmed">
              <Mail size={16} />
            </a>
            <a className="footer-social-btn" href="https://www.linkedin.com/in/a7med-hassan-05085536a" target="_blank" rel="noopener noreferrer" aria-label="Ahmed's LinkedIn">
              <Linkedin size={16} />
            </a>
            <a className="footer-social-btn" href="#" aria-label="GitHub (coming soon)" title="GitHub link coming soon">
              <Github size={16} />
            </a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Navigate</div>
          <Link className="footer-link" to="/">Dashboard</Link>
          <Link className="footer-link" to="/about">About</Link>
          <Link className="footer-link" to="/projects">Projects</Link>
          <Link className="footer-link" to="/skills">Skills</Link>
          <Link className="footer-link" to="/services">Services</Link>
        </div>

        <div>
          <div className="footer-col-title">Career</div>
          <Link className="footer-link" to="/cv">CV / Resume</Link>
          <Link className="footer-link" to="/certificates">Certificates</Link>
          <Link className="footer-link" to="/timeline">Timeline</Link>
          <Link className="footer-link" to="/blog">Blog</Link>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <a className="footer-link" href="mailto:ghghghb083@gmail.com">ghghghb083@gmail.com</a>
          <a className="footer-link" href="tel:+201127490096">01127490096</a>
          <div className="footer-link">Egypt 🇪🇬</div>
          <div className="footer-link">Available for Web Development Opportunities</div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Ahmed Hassan Sayed. All Rights Reserved.</span>
        <div className="footer-shortcuts">
          <span><span className="footer-shortcut-kbd">H</span>Home</span>
          <span><span className="footer-shortcut-kbd">P</span>Projects</span>
          <span><span className="footer-shortcut-kbd">S</span>Skills</span>
          <span><span className="footer-shortcut-kbd">C</span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
