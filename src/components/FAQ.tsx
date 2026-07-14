import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I know we're a good fit before committing?",
    answer: "Every project starts with a free 30-minute discovery call — no pitch, just conversation. If I'm not the right person for what you need, I'll tell you and point you in a better direction."
  },
  {
    question: "What does your typical project timeline look like?",
    answer: "Most projects run 4–8 weeks depending on scope. A landing page is 2 weeks. A full product with design system is 6–10. I'll give you a precise breakdown in the discovery call, not a vague estimate."
  },
  {
    question: "Do you work with early-stage startups or only established businesses?",
    answer: "Both. Some of my best work has been with founders at pre-seed building their first product. Budget-conscious doesn't mean low-quality — it means we prioritize ruthlessly."
  },
  {
    question: "What happens if I need changes after the project launches?",
    answer: "Every project includes 2 rounds of revisions and a 30-day post-launch support window. After that, I offer a monthly retainer if you want an ongoing design partner."
  },
  {
    question: "Do you hand off to developers or build it yourself?",
    answer: "Both. I write clean React + Tailwind, or I deliver Figma files with a full dev handoff spec that any developer can build from. You choose."
  }
];

function FAQItem({ faq, index, isOpen, toggleOpen }: { faq: any, index: number, isOpen: boolean, toggleOpen: () => void }) {
  const num = (index + 1).toString().padStart(2, '0');

  return (
    <div 
      className={`faq-row reveal ${isOpen ? 'active' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="faq-header" onClick={toggleOpen}>
        <div className="faq-num">{num}</div>
        <h3 className="faq-question">{faq.question}</h3>
        <div className={`faq-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-answer-wrapper">
              <p className="faq-answer">{faq.answer}</p>
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
        }

        .faq-row {
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          border-left: 2px solid transparent;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease;
        }

        .faq-row.active {
          border-left: 2px solid #6ddc6d;
        }

        .faq-row:first-child {
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .faq-header {
          display: grid;
          grid-template-columns: 60px 1fr 60px;
          align-items: center;
          padding: 32px 0;
          cursor: pointer;
          transition: padding 0.3s ease;
        }

        .faq-num {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 24px;
          color: rgba(255,255,255,0.2);
          transition: color 0.3s ease;
        }

        .faq-row:hover .faq-num {
          color: rgba(109,215,76,0.6);
        }
        
        .faq-row.active .faq-num {
          color: #6ddc6d;
        }

        .faq-question {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          color: var(--c-white);
          margin: 0;
          letter-spacing: -0.2px;
          transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-row:hover .faq-question {
          transform: translateX(8px);
        }

        .faq-icon {
          display: flex;
          justify-content: flex-end;
          color: rgba(255,255,255,0.4);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .faq-row:hover .faq-icon {
          color: var(--c-white);
        }

        .faq-icon.open {
          color: var(--c-primary);
        }

        .faq-answer-wrapper {
          padding-left: 60px;
          padding-right: 60px;
          padding-bottom: 40px;
        }

        .faq-answer {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin: 0;
          padding-left: 20px;
          border-left: 2px solid rgba(109,215,76,0.5); /* Subtle green border */
        }

        /* Bottom CTA Strip */
        .faq-cta-strip {
          margin-top: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px 0;
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-family: var(--font-sans);
        }

        .faq-cta-text {
          font-size: 18px;
          color: rgba(255,255,255,0.6);
        }

        .faq-cta-link {
          font-size: 18px;
          font-weight: 600;
          color: var(--c-white);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .faq-cta-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--c-white);
          transition: background 0.3s ease;
        }

        .faq-cta-link:hover {
          color: var(--c-primary);
        }

        .faq-cta-link:hover::after {
          background: var(--c-primary);
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .faq-header {
            grid-template-columns: 40px 1fr 40px;
            padding: 24px 0;
          }
          .faq-answer-wrapper {
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 24px;
          }
          .faq-cta-strip {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
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
          marginBottom: 40
        }}
      >
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
          QUESTIONS YOU MAY HAVE
        </span>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
      </div>

      {/* Accordion List */}
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <FAQItem 
            key={idx} 
            faq={faq} 
            index={idx} 
            isOpen={openIndex === idx} 
            toggleOpen={() => toggleOpen(idx)} 
          />
        ))}
      </div>

      {/* Bottom CTA Strip */}
      <div 
        className="faq-cta-strip reveal"
        style={{ transitionDelay: '400ms' }}
      >
        <span className="faq-cta-text">Have a different question?</span>
        <a href="mailto:hello@trinadh.com" className="faq-cta-link">
          hello@trinadh.com
        </a>
      </div>
    </section>
  );
}
