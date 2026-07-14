import { motion } from 'framer-motion';
import { ArrowRight, Layout, Activity, MonitorSmartphone } from 'lucide-react';
import SplitText from './SplitText';
import BorderGlow from './BorderGlow';

const projects = [
  {
    title: 'Healthcare Website',
    category: 'UX/UI Design',
    desc: 'Modern healthcare platform focused on trust, accessibility, and patient experience.',
    tech: ['Figma', 'React', 'Tailwind'],
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Finance Dashboard',
    category: 'Product Design',
    desc: 'A clean financial dashboard designed to simplify complex data and improve decision-making.',
    tech: ['UI/UX', 'Design System', 'Prototyping'],
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Personal Portfolio',
    category: 'Website Design & Frontend',
    desc: 'A premium personal portfolio designed to attract clients through modern UI, storytelling, and performance.',
    tech: ['React', 'Framer Motion', 'GSAP'],
    icon: MonitorSmartphone,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  }
];

export default function FeaturedProjects() {
  return (
    <section id="work" style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          width: 100%;
          max-width: 1280px;
        }

        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .project-img-wrapper {
          width: 100%;
          height: 240px;
          overflow: hidden;
          position: relative;
          border-radius: 32px 32px 0 0;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(8, 21, 9, 0.8));
          z-index: 1;
        }

        .project-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-category {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--c-primary);
          margin-bottom: 12px;
        }

        .project-title {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .project-desc {
          font-family: var(--font-sans);
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .tech-pill {
          padding: 6px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          font-family: var(--font-sans);
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }

        .view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: var(--c-white);
          transition: color 0.3s ease;
        }

        .project-card:hover .view-btn {
          color: var(--c-primary);
        }

        .view-arrow {
          transition: transform 0.3s ease;
        }

        .project-card:hover .view-arrow {
          transform: translateX(6px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
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
          SELECTED WORK
        </span>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
      </motion.div>

      {/* Headline */}
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(40px, 5vw, 72px)',
        fontWeight: 800,
        color: 'var(--c-white)',
        textAlign: 'center',
        letterSpacing: '-2px',
        marginBottom: 32,
        lineHeight: 1.1,
        maxWidth: 820
      }}>
        <SplitText text="Turning Ideas Into" splitType="words" duration={0.7} />{' '}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            paddingRight: '8px',
            display: 'inline-block'
          }}
        >
          Digital Experiences.
        </motion.span>
      </h2>

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
        Every project is designed with strategy, user experience, and business goals in mind. Here are a few selected works that showcase my approach to solving real-world problems through design.
      </motion.p>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            data-cursor-text="View"
          >
            <BorderGlow
              className="project-card"
              backgroundColor="rgba(20,49,19,0.6)"
              borderRadius={32}
              glowColor="106 63 57"
              colors={['#6dd74c', '#81dd6a', '#143113']}
              glowIntensity={0.9}
            >
              {/* Mockup Image */}
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-img-overlay" />

                {/* Floating Icon Badge over image */}
                <div style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(8, 21, 9, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}>
                  <project.icon size={20} color="var(--c-white)" />
                </div>
              </div>

              {/* Content Details */}
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="view-btn">
                  View Case Study
                  <ArrowRight size={16} className="view-arrow" strokeWidth={2.5} />
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
