import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const comparisons = [
  {
    problem: 'Outdated Website',
    solution: 'Modern UX/UI Design'
  },
  {
    problem: 'Low Conversion Rate',
    solution: 'Conversion-Focused Websites'
  },
  {
    problem: 'Weak Brand Identity',
    solution: 'Strong Visual Identity'
  },
  {
    problem: 'Slow Performance',
    solution: 'Fast Frontend Development'
  },
  {
    problem: 'Confusing Navigation',
    solution: 'Responsive Design'
  },
  {
    problem: 'Poor User Experience',
    solution: 'Better User Experience'
  }
];

export default function ProblemsISolve() {
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
        .problems-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          max-width: 1000px;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 32px;
          width: 100%;
        }

        .comparison-card {
          padding: 24px 32px;
          border-radius: 28px;
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(109,215,76,0.05);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .comparison-card.problem {
          border-color: rgba(255,255,255,0.05);
        }

        .comparison-card.solution {
          border-color: rgba(109,215,76,0.15);
        }

        .comparison-card:hover {
          transform: translateY(-4px);
        }

        .comparison-card.problem:hover {
          border-color: rgba(255,255,255,0.15);
          box-shadow: 0 10px 40px -10px rgba(255,255,255,0.05);
        }

        .comparison-card.solution:hover {
          border-color: rgba(109,215,76,0.3);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15);
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .comparison-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .connection-arrow {
            transform: rotate(90deg);
            margin: 0 auto;
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
          PROBLEMS I SOLVE
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
        Every <br/>
        Problem <br/>
        Has a{' '}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px'
        }}>
          Better Experience.
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
        I identify usability, branding, and performance challenges, then transform them into intuitive digital experiences that help businesses grow.
      </motion.p>

      {/* Comparison Layout */}
      <div className="problems-container">
        {comparisons.map((item, i) => (
          <motion.div 
            key={i}
            className="comparison-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Problem (Left) */}
            <div className="comparison-card problem">
              <XCircle size={24} color="rgba(255,255,255,0.4)" strokeWidth={2} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.6)'
              }}>
                {item.problem}
              </span>
            </div>

            {/* Glowing Arrow (Center) */}
            <div className="connection-arrow" style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(109,215,76,0.05)',
              border: '1px solid rgba(109,215,76,0.15)',
              boxShadow: '0 0 20px rgba(109,215,76,0.1)'
            }}>
              <ArrowRight size={20} color="var(--c-primary)" />
            </div>

            {/* Solution (Right) */}
            <div className="comparison-card solution">
              <CheckCircle2 size={24} color="var(--c-primary)" strokeWidth={2} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                fontWeight: 600,
                color: 'var(--c-white)'
              }}>
                {item.solution}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
