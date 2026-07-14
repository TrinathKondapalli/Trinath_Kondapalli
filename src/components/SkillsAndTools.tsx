import { motion } from 'framer-motion';
import { PenTool, Code, Palette, Video, Bot } from 'lucide-react';

const skills = [
  {
    icon: PenTool,
    title: 'UX/UI Design',
    tools: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    icon: Code,
    title: 'Frontend',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    tools: ['Photoshop', 'Illustrator', 'Canva', 'Branding']
  },
  {
    icon: Video,
    title: 'Video Editing',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut']
  },
  {
    icon: Bot,
    title: 'AI & Productivity',
    tools: ['ChatGPT', 'Google AI Studio', 'Gemini', 'Framer', 'GitHub']
  }
];

export default function SkillsAndTools() {
  return (
    <section id="skills" style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1440px;
        }

        .skill-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 32px 24px;
          border-radius: 28px;
          border: 1px solid rgba(109,215,76,0.05);
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          overflow: hidden;
          cursor: default;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: rgba(109,215,76,0.3);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15);
        }

        .skill-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease;
        }

        .skill-card:hover .skill-icon-wrap {
          transform: translateY(-4px) scale(1.1);
          background: rgba(109,215,76,0.1);
        }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .skill-card:hover .skill-item {
          color: rgba(255,255,255,0.9);
        }

        .skill-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(109,215,76,0.3);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .skill-card:hover .skill-bullet {
          background: var(--c-primary);
          transform: scale(1.5);
          box-shadow: 0 0 8px var(--c-primary);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); max-width: 1000px; }
        }

        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; max-width: 400px; }
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
          SKILLS & TOOLS
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
        Technology <br/>
        Meets <br/>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px'
        }}>
          Creativity.
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
        I combine design thinking, modern development, and creative storytelling to deliver digital experiences that are visually engaging, technically robust, and business-focused.
      </motion.p>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="skill-card"
          >
            {/* Number Watermark */}
            <div style={{
              position: 'absolute',
              top: 24,
              right: 24,
              fontFamily: 'var(--font-display)',
              fontSize: '48px',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.04)',
              fontWeight: 800,
              pointerEvents: 'none'
            }}>
              0{i + 1}
            </div>

            {/* Icon */}
            <div className="skill-icon-wrap">
              <skill.icon size={24} color="var(--c-primary)" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--c-white)',
              marginBottom: 24,
              letterSpacing: '-0.5px'
            }}>
              {skill.title}
            </h3>

            {/* Tools List */}
            <ul className="skill-list">
              {skill.tools.map((tool, idx) => (
                <li key={idx} className="skill-item">
                  <div className="skill-bullet" />
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
