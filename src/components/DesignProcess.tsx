import { useState } from 'react';
import Reveal from './Reveal';
import { 
  Search, Brain, Target, Users, FileText, TrendingUp, Network, 
  Layout, Smartphone, Code, CheckCircle2, Rocket, Paintbrush, Plus 
} from 'lucide-react';

const steps = [
  { 
    title: 'Obsessive discovery', 
    subtitle: 'We start by understanding, not assuming.',
    desc: 'I spend the first week asking questions, not making decisions. Every project starts with a deep-dive session to uncover not just what you want, but why.',
    mainIcon: <Search size={24} />,
    features: [
      { icon: <Brain size={18} />, text: 'Deep\nUnderstanding' },
      { icon: <Target size={18} />, text: 'Clear\nDirection' },
      { icon: <Users size={18} />, text: 'Aligned\nGoals' }
    ],
    deliverables: [
      { icon: <FileText size={18} />, text: 'Brief' },
      { icon: <TrendingUp size={18} />, text: 'Competitive audit' },
      { icon: <Users size={18} />, text: 'User research' }
    ]
  },
  { 
    title: 'Strategic architecture', 
    subtitle: 'We plan with purpose and structure.',
    desc: 'Information architecture before pixels. I map every user flow so no design decision is ever arbitrary.',
    mainIcon: <Network size={24} />,
    features: [
      { icon: <Layout size={18} />, text: 'Logical\nStructure' },
      { icon: <Smartphone size={18} />, text: 'User\nJourneys' },
      { icon: <Code size={18} />, text: 'Scalable\nFoundations' }
    ],
    deliverables: [
      { icon: <Network size={18} />, text: 'Sitemap' },
      { icon: <Layout size={18} />, text: 'User flows' },
      { icon: <FileText size={18} />, text: 'Content hierarchy' }
    ]
  },
  { 
    title: 'Pixel-perfect UI', 
    subtitle: 'We design beautiful, intuitive experiences.',
    desc: 'Every component is on a 4px grid with defined tokens for color, type, and spacing.',
    mainIcon: <Paintbrush size={24} />,
    features: [
      { icon: <Paintbrush size={18} />, text: 'Visual\nLanguage' },
      { icon: <Smartphone size={18} />, text: 'Responsive\nDesign' },
      { icon: <CheckCircle2 size={18} />, text: 'Accessible\nInterfaces' }
    ],
    deliverables: [
      { icon: <Layout size={18} />, text: 'Design system' },
      { icon: <Smartphone size={18} />, text: 'Hi-fi mockups' },
      { icon: <Code size={18} />, text: 'Prototype' }
    ]
  },
  { 
    title: 'Flawless execution', 
    subtitle: 'We build, test, and deliver with precision.',
    desc: 'I stay in the room during build. Handoff is a collaboration, not a file dump.',
    mainIcon: <Rocket size={24} />,
    features: [
      { icon: <Code size={18} />, text: 'Clean\nCodebase' },
      { icon: <CheckCircle2 size={18} />, text: 'Rigorous\nQA' },
      { icon: <Rocket size={18} />, text: 'Smooth\nLaunch' }
    ],
    deliverables: [
      { icon: <Code size={18} />, text: 'Responsive build' },
      { icon: <CheckCircle2 size={18} />, text: 'QA checklist' },
      { icon: <Rocket size={18} />, text: 'Launch' }
    ]
  },
];

export default function DesignProcess() {
  const [open, setOpen] = useState<number | null>(0);

  const AccordionItem = ({ step, index, isOpen, onClick }: any) => {
    return (
      <div className="process-row">
        <div className={`timeline-col ${isOpen ? 'active' : ''}`}>
          <div className="timeline-num">0{index + 1}</div>
        </div>
        
        <div className={`process-card ${isOpen ? 'active' : ''}`}>
          <div className="card-header" onClick={onClick}>
            <div className="card-icon">
              {step.mainIcon}
            </div>
            <div className="card-title-group">
              <div className="card-title">{step.title}</div>
              <div className="card-subtitle">{step.subtitle}</div>
            </div>
            <div className="card-indicator">
              {isOpen ? <div className="active-dot" /> : <Plus size={20} color="rgba(255,255,255,0.4)" />}
            </div>
          </div>
          
          <div 
            style={{ 
              display: 'grid',
              gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <div 
                className="card-body-inner" 
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: isOpen ? '0.1s' : '0s'
                }}
              >
                <div className="card-body-left">
                  <p className="card-desc">{step.desc}</p>
                  <div className="features-row">
                  {step.features.map((f: any, i: number) => (
                    <div key={i} className="feature-box">
                      <div className="feature-icon">{f.icon}</div>
                      <div className="feature-text">{f.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-body-right">
                <div className="deliverables-title">Deliverables</div>
                <div className="deliverables-list">
                  {step.deliverables.map((d: any, i: number) => (
                    <div key={i} className="deliverable-box">
                      <div className="deliverable-icon">{d.icon}</div>
                      <div className="deliverable-text">{d.text}</div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="process" style={{
      position: 'relative',
      width: '100%',
      padding: '160px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--c-base)'
    }}>
      <style>{`
        .process-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 1000px;
        }

        .timeline-master-line {
          position: absolute;
          top: 56px;
          bottom: 56px;
          left: 32px;
          width: 2px;
          background: rgba(255,255,255,0.05);
          z-index: 0;
        }

        .process-row {
          display: flex;
          gap: 32px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .timeline-col {
          position: relative;
          width: 64px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          padding-top: 28px;
        }

        .timeline-num {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--c-base);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .timeline-col.active .timeline-num {
          border-color: rgba(109,220,109,0.5);
          color: white;
          box-shadow: 0 0 20px rgba(109,220,109,0.2), inset 0 0 10px rgba(109,220,109,0.1);
        }

        .process-card {
          flex-grow: 1;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .process-card:hover:not(.active) {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.08);
        }

        .process-card.active {
          background: rgba(10, 25, 12, 0.4);
          border-color: rgba(109,220,109,0.3);
          box-shadow: 0 10px 40px rgba(109,220,109,0.05);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 32px;
          cursor: pointer;
        }

        .card-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.3);
          transition: all 0.4s ease;
        }

        .card-header:hover .card-icon {
          background: rgba(109,220,109,0.05);
          color: var(--c-primary);
          border-color: rgba(109,220,109,0.25);
          box-shadow: 0 0 15px rgba(109,220,109,0.15), inset 0 0 10px rgba(109,220,109,0.05);
        }

        .process-card.active .card-icon,
        .process-card.active .card-header:hover .card-icon {
          background: rgba(109,220,109,0.05);
          border-color: rgba(109,220,109,0.3);
          color: var(--c-primary);
          box-shadow: 0 0 20px rgba(109,220,109,0.2), inset 0 0 10px rgba(109,220,109,0.1);
        }

        .card-title-group {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-title {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 700;
          color: white;
          letter-spacing: -0.5px;
        }

        .card-subtitle {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255,255,255,0.4);
          transition: color 0.4s ease;
        }

        .process-card.active .card-subtitle {
          color: var(--c-primary);
        }

        .card-indicator {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-card:not(.active) .card-indicator {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .process-card:not(.active):hover .card-indicator {
          background: rgba(255,255,255,0.05);
        }

        .active-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 12px var(--c-primary);
        }

        .card-body-inner {
          padding: 0 32px 32px 32px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
        }

        .card-desc {
          font-family: var(--font-sans);
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-top: 0;
          margin-bottom: 32px;
        }

        .features-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .feature-box {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .feature-icon {
          color: var(--c-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-text {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          line-height: 1.4;
          white-space: pre-line;
        }

        .deliverables-title {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--c-primary);
          margin-bottom: 20px;
        }

        .deliverables-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .deliverable-box {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .deliverable-icon {
          color: var(--c-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .deliverable-text {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: var(--c-white);
        }

        @media (max-width: 1024px) {
          .card-body-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .process-row { gap: 16px; }
          .timeline-col { width: 48px; }
          .timeline-num { width: 36px; height: 36px; font-size: 13px; }
          .timeline-master-line { left: 24px; }
          .card-header { padding: 20px; gap: 16px; }
          .card-icon { width: 48px; height: 48px; }
          .card-title { font-size: 18px; }
          .card-subtitle { font-size: 13px; }
          .card-body-inner { padding: 0 20px 20px 20px; }
          .features-row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Eyebrow Pill */}
      <Reveal>
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 16px',
            background: 'var(--rgba-dark-06)',
            border: '1px solid var(--rgba-white-03)',
            borderRadius: 100,
            marginBottom: 80
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
            HOW I WORK
          </span>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        </div>
      </Reveal>

      {/* Interactive Process List */}
      <div className="process-container">
        <div className="timeline-master-line" />
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <AccordionItem 
              step={s} 
              index={i} 
              isOpen={open === i} 
              onClick={() => setOpen(open === i ? null : i)} 
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
