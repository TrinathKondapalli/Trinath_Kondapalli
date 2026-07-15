import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const projects = [
  { index:1, title:'Healthcare Platform', category:'UX/UI Design', image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600', result:'↑ 40% conversion', href:'/case-study/healthcare-platform' },
  { index:2, title:'Finance Dashboard',   category:'Product Design', image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', result:'↓ 25% churn rate', href:'/case-study/finance-dashboard' },
  { index:3, title:'Premium Portfolio',   category:'Web Design',     image:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200', result:'↑ 80% engagement', href:'/case-study/premium-portfolio' },
  { index:4, title:'E-Commerce App',      category:'Mobile UX',      image:'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',  result:'↑ 120% mobile sales', href:'/case-study/ecommerce-app' },
  { index:5, title:'SaaS Architecture',   category:'Design System',  image:'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',  result:'↑ $10k MRR growth', href:'/case-study/saas-architecture' },
  { index:6, title:'AI Interface',        category:'UX Engineering', image:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',  result:'↓ 40% task time', href:'/case-study/ai-interface' },
];

export default function FeaturedProjects() {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoverImage) {
        // Use requestAnimationFrame for smoother following if desired, 
        // but state update is usually fine for a simple portfolio effect
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoverImage]);

  return (
    <section id="work" style={{
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
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1440px;
          margin-bottom: 64px;
        }

        .project-list-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          border-bottom: 0.5px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: padding-left 0.2s ease, background 0.2s ease;
          text-decoration: none;
          width: 100%;
          max-width: 1440px;
        }
        
        .project-list-row:hover {
          padding-left: 12px;
          background: rgba(109, 220, 109, 0.02);
        }

        .row-num {
          font-family: var(--font-display);
          font-style: italic;
          color: rgba(255, 255, 255, 0.4);
          font-size: 16px;
          min-width: 32px;
        }

        .row-title {
          font-family: var(--font-sans);
          font-size: clamp(20px, 3vw, 32px);
          font-weight: 500;
          color: var(--c-white);
        }

        .row-category {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }
        
        .row-result {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--c-primary);
          font-weight: 600;
        }

        .row-arrow {
          font-family: var(--font-sans);
          font-size: 20px;
          color: var(--c-white);
          opacity: 0.5;
          transition: opacity 0.2s, transform 0.2s;
        }

        .project-list-row:hover .row-arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .editorial-grid { grid-template-columns: repeat(2, 1fr); }
          .row-category { display: none; }
        }

        @media (max-width: 768px) {
          .editorial-grid { grid-template-columns: 1fr; }
          .project-list-row { padding: 16px 0; }
          .project-list-row:hover { padding-left: 4px; }
          .row-result { font-size: 13px; }
        }
      `}</style>

      {/* Eyebrow Pill */}
      <Reveal>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 16px',
            background: 'var(--rgba-dark-06)',
            border: '1px solid var(--rgba-white-03)',
            borderRadius: 100,
            marginBottom: 80,
            width: 'max-content'
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
            SELECTED WORK — 06 PROJECTS
          </span>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        </div>
      </Reveal>

      {/* Projects Grid (Top 3) */}
      <div className="editorial-grid">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.index} {...project} />
        ))}
      </div>

      {/* Typographic Rows (Remaining) */}
      <div style={{ width: '100%', maxWidth: 1440, display: 'flex', flexDirection: 'column' }}>
        {projects.slice(3).map((project, i) => (
          <Reveal key={project.index} delay={i * 100}>
            <Link 
              to={project.href} 
              className="project-list-row" 
              data-cursor-hover="true"
              onMouseEnter={(e) => {
                setMousePos({ x: e.clientX, y: e.clientY });
                setHoverImage(project.image);
              }}
              onMouseLeave={() => setHoverImage(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <span className="row-num">0{project.index}</span>
                <span className="row-title">{project.title}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                <span className="row-category">{project.category}</span>
                <span className="row-result">{project.result}</span>
                <span className="row-arrow">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      {/* Floating Hover Image Portal */}
      {hoverImage && (
        <div style={{
          position: 'fixed',
          top: mousePos.y,
          left: mousePos.x,
          width: 320,
          height: 220,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          animation: 'fadeInScale 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          <img src={hoverImage} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  );
}
