import { motion } from 'framer-motion';
import { Rocket, Store, Monitor, HeartPulse, User, TrendingUp } from 'lucide-react';

const clients = [
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'Helping startups transform ideas into scalable digital products and MVPs.',
  },
  {
    icon: Store,
    title: 'Small Businesses',
    desc: 'Creating modern websites that build trust and attract customers.',
  },
  {
    icon: Monitor,
    title: 'SaaS & Tech',
    desc: 'Designing intuitive SaaS products focused on usability and growth.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Building clean, trustworthy digital experiences for healthcare providers and clinics.',
  },
  {
    icon: User,
    title: 'Personal Brands',
    desc: 'Helping creators and professionals build a strong online presence.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Companies',
    desc: 'Improving websites and digital products to increase engagement and conversions.',
  }
];

export default function WhoIHelp() {
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
        .who-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 32px;
          width: 100%;
          max-width: 1280px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1440px) {
          .who-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 1024px) {
          .who-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr; }
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
          WHO I HELP
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
        Helping <br/>
        <span style={{
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block'
        }}>
          Businesses
        </span> <br/>
        Grow.
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
          maxWidth: 780,
          lineHeight: 1.6,
          marginBottom: 80
        }}
      >
        I collaborate with startups, founders, and growing businesses to create modern digital experiences that strengthen brands, improve user experience, and support long-term growth.
      </motion.p>

      {/* Cards Grid */}
      <div className="who-grid">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover="hover"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px 24px',
              borderRadius: '28px',
              border: '1px solid rgba(109,215,76,0.05)',
              background: 'var(--rgba-dark-06)',
              backdropFilter: 'blur(12px)',
              cursor: 'default',
              overflow: 'hidden',
              textAlign: 'center',
              transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
            }}
            variants={{
              hover: { 
                y: -8, 
                borderColor: 'rgba(109,215,76,0.3)',
                boxShadow: '0 10px 40px -10px rgba(109,215,76,0.15)'
              }
            }}
          >
            <motion.div 
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(109,215,76,0.05)',
                border: '1px solid rgba(109,215,76,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                boxShadow: 'inset 0 0 20px rgba(109,215,76,0.05)'
              }}
              variants={{
                hover: { scale: 1.1, backgroundColor: 'rgba(109,215,76,0.1)' }
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <client.icon size={28} color="var(--c-primary)" strokeWidth={1.5} />
            </motion.div>
            
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '24px', // Reduced slightly for 6-column fit
              fontWeight: 600,
              color: 'var(--c-white)',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              {client.title}
            </h3>

            {/* Tiny accent line like in the mockup */}
            <div style={{ width: 24, height: 2, background: 'var(--rgba-white-03)', marginBottom: 16 }} />

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px', // Slightly smaller to fit grid
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.6)',
            }}>
              {client.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
