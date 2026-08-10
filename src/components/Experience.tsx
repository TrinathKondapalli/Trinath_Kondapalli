import Reveal from './Reveal';
import { Building2, User, MapPin, Briefcase, Rocket, Users, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Associate Web Designer',
    company: 'G1 Global',
    location: 'Hyderabad, India (On-site)',
    date: 'October 2025 – Present',
    type: 'Full-time',
    isCurrent: true,
    icon: Building2,
    description: 'Translated business briefs into detailed UI concepts, interaction flows, and pixel-perfect layouts for responsive web platforms. Created annotated wireframes and implementation guides to ensure seamless developer handoff.',
    highlights: [
      'Translated business briefs into detailed UI concepts and pixel-perfect layouts',
      'Created annotated wireframes and guides for seamless developer handoff',
      'Collaborated closely with frontend developers to resolve UI inconsistencies'
    ]
  },
  {
    role: 'Associate Product Designer',
    company: 'InterviewBuddy',
    location: 'Visakhapatnam, India (On-site)',
    date: 'March 2025 – June 2025',
    type: 'Internship',
    isCurrent: false,
    icon: User,
    description: 'Designed structured interaction flows and high-fidelity UI systems for 5+ SaaS workflows. Facilitated cross-functional discussions to align product goals with user experience strategy.',
    highlights: [
      'Designed structured interaction flows and high-fidelity UI systems for 5+ SaaS workflows',
      'Facilitated cross-functional discussions to align product goals with UX strategy',
      'Delivered detailed design documentation reducing developer rework by 15%'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{
      position: 'relative',
      width: '100%',
      padding: '120px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .exp-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        /* Top Row */
        .exp-top-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        
        .exp-header-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 800px;
        }

        .exp-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        
        .exp-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 8px var(--c-primary);
        }
        
        .exp-eyebrow span {
          color: var(--c-primary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .exp-title {
          font-family: var(--font-sans);
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 700;
          color: var(--c-white);
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }
        
        .exp-title em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: var(--c-primary);
        }

        .exp-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 15px;
          line-height: 1.6;
        }

        /* Metrics Card */
        .exp-metrics-col {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }

        .exp-metrics-card {
          display: flex;
          align-items: stretch;
          background: transparent;
          border: none;
          padding: 48px 40px;
          width: 100%;
          max-width: 1000px;
          justify-content: space-around;
        }
        
        .exp-metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 32px;
        }
        
        .exp-metric:first-child { padding-left: 0; }
        .exp-metric:last-child { padding-right: 0; }
        
        .exp-metric-icon {
          color: var(--c-primary);
          margin-bottom: 24px;
        }
        
        .exp-metric h3 {
          font-size: 48px;
          font-weight: 700;
          color: var(--c-primary);
          margin-bottom: 12px;
          line-height: 1;
        }
        
        .exp-metric p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }
        
        .exp-metric-divider {
          width: 1px;
          background: rgba(109, 215, 76, 0.15);
          margin: 16px 0;
        }

        /* Timeline Area */
        .exp-timeline {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Timeline Item Row */
        .exp-row {
          display: flex;
          align-items: stretch;
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        /* Left side: Icon */
        .exp-icon-col {
          width: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        
        .exp-large-icon {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          border-radius: 16px;
          background: rgba(9, 16, 10, 0.8);
          border: 1px solid rgba(109, 215, 76, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
          z-index: 2;
        }
        
        .exp-line {
          width: 1px;
          flex: 1;
          background: rgba(109, 215, 76, 0.2);
          margin-top: 8px;
          margin-bottom: -48px; /* Reach through the 40px gap */
        }

        /* Date Column */
        .exp-date-col {
          width: 160px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          padding-top: 16px;
        }
        
        .exp-date {
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary);
        }

        .exp-tag {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Main Card */
        .exp-card-col {
          flex: 1;
          position: relative;
        }

        .exp-card-dot {
          position: absolute;
          left: -4px;
          top: 32px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--c-primary);
          box-shadow: 0 0 10px var(--c-primary);
          z-index: 2;
        }

        /* Pulse Animation */
        @keyframes pulse-glow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        
        .exp-live-dot {
          position: relative;
        }
        
        .exp-live-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid var(--c-primary);
          animation: pulse-glow 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
          pointer-events: none;
        }

        .exp-card {
          background: rgba(9, 16, 10, 0.4);
          border: 1px solid rgba(109, 215, 76, 0.15);
          border-radius: 16px;
          padding: 32px;
          height: 100%;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .exp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        
        .exp-role {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 8px;
        }
        
        .exp-company-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .exp-company {
          color: var(--c-primary);
          font-weight: 600;
          font-size: 15px;
        }
        
        .exp-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 13px;
        }
        
        .exp-pill {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 12px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .exp-pill-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--c-primary);
        }

        .exp-card-body {
          display: flex;
          gap: 48px;
        }
        
        .exp-desc {
          flex: 1;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          line-height: 1.7;
        }
        
        .exp-highlights {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .exp-highlights-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--c-primary);
          margin-bottom: 4px;
        }
        
        .exp-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        
        .exp-highlight-icon {
          color: var(--c-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .exp-highlight-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          line-height: 1.5;
        }

        /* Mobile Adjustments */
        @media (max-width: 1024px) {
          .exp-card-body {
            flex-direction: column;
            gap: 32px;
          }
          .exp-metrics-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            padding: 32px;
          }
          .exp-metric-divider {
            display: none;
          }
          .exp-metric {
            padding: 0;
          }
        }
        
        @media (max-width: 768px) {
          .exp-row {
            flex-direction: column;
            gap: 16px;
          }
          .exp-date-col {
            padding-top: 0;
            flex-direction: row;
            align-items: center;
            width: 100%;
          }
          .exp-icon-col {
            display: none;
          }
          .exp-card-dot {
            display: none;
          }

          .exp-metrics-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="exp-container">
        
        {/* Top Header */}
        <div className="exp-top-row">
          <div className="exp-header-col">
            <Reveal delay={0}>
              <div className="exp-eyebrow">
                <div className="exp-dot" />
                <span>MY JOURNEY</span>
              </div>
              <h2 className="exp-title">Experience that<br/><em>shaped</em> my craft.</h2>
              <p className="exp-subtitle">A timeline of my professional journey, the problems I've<br/>solved, and the impact I've created along the way.</p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-row">
              <Reveal delay={idx * 150} style={{ display: 'flex', width: '100%', gap: '32px' }}>
                
                {/* Left Icon Timeline */}
                <div className="exp-icon-col">
                  <motion.div 
                    className="exp-large-icon"
                    whileHover={{ scale: 1.08, rotate: 3, borderColor: 'rgba(109, 215, 76, 0.5)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <exp.icon size={24} strokeWidth={1.5} />
                  </motion.div>
                  {idx < experiences.length - 1 && (
                    <motion.div 
                      className="exp-line" 
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      style={{ transformOrigin: 'top' }}
                    />
                  )}
                </div>

                {/* Date & Tag */}
                <div className="exp-date-col">
                  <div className="exp-date">{exp.date}</div>
                  {exp.isCurrent && <div className="exp-tag">Current</div>}
                </div>

                {/* Main Content Card */}
                <div className="exp-card-col">
                  <div className={`exp-card-dot ${exp.isCurrent ? 'exp-live-dot' : ''}`} />
                  <motion.div 
                    className="exp-card"
                    whileHover={{ y: -6, borderColor: 'rgba(109, 215, 76, 0.35)', boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(109, 215, 76, 0.08)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="exp-card-top">
                      <div>
                        <h3 className="exp-role">{exp.role}</h3>
                        <div className="exp-company-row">
                          <span className="exp-company">{exp.company}</span>
                          <span className="exp-location">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="exp-pill">
                        <div className="exp-pill-dot" />
                        {exp.type}
                      </div>
                    </div>
                    
                    <div className="exp-card-body">
                      <div className="exp-desc">{exp.description}</div>
                      <div className="exp-highlights">
                        <div className="exp-highlights-title">Key Highlights</div>
                        {exp.highlights.map((hl, i) => (
                          <motion.div 
                            key={i} 
                            className="exp-highlight-item"
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="exp-highlight-icon">
                              <CheckCircle2 size={16} strokeWidth={2} />
                            </div>
                            <div className="exp-highlight-text">{hl}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

              </Reveal>
            </div>
          ))}
          


        </div>

        {/* Bottom Metrics Card */}
        <div className="exp-metrics-col">
          <Reveal delay={450} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className="exp-metrics-card">
              <motion.div className="exp-metric" whileHover={{ y: -5, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="exp-metric-icon"><Briefcase size={28}/></div>
                <h3>2+</h3>
                <p>Years of<br/>Experience</p>
              </motion.div>
              <div className="exp-metric-divider" />
              <motion.div className="exp-metric" whileHover={{ y: -5, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="exp-metric-icon"><Rocket size={28}/></div>
                <h3>10+</h3>
                <p>Projects<br/>Delivered</p>
              </motion.div>
              <div className="exp-metric-divider" />
              <motion.div className="exp-metric" whileHover={{ y: -5, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="exp-metric-icon"><Users size={28}/></div>
                <h3>2</h3>
                <p>Companies<br/>Worked With</p>
              </motion.div>
              <div className="exp-metric-divider" />
              <motion.div className="exp-metric" whileHover={{ y: -5, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="exp-metric-icon"><Target size={28}/></div>
                <h3>100%</h3>
                <p>Commitment to<br/>Better Design</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
