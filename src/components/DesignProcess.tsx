import { useState } from 'react';
import Reveal from './Reveal';

const steps = [
  { title:'Obsessive discovery', desc:'I spend the first week asking questions, not making decisions. Every project starts with a deep-dive session to uncover not just what you want, but why.', deliverables:['Brief','Competitive audit','User research'] },
  { title:'Strategic architecture', desc:'Information architecture before pixels. I map every user flow so no design decision is ever arbitrary.', deliverables:['Sitemap','User flows','Content hierarchy'] },
  { title:'Pixel-perfect UI', desc:'Every component is on a 4px grid with defined tokens for color, type, and spacing.', deliverables:['Design system','Hi-fi mockups','Prototype'] },
  { title:'Flawless execution', desc:'I stay in the room during build. Handoff is a collaboration, not a file dump.', deliverables:['Responsive build','QA checklist','Launch'] },
];

export default function DesignProcess() {
  const [open, setOpen] = useState<number | null>(null);

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
            padding: 24px 0;
            min-height: 56px;
            align-items: center;
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

      {/* Headline */}
      <Reveal delay={100}>
        <h2 
          style={{
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
      </Reveal>

      {/* Interactive Accordion */}
      <div className="process-container" style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column' }}>
        {steps.map((s, i) => (
          <div key={i} onClick={() => setOpen(open===i?null:i)}
            style={{borderBottom:'1px solid rgba(255,255,255,0.08)',padding:'20px 0',cursor:'pointer',
              borderLeft: open===i ? '2px solid #6ddc6d' : '2px solid transparent',
              paddingLeft: open===i ? 20 : 0, transition:'all 0.2s'}}>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'24px',fontWeight:'500', color: 'var(--c-white)'}}>
              {s.title}
              <span>{open===i?'−':'+'}</span>
            </div>
            {open===i && (
              <div style={{paddingTop:'16px',color:'rgba(255,255,255,0.6)',fontSize:'16px',lineHeight:'1.6'}}>
                <p style={{marginBottom:'16px'}}>{s.desc}</p>
                <div style={{display:'flex',gap:'8px', flexWrap: 'wrap'}}>
                  {s.deliverables.map((d, idx)=>(
                    <span key={idx} style={{padding:'4px 12px',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'20px',fontSize:'12px', color: 'var(--c-white)'}}>{d}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
