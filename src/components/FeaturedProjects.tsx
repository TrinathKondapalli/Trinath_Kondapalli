import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const projects = [
  { index:1, title:'NutriBox', category:'D2C E-Commerce', image:'/nutribox/Case_study_1.png', result:'+- 40% conversion', href:'/case-study/nutribox' },
  { index:2, title:'LinguLink', category:'Social Learning', image:'/lingulink/Lingualink_Banner.png', result:'100k+ Active Users', href:'/case-study/lingu-link' },
  { index:3, title:'Go Vigi', category:'B2B Agri-Tech', image:'/govigi/Govigi_Project_Thumbnail.png', result:'Omnichannel Release', href:'/case-study/go-vigi' },
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
            SELECTED WORK — 03 PROJECTS
          </span>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="editorial-grid">
        {projects.map((project) => (
          <ProjectCard key={project.index} {...project} />
        ))}
      </div>
    </section>
  );
}
