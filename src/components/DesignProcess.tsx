import { motion } from 'framer-motion';
import { Compass, Lightbulb, Waypoints, Layout, Code, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Understanding your business, users, and project goals.',
    icon: Compass
  },
  {
    num: '02',
    title: 'Research',
    desc: 'Analyzing competitors, users, and opportunities.',
    icon: Lightbulb
  },
  {
    num: '03',
    title: 'UX Strategy',
    desc: 'Creating user flows, information architecture, and wireframes.',
    icon: Waypoints
  },
  {
    num: '04',
    title: 'UI Design',
    desc: 'Designing modern, intuitive, and visually engaging interfaces.',
    icon: Layout
  },
  {
    num: '05',
    title: 'Development',
    desc: 'Building responsive, high-performance frontend experiences.',
    icon: Code
  },
  {
    num: '06',
    title: 'Launch',
    desc: 'Final testing, optimization, and project delivery.',
    icon: Rocket
  }
];

export default function DesignProcess() {
  return (
    <section id="process" style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .process-container {
          position: relative;
          width: 100%;
          max-width: 1280px;
          margin-top: 40px;
        }

        /* The glowing connecting line */
        .process-line {
          position: absolute;
          top: 32px; /* aligns with center of icons */
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(90deg, rgba(109,215,76,0) 0%, rgba(109,215,76,0.5) 20%, rgba(109,215,76,0.5) 80%, rgba(109,215,76,0) 100%);
          box-shadow: 0 0 20px 2px rgba(109,215,76,0.3);
          z-index: 0;
        }

        .process-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
        }

        .process-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px 32px;
          border-radius: 32px;
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(109,215,76,0.05);
          text-align: center;
          cursor: default;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .process-card:hover {
          transform: translateY(-8px);
          border-color: rgba(109,215,76,0.3);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15);
        }

        .process-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(8, 21, 9, 0.9);
          border: 1px solid rgba(109,215,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -72px; /* Pull icon up to intersect line */
          margin-bottom: 32px;
          box-shadow: inset 0 0 20px rgba(109,215,76,0.1), 0 0 20px rgba(8, 21, 9, 1);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease;
        }

        .process-card:hover .process-icon-wrap {
          transform: scale(1.1);
          background: rgba(109,215,76,0.1);
        }

        /* Large Number Watermark */
        .process-num {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-size: 80px;
          font-style: italic;
          font-weight: 800;
          color: rgba(255,255,255,0.02);
          z-index: 0;
          pointer-events: none;
        }

        .process-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-grow: 1;
        }

        .process-title {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .process-desc {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .process-title { font-size: 18px; }
          .process-desc { font-size: 13px; }
          .process-grid { gap: 16px; }
        }

        @media (max-width: 1024px) {
          .process-line { display: none; } /* Hide horizontal line on tablet */
          .process-grid { grid-template-columns: repeat(2, 1fr); gap: 48px 24px; }
          .process-icon-wrap { margin-top: -64px; }
          .process-container { margin-top: 60px; }
        }

        @media (max-width: 640px) {
          .process-grid { grid-template-columns: 1fr; gap: 48px 0; }
          
          /* Create a vertical line for mobile */
          .process-grid::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            background: linear-gradient(180deg, rgba(109,215,76,0) 0%, rgba(109,215,76,0.3) 10%, rgba(109,215,76,0.3) 90%, rgba(109,215,76,0) 100%);
            z-index: 0;
          }
        }
      `}</style>

      {/* Eyebrow Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '6px 16px',
          background: 'var(--rgba-dark-06)',
          border: '1px solid var(--rgba-white-03)',
          borderRadius: 100,
          marginBottom: 32
        }}
      >
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
          MY PROCESS
        </span>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
      </motion.div>

      {/* Headline */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(40px, 5vw, 72px)',
          fontWeight: 800,
          color: 'var(--c-white)',
          textAlign: 'center',
          letterSpacing: '-2px',
          marginBottom: 32,
          lineHeight: 1.1
        }}
      >
        A Clear Process <br/>
        For Every <br/>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px'
        }}>
          Successful Project.
        </span>
      </motion.h2>

      {/* Subhead */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 20,
          color: 'rgba(255,255,255,0.72)',
          textAlign: 'center',
          maxWidth: 760,
          lineHeight: 1.6,
          marginBottom: 80
        }}
      >
        Every successful project follows a structured process. From understanding your goals to delivering a polished final product, every step is focused on creating meaningful digital experiences.
      </motion.p>

      {/* Timeline Container */}
      <div className="process-container">
        {/* The horizontal glowing line for desktop */}
        <motion.div 
          className="process-line"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ originX: 0 }}
        />

        <div className="process-grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="process-card"
            >
              {/* Floating Icon intersecting the timeline */}
              <div className="process-icon-wrap">
                <step.icon size={28} color="var(--c-primary)" strokeWidth={1.5} />
              </div>

              {/* Watermark Number */}
              <div className="process-num">{step.num}</div>

              {/* Text Content */}
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
