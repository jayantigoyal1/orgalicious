import { useState } from 'react';
import { submitContact } from '../services/api.js';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await submitContact(form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Have a question, want to customize a plan, or just want to say hello? We're here for you.</p>
        </div>
      </section>

      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2>Send Us a Message</h2>
              <p>We typically respond within a few hours.</p>

              {status === 'success' ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn-green-sm" onClick={() => setStatus(null)}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Priya Sharma"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="priya@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="I'm interested in the Weight Loss Plan and want to know more about..."
                      rows={5}
                      required
                    />
                  </div>
                  {status === 'error' && (
                    <div className="form-error">{errorMsg}</div>
                  )}
                  <button
                    type="submit"
                    className="form-submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="contact-info">
              <h2>Contact Details</h2>
              <p>Reach us directly through any of these channels.</p>

              <div className="contact-channels">
                <a href="tel:+919876543210" className="contact-channel">
                  <div className="contact-channel__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" /></svg>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <span>+91 98765 43210</span>
                  </div>
                </a>

                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="contact-channel">
                  <div className="contact-channel__icon contact-channel__icon--whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.994 0C5.368 0 0 5.368 0 11.994c0 2.116.557 4.1 1.528 5.824L.057 23.63a.5.5 0 0 0 .612.612l5.813-1.471A11.942 11.942 0 0 0 11.994 24C18.62 24 24 18.632 24 12.006 24 5.368 18.62 0 11.994 0zm0 21.818a9.823 9.823 0 0 1-5.007-1.368l-.359-.213-3.726.978.997-3.638-.234-.374A9.786 9.786 0 0 1 2.18 12.006c0-5.415 4.409-9.824 9.814-9.824 5.415 0 9.824 4.409 9.824 9.824 0 5.415-4.409 9.812-9.824 9.812z" /></svg>
                  </div>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Chat with us instantly</span>
                  </div>
                </a>

                <a href="mailto:hello@orgalicious.in" className="contact-channel">
                  <div className="contact-channel__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>hello@orgalicious.in</span>
                  </div>
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-channel">
                  <div className="contact-channel__icon contact-channel__icon--instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </div>
                  <div>
                    <strong>Instagram</strong>
                    <span>@orgalicious.in</span>
                  </div>
                </a>
              </div>

              <div className="contact-hours">
                <h4>Operating Hours</h4>
                <p>Mon – Sat: 7:00 AM – 9:00 PM</p>
                <p>Sunday: 8:00 AM – 6:00 PM</p>
              </div>

              <div className="contact-image">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
                  alt="Fresh meal preparation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
