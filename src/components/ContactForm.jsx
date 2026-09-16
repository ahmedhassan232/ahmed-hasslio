import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useToast } from '../App.jsx';

const EMAIL = 'ghghghb083@gmail.com';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const pushToast = useToast();

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // Frontend-only demo: no backend exists to send this message.
    setTimeout(() => {
      setSubmitting(false);
      pushToast('✅ Message sent! Ahmed will reply within 24 hours.', 'success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1100);
  }

  function openMailClient() {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="card" style={{ padding: 24 }} onSubmit={handleSubmit} noValidate>
      <p style={{ fontSize: 12.5, color: 'var(--text-tertiary)', marginBottom: 18 }}>
        This is a frontend-only demo form — no server is connected. Submitting shows a success
        confirmation locally, or use “Open in Mail App” to send a real email.
      </p>

      <div className="form-group">
        <label className="form-label" htmlFor="name">Full Name *</label>
        <input
          id="name" name="name" type="text"
          className={`form-input ${errors.name ? 'error' : ''}`}
          value={form.name} onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <div className="form-error" id="name-error">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email *</label>
        <input
          id="email" name="email" type="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          value={form.email} onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <div className="form-error" id="email-error">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="subject">Subject</label>
        <input
          id="subject" name="subject" type="text"
          className="form-input"
          value={form.subject} onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Message *</label>
        <textarea
          id="message" name="message"
          className={`form-textarea ${errors.message ? 'error' : ''}`}
          value={form.message} onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <div className="form-error" id="message-error">{errors.message}</div>}
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? <Loader2 size={16} className="mono" style={{ animation: 'spin 0.8s linear infinite' }} /> : <Send size={16} />}
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={openMailClient}>
          Open in Mail App
        </button>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }`}</style>
    </form>
  );
}
