import Reveal from './Reveal';
import StatNumber from './StatNumber';

const skills = [
  {
    type: 'large',
    label: 'Core expertise',
    title: 'UX/UI & Web Design',
    desc: 'Pixel-perfect interfaces built on user psychology and modern aesthetics. Wireframes to high-converting landing pages.',
    pills: ['Figma', 'Framer', 'Webflow', 'Prototyping'],
    stat: { value: 40, suffix: '+', label: 'interfaces shipped' },
    className: 'bento-large',
  },
  {
    type: 'small',
    label: 'React & Next.js',
    title: 'Frontend Dev',
    pills: ['React', 'TypeScript', 'Tailwind'],
    className: 'bento-small',
  },
  {
    type: 'small',
    label: 'Visual identity',
    title: 'Graphic Design',
    pills: ['Illustrator', 'Branding'],
    className: 'bento-small',
  },
  {
    type: 'wide',
    label: 'Storytelling',
    title: 'Video & Motion',
    desc: 'After Effects, Premiere, and motion design that gives interfaces a heartbeat.',
    className: 'bento-wide',
  }
];

export default function SkillsAndTools() {
  return (
    <section id="skills" style={{
      position: 'relative',
      width: '100%',
      padding: '160px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--c-base)',
      overflow: 'hidden'
    }}>
      <style>{`
        /* Subtle Background Grid Pattern */
        .skills-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          background-position: center center;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, minmax(200px, auto));
          gap: 8px;
          width: 100%;
          max-width: 1200px;
          position: relative;
          z-index: 10;
        }

        .bento-large { grid-column: span 1; grid-row: span 2; }
        .bento-small { grid-column: span 1; grid-row: span 1; }
        .bento-wide  { grid-column: span 2; grid-row: span 1; }

        .skill-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 22px;
          border-radius: 12px;
          border: 0.5px solid rgba(255,255,255,0.07);
          background: #0f2210;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
          height: 100%;
        }

        .skill-card:hover {
          transform: translateY(-4px);
          border-color: rgba(109,215,76,0.2);
        }

        .card-label {
          font-family: var(--font-sans);
          font-size: 10px;
          text-transform: uppercase;
          color: var(--c-primary);
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .card-title {
          font-family: var(--font-sans);
          color: var(--c-white);
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .bento-large .card-title {
          font-size: 22px;
          margin-top: 16px;
          margin-bottom: 12px;
        }

        .bento-small .card-title {
          font-size: 18px;
          margin-top: 12px;
          margin-bottom: 16px;
        }

        .card-desc {
          font-family: var(--font-sans);
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .pill-group {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .skill-pill {
          font-family: var(--font-sans);
          font-size: 10px;
          padding: 4px 10px;
          border: 0.5px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          color: rgba(255,255,255,0.6);
          white-space: nowrap;
        }

        .card-stat {
          margin-top: 24px;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        /* Wide card specific layout */
        .bento-wide {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .wide-content {
          display: flex;
          flex-direction: column;
          max-width: 75%;
        }

        .wide-content .card-title {
          font-size: 18px;
          margin-top: 12px;
          margin-bottom: 8px;
        }
        
        .wide-content .card-desc {
          margin-bottom: 0;
        }

        .wide-deco {
          font-size: 42px;
          color: rgba(100,220,100,0.12);
          line-height: 1;
        }

        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
          .bento-large, .bento-small, .bento-wide { grid-column: span 1; grid-row: auto; }
          .bento-wide { flex-direction: column; align-items: flex-start; }
          .wide-content { max-width: 100%; }
          .wide-deco { display: none; }
        }
      `}</style>

      {/* Grid Pattern Background */}
      <div className="skills-bg-pattern" />

      {/* Eyebrow Pill */}
      <Reveal>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 16px',
            background: 'var(--rgba-dark-06)',
            border: '1px solid var(--rgba-white-03)',
            borderRadius: 100,
            marginBottom: 40,
            position: 'relative',
            zIndex: 10
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
            SKILLS & ARSENAL
          </span>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        </div>
      </Reveal>

      {/* Asymmetric Bento Grid */}
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <Reveal key={i} delay={i * 100} style={{ height: '100%' }}>
            <div className={`skill-card ${skill.className}`}>
              {skill.type === 'wide' ? (
                <>
                  <div className="wide-content">
                    <div className="card-label">{skill.label}</div>
                    <h3 className="card-title">{skill.title}</h3>
                    <p className="card-desc">{skill.desc}</p>
                  </div>
                  <div className="wide-deco">▶</div>
                </>
              ) : (
                <>
                  <div className="card-label">{skill.label}</div>
                  <h3 className="card-title">{skill.title}</h3>
                  
                  {skill.desc && (
                    <p className="card-desc">{skill.desc}</p>
                  )}
                  
                  {skill.pills && (
                    <div className="pill-group">
                      {skill.pills.map((pill, j) => (
                         <div key={j} className="skill-pill">{pill}</div>
                      ))}
                    </div>
                  )}
                  
                  {skill.stat && (
                    <div className="card-stat">
                      <StatNumber value={skill.stat.value} suffix={skill.stat.suffix} label={skill.stat.label} />
                    </div>
                  )}
                </>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
