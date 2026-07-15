import Reveal from './Reveal';

const servicesList = [
  { num: '01', title: 'UX/UI Design', tag: 'Digital Products' },
  { num: '02', title: 'Website Design', tag: 'High-Converting' },
  { num: '03', title: 'Frontend Dev', tag: 'React & Next.js' },
  { num: '04', title: 'Graphic Design', tag: 'Brand Identity' },
  { num: '05', title: 'Video Editing', tag: 'Motion Graphics' }
];

export default function Services() {
  return (
    <section id="services" style={{
      position: 'relative',
      width: '100%',
      padding: '160px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: '#081509' // matching hero
    }}>
      <style>{`
        .service-row {
          position: relative;
          width: 100%;
          max-width: 1200px;
          padding: 48px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: padding 0.4s ease;
          overflow: hidden;
        }

        .service-row:first-of-type {
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .service-row:hover {
          padding: 48px 24px;
        }

        .service-content {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .service-num {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 400;
          color: rgba(255,255,255,0.2);
          transition: color 0.4s ease;
        }

        .service-row:hover .service-num {
          color: var(--c-primary);
        }

        .service-title {
          font-family: var(--font-sans);
          font-size: clamp(32px, 8vw, 56px);
          font-weight: 700;
          letter-spacing: -1.5px;
          color: var(--c-white);
          text-align: center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease;
        }

        .service-row:hover .service-title {
          transform: scale(1.02);
          color: var(--c-white);
        }

        .service-tag {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 100px;
          transition: border-color 0.4s ease, color 0.4s ease;
        }

        .service-row:hover .service-tag {
          border-color: rgba(109,215,76,0.3);
          color: var(--c-primary);
        }

        .fog-container {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .service-row:hover .fog-container {
          opacity: 1;
        }

        /* SVG Noise Filter for Smoke Texture */
        .smoke-noise {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .dominant-availability {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 80px;
        }

        .dominant-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 20px var(--c-primary);
          animation: dominant-pulse 2s infinite ease-in-out;
        }

        @keyframes dominant-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.85); opacity: 0.6; }
        }

        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 32px 0;
          }
          .service-row:hover {
            padding: 32px 16px;
          }
          .service-row:hover .service-title {
            transform: scale(1.02);
          }
          .service-tag {
            justify-self: start;
          }
        }
      `}</style>



      {/* Dominant Availability Signal */}
      <Reveal delay={0}>
        <div className="dominant-availability">
          <div className="dominant-dot" />
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            color: 'var(--c-white)',
            letterSpacing: '-1px',
            margin: 0
          }}>
            Available for work
          </h2>
        </div>
      </Reveal>

      {/* Bold Typographic Services List */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {servicesList.map((service, i) => (
          <ServiceRow 
            key={i} 
            service={service} 
            index={i} 
          />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: any, index: number }) {
  return (
    <Reveal delay={index * 80} style={{ width: '100%' }}>
      <div className="service-row">
        <div className="service-content">
          <div className="service-num">{service.num}</div>
          <div className="service-title">{service.title}</div>
          <div className="service-tag">{service.tag}</div>
        </div>
      </div>
    </Reveal>
  );
}
