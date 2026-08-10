import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const projects = [
  { 
    index: 1, 
    title: 'FitTrack India', 
    category: 'Healthcare & Fitness', 
    image: '/fittrack_india.png', 
    result: '19-Page UX Case Study', 
    href: '/case-study/fit-track',
    isPlaceholder: false,
    problem: 'Indian health seekers struggled to navigate fragmented diet tracking and inconsistent fitness guidance on mobile screens.',
    process: 'Structured a 19-stage UX blueprint — from user persona mapping (Meet Ananya) to localized diet systems and hi-fi mobile screens.',
    outcome: 'Delivered a holistic fitness ecosystem with localized diet search, streak milestone cards, and 100% accessible UI craft.',
    role: 'Lead UX/UI Designer',
    tools: ['Figma', 'Miro', 'Notion']
  },
  { 
    index: 2, 
    title: 'LinguLink', 
    category: 'Social Learning', 
    image: '/lingulink/Lingualink_Banner.png', 
    result: '100k+ Active Users', 
    href: '/case-study/lingu-link',
    problem: 'Language learners lost engagement due to cluttered navigation and fragmented lesson progress tracking.',
    process: 'Simplified information architecture into a 3-tab navigation hub and gamified streak milestone cards.',
    outcome: 'Scaled to 100k+ active users while driving a 35% increase in daily active lesson completions.',
    role: 'Product Designer',
    tools: ['Figma', 'Protopie']
  },
  { 
    index: 3, 
    title: 'DIRECTOR.AI', 
    category: 'AI Creative Platform', 
    image: '/director_ai/Director_ai.png', 
    result: '32-Section UX Case Study', 
    href: '/case-study/director-ai',
    isPlaceholder: true,
    problem: 'Creative teams spend hours engineering complex prompts to generate UI layouts and UGC scripts, receiving unstructured, unusable text formats.',
    process: 'Designed a node-based prompt architecture that visualizes LLM generation, validates JSON outputs, and instantly renders creative assets in a WYSIWYG studio.',
    outcome: 'Reduced asset generation time by 75% and achieved a 92% successful output validation rate during beta.',
    role: 'Principal Product Designer',
    tools: ['Figma', 'React', 'OpenAI API']
  },
  { 
    index: 4, 
    title: 'NutriBox', 
    category: 'D2C E-Commerce', 
    image: '/nutribox/Case_study_1.png', 
    result: '+40% conversion rate', 
    href: '/case-study/nutribox',
    problem: 'Indian D2C wellness shoppers had high drop-off rates due to unverified ingredient trust signals on mobile screens.',
    process: 'Reorganized product card hierarchy and introduced clean ingredient callout badges with mobile-first tap targets.',
    outcome: 'Increased landing page conversion rate by +40% and reduced mobile bounce rates within 30 days.',
    role: 'UX Designer',
    tools: ['Figma', 'Webflow']
  },
  { 
    index: 5, 
    title: 'Go Vigi', 
    category: 'B2B Agri-Tech', 
    image: '/govigi/Govigi_Project_Thumbnail.png', 
    result: '60% Faster Checkout', 
    href: '/case-study/go-vigi',
    problem: 'Agricultural traders struggled with complex multi-step bulk produce ordering and opaque freight tracking.',
    process: 'Consolidated a 7-step ordering portal into a 2-step matrix dashboard with instant order status cards.',
    outcome: 'Reduced bulk order completion time by 60% and successfully deployed across web and mobile platforms.',
    role: 'Lead Product Designer',
    tools: ['Figma', 'Illustrator']
  }
];

export default function FeaturedProjects() {
  return (
    <section id="work" style={{
      position: 'relative',
      width: '100%',
      padding: '60px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          width: 100%;
          max-width: 1440px;
          margin-bottom: 0;
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

      {/* Eyebrow */}
      <Reveal>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 80
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
          <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>SELECTED WORK — 05 PROJECTS</div>
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
