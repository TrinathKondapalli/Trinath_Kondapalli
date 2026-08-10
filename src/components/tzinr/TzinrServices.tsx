import { motion } from 'framer-motion';
import { PenTool, Monitor, Zap, LayoutTemplate, Smartphone, Layers, MousePointer2, Navigation, Globe } from 'lucide-react';
import Reveal from '../Reveal';

const services = [
  {
    id: '01',
    title: 'PRODUCT DESIGN',
    icon: PenTool,
    skills: [
      { name: 'UX/UI Design', icon: LayoutTemplate },
      { name: 'Prototypes', icon: MousePointer2 },
      { name: 'User Flows', icon: Navigation },
      { name: 'Design Systems', icon: Layers },
      { name: 'Wireframes', icon: PenTool },
      { name: 'Responsive Interfaces', icon: Smartphone }
    ],
    description: 'We turn product ideas and complex workflows into clear, usable digital experiences.',
    visualIcon: Layers, // Placeholder for 3D graphic
  },
  {
    id: '02',
    title: 'WEBSITE DESIGN & DEVELOPMENT',
    icon: Monitor,
    skills: [
      { name: 'Marketing Websites', icon: Globe },
      { name: 'Frontend Development', icon: Monitor },
      { name: 'Landing Pages', icon: LayoutTemplate },
      { name: 'CMS / Content Experiences', icon: Layers },
      { name: 'Responsive Design', icon: Smartphone }
    ],
    description: 'We create websites that communicate clearly, build trust, and help visitors take action.',
    visualIcon: Globe,
  },
  {
    id: '03',
    title: 'INTERACTIVE EXPERIENCES',
    icon: Zap,
    skills: [
      { name: 'Motion Design', icon: Zap },
      { name: 'Interactive Web', icon: MousePointer2 },
      { name: 'Micro-interactions', icon: Navigation },
      { name: 'Creative Development', icon: Layers },
      { name: 'Scroll Experiences', icon: LayoutTemplate }
    ],
    description: 'We use motion and interaction to make digital experiences more engaging without sacrificing usability.',
    visualIcon: MousePointer2,
  }
];

export default function TzinrServices() {
  return (
    <section id="services" className="py-32 relative z-20 bg-[var(--c-base)]">
      <style>{`
        .tzinr-service-row {
          position: relative;
          width: 100%;
          padding: 48px 32px;
          border-radius: 24px;
          cursor: pointer;
          transition: background 0.4s ease;
          overflow: hidden;
        }

        .tzinr-service-row:hover {
          background: rgba(32,97,215,0.03); /* Subtle primary blue tint */
        }

        .tzinr-service-content {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .tzinr-service-num {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 700;
          color: rgba(255,255,255,0.15);
          transition: color 0.4s ease;
        }

        .tzinr-service-row:hover .tzinr-service-num {
          color: var(--c-primary);
        }

        .tzinr-service-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--c-white);
          text-align: left;
          text-transform: uppercase;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease;
        }

        .tzinr-service-row:hover .tzinr-service-title {
          transform: translateX(12px);
          color: var(--c-white);
        }

        .tzinr-service-subtitle {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--c-muted);
          margin-top: 12px;
          line-height: 1.6;
          max-width: 500px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tzinr-service-row:hover .tzinr-service-subtitle {
          transform: translateX(12px);
        }

        .tzinr-service-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
          max-width: 300px;
        }

        .tzinr-service-tag {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--c-muted);
          border: 1px solid var(--c-deep);
          background: rgba(3,10,29,0.5);
          padding: 8px 16px;
          border-radius: 100px;
          transition: border-color 0.4s ease, color 0.4s ease, background 0.4s ease;
        }

        .tzinr-service-row:hover .tzinr-service-tag {
          border-color: rgba(32,97,215,0.3);
          color: var(--c-primary);
          background: rgba(32,97,215,0.05);
        }

        @media (max-width: 900px) {
          .tzinr-service-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .tzinr-service-row {
            padding: 32px 16px;
          }
          .tzinr-service-row:hover {
            background: transparent;
          }
          .tzinr-service-row:hover .tzinr-service-title,
          .tzinr-service-row:hover .tzinr-service-subtitle {
            transform: none;
          }
          .tzinr-service-tags {
            justify-content: flex-start;
            max-width: 100%;
            margin-top: 8px;
          }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            WHAT WE DO
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight mb-6 tracking-tight"
          >
            DESIGN THAT MOVES<br/>BUSINESSES <span className="text-[var(--c-primary)]">FORWARD.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--c-body)] leading-relaxed max-w-2xl"
          >
            From product interfaces to high-impact websites, we create digital experiences designed around real business problems.
          </motion.p>
        </div>

        {/* Services List (Row-based Sleek Layout) */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100} style={{ width: '100%' }}>
              <div className="tzinr-service-row">
                <div className="tzinr-service-content">
                  
                  {/* Number */}
                  <div className="tzinr-service-num">{service.id}</div>
                  
                  {/* Title & Description */}
                  <div>
                    <div className="tzinr-service-title">{service.title}</div>
                    <div className="tzinr-service-subtitle">{service.description}</div>
                  </div>
                  
                  {/* Tags (Skills) */}
                  <div className="tzinr-service-tags">
                    {/* Just display the top 2 skills to keep the design clean like the screenshot */}
                    {service.skills.slice(0, 2).map(skill => (
                      <div key={skill.name} className="tzinr-service-tag">
                        {skill.name}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
