import Reveal from './Reveal';

const philosophies = [
  {
    title: 'Think first',
    desc: 'Great design starts with deep understanding. Strategy, architecture, and user psychology before a single pixel is drawn.',
    tag: 'Strategy · Research'
  },
  {
    title: 'Ship fast',
    desc: 'Speed to market is a feature. Modern frameworks and lean processes deliver quality without the bloat.',
    tag: 'React · Next.js'
  },
  {
    title: 'Iterate always',
    desc: 'Launch is the starting line. Continuous refinement on real data ensures the product grows with its users.',
    tag: 'Analytics · A/B'
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
          max-width: 1440px;
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
          padding-left: 10vw; /* Indent for rhythm */
        }
        
        .headline-accent {
          color: var(--c-primary);
          padding-left: 5vw;
        }

        .philosophy-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.06); /* Creates 1px dividers */
          gap: 1px;
          border-radius: 24px;
          overflow: hidden;
        }

        .phil-card {
          padding: 28px 24px;
          background: #0d1f0d;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: background 0.4s ease;
        }

        .phil-card:hover {
          background: #0f260f;
        }

        .phil-index {
          font-family: var(--font-sans);
          font-size: 11px;
          color: rgba(100,220,100,0.5);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 600;
        }

        .phil-title {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 700;
          color: var(--c-white);
          margin-top: 20px;
          margin-bottom: 0;
          line-height: 1.2;
        }

        .phil-desc {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          margin-top: 12px;
          margin-bottom: 32px;
        }
        
        .phil-tag {
          margin-top: auto;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: rgba(100,220,100,0.7);
          border: 0.5px solid rgba(100,220,100,0.25);
          border-radius: 20px;
          padding: 6px 12px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .headline-line { letter-spacing: -2px; }
          .philosophy-cards { grid-template-columns: 1fr; border: none; background: transparent; gap: 0; }
          .phil-card { border: 1px solid rgba(255,255,255,0.06); border-bottom: none; }
          .phil-card:last-child { border-bottom: 1px solid rgba(255,255,255,0.06); }
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
            <Reveal key={i} delay={500 + (i * 100)}>
              <div className="phil-card">
                <div className="phil-index">0{i + 1}</div>
                <h3 className="phil-title">{phil.title}</h3>
                <p className="phil-desc">{phil.desc}</p>
                <div className="phil-tag">{phil.tag}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
