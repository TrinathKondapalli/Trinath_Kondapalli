import Reveal from './Reveal';

const servicesList = [
  { num: '01', title: 'UX/UI Design', tag: 'DIGITAL PRODUCTS', subtitle: '' },
  { num: '02', title: 'Website Design & Development', tag: 'DESIGN TO LIVE', subtitle: 'Design-to-live builds using AI-accelerated workflows.' },
  { num: '03', title: 'Interactive & Motion-Led Web', tag: 'SCROLL & MOTION', subtitle: 'Scroll animations, micro-interactions, and page transitions.' }
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
          margin: 0 auto;
          padding: 48px 24px;
          border-radius: 24px;
          cursor: pointer;
          transition: background 0.4s ease;
          overflow: hidden;
        }

        .service-row:hover {
          background: rgba(255,255,255,0.02);
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
          font-size: clamp(32px, 6vw, 56px);
          font-weight: 700;
          letter-spacing: -1px;
          color: var(--c-white);
          text-align: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease;
        }

        .service-row:hover .service-title {
          transform: translateX(20px);
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
          .service-content {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service-row {
            padding: 32px 16px;
          }
          .service-row:hover {
            background: transparent;
          }
          .service-row:hover .service-title {
            transform: translateX(10px);
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

      {/* De-emphasized secondary skills note */}
      <Reveal delay={300}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.4)',
          marginTop: '64px',
          textAlign: 'center'
        }}>
          Also comfortable with: graphic design, video editing
        </p>
      </Reveal>
    </section>
  );
}

function ServiceRow({ service, index }: { service: any, index: number }) {
  return (
    <Reveal delay={index * 80} style={{ width: '100%' }}>
      <div className={`service-row${index === 0 ? ' is-first' : ''}`}>
        <div className="service-content">
          <div className="service-num">{service.num}</div>
          <div>
            <div className="service-title">{service.title}</div>
            {service.subtitle && (
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '8px',
                lineHeight: 1.5
              }}>
                {service.subtitle}
              </p>
            )}
          </div>
          <div className="service-tag">{service.tag}</div>
        </div>
      </div>
    </Reveal>
  );
}
