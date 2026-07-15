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
          border: 1px solid rgba(109,220,109,0.15);
          border-radius: 32px;
          padding: 64px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.8), inset 0 20px 40px -20px rgba(109,220,109,0.1);
        }

        .contact-glow-1 {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 300px;
          height: 300px;
          background: rgba(109,220,109,0.15);
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
          background: rgba(109,220,109,0.2);
          filter: blur(80px);
          border-radius: 50%;
          pointer-events: none;
        }

        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border: 1px solid rgba(109,220,109,0.3);
          border-radius: 100px;
          margin-bottom: 24px;
          background: rgba(109,220,109,0.05);
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
          border-color: rgba(109,220,109,0.4);
          background: rgba(109,220,109,0.05);
          box-shadow: 0 0 20px rgba(109,220,109,0.1);
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
          background: linear-gradient(90deg, #6ddc6d, #8ef28e);
          color: #081509;
          border: none;
          border-radius: 100px;
          padding: 18px;
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px -5px rgba(109,220,109,0.4);
          margin-bottom: 48px;
        }

        .contact-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px -5px rgba(109,220,109,0.6);
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
          background: rgba(109,220,109,0.05);
          border-color: rgba(109,220,109,0.2);
        }

        .info-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(109,220,109,0.1);
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
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: rgba(109,220,109,0.1);
          border-color: rgba(109,220,109,0.4);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(109,220,109,0.2);
        }

        .contact-footer-line {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(109,220,109,0.3) 50%, rgba(255,255,255,0) 100%);
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

            <div className="contact-pill">
              <div className="contact-pill-dot" />
              <span className="contact-pill-text">Contact</span>
            </div>

            <h3 className="contact-title">Get in <span>Touch</span></h3>
            <p className="contact-subtitle">Collaborate with me to bring your ideas to life.</p>

            <div className="contact-input-wrap">
              <User className="input-icon" size={18} />
              <input type="text" placeholder="Enter your name" className="contact-input" />
            </div>
            
            <div className="contact-input-wrap">
              <Mail className="input-icon" size={18} />
              <input type="email" placeholder="Enter your email" className="contact-input" />
            </div>

            <button className="contact-submit">
              <Send size={18} /> Send message
            </button>

            <div className="contact-divider">
              <div className="divider-line" />
              <div className="divider-dot" />
              <span className="divider-text">Let's Connect</span>
              <div className="divider-dot" />
              <div className="divider-line" />
            </div>

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

            <div className="social-row">
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">Bē</a>
              <a href="#" className="social-btn" style={{fontSize: 15}}>IG</a>
              <a href="#" className="social-btn" style={{fontSize: 15}}>Dr</a>
              <a href="#" className="social-btn" style={{fontFamily: 'serif', fontStyle: 'italic', fontSize: 20}}>f</a>
              <a href="#" className="social-btn" style={{fontSize: 15}}>Gh</a>
              <a href="#" className="social-btn" style={{fontSize: 15}}>X</a>
            </div>

            <div className="contact-footer-line" />
            <div className="contact-copyright">
              © <span>Copyright 2026.</span> Rights Reserved.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
