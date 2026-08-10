import Reveal from './Reveal';
import { Terminal, BookOpen, Backpack, Landmark, MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    icon: Terminal,
    degreePart1: 'B.Tech in',
    degreePart2: 'Information Technology',
    institution: 'Aditya University',
    location: 'Surampalem, AP',
    date: '2021 - 2025',
    status: 'Completed',
    focusIcon: Award,
    focusAreas: 'Web Development, UI/UX Design, Human-Computer Interaction, Programming. (CGPA: 7.83)'
  },
  {
    icon: BookOpen,
    degreePart1: 'Intermediate',
    degreePart2: '(12th Grade)',
    institution: 'Gamyam Junior College',
    location: 'G.Mamidada',
    date: '2019 - 2021',
    status: 'Completed',
    focusIcon: Award,
    focusAreas: 'Physics, Chemistry, Mathematics (MPC). (CGPA: 8.54)'
  },
  {
    icon: Backpack,
    degreePart1: 'Secondary',
    degreePart2: 'Education (10th Grade)',
    institution: 'S.R.Z.P High School',
    location: 'Rayavaram',
    date: '2019',
    status: 'Completed',
    focusIcon: Award,
    focusAreas: 'Science, Mathematics, Social Studies, English. (CGPA: 9.7)'
  }
];

export default function Education() {
  return (
    <section id="education" style={{
      position: 'relative',
      width: '100%',
      padding: '100px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'transparent'
    }}>
      <style>{`
        .edu-wrapper {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        /* Top Section: Header & Illustration */
        .edu-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 40px;
        }

        .edu-header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .edu-eyebrow {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--c-primary);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        
        .edu-eyebrow .dot {
          width: 6px;
          height: 6px;
          background: var(--c-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--c-primary);
        }

        .edu-title {
          font-family: var(--font-sans);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          color: var(--c-white);
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .edu-title em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-weight: 500;
          color: var(--c-primary);
        }

        .edu-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          max-width: 480px;
        }

        /* Bottom Section: Cards Grid */
        .edu-grid-container {
          position: relative;
          width: 100%;
        }

        .edu-connection-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          border-top: 1px dashed rgba(109, 215, 76, 0.3);
          z-index: 1;
          transform: translateY(-50%);
        }

        .edu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .edu-card {
          background: linear-gradient(180deg, rgba(14, 26, 16, 0.7) 0%, rgba(9, 16, 10, 0.4) 100%);
          border: 1px solid rgba(109, 215, 76, 0.15);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .edu-card-connector-dot {
          position: absolute;
          top: 50%;
          left: -16px;
          width: 8px;
          height: 8px;
          background: var(--c-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px var(--c-primary);
        }

        .edu-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .edu-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(109, 215, 76, 0.1);
          border: 1px solid rgba(109, 215, 76, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
        }

        .edu-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .edu-status-pill .dot {
          width: 6px;
          height: 6px;
          background: var(--c-primary);
          border-radius: 50%;
        }

        .edu-card-title {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu-degree-p1 {
          font-size: 22px;
          font-weight: 700;
          color: var(--c-white);
          line-height: 1.2;
        }

        .edu-degree-p2 {
          font-size: 22px;
          font-weight: 700;
          color: var(--c-primary);
          line-height: 1.2;
        }

        .edu-card-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .edu-detail-row {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .edu-detail-icon {
          color: var(--c-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .edu-detail-row-split {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .edu-detail-divider {
          width: 1px;
          height: 12px;
          background: rgba(255, 255, 255, 0.15);
        }

        .edu-focus-box {
          background: rgba(9, 16, 10, 0.5);
          border: 1px solid rgba(109, 215, 76, 0.1);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          margin-top: auto;
        }

        .edu-focus-icon {
          color: var(--c-primary);
          flex-shrink: 0;
        }

        .edu-focus-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .edu-focus-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--c-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .edu-focus-text {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .edu-hero {
            gap: 40px;
          }
          .edu-grid {
            grid-template-columns: 1fr;
          }
          .edu-connection-line {
            display: none;
          }
          .edu-card-connector-dot {
            display: none;
          }
          .edu-detail-row-split {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .edu-detail-divider {
            display: none;
          }
        }
      `}</style>

      <div className="edu-wrapper">
        
        {/* Top Header & Illustration */}
        <div className="edu-hero">
          <div className="edu-header-content">
            <Reveal delay={0}>
              <div className="edu-eyebrow">
                <div className="dot" />
                EDUCATION
                <div className="dot" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="edu-title">Building the<br/><em>foundation.</em></h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="edu-description">
                My academic background has equipped me with strong technical knowledge, problem-solving skills, and a curious mindset that drives continuous learning.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Bottom Cards Grid */}
        <div className="edu-grid-container">
          <div className="edu-connection-line" />
          
          <div className="edu-grid">
            {educationData.map((edu, idx) => (
              <Reveal key={idx} delay={400 + (idx * 150)} style={{ display: 'flex', height: '100%' }}>
                <motion.div 
                  className="edu-card"
                  whileHover={{ y: -8, borderColor: 'rgba(109, 215, 76, 0.4)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Connecting dot for all but the first card on desktop */}
                  {idx > 0 && <div className="edu-card-connector-dot" />}

                  <div className="edu-card-header">
                    <div className="edu-card-icon">
                      <edu.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="edu-status-pill">
                      <div className="dot" />
                      {edu.status}
                    </div>
                  </div>

                  <div className="edu-card-title">
                    <div className="edu-degree-p1">{edu.degreePart1}</div>
                    <div className="edu-degree-p2">{edu.degreePart2}</div>
                  </div>

                  <div className="edu-card-details">
                    <div className="edu-detail-row">
                      <div className="edu-detail-icon"><Landmark size={16} /></div>
                      {edu.institution}
                    </div>
                    <div className="edu-detail-row-split">
                      <div className="edu-detail-row">
                        <div className="edu-detail-icon"><MapPin size={16} /></div>
                        {edu.location}
                      </div>
                      <div className="edu-detail-divider" />
                      <div className="edu-detail-row">
                        <div className="edu-detail-icon"><Calendar size={16} /></div>
                        {edu.date}
                      </div>
                    </div>
                  </div>

                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
