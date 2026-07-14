import { motion } from 'framer-motion';
import { Briefcase, Globe, Zap, Handshake } from 'lucide-react';

const cards = [
  {
    icon: Briefcase,
    title: 'Open for Projects',
    desc: 'Actively taking on new freelance and contract projects. Let us build something truly world-class together.',
    className: 'bento-card-wide',
    featured: true
  },
  {
    icon: Globe,
    title: 'Remote Collaboration',
    desc: 'Available worldwide, seamlessly working across all time zones.',
    className: 'bento-card-square',
    featured: false
  },
  {
    icon: Zap,
    title: 'Fast Communication',
    desc: 'Quick response, clear updates, and smooth project flow.',
    className: 'bento-card-square',
    featured: false
  },
  {
    icon: Handshake,
    title: 'Long-term Partnership',
    desc: 'I believe in building lasting relationships, not just one-time projects. Your success is my success over the long haul.',
    className: 'bento-card-wide',
    featured: false
  }
];

function BentoCard({ card }: { card: any }) {
  return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`${card.className} bento-card-interactive`}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: card.className === 'bento-card-wide' ? 'row' : 'column',
          alignItems: card.className === 'bento-card-wide' ? 'center' : 'flex-start',
          gap: card.className === 'bento-card-wide' ? '40px' : '0',
          justifyContent: card.className === 'bento-card-wide' ? 'flex-start' : 'space-between',
          padding: card.featured ? '48px' : '40px',
          overflow: 'hidden',
          borderRadius: '32px',
          border: '1px solid var(--rgba-white-03)',
          background: 'var(--rgba-dark-06)',
          backdropFilter: 'blur(12px)',
          width: '100%',
          height: '100%'
        }}
      >
      <div 
        className="bento-icon-wrapper"
        style={{
          marginBottom: card.className === 'bento-card-wide' ? '0' : '32px',
          width: card.featured ? '80px' : '64px',
          height: card.featured ? '80px' : '64px',
          borderRadius: '50%',
          border: '1px solid var(--rgba-white-03)',
          background: 'rgba(255,255,255,0.02)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <card.icon size={card.featured ? 36 : 28} color="var(--c-primary)" strokeWidth={1.5} />
      </div>
      
      <div>
        <h3 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: card.featured ? '32px' : '24px',
          fontWeight: 600,
          color: 'var(--c-white)',
          marginBottom: '12px',
          letterSpacing: '-0.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          {card.title}
          {card.featured && (
             <span style={{
               display: 'flex', alignItems: 'center', gap: 6,
               padding: '4px 10px', borderRadius: 100,
               background: 'rgba(109,215,76,0.1)',
               border: '1px solid rgba(109,215,76,0.2)',
               fontSize: 12, fontWeight: 600, color: 'var(--c-primary)',
               letterSpacing: 1, textTransform: 'uppercase',
               marginLeft: '4px'
             }}>
               <span className="live-dot" />
               Live
             </span>
          )}
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: card.featured ? '80%' : '100%'
        }}>
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Availability() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      padding: '120px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1200px;
        }

        .bento-card-wide { grid-column: span 2; grid-row: span 1; }
        .bento-card-square { grid-column: span 1; grid-row: span 1; }

        .bento-card-interactive {
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .bento-card-interactive .bento-icon-wrapper {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease;
        }

        .bento-card-interactive:hover {
          transform: translateY(-4px);
          border-color: rgba(109,215,76,0.2) !important;
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15) !important;
        }

        .bento-card-interactive:hover .bento-icon-wrapper {
          transform: scale(1.15);
          background: rgba(109,215,76,0.1) !important;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 8px var(--c-primary);
          animation: pulse-dot 2s infinite ease-in-out;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-card-wide { grid-column: span 2; grid-row: span 1; }
          .bento-card-square { grid-column: span 1; grid-row: span 1; }
        }

        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-card-wide, .bento-card-square { 
            grid-column: span 1; 
            grid-row: span 1; 
          }
          .bento-card-wide {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }
        }
      `}</style>

      {/* Top Center Glow Slit */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '1px',
        background: 'var(--c-primary)',
        boxShadow: '0 0 60px 15px rgba(109, 215, 76, 0.15)',
        borderRadius: '50%'
      }} />

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
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)' }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
          Trust & Availability
        </span>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)' }} />
      </motion.div>

      {/* Headline */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 700,
          color: 'var(--c-white)',
          textAlign: 'center',
          letterSpacing: '-1px',
          marginBottom: 24
        }}
      >
        Open for <span style={{ color: 'var(--c-primary)' }}>New Projects</span>
      </motion.h2>

      {/* Subhead */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 18,
          color: 'var(--c-white)',
          opacity: 0.7,
          textAlign: 'center',
          maxWidth: 600,
          lineHeight: 1.6,
          marginBottom: 80
        }}
      >
        I'm currently available for freelance projects and<br />open to remote collaborations worldwide.
      </motion.p>

      {/* BENTO BOX GRID */}
      <div className="bento-grid">
        {cards.map((card, i) => (
          <BentoCard key={i} card={card} />
        ))}
      </div>
    </section>
  );
}
