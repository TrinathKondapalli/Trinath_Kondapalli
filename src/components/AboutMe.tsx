import { motion } from 'framer-motion';
import { Sparkles, Target, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import portrait from '../assets/portrait.png';

const highlights = [
  {
    icon: Sparkles,
    title: 'Creative Thinking',
    desc: 'Designing solutions that solve real problems.'
  },
  {
    icon: Target,
    title: 'Business Focus',
    desc: 'Every decision is aligned with business goals.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Always improving through new technologies and trends.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality First',
    desc: 'Focused on delivering polished and thoughtful work.'
  }
];

export default function AboutMe() {
  return (
    <section id="about" style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 10
    }}>
      <style>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          max-width: 1280px;
          width: 100%;
          align-items: center;
        }

        .about-left {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 32px;
          border: 1px solid rgba(109,215,76,0.1);
          background: linear-gradient(180deg, rgba(109,215,76,0.05) 0%, rgba(8, 21, 9, 0.5) 100%);
          overflow: hidden;
          box-shadow: 0 0 60px -20px rgba(109,215,76,0.2);
        }

        .about-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          filter: contrast(1.1) brightness(0.9);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-left:hover .about-portrait {
          transform: scale(1.05);
        }

        /* Decorative Background Elements behind the image */
        .about-glow-blob {
          position: absolute;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(109,215,76,0.2) 0%, rgba(0,0,0,0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          filter: blur(40px);
        }

        .about-floating-card {
          position: absolute;
          bottom: 40px;
          right: -20px;
          background: rgba(8, 21, 9, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(109,215,76,0.2);
          padding: 16px 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
          animation: float 6s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .about-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          width: 100%;
          margin-top: 40px;
          margin-bottom: 48px;
        }

        .highlight-card {
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(109,215,76,0.05);
          padding: 24px;
          border-radius: 24px;
          transition: border-color 0.4s ease, transform 0.4s ease;
        }

        .highlight-card:hover {
          border-color: rgba(109,215,76,0.3);
          transform: translateY(-4px);
        }

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: rgba(109,215,76,0.1);
          border: 1px solid rgba(109,215,76,0.3);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 600;
          color: var(--c-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(109,215,76,0.0);
        }

        .about-cta:hover {
          background: rgba(109,215,76,0.15);
          border-color: var(--c-primary);
          box-shadow: 0 0 20px rgba(109,215,76,0.2);
          transform: translateY(-2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .about-container { grid-template-columns: 1fr; gap: 48px; }
          .about-left { max-width: 600px; margin: 0 auto; aspect-ratio: 1; }
          .about-floating-card { right: 20px; }
        }

        @media (max-width: 640px) {
          .highlights-grid { grid-template-columns: 1fr; }
          .about-floating-card { display: none; } /* Hide on small mobile to save space */
        }
      `}</style>

      <div className="about-container">
        {/* LEFT COLUMN: Portrait */}
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-glow-blob" />
          <img src={portrait} alt="Trinadh Kondapalli" className="about-portrait" />
          
          {/* Floating Element */}
          <div className="about-floating-card">
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 10px var(--c-primary)' }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--c-white)' }}>
              5+ Years Experience
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Content */}
        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Eyebrow Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 16px',
            background: 'var(--rgba-dark-06)',
            border: '1px solid var(--rgba-white-03)',
            borderRadius: 100,
            marginBottom: 32
          }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
              ABOUT ME
            </span>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(40px, 4vw, 64px)',
            fontWeight: 800,
            color: 'var(--c-white)',
            letterSpacing: '-2px',
            marginBottom: 24,
            lineHeight: 1.1
          }}>
            Designing <br/>
            Experiences <br/>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingRight: '8px'
            }}>
              With Purpose.
            </span>
          </h2>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 720,
            lineHeight: 1.7
          }}>
            Hi, I'm Trinadh Kondapalli, a UX/UI Designer and Frontend Developer passionate about creating modern digital experiences that are simple, intuitive, and built around real business goals. I believe great design is not just about how it looks—it's about how it works and the value it creates.
          </p>

          {/* Highlight Cards Grid */}
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <motion.div 
                key={i}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
              >
                <item.icon size={24} color="var(--c-primary)" style={{ marginBottom: 16 }} />
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 18,
                  fontWeight: 600,
                  color: 'var(--c-white)',
                  marginBottom: 8
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.5
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button 
            className="about-cta"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Let's Build Something Amazing
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
