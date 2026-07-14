import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const processSteps = [
  {
    num: '01',
    title: 'Obsessive discovery',
    desc: 'I spend the first week asking questions, not making decisions. Every project starts with a deep-dive session to uncover not just what you want, but why.',
    deliverables: ['Brief', 'Competitive audit', 'User research']
  },
  {
    num: '02',
    title: 'Strategic architecture',
    desc: 'Information architecture before pixels. I map every user flow so no design decision is ever arbitrary.',
    deliverables: ['Sitemap', 'User flows', 'Content hierarchy']
  },
  {
    num: '03',
    title: 'Pixel-perfect UI',
    desc: 'Every component is on a 4px grid with defined tokens for color, type, and spacing. Nothing is guessed.',
    deliverables: ['Design system', 'Hi-fi mockups', 'Interactive prototype']
  },
  {
    num: '04',
    title: 'Flawless execution',
    desc: 'I stay in the room during build. Handoff is a collaboration, not a file dump.',
    deliverables: ['Responsive build', 'QA checklist', 'Launch']
  }
];

export default function DesignProcess() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default open first

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
      background: 'var(--c-base)' // Keep it dark
    }}>
      <style>{`
        .process-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
        }

        .accordion-row {
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          border-left: 2px solid transparent;
          cursor: pointer;
          transition: border-color 0.35s ease;
        }

        /* Top border on the first row */
        .accordion-row:first-child {
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* Active row gets a green left border */
        .accordion-row.active {
          border-left: 2px solid #6ddc6d;
        }

        .accordion-header {
          display: grid;
          grid-template-columns: 80px 1fr 80px;
          align-items: center;
          padding: 32px 0;
          transition: padding 0.4s ease;
        }

        /* When open, increase top padding slightly for breathing room */
        .accordion-row.active .accordion-header {
          padding-top: 40px;
          padding-bottom: 24px;
        }

        .step-num {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          transition: color 0.4s ease;
          text-align: left;
        }

        .accordion-row.active .step-num {
          color: rgba(109,215,76,0.8);
        }

        .step-title {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 700;
          color: rgba(255,255,255,0.8);
          letter-spacing: -0.5px;
          transition: color 0.4s ease;
          text-align: center;
        }

        .accordion-row.active .step-title {
          color: var(--c-white);
        }

        .icon-wrap {
          display: flex;
          justify-content: flex-end;
          color: rgba(255,255,255,0.5);
          transition: color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-row:hover .icon-wrap {
          color: var(--c-white);
        }

        .accordion-row.active .icon-wrap {
          color: var(--c-primary);
          transform: rotate(180deg);
        }

        .accordion-content-inner {
          padding-left: 80px;
          padding-right: 80px;
          padding-bottom: 40px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 64px;
        }

        .step-desc {
          font-family: var(--font-sans);
          font-size: 20px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }

        .deliverables-title {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--c-primary);
          margin-bottom: 24px;
        }

        .deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .deliverable-item {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .deliverable-bullet {
          display: none;
        }

        @media (max-width: 1024px) {
          .accordion-content-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .accordion-header {
            grid-template-columns: 60px 1fr 40px;
            padding: 32px 0;
          }
          .accordion-row.active .accordion-header {
            padding-top: 40px;
            padding-bottom: 24px;
          }
          .step-num { font-size: 24px; }
          .accordion-content-inner {
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 40px;
          }
          .step-desc { font-size: 18px; }
        }
      `}</style>

      {/* Eyebrow Pill */}
      <div 
        className="reveal"
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

      {/* Headline */}
      <h2 
        className="reveal"
        style={{
          transitionDelay: '100ms',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 800,
          color: 'var(--c-white)',
          textAlign: 'center',
          letterSpacing: '-2px',
          marginBottom: 80,
          lineHeight: 1.1,
          maxWidth: 800
        }}
      >
        A Clear Process For Every{' '}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Successful Project.
        </span>
      </h2>

      {/* Interactive Accordion */}
      <div className="process-container">
        {processSteps.map((step, i) => {
          const isActive = expandedIndex === i;

          return (
            <div
              key={i}
              className={`accordion-row ${isActive ? 'active' : ''}`}
              onClick={() => toggleAccordion(i)}
            >
              {/* Row Header (Always Visible) */}
              <div className="accordion-header">
                <div className="step-num">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <div className="icon-wrap">
                  {isActive ? <Minus size={28} strokeWidth={1.5} /> : <Plus size={28} strokeWidth={1.5} />}
                </div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="accordion-content-inner">
                      
                      {/* Left: 2-Sentence Explanation */}
                      <p className="step-desc">
                        {step.desc}
                      </p>

                      {/* Right: Deliverables List */}
                      <div>
                        <div className="deliverables-title" style={{ marginBottom: 16 }}>Deliverables:</div>
                        <div className="deliverables-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                          {step.deliverables.map((item, idx) => (
                            <div key={idx} className="deliverable-item">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
