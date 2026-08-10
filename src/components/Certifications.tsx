import Reveal from './Reveal';
import { Landmark, GraduationCap, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';


const certData = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google via Coursera',
    issuerIcon: Landmark,
    description: 'Comprehensive program covering user research, UX design, prototyping, usability testing, and design thinking.',
    tags: ['User Research', 'UX Design', 'Prototyping', 'Usability Testing', 'Design Thinking'],
    year: 'Jul 2025',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/SPVXS901GL28',
    logoType: 'google'
  },
  {
    title: 'UI/UX with Figma and Adobe XD',
    issuer: 'Skillshare / Udemy',
    issuerIcon: GraduationCap,
    description: 'Focused on interface design, prototyping, design systems, and real-world UI/UX workflows.',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'UI Design', 'Design Systems'],
    year: 'Dec 2024',
    link: 'https://www.udemy.com/certificate/UC-313d1d04-301b-4f89-b960-bfd920799b1a/',
    logoType: 'figma'
  },
  {
    title: 'UI/UX for Beginners',
    issuer: 'Great Learning',
    issuerIcon: GraduationCap,
    description: 'Introduction to design principles, user experience basics, wireframing, and usability fundamentals.',
    tags: ['UI Basics', 'User Experience', 'Wireframing', 'Usability', 'Design Principles'],
    year: 'Feb 2024',
    link: 'https://drive.google.com/file/d/12HAh2Wf2NtNzd6BuKzdbtmiLjHddgJbm/view',
    logoType: 'rocket'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" style={{
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
        .certs-wrapper {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        /* Header Area */
        .certs-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .certs-eyebrow {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--c-primary);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .certs-eyebrow .dot {
          width: 6px;
          height: 6px;
          background: var(--c-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--c-primary);
        }

        .certs-title {
          font-family: var(--font-sans);
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 700;
          color: var(--c-white);
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .certs-title em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-weight: 500;
          color: var(--c-primary);
        }

        .certs-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          max-width: 520px;
          margin-top: 8px;
        }

        /* Layout Container */
        .certs-layout {
          display: flex;
          gap: 32px;
          position: relative;
        }

        /* Vertical Timeline */
        .certs-timeline {
          width: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding-top: 32px;
        }

        .certs-timeline-line {
          position: absolute;
          top: 0;
          bottom: -40px;
          left: 50%;
          width: 1px;
          border-left: 1px dashed rgba(109, 215, 76, 0.3);
          transform: translateX(-50%);
        }

        /* Cards Column */
        .certs-cards-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        /* Card Row Wrapper (contains dot and card) */
        .certs-card-row {
          display: flex;
          gap: 32px;
          align-items: center;
          position: relative;
        }
        
        .certs-timeline-dot-wrapper {
          position: absolute;
          left: -64px;
          width: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .certs-timeline-dot {
          width: 12px;
          height: 12px;
          background: var(--c-primary);
          border-radius: 50%;
          border: 3px solid rgba(9, 16, 10, 1);
          box-shadow: 0 0 0 1px rgba(109, 215, 76, 0.3), 0 0 16px rgba(109, 215, 76, 0.5);
          z-index: 2;
        }

        /* Horizontal Card */
        .cert-card {
          flex: 1;
          background: linear-gradient(135deg, rgba(14, 26, 16, 0.7) 0%, rgba(9, 16, 10, 0.4) 100%);
          border: 1px solid rgba(109, 215, 76, 0.15);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 32px;
          align-items: center;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .cert-card:hover {
          border-color: rgba(109, 215, 76, 0.3);
          transform: translateY(-4px);
        }



        /* Middle Content */
        .cert-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cert-title {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 700;
          color: var(--c-white);
          line-height: 1.3;
        }

        .cert-issuer {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--c-primary);
          font-size: 14px;
          font-weight: 500;
        }

        .cert-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .cert-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .cert-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.65);
        }

        .cert-tag .dot {
          width: 4px;
          height: 4px;
          background: var(--c-primary);
          border-radius: 50%;
        }

        /* Right Details Block */
        .cert-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 160px;
          flex-shrink: 0;
          padding-left: 32px;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cert-year-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: rgba(9, 16, 10, 0.6);
          border: 1px solid rgba(109, 215, 76, 0.2);
          padding: 8px 16px;
          border-radius: 100px;
          color: var(--c-primary);
          font-size: 14px;
          font-weight: 500;
        }

        .cert-issued-text {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }

        .cert-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--c-primary);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px dashed rgba(109, 215, 76, 0.5);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }

        .cert-link:hover {
          color: #fff;
          border-color: #fff;
        }

        /* Footer Card */
        .cert-footer-card {
          margin-top: 16px;
          margin-left: 48px; /* Align with cards, skipping timeline */
          background: linear-gradient(90deg, rgba(14, 26, 16, 0.8) 0%, rgba(9, 16, 10, 0.4) 100%);
          border: 1px solid rgba(109, 215, 76, 0.15);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        .cert-footer-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(9, 16, 10, 0.6);
          border: 1px solid rgba(109, 215, 76, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
          flex-shrink: 0;
          box-shadow: inset 0 0 16px rgba(109, 215, 76, 0.1);
        }

        .cert-footer-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 2;
        }

        .cert-footer-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--c-white);
        }

        .cert-footer-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .cert-footer-bg {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 40%;
          background-image: radial-gradient(rgba(109, 215, 76, 0.15) 1px, transparent 1px);
          background-size: 16px 16px;
          mask-image: linear-gradient(to left, black, transparent);
          -webkit-mask-image: linear-gradient(to left, black, transparent);
          z-index: 1;
        }

        @media (max-width: 900px) {
          .certs-layout {
            gap: 16px;
          }
          .certs-timeline {
            display: none;
          }
          .certs-timeline-dot-wrapper {
            display: none;
          }
          .cert-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .cert-details {
            width: 100%;
            padding-left: 0;
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 24px;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .cert-year-box {
            width: auto;
          }
          .cert-footer-card {
            margin-left: 0;
          }
        }

        @media (max-width: 600px) {
          .cert-details {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="certs-wrapper">
        
        {/* Top Header */}
        <div className="certs-header">
          <Reveal delay={0}>
            <div className="certs-eyebrow">
              <div className="dot" />
              CERTIFICATIONS
              <div className="dot" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="certs-title">Certifi<em>cations</em></h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="certs-description">
              Continuous learning keeps me curious and sharp. These certifications have strengthened my design thinking and product skills.
            </p>
          </Reveal>
        </div>

        {/* Layout Container */}
        <div className="certs-layout">
          
          {/* Vertical Timeline */}
          <div className="certs-timeline">
            <motion.div 
              className="certs-timeline-line"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Cards Column */}
          <div className="certs-cards-col">
            {certData.map((cert, idx) => (
              <Reveal key={idx} delay={idx * 150} style={{ width: '100%' }}>
                <div className="certs-card-row">
                  
                  {/* Timeline Dot (absolute positioned relative to row) */}
                  <div className="certs-timeline-dot-wrapper">
                    <motion.div 
                      className="certs-timeline-dot"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (idx * 0.2) }}
                    />
                  </div>

                  {/* Horizontal Card */}
                  <div className="cert-card">
                    


                    {/* Middle Content */}
                    <div className="cert-content">
                      <h3 className="cert-title">{cert.title}</h3>
                      <div className="cert-issuer">
                        <cert.issuerIcon size={16} />
                        {cert.issuer}
                      </div>
                      <p className="cert-desc">{cert.description}</p>
                      
                      <div className="cert-tags">
                        {cert.tags.map((tag, i) => (
                          <div key={i} className="cert-tag">
                            <div className="dot" />
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Details */}
                    <div className="cert-details">
                      <div className="cert-year-box">
                        {cert.year}
                        <Calendar size={16} />
                      </div>
                      <div className="cert-issued-text">Issued</div>
                      <a href={cert.link} className="cert-link">
                        View Credential <ArrowUpRight size={16} />
                      </a>
                    </div>
                    
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
