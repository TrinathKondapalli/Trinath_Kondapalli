import Reveal from './Reveal';
import { PenTool, Lightbulb, Rocket, ArrowUpRight } from 'lucide-react';

const philosophies = [
  {
    title: 'Think First',
    desc: 'I start every project with research and strategy to understand the problem before designing the solution.',
    icon: <PenTool size={28} strokeWidth={1.5} color="var(--c-primary)" />
  },
  {
    title: 'Design Smart',
    desc: 'I design intuitive, user-centered interfaces that balance aesthetics with real-world usability.',
    icon: <Lightbulb size={28} strokeWidth={1.5} color="var(--c-primary)" />
  },
  {
    title: 'Execute & Deliver',
    desc: 'I turn ideas into high-quality digital products that are functional, scalable, and ready to perform.',
    icon: <Rocket size={28} strokeWidth={1.5} color="var(--c-primary)" />
  }
];

export default function ProblemsISolve() {
  return (
    <section id="philosophy" style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      padding: '120px 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      background: '#081509',
      overflow: 'hidden'
    }}>
      <style>{`
        /* Dot Grid Background Pattern */
        .philosophy-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.04;
          pointer-events: none;
          z-index: 0;
        }

        .philosophy-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px; /* narrowed slightly for 3 cards */
          display: flex;
          flex-direction: column;
        }

        .headline-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 120px;
        }

        .headline-line {
          font-family: var(--font-sans);
          font-size: clamp(48px, 12vw, 120px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -3px;
          color: var(--c-white);
          text-transform: uppercase;
        }

        .headline-italic {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          color: rgba(255,255,255,0.4);
          text-transform: lowercase;
          letter-spacing: -1px;
          padding-left: 10vw;
        }
        
        .headline-accent {
          color: var(--c-primary);
          padding-left: 5vw;
        }

        .philosophy-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        .phil-card {
          position: relative;
          padding: 48px 32px;
          background: rgba(10, 25, 12, 0.6);
          border: 1px solid rgba(109, 220, 109, 0.15);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden;
        }

        .phil-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: var(--c-primary);
          opacity: 0;
          box-shadow: 0 -10px 40px 10px rgba(109, 220, 109, 0.4);
          transition: opacity 0.4s ease;
        }

        .phil-card:hover {
          transform: translateY(-8px);
          border-color: rgba(109, 220, 109, 0.3);
        }

        .phil-card:hover::after {
          opacity: 1;
        }

        .phil-dot {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 10px var(--c-primary);
        }

        .phil-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(109, 220, 109, 0.05);
          border: 1px solid rgba(109, 220, 109, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 20px rgba(109, 220, 109, 0.1);
        }

        .phil-title {
          font-family: var(--font-sans);
          font-size: 28px;
          font-weight: 700;
          color: var(--c-white);
          margin-top: 32px;
          margin-bottom: 0;
          letter-spacing: -0.5px;
        }

        .phil-divider {
          width: 32px;
          height: 3px;
          background: var(--c-primary);
          border-radius: 2px;
          margin: 20px 0;
        }

        .phil-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-top: 0;
          margin-bottom: 40px;
          flex-grow: 1;
        }

        .phil-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 100px;
          border: 1px solid rgba(109, 220, 109, 0.2);
          background: transparent;
          color: var(--c-primary);
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .phil-btn:hover {
          background: rgba(109, 220, 109, 0.1);
          border-color: rgba(109, 220, 109, 0.4);
        }

        @media (max-width: 1024px) {
          .headline-line { letter-spacing: -2px; }
          .philosophy-cards { grid-template-columns: 1fr; }
          .headline-italic { padding-left: 24px; }
          .headline-accent { padding-left: 12px; }
        }
      `}</style>

      <div className="philosophy-bg" />

      <div className="philosophy-content">
        
        {/* Massive Rhythmic Headline */}
        <div className="headline-wrapper">
          <Reveal delay={0}>
            <div className="headline-line">
              Every
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="headline-line headline-italic">
              problem
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="headline-line headline-accent">
              has a
            </div>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="headline-line headline-italic">
              digital
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="headline-line">
              experience
            </div>
          </Reveal>
        </div>

        {/* 3-Column Philosophy Cards */}
        <div className="philosophy-cards">
          {philosophies.map((phil, i) => (
            <Reveal key={i} delay={500 + (i * 100)} style={{ display: 'flex' }}>
              <div className="phil-card">
                <div className="phil-dot" />
                <div className="phil-icon-wrap">
                  {phil.icon}
                </div>
                <h3 className="phil-title">{phil.title}</h3>
                <div className="phil-divider" />
                <p className="phil-desc">{phil.desc}</p>
                
                <button className="phil-btn">
                  LEARN MORE <ArrowUpRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
