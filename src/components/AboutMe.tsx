import { ArrowRight, Download } from 'lucide-react';
import portrait from '../assets/portrait.jpg';
import GlobalMagneticButton from './GlobalMagneticButton';

const values = [
  {
    title: 'Form Follows Function.',
    desc: 'Aesthetic beauty is meaningless if the user is confused. I balance striking visuals with airtight usability.'
  },
  {
    title: 'Systems Over Pages.',
    desc: 'I do not design isolated screens. I build cohesive, modular design systems that scale effortlessly as your product grows.'
  },
  {
    title: 'Obsessive Polish.',
    desc: 'The difference between good and great is in the micro-interactions. I sweat the invisible details that others ignore.'
  }
];

export default function AboutMe() {
  return (
    <section id="about" style={{
      position: 'relative',
      width: '100%',
      padding: '160px 24px',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 10,
      background: 'var(--c-base)'
    }}>
      <style>{`
        .about-spread {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 1440px;
          width: 100%;
          align-items: stretch;
        }

        /* Left Side: Editorial Photo */
        .photo-column {
          position: relative;
          width: 100%;
          min-height: 700px;
          border-radius: 24px;
          overflow: hidden;
          background: #000;
        }

        .photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          filter: contrast(1.15) grayscale(20%);
        }

        /* Subtle green vignette on the right edge */
        .photo-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to left, rgba(109,215,76,0.15) 0%, transparent 30%),
                      linear-gradient(to top, rgba(8, 21, 9, 0.8) 0%, transparent 40%);
          pointer-events: none;
        }

        /* Right Side: Typography */
        .text-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
        }

        .manifesto {
          font-family: var(--font-sans);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1.5px;
          color: var(--c-white);
          margin-bottom: 64px;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 64px;
        }

        .value-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .value-text {
          font-family: var(--font-sans);
          font-size: 18px;
          line-height: 1.6;
        }

        .value-title {
          font-weight: 700;
          color: var(--c-white);
          margin-right: 8px;
        }

        .value-desc {
          font-weight: 400;
          color: rgba(255,255,255,0.6);
        }

        .cta-group {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 32px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-solid {
          background: var(--c-primary);
          color: #081509;
          border: 1px solid var(--c-primary);
        }

        .btn-solid:hover {
          background: #81DD6A;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(109,215,76,0.4);
        }

        .btn-ghost {
          background: transparent;
          color: var(--c-white);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .btn-ghost:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .about-spread { grid-template-columns: 1fr; gap: 48px; }
          .photo-column { min-height: 500px; }
          .text-column { padding: 0; }
        }

        @media (max-width: 640px) {
          .cta-group { flex-direction: column; width: 100%; }
          .btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="about-spread">
        {/* LEFT COLUMN: Editorial Photo */}
        <div 
          className="photo-column reveal"
          style={{ transitionDelay: '0ms' }}
        >
          <img src={portrait} alt="Trinadh Kondapalli" className="photo-img" />
          <div className="photo-vignette" />
        </div>

        {/* RIGHT COLUMN: Manifesto & Values */}
        <div className="text-column">
          
          <div
            className="manifesto reveal"
            style={{ transitionDelay: '100ms' }}
          >
            I build digital products that make people feel something.
          </div>

          <div className="values-list">
            {values.map((val, i) => (
              <div 
                key={i}
                className="value-item reveal"
                style={{ transitionDelay: `${200 + (i * 100)}ms` }}
              >
                <div className="value-text">
                  <span className="value-title">{val.title}</span>
                  <span className="value-desc">{val.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="cta-group reveal"
            style={{ transitionDelay: '500ms' }}
          >
            <GlobalMagneticButton
              className="btn btn-solid"
              onClick={() => window.location.href = '#contact'}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600,
                border: '1px solid var(--c-primary)'
              }}
            >
              Book a call
              <ArrowRight size={18} strokeWidth={2.5} />
            </GlobalMagneticButton>
            <a href="/cv.pdf" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              Download CV
              <Download size={18} strokeWidth={2.5} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
