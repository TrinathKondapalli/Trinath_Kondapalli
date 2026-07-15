import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const ChatGraphic = () => (
  <div className="chat-graphic">
    {/* Glowing orb behind */}
    <div className="chat-orb" />
    
    {/* Back bubble */}
    <div className="chat-bubble back">
      <div className="chat-dot" />
      <div className="chat-dot" />
      <div className="chat-dot" />
      {/* Triangle pointer */}
      <div className="chat-pointer back-pointer" />
    </div>

    {/* Front bubble */}
    <div className="chat-bubble front">
      <div className="chat-dot" />
      <div className="chat-dot" />
      <div className="chat-dot" />
      {/* Triangle pointer */}
      <div className="chat-pointer front-pointer" />
    </div>
  </div>
);

const faqs = [
  {
    question: "How do I know we're a good fit before committing?",
    answer: "Every project begins with a free 30-minute discovery call.\nNo pitch — just a real conversation to see if we align.\nIf I'm not the right fit, I'll honestly let you know."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Most projects run 4–8 weeks. A landing page is 2 weeks. A full product with design system is 6–10. You'll get a precise breakdown in the discovery call.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes. Some of my best work is with pre-seed founders building their first product. Budget-conscious doesn't mean low-quality.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "Every project includes 2 revision rounds and a 30-day post-launch support window.",
  },
  {
    question: "Do you build it yourself or hand off to developers?",
    answer: "Both. I write React + Tailwind, or deliver a complete Figma handoff spec any developer can build from.",
  }
];

function FAQItem({ faq, index, isOpen, toggleOpen }: { faq: any, index: number, isOpen: boolean, toggleOpen: () => void }) {
  const num = (index + 1).toString().padStart(2, '0');

  return (
    <div className={`faq-card ${isOpen ? 'active' : ''}`}>
      <div className="faq-header" onClick={toggleOpen}>
        <div className={`faq-num-circle ${isOpen ? 'active' : ''}`}>{num}</div>
        <h3 className="faq-title">{faq.question}</h3>
        <div className={`faq-toggle ${isOpen ? 'active' : ''}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-body-inner">
              <div className="faq-body-line" />
              <div className="faq-body-content">
                <div className="faq-body-left">
                  <p className="faq-answer">
                    {faq.answer.split('\n').map((line: string, i: number) => (
                      <span key={i}>{line}<br/></span>
                    ))}
                  </p>
                  
                  {faq.features && (
                    <div className="faq-features">
                      {faq.features.map((f: any, i: number) => (
                        <div key={i} className="faq-feature-box">
                          <div className="faq-feature-icon">{f.icon}</div>
                          <div className="faq-feature-text">
                            <div className="faq-feature-title">{f.title}</div>
                            <div className="faq-feature-desc">{f.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {faq.graphic && (
                  <div className="faq-graphic-wrap">
                    <ChatGraphic />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{
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
        .faq-container {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-card {
          background: rgba(10, 25, 12, 0.3);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .faq-card:hover:not(.active) {
          border-color: rgba(255,255,255,0.1);
          background: rgba(10, 25, 12, 0.5);
        }

        .faq-card.active {
          background: rgba(10, 25, 12, 0.6);
          border: 1px solid rgba(109,220,109,0.2);
          border-top: 1px solid rgba(109,220,109,0.8);
          box-shadow: 0 -10px 40px rgba(109,220,109,0.1), inset 0 30px 50px -20px rgba(109,220,109,0.2);
        }

        .faq-header {
          display: flex;
          align-items: center;
          padding: 24px 32px;
          gap: 24px;
          cursor: pointer;
        }

        .faq-num-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          font-style: italic;
          font-size: 15px;
          font-weight: 600;
          color: var(--c-primary);
          border: 1px solid rgba(109,220,109,0.3);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .faq-num-circle.active {
          background: var(--c-primary);
          color: #000;
          box-shadow: 0 0 15px rgba(109,220,109,0.4);
        }

        .faq-title {
          flex-grow: 1;
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .faq-toggle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .faq-toggle.active {
          background: rgba(109,220,109,0.15);
          border-color: rgba(109,220,109,0.5);
          color: var(--c-primary);
        }

        .faq-body-inner {
          position: relative;
          padding: 0 32px 32px 32px;
        }

        .faq-body-line {
          position: absolute;
          left: 54px; /* 32px padding + 22px (half of 44px circle) */
          top: 0;
          bottom: 32px;
          width: 1px;
          background: rgba(109,220,109,0.2);
        }

        .faq-body-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: -2px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 8px var(--c-primary);
        }

        .faq-body-content {
          padding-left: 64px;
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }

        .faq-body-left {
          flex-grow: 1;
        }

        .faq-answer {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-top: 0;
          margin-bottom: 32px;
        }

        .faq-features {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .faq-feature-box {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 180px;
        }

        .faq-feature-icon {
          color: var(--c-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-feature-title {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: white;
          margin-bottom: 2px;
        }

        .faq-feature-desc {
          font-family: var(--font-sans);
          font-size: 11px;
          color: rgba(255,255,255,0.5);
        }

        /* Chat Graphic Styles */
        .faq-graphic-wrap {
          flex-shrink: 0;
          width: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-graphic {
          position: relative;
          width: 200px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-orb {
          position: absolute;
          width: 140px;
          height: 140px;
          background: var(--c-primary);
          filter: blur(60px);
          opacity: 0.15;
          border-radius: 50%;
        }

        .chat-bubble {
          position: absolute;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          backdrop-filter: blur(8px);
        }

        .chat-bubble.back {
          top: 10px;
          right: 20px;
          width: 110px;
          height: 70px;
          border: 1px solid rgba(109,220,109,0.3);
          background: rgba(255,255,255,0.03);
        }

        .chat-bubble.front {
          bottom: 20px;
          left: 20px;
          width: 100px;
          height: 65px;
          border: 1px solid rgba(109,220,109,0.6);
          background: rgba(10, 25, 12, 0.8);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .chat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid var(--c-primary);
        }

        .chat-pointer {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }

        .back-pointer {
          bottom: -9px;
          left: 24px;
          border-top: 10px solid rgba(109,220,109,0.3);
        }

        .front-pointer {
          bottom: -9px;
          right: 24px;
          border-top: 10px solid rgba(109,220,109,0.6);
        }

        /* Bottom CTA */
        .faq-bottom-cta {
          margin-top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .faq-bottom-text {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255,255,255,0.6);
        }

        .faq-bottom-btn {
          padding: 14px 32px;
          border-radius: 100px;
          border: 1px solid rgba(109,220,109,0.3);
          background: rgba(109,220,109,0.05);
          color: var(--c-primary);
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .faq-bottom-btn:hover {
          background: rgba(109,220,109,0.15);
          border-color: rgba(109,220,109,0.6);
          box-shadow: 0 0 20px rgba(109,220,109,0.15);
        }

        @media (max-width: 768px) {
          .faq-header {
            padding: 20px;
            gap: 16px;
          }
          .faq-body-inner {
            padding: 0 20px 24px 20px;
          }
          .faq-body-line {
            left: 42px;
          }
          .faq-body-content {
            padding-left: 40px;
            flex-direction: column;
          }
          .faq-features {
            flex-direction: column;
          }
          .faq-graphic-wrap {
            width: 100%;
            margin-top: 24px;
          }
        }
      `}</style>

      {/* Header section */}
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 64, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 16px', border: '1px solid rgba(109,220,109,0.2)', borderRadius: 100, marginBottom: 24 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--c-primary)', letterSpacing: 2 }}>FAQ</span>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
          </div>
          
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: 16 }}>
            Questions <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--c-primary)' }}>You May Have</span>
          </h2>
          
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
            Everything you need to know before we work together.
          </p>
        </div>
      </Reveal>

      {/* Accordion List */}
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <FAQItem 
              faq={faq} 
              index={idx} 
              isOpen={openIndex === idx} 
              toggleOpen={() => toggleOpen(idx)} 
            />
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={400}>
        <div className="faq-bottom-cta">
          <div className="faq-bottom-text">Still have questions?</div>
          <a href="mailto:hello@trinadh.com" className="faq-bottom-btn">
            Let's talk about your project <ArrowRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
