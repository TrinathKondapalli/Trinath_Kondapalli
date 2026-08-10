import Reveal from './Reveal';
import { 
  PenTool, Box, Brain, Layers, Smartphone, Bot, Users, User, Network, Rocket 
} from 'lucide-react';

const skillGroups = [
  {
    title: 'UX/UI Design',
    desc: 'Designing intuitive and engaging interfaces that solve real user problems.',
    skills: ['Wireframing', 'Prototyping', 'User Flows', 'Interaction Design', 'Information Architecture', 'Visual Design'],
    icon: PenTool,
    index: '01'
  },
  {
    title: 'Product Design',
    desc: 'Turning ideas into usable products through structured and user-centered design.',
    skills: ['Product Strategy', 'User Research', 'Usability Testing', 'Data-Driven Design', 'AI & Design Tools'],
    icon: Box,
    index: '02'
  },
  {
    title: 'Design Process',
    desc: 'A structured process that ensures clarity, consistency, and user value at every step.',
    skills: ['Design Thinking', 'Agile/Scrum', 'Lean UX', 'Journey Mapping', 'Persona Development'],
    icon: Brain,
    index: '03'
  },
  {
    title: 'Design Systems',
    desc: 'Building scalable systems that ensure consistency and efficiency.',
    skills: ['Component Libraries', 'Design Tokens', 'Figma Variables', 'Auto Layout', 'Documentation'],
    icon: Layers,
    index: '04'
  },
  {
    title: 'Responsive & Accessible',
    desc: 'Creating inclusive experiences across all devices and users.',
    skills: ['Mobile-First Design', 'WCAG (AA/AAA)', 'Cross-Platform UI', 'Adaptive Layouts'],
    icon: Smartphone,
    index: '05'
  },
  {
    title: 'Design & AI Tools',
    desc: 'Leveraging modern tools and AI to speed up and elevate design.',
    skills: ['Figma', 'Webflow', 'Framer', 'Midjourney', 'ChatGPT', 'Notion', 'Miro', 'Adobe CC'],
    icon: Bot,
    index: '06'
  },
  {
    title: 'Collaboration / Soft Skills',
    desc: 'Working closely with teams to turn ideas into impactful products.',
    skills: ['Cross-functional Collaboration', 'Developer Handoff', 'Stakeholder Presentation', 'Problem Solving'],
    icon: Users,
    index: '07'
  }
];

const processSteps = [
  { title: 'Understand', subtitle: 'the user', icon: User },
  { title: 'Structure', subtitle: 'the experience', icon: Network },
  { title: 'Design', subtitle: 'with purpose', icon: PenTool },
  { title: 'Build', subtitle: 'with systems', icon: Layers },
  { title: 'Deliver', subtitle: 'real impact', icon: Rocket }
];

export default function Skills() {
  return (
    <section id="skills" style={{
      position: 'relative',
      width: '100%',
      padding: '120px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .skills-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .sk-top-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 48px;
          gap: 32px;
          flex-wrap: wrap;
        }

        .sk-header-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 800px;
        }

        .sk-title {
          font-family: var(--font-sans);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          color: var(--c-white);
          letter-spacing: -1px;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        
        .sk-title em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: var(--c-primary);
        }

        .sk-subtitle {
          color: rgba(255,255,255,0.6);
          font-size: 15px;
          line-height: 1.6;
        }

        .sk-feature-col {
          flex-shrink: 0;
        }

        .sk-feature-card {
          display: flex;
          gap: 16px;
          background: rgba(9, 16, 10, 0.4);
          border: 1px solid rgba(109, 215, 76, 0.1);
          border-radius: 16px;
          padding: 24px;
          max-width: 400px;
        }
        
        .sk-feature-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(109,215,76,0.08);
          border: 1px solid rgba(109,215,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
          box-shadow: 0 0 16px rgba(109,215,76,0.15);
        }
        
        .sk-feature-content h4 {
          color: var(--c-white);
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .sk-feature-content p {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          line-height: 1.5;
        }

        .sk-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        
        .sk-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        
        @media (max-width: 1024px) {
          .sk-grid-3, .sk-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 600px) {
          .sk-grid-3, .sk-grid-4 {
            grid-template-columns: 1fr;
          }
        }

        .sk-card-wrapper {
          display: flex;
          width: 100%;
          height: 100%;
        }

        .sk-card {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: rgba(9, 16, 10, 0.4);
          border: 1px solid rgba(109, 215, 76, 0.15);
          border-radius: 20px;
          padding: 32px 24px 24px 24px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .sk-card:hover {
          background: rgba(14, 22, 15, 0.6);
          border-color: rgba(109, 215, 76, 0.3);
          transform: translateY(-4px);
        }

        .sk-card-bg {
          position: absolute;
          top: 0; right: 0;
          width: 150px; height: 150px;
          background-image: radial-gradient(rgba(109, 215, 76, 0.15) 1px, transparent 1px);
          background-size: 8px 8px;
          mask-image: radial-gradient(circle at top right, black, transparent 70%);
          -webkit-mask-image: -webkit-radial-gradient(top right, black, transparent 70%);
          pointer-events: none;
        }
        
        .sk-card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .sk-card-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
          box-shadow: 0 0 20px rgba(109,215,76,0.1);
          transition: all 0.3s ease;
        }
        
        .sk-card:hover .sk-card-icon {
          box-shadow: 0 0 24px rgba(109,215,76,0.2);
          background: rgba(109,215,76,0.1);
        }

        .sk-card-title-group h3 {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 8px;
        }
        
        .sk-card-title-group p {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }

        .sk-card-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
          position: relative;
          z-index: 2;
        }

        .sk-pill {
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .sk-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .sk-card-index {
          font-size: 12px;
          font-weight: 700;
          color: var(--c-primary);
          letter-spacing: 1px;
        }

        .sk-card-line {
          flex: 1;
          height: 1px;
          background: rgba(109,215,76,0.2);
          position: relative;
        }
        
        .sk-card-dot {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 6px var(--c-primary);
        }

        .sk-footer-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 0;
          margin-top: 16px;
          width: 100%;
        }
        
        @media (max-width: 1024px) {
          .sk-footer-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px;
          }
        }

        .sk-footer-left h4 {
          color: var(--c-primary);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        
        .sk-footer-left p {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          line-height: 1.6;
        }

        .sk-footer-right {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .sk-process-step {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sk-process-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
        }

        .sk-process-text {
          display: flex;
          flex-direction: column;
        }
        
        .sk-process-text strong {
          color: var(--c-white);
          font-size: 15px;
        }
        
        .sk-process-text span {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }

        .sk-process-arrow {
          color: rgba(255,255,255,0.2);
          font-size: 16px;
          margin-left: 8px;
        }
      `}</style>
      
      <div className="skills-container">
        {/* Top Area: Header + Always learning card */}
        <div className="sk-top-row">
          <div className="sk-header-col">
            <Reveal delay={0}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
                <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>MY SKILLS</div>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
              </div>
              <h2 className="sk-title">Tools, methods & mindsets<br/>that power my <em>design.</em></h2>
              <p className="sk-subtitle">A combination of design thinking, user understanding, and<br/>the right tools to build meaningful digital experiences.</p>
            </Reveal>
          </div>
        </div>

        {/* Row 1 Grid: 3 columns */}
        <div className="sk-grid-3">
          {skillGroups.slice(0, 3).map((group, idx) => (
             <SkillCard key={idx} group={group} delay={idx * 100} />
          ))}
        </div>

        {/* Row 2 Grid: 4 columns */}
        <div className="sk-grid-4">
          {skillGroups.slice(3).map((group, idx) => (
             <SkillCard key={idx + 3} group={group} delay={(idx + 3) * 100} />
          ))}
        </div>

        {/* Footer wide card */}
        <Reveal delay={400}>
          <div className="sk-footer-card">
            <div className="sk-footer-right">
              {processSteps.map((step, idx) => (
                <div key={idx} className="sk-process-step">
                  <div className="sk-process-icon">
                    <step.icon size={24} strokeWidth={2} />
                  </div>
                  <div className="sk-process-text">
                    <strong>{step.title}</strong>
                    <span>{step.subtitle}</span>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="sk-process-arrow">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function SkillCard({ group, delay }: any) {
  return (
    <Reveal delay={delay} className="sk-card-wrapper">
      <div className="sk-card">
        {/* Dotted background pattern */}
        <div className="sk-card-bg" />
        
        <div className="sk-card-header">
          <div className="sk-card-icon">
            <group.icon size={20} strokeWidth={2} />
          </div>
          <div className="sk-card-title-group">
            <h3>{group.title}</h3>
            <p>{group.desc}</p>
          </div>
        </div>
        
        <div className="sk-card-pills">
          {group.skills.map((skill: string, i: number) => (
            <div key={i} className="sk-pill">{skill}</div>
          ))}
        </div>
        
        <div className="sk-card-footer">
          <span className="sk-card-index">{group.index}</span>
          <div className="sk-card-line">
            <div className="sk-card-dot" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
