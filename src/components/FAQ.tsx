import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services do you provide?",
    answer: "I specialize in UX/UI Design, Website Design, Frontend Development, and Video Editing. I focus on creating premium, end-to-end digital experiences that drive business results."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. I work with clients worldwide. My workflow is fully optimized for remote collaboration with clear communication, milestone updates, and flexible meeting times."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on the scope and complexity. A typical website redesign usually takes 4-6 weeks from the initial discovery phase to the final launch."
  },
  {
    question: "How much does a project cost?",
    answer: "Pricing is completely project-based. Every business has unique needs, so I create custom proposals after our discovery call based on your specific goals, scope, and timeline."
  },
  {
    question: "Do you offer frontend development?",
    answer: "Yes! I don't just stop at design. I build out the designs into highly performant, production-ready frontend code using modern stacks like React, Next.js, and Framer Motion."
  },
  {
    question: "How many revisions are included?",
    answer: "I typically include 2-3 structured rounds of revisions per project phase. This ensures we have plenty of room to refine the design and ensure it perfectly aligns with your vision."
  },
  {
    question: "What tools do you use?",
    answer: "For design, my tool of choice is Figma. For development, I rely on React, Next.js, Tailwind, and animation libraries like Framer Motion and GSAP to bring designs to life."
  },
  {
    question: "How do we get started?",
    answer: "Simply reach out via the contact form or send me an email. We'll schedule a brief discovery call to discuss your goals, project scope, and see if we're a good fit to work together."
  }
];

function FAQItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`faq-card ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-header">
        <h3 className="faq-question">{faq.question}</h3>
        <div className="faq-icon-wrap">
          {isOpen ? <Minus size={18} color="var(--c-primary)" /> : <Plus size={18} color="var(--c-primary)" />}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="faq-answer-wrap"
          >
            <p className="faq-answer">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .faq-container {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-card {
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(109,215,76,0.05);
          border-radius: 32px;
          padding: 24px 32px;
          cursor: pointer;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
          overflow: hidden;
        }

        .faq-card:hover {
          border-color: rgba(109,215,76,0.2);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.1);
          transform: translateY(-2px);
        }

        .faq-card.open {
          border-color: rgba(109,215,76,0.3);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15);
        }

        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .faq-question {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 600;
          color: var(--c-white);
          margin: 0;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .faq-card:hover .faq-question {
          color: var(--c-primary);
        }

        .faq-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .faq-card:hover .faq-icon-wrap {
          background: rgba(109,215,76,0.1);
        }

        .faq-answer-wrap {
          overflow: hidden;
        }

        .faq-answer {
          font-family: var(--font-sans);
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin: 0;
          padding-top: 16px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .faq-card {
            padding: 24px;
            border-radius: 24px;
          }
          .faq-question {
            font-size: 16px;
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
          FAQ
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
        Questions <br/>
        You May <br/>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px'
        }}>
          Have.
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
          maxWidth: 720,
          lineHeight: 1.6,
          marginBottom: 80
        }}
      >
        Everything you need to know before starting your project. If you still have questions, feel free to get in touch.
      </motion.p>

      {/* Accordion List */}
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} index={idx} />
        ))}
      </div>
    </section>
  );
}
