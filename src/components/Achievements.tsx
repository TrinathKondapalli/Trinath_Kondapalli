import Reveal from './Reveal';
import { Layers, Code2, Component, Route, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    num: '01',
    metric: '5+',
    isTextMetric: false,
    label: 'SaaS Workflows',
    context: 'Designed user flows and high-fidelity interfaces for 5+ SaaS workflows at InterviewBuddy.',
    icon: Layers,
    progress: 75
  },
  {
    num: '02',
    metric: '15%',
    isTextMetric: false,
    label: 'Less Developer Rework',
    context: 'Clear design documentation helped reduce developer rework by 15%.',
    icon: Code2,
    progress: 45
  },
  {
    num: '03',
    metric: 'REUSABLE',
    isTextMetric: true,
    label: 'Design Systems',
    context: 'Built reusable components and consistent UI patterns that make products easier to scale.',
    icon: Component,
    progress: 90
  },
  {
    num: '04',
    metric: 'E2E',
    isTextMetric: true,
    label: 'Product Design',
    context: 'Worked from user journeys and wireframes through high-fidelity and responsive UI.',
    icon: Route,
    progress: 60
  }
];

export default function Achievements() {
  return (
    <section id="achievements" style={{
      position: 'relative',
      width: '100%',
      padding: '60px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .ach-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        .ach-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 16px;
        }

        .ach-title {
          font-family: var(--font-sans);
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 700;
          color: var(--c-white);
          letter-spacing: -1px;
        }

        .ach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .ach-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .ach-grid {
            grid-template-columns: 1fr;
          }
        }

        .ach-card {
          background: rgba(9, 16, 10, 0.4);
          border: 1px solid rgba(109, 215, 76, 0.15);
          border-radius: 24px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          position: relative;
          box-shadow: 0 0 40px rgba(109, 215, 76, 0.05);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          min-height: 380px;
        }

        .ach-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(109,215,76,0.2), transparent 40%, transparent 60%, rgba(109,215,76,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background 0.4s ease;
        }

        .ach-card:hover {
          background: rgba(14, 22, 15, 0.6);
          border-color: rgba(109, 215, 76, 0.4);
          transform: translateY(-6px);
        }
        
        .ach-card:hover::before {
          background: linear-gradient(135deg, rgba(109,215,76,0.4), transparent 30%, transparent 70%, rgba(109,215,76,0.1));
        }

        .ach-icon-container {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(109,215,76,0.15);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          transition: all 0.4s ease;
        }

        .ach-card:hover .ach-icon-container {
          box-shadow: 0 0 20px rgba(109,215,76,0.2);
          border-color: rgba(109,215,76,0.3);
        }

        .ach-metric {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 48px;
          font-weight: 700;
          color: var(--c-primary);
          line-height: 1;
          margin-bottom: 16px;
          height: 48px;
          display: flex;
          align-items: center;
        }
        
        .ach-metric.text-metric {
          font-size: 28px;
          letter-spacing: 1px;
        }

        .ach-label {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 24px;
          height: 24px;
          display: flex;
          align-items: center;
        }

        .ach-divider-container {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin-bottom: 24px;
          position: relative;
          width: 100%;
        }

        .ach-divider-glow {
          position: absolute;
          left: 0;
          top: 0;
          height: 1px;
          width: 50%;
          background: linear-gradient(to right, var(--c-primary), transparent);
          box-shadow: 0 0 10px var(--c-primary);
          opacity: 0.5;
          transition: opacity 0.4s ease;
        }
        
        .ach-card:hover .ach-divider-glow {
          opacity: 1;
        }

        .ach-context {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          min-height: 80px;
        }
      `}</style>

      <div className="ach-container">
        <div className="ach-header">
          <Reveal delay={0}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
              <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>DESIGN IN PRACTICE</div>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
            </div>
            <h2 className="ach-title">Proof behind the work.</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16, fontSize: 16, maxWidth: 600, margin: '16px auto 0' }}>
              I turn user needs and product goals into clear interfaces, scalable systems, and designs that are easier for teams to build.
            </p>
          </Reveal>
        </div>

        <div className="ach-grid">
          {achievements.map((ach, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="ach-card">
                
                <div className="ach-icon-container">
                  <svg width="64" height="64" style={{ position: 'absolute', top: -1, left: -1, overflow: 'visible', transform: 'rotate(-90deg)' }}>
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="31"
                      fill="transparent"
                      stroke="var(--c-primary)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: ach.progress / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.15 + 0.2 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: ach.progress * 3.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.15 + 0.2 }}
                    style={{ position: 'absolute', top: -1, left: -1, width: 64, height: 64 }}
                  >
                    <div style={{ 
                      position: 'absolute', 
                      top: -2, 
                      left: '50%', 
                      transform: 'translateX(-50%)', 
                      width: 6, 
                      height: 6, 
                      borderRadius: '50%', 
                      background: 'var(--c-white)', 
                      boxShadow: '0 0 12px var(--c-primary)' 
                    }} />
                  </motion.div>
                  <ach.icon size={24} color="var(--c-primary)" strokeWidth={1.5} />
                </div>

                <div className={`ach-metric ${ach.isTextMetric ? 'text-metric' : ''}`}>{ach.metric}</div>
                <div className="ach-label">{ach.label}</div>

                <div className="ach-divider-container">
                  <div className="ach-divider-glow" />
                </div>

                <div className="ach-context">{ach.context}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
