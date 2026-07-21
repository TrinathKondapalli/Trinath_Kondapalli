import { User, Mail, Send, Phone } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" style={{
      position: 'relative',
      width: '100%',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 24px',
      zIndex: 10,
      background: 'var(--c-base)'
    }}>
      <style>{`
        .closing-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 1000px;
        }

        .closing-headline {
          font-family: var(--font-sans);
          font-size: clamp(48px, 8vw, 120px);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: -2px;
          color: var(--c-white);
          margin-bottom: 24px;
        }

        .closing-italic {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          color: var(--c-primary);
          display: block;
        }

        /* Form Card */
        .contact-form-card {
          margin-top: 64px;
          width: 100%;
          max-width: 700px;
          background: rgba(10, 25, 12, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid color-mix(in srgb, var(--c-primary) 15%, transparent);
          border-radius: 32px;
          padding: 64px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.8), inset 0 20px 40px -20px color-mix(in srgb, var(--c-primary) 10%, transparent);
        }

        .contact-glow-1 {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 300px;
          height: 300px;
          background: color-mix(in srgb, var(--c-primary) 15%, transparent);
          filter: blur(80px);
          border-radius: 50%;
          pointer-events: none;
        }
        .contact-glow-2 {
          position: absolute;
          top: 0px;
          right: -100px;
          width: 200px;
          height: 200px;
          background: color-mix(in srgb, var(--c-primary) 20%, transparent);
          filter: blur(80px);
          border-radius: 50%;
          pointer-events: none;
        }

        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border: 1px solid color-mix(in srgb, var(--c-primary) 30%, transparent);
          border-radius: 100px;
          margin-bottom: 24px;
          background: color-mix(in srgb, var(--c-primary) 5%, transparent);
        }

        .contact-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 8px var(--c-primary);
        }

        .contact-pill-text {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--c-primary);
        }

        .contact-title {
          font-family: var(--font-sans);
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          text-align: center;
        }
        .contact-title span {
          color: var(--c-primary);
        }

        .contact-subtitle {
          font-family: var(--font-sans);
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          text-align: center;
          margin-bottom: 48px;
          max-width: 300px;
        }

        .contact-input-wrap {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin-bottom: 20px;
        }

        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 18px 20px 18px 56px;
          font-family: var(--font-sans);
          font-size: 15px;
          color: white;
          transition: all 0.3s ease;
        }

        .contact-input:focus {
          outline: none;
          border-color: color-mix(in srgb, var(--c-primary) 40%, transparent);
          background: color-mix(in srgb, var(--c-primary) 5%, transparent);
          box-shadow: 0 0 20px color-mix(in srgb, var(--c-primary) 10%, transparent);
        }

        .contact-input::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .input-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--c-primary);
        }

        .contact-submit {
          width: 100%;
          max-width: 500px;
          background: var(--c-primary);
          border: none;
          color: #080c08;
          border-radius: 16px;
          padding: 18px;
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-bottom: 48px;
          box-shadow: 0 8px 24px -4px color-mix(in srgb, var(--c-primary) 40%, transparent);
        }

        .contact-submit:hover {
          background: color-mix(in srgb, var(--c-primary) 90%, white);
          color: #080c08;
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 14px 30px -2px color-mix(in srgb, var(--c-primary) 60%, transparent);
        }

        .contact-divider {
          width: 100%;
          max-width: 500px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .divider-line {
          flex-grow: 1;
          height: 1px;
          background: rgba(255,255,255,0.1);
        }

        .divider-dot {
          width: 6px;
          height: 6px;
          background: var(--c-primary);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--c-primary);
        }

        .divider-text {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--c-primary);
          font-weight: 500;
        }

        .contact-info-row {
          display: flex;
          gap: 20px;
          width: 100%;
          max-width: 500px;
          margin-bottom: 48px;
        }

        .contact-info-card {
          flex: 1;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .contact-info-card:hover {
          background: color-mix(in srgb, var(--c-primary) 5%, transparent);
          border-color: color-mix(in srgb, var(--c-primary) 20%, transparent);
        }

        .info-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--c-primary) 10%, transparent);
          color: var(--c-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-label {
          font-family: var(--font-sans);
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 4px;
          text-align: left;
        }

        .info-value {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--c-primary);
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
        }

        .social-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          width: 100%;
          max-width: 500px;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-btn svg {
          width: 22px;
          height: 22px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-btn:hover {
          background: color-mix(in srgb, var(--c-primary) 10%, transparent);
          border-color: color-mix(in srgb, var(--c-primary) 40%, transparent);
          transform: translateY(-4px);
          box-shadow: 0 10px 20px -5px color-mix(in srgb, var(--c-primary) 20%, transparent);
          color: var(--c-primary);
        }

        .social-btn:hover svg {
          transform: scale(1.15);
        }

        .contact-footer-line {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, color-mix(in srgb, var(--c-primary) 30%, transparent) 50%, rgba(255,255,255,0) 100%);
          margin-bottom: 24px;
        }

        .contact-copyright {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.4);
        }

        .contact-copyright span {
          color: var(--c-primary);
        }

        @media (max-width: 768px) {
          .contact-form-card {
            padding: 48px 24px;
            border-radius: 24px;
          }
          .contact-info-row {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>

      <div className="closing-container">
        <Reveal delay={0}>
          <h2 className="closing-headline">
            Your next project <br/>
            <span className="closing-italic">starts with one message.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="contact-form-card">
            <div className="contact-glow-1" />
            <div className="contact-glow-2" />

            <Reveal delay={300}>
              <div className="contact-pill">
                <div className="contact-pill-dot" />
                <span className="contact-pill-text">Contact</span>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <h3 className="contact-title">Get in <span>Touch</span></h3>
              <p className="contact-subtitle">Collaborate with me to bring your ideas to life.</p>
            </Reveal>

            <Reveal delay={500} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <div className="contact-input-wrap">
                <User className="input-icon" size={18} />
                <input type="text" placeholder="Enter your name" className="contact-input" />
              </div>
            </Reveal>
            
            <Reveal delay={600} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <div className="contact-input-wrap">
                <Mail className="input-icon" size={18} />
                <input type="email" placeholder="Enter your email" className="contact-input" />
              </div>
            </Reveal>

            <Reveal delay={700} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <button className="contact-submit">
                <Send size={18} /> Send message
              </button>
            </Reveal>

            <Reveal delay={800} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <div className="contact-divider">
                <div className="divider-line" />
                <div className="divider-dot" />
                <span className="divider-text">Let's Connect</span>
                <div className="divider-dot" />
                <div className="divider-line" />
              </div>
            </Reveal>

            <Reveal delay={900} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <div className="contact-info-row">
                <a href="tel:+919553302087" className="contact-info-card">
                  <div className="info-icon-wrap"><Phone size={18} /></div>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value">+91 95533 02087</div>
                  </div>
                </a>
                <a href="mailto:trinathkondapalli@gmail.com" className="contact-info-card">
                  <div className="info-icon-wrap"><Mail size={18} /></div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">trinathkondapalli@gmail.com</div>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={1000} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <div className="social-row">
                <a href="https://www.linkedin.com/in/trinathkondapalli/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://www.behance.net/trinath" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Behance">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
                </a>
                <a href="https://www.instagram.com/tzinr.in/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://dribbble.com/Trinadh_7" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Dribbble">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                    <path d="M8.56 2.75c4.37 6 6 9.42 8 18.5" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/trinath.devarakonda.3" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://github.com/Trinadh7" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="https://x.com/Thiru7484" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={1100} style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div className="contact-footer-line" />
              <div className="contact-copyright">
                © <span>Copyright 2026.</span> Rights Reserved.
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
