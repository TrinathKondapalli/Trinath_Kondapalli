import { ArrowRight } from 'lucide-react';
import GlobalMagneticButton from './GlobalMagneticButton';

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
      padding: '40px 24px',
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
          margin-bottom: 64px;
        }

        .closing-italic {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          color: var(--c-primary);
          display: block;
        }

        .closing-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 48px;
          background: var(--c-primary);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 600;
          color: #081509;
          text-decoration: none;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          box-shadow: 0 0 0 rgba(109,215,76,0);
        }

        .closing-btn:hover {
          box-shadow: 0 20px 40px -10px rgba(109,215,76,0.3);
        }

        .closing-btn-arrow {
          transition: transform 0.3s ease;
        }

        .closing-btn:hover .closing-btn-arrow {
          transform: translateX(6px);
        }

        .closing-fallback {
          margin-top: 24px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.4);
        }

        .fallback-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .fallback-link:hover {
          color: var(--c-white);
          text-decoration: underline;
        }
      `}</style>

      <div className="closing-container">
        <h2 
          className="closing-headline reveal"
          style={{ transitionDelay: '0ms' }}
        >
          Your next project <br/>
          <span className="closing-italic">starts with one message.</span>
        </h2>

        <div
          className="reveal"
          style={{ transitionDelay: '200ms' }}
        >
          <GlobalMagneticButton 
            className="closing-btn"
            onClick={() => window.location.href = 'mailto:hello@trinadh.com'}
          >
            Start a project
            <ArrowRight size={24} strokeWidth={2.5} className="closing-btn-arrow" />
          </GlobalMagneticButton>
        </div>

        <div
          className="closing-fallback reveal"
          style={{ transitionDelay: '400ms' }}
        >
          Or email me directly at <a href="mailto:hello@trinadh.com" className="fallback-link">hello@trinadh.com</a>
        </div>
      </div>

    </section>
  );
}
