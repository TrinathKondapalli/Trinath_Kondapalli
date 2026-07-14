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

        .typo-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-decoration: none;
          color: var(--c-white);
          transition: background 0.3s ease;
          width: 100%;
          max-width: 1440px;
        }

        .typo-row:hover {
          background: rgba(109, 220, 109, 0.04);
        }

        .typo-num {
          font-family: var(--font-display);
          font-style: italic;
          color: rgba(255, 255, 255, 0.4);
          font-size: 16px;
          width: 60px;
        }

        .typo-title {
          font-family: var(--font-sans);
          font-size: clamp(20px, 3vw, 32px);
          font-weight: 500;
          flex: 1;
        }

        .typo-category {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          width: 200px;
          text-align: right;
        }
        
        .typo-result {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--c-primary);
          font-weight: 600;
          width: 200px;
          text-align: right;
        }

        @media (max-width: 1024px) {
          .editorial-grid { grid-template-columns: repeat(2, 1fr); }
          .typo-category { display: none; }
        }

        @media (max-width: 768px) {
          .editorial-grid { grid-template-columns: 1fr; }
          .typo-row { padding: 16px 12px; }
          .typo-num { width: 40px; }
          .typo-result { width: 140px; text-align: right; }
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
            <a href={project.href} className="typo-row" data-cursor-hover="true">
              <div className="typo-num">0{project.index}</div>
              <div className="typo-title">{project.title}</div>
              <div className="typo-category">{project.category}</div>
              <div className="typo-result">{project.result}</div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
