import { motion } from 'framer-motion';
import { PenTool, Monitor, Code, Palette, Video, ArrowRight, Check } from 'lucide-react';

const servicesData = [
  {
    num: '01',
    icon: PenTool,
    title: 'UX/UI Design',
    desc: 'Designing intuitive and engaging digital experiences centered around user needs.',
    deliverables: ['User Research', 'Wireframes', 'UI Design', 'Interactive Prototype', 'Design System']
  },
  {
    num: '02',
    icon: Monitor,
    title: 'Website Design',
    desc: 'Crafting beautiful, high-converting websites tailored to your brand identity.',
    deliverables: ['Landing Pages', 'Business Websites', 'Portfolio Websites', 'Responsive Design']
  },
  {
    num: '03',
    icon: Code,
    title: 'Frontend Development',
    desc: 'Building fast, scalable, and highly interactive web applications.',
    deliverables: ['React', 'Next.js', 'Responsive Development', 'Animations', 'Performance Optimization']
  },
  {
    num: '04',
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Creating strong visual identities and compelling marketing assets.',
    deliverables: ['Social Media', 'Brand Assets', 'Marketing Creatives', 'Presentation Design']
  },
  {
    num: '05',
    icon: Video,
    title: 'Video Editing',
    desc: 'Producing engaging video content and seamless motion graphics.',
    deliverables: ['Promotional Videos', 'Product Videos', 'Social Media Reels', 'Motion Graphics']
  }
];

export default function Services() {
  return (
    <section id="services" style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 32px;
          width: 100%;
          max-width: 1440px; /* Slightly wider to fit 5 columns gracefully */
        }

        .service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 32px 24px;
          border-radius: 28px;
          border: 1px solid rgba(109,215,76,0.05);
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(109,215,76,0.3);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15);
        }

        .service-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.15);
          display: flex;
          align-items: center;
          justifyContent: center;
          margin-bottom: 24px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease;
        }

        .service-card:hover .service-icon-wrap {
          transform: scale(1.1);
          background: rgba(109,215,76,0.1);
        }

        .learn-more-btn {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: var(--c-primary);
          transition: color 0.3s ease;
        }

        .learn-more-arrow {
          transition: transform 0.3s ease;
        }

        .service-card:hover .learn-more-arrow {
          transform: translateX(6px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); max-width: 1000px; }
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; max-width: 400px; }
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
          SERVICES
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
        Everything You Need <br/>
        To Build <br/>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px'
        }}>
          Exceptional Digital Products.
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
        From strategy and design to development and content creation, I help businesses build premium digital experiences that create real business impact.
      </motion.p>

      {/* Services Grid */}
      <div className="services-grid">
        {servicesData.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="service-card"
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
              {service.num}
            </div>

            {/* Icon */}
            <div className="service-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <service.icon size={28} color="var(--c-primary)" strokeWidth={1.5} />
            </div>

            {/* Title & Desc */}
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--c-white)',
              marginBottom: 12,
              letterSpacing: '-0.5px'
            }}>
              {service.title}
            </h3>
            
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
              marginBottom: 24,
              minHeight: 72 // ensures uniform height across cards
            }}>
              {service.desc}
            </p>

            {/* Deliverables List */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              {service.deliverables.map((item, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%',
                    background: 'rgba(109,215,76,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Check size={10} color="var(--c-primary)" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <div className="learn-more-btn">
              Learn More
              <ArrowRight size={16} className="learn-more-arrow" strokeWidth={2.5} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
