import { ArrowRight, User, Code2, Layers, Component, Briefcase, Calendar, Users, CircleDot } from 'lucide-react';
import Reveal from './Reveal';
import CircularGallery from './CircularGallery';

const principles = [
  {
    num: '01',
    title: 'User First',
    desc: 'I translate user needs and business goals into clear, intuitive experiences that reduce friction and make products easier to understand and use.',
    Icon: User
  },
  {
    num: '02',
    title: 'Design + Technology',
    desc: 'I understand how interfaces move from design files into real products, allowing me to collaborate closely with developers and create solutions that are practical, scalable, and implementation-aware.',
    Icon: Code2
  },
  {
    num: '03',
    title: 'Systems Thinking',
    desc: 'I build reusable components, consistent patterns, and scalable design systems that maintain visual and functional consistency as products evolve.',
    Icon: Layers
  }
];

const galleryItems = principles.map((p) => ({
  num: p.num,
  text: p.title.toUpperCase(),
  desc: p.desc,
  image: ''
}));

// Laurel Graphic removed

export default function AboutMe() {
  return (
    <section id="about" style={{
      position: 'relative',
      width: '100%',
      padding: '100px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');

        .about-container {
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        /* Top Section */
        .about-top {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .about-top-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          max-width: 1000px;
        }



        .about-headline {
          font-family: var(--font-sans);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          color: var(--c-white);
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 0;
          text-wrap: balance;
        }

        .about-headline-accent {
          font-family: var(--font-display);
          font-style: italic;
          color: var(--c-primary);
          font-weight: 400;
        }

        .about-intro-text {
          font-family: var(--font-sans);
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          max-width: 700px;
        }

        .about-top-right {
          flex: 0 0 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding-top: 40px;
        }

        /* Principles Grid */
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .principle-card {
          background: #09100a;
          background-image: radial-gradient(circle at top right, rgba(109,215,76,0.03), transparent 60%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 380px;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .principle-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          background: radial-gradient(circle at center, var(--c-primary) 0%, transparent 70%);
          opacity: 0.3;
          transition: opacity 0.4s ease;
        }

        .principle-card:hover {
          border-color: rgba(109, 215, 76, 0.15);
          transform: translateY(-4px);
        }

        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          80%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .principle-card:hover::after {
          opacity: 0.8;
          box-shadow: 0 0 20px var(--c-primary);
        }

        .principle-num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.3);
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--c-primary);
          font-weight: 600;
          margin-bottom: 32px;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.02);
        }

        .principle-icon-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .principle-icon-wrapper {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(109,215,76,0.03);
          border: 1px solid rgba(109,215,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 10px rgba(109,215,76,0.05), 0 4px 10px rgba(0,0,0,0.3);
        }

        .principle-line-group {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
        }

        .principle-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--c-primary);
        }

        .principle-line {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.3);
        }

        .principle-title {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 16px;
        }

        .principle-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        /* Bottom Section */
        .about-footer {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 64px;
          margin-top: 16px;
          padding-top: 64px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .vertical-divider {
          background: rgba(255, 255, 255, 0.05);
          width: 1px;
          height: 100%;
        }

        .currently-label {
          font-family: var(--font-sans);
          font-size: 11px;
          color: var(--c-primary);
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .currently-role {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 6px;
        }

        .currently-company {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 400;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .timeline-step {
          position: relative;
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .timeline-dot {
          position: absolute;
          left: 0;
          top: 6px;
          width: 8px;
          height: 8px;
          background: var(--c-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--c-primary);
        }

        .timeline-year {
          font-family: var(--font-sans);
          font-size: 11px;
          color: var(--c-primary);
          font-weight: 700;
          letter-spacing: 1px;
        }

        .timeline-title {
          font-family: var(--font-sans);
          font-size: 16px;
          color: var(--c-white);
          font-weight: 600;
        }

        .timeline-org {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        .experience-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--c-white);
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px 24px;
          border-radius: 100px;
          width: fit-content;
        }

        .experience-cta:hover {
          color: var(--c-primary);
          border-color: rgba(109,215,76,0.3);
          background: rgba(255,255,255,0.02);
        }

        @media (max-width: 1024px) {
          .about-top {
            flex-direction: column;
          }
          .about-top-right {
            width: 100%;
            flex: none;
            padding-top: 0;
          }
        }

        @media (max-width: 900px) {
          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .about-footer {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>

      <div className="about-container">
        
        {/* Top Section */}
        <div className="about-top">
          <div className="about-top-left">
            <Reveal delay={100}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
                <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>ABOUT ME</div>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="about-headline">
                I <span className="about-headline-accent">design with purpose</span>, build with systems, and think beyond the interface.
              </h2>
            </Reveal>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' }}>
              <Reveal delay={300}>
                <p className="about-intro-text" style={{ maxWidth: '800px' }}>
                  I’m a UX/UI and Product Designer focused on creating intuitive, user-centered experiences for web and mobile. My work spans the entire process-from foundational user research and wireframing, to crafting high-fidelity UI and scalable design systems. I work closely with developers to translate these design decisions into practical, accessible, and implementation-ready digital products.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Interactive 3D Canvas Gallery */}
        <Reveal delay={600}>
          <div className="w-full h-[400px] my-6 relative overflow-hidden">
            {/* Left Edge Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#081509] via-[#081509]/80 to-transparent z-20" />
            
            {/* Right Edge Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#081509] via-[#081509]/80 to-transparent z-20" />
            
            <CircularGallery items={galleryItems} bend={3} textColor="#6dd74c" borderRadius={0.05} />
          </div>
        </Reveal>

        {/* Principles Separator */}
        <Reveal delay={900}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, width: '100%', marginTop: 32, fontSize: 10, color: 'var(--c-primary)', letterSpacing: 3, flexWrap: 'wrap', fontWeight: 600 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)' }} />
            DESIGNING
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)' }} />
            THINKING
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)' }} />
            BUILDING
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)' }} />
            IMPACTING
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)' }} />
          </div>
        </Reveal>

        {/* Footer Context / Mini Timeline */}
        <Reveal delay={1000}>
          <div className="about-footer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', marginTop: '16px', paddingTop: '64px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            
            {/* Column 1: Currently */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
                <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>CURRENTLY</div>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' }} />
              </div>

              {/* Card */}
              <div style={{ 
                background: 'rgba(9, 16, 10, 0.4)', 
                border: '1px solid rgba(109, 215, 76, 0.2)', 
                borderRadius: 24, 
                padding: 32, 
                position: 'relative', 
                boxShadow: '0 0 40px rgba(109, 215, 76, 0.05)',
                overflow: 'hidden'
              }}>
                {/* Inner top-left icon */}
                <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(109,215,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                  <Briefcase size={20} color="var(--c-primary)" />
                </div>

                <div style={{ color: 'var(--c-primary)', fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>MY CURRENT ROLE</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--c-white)', marginBottom: 8 }}>Associate Web Designer</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>G1 Global • Hyderabad, India</div>

                {/* Separator */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '24px 0', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: -1, height: 3, width: '40%', background: 'linear-gradient(90deg, transparent, var(--c-primary), transparent)', animation: 'shimmer-line 2.5s infinite ease-in-out' }} />
                </div>

                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
                  Translating business briefs into responsive UI concepts, interaction flows, wireframes, and implementation-ready design documentation while collaborating closely with frontend developers.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
                    <Component size={14} color="var(--c-primary)" /> Design Systems
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
                    <Code2 size={14} color="var(--c-primary)" /> Design to Development
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
                <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>MY JOURNEY</div>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' }} />
              </div>

              {/* Timeline Items */}
              <div style={{ position: 'relative' }}>
                {/* Vertical line */}
                <div style={{ position: 'absolute', left: 72, top: 24, bottom: 0, width: 1, background: 'rgba(109,215,76,0.2)' }} />

                {/* Item 1 */}
                <div style={{ display: 'flex', position: 'relative', marginBottom: 40 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, border: '1px solid rgba(109,215,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#09100a', zIndex: 2 }}>
                    <Calendar size={20} color="var(--c-primary)" />
                  </div>
                  <div style={{ width: 24, height: 1, background: 'rgba(109,215,76,0.2)', marginTop: 24 }} />
                  
                  <div style={{ position: 'relative', marginTop: 20, marginLeft: -4, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 8, height: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 10px var(--c-primary)', position: 'relative', zIndex: 2 }} />
                    <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--c-primary)', animation: 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite' }} />
                  </div>
                  
                  <div style={{ marginLeft: 24, flex: 1 }}>
                    <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, marginBottom: 4 }}>October 2025 – Present</div>
                    <div style={{ color: 'var(--c-white)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Associate Web Designer</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 16 }}>G1 Global • Full-time (On-site)</div>

                    <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: 16, background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', marginTop: 8, flexShrink: 0 }} />
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                          Working on responsive UI, interaction design, wireframes, and design documentation with a strong focus on developer collaboration.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={{ display: 'flex', position: 'relative', marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, border: '1px solid rgba(109,215,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#09100a', zIndex: 2 }}>
                    <Users size={20} color="var(--c-primary)" />
                  </div>
                  <div style={{ width: 24, height: 1, background: 'rgba(109,215,76,0.2)', marginTop: 24 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 10px var(--c-primary)', marginTop: 20, marginLeft: -4, zIndex: 2 }} />
                  
                  <div style={{ marginLeft: 24, flex: 1 }}>
                    <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, marginBottom: 4 }}>March 2025 – June 2025</div>
                    <div style={{ color: 'var(--c-white)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Associate Product Designer</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 16 }}>InterviewBuddy • Visakhapatnam, India (On-site)</div>

                    <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: 16, background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', marginTop: 8, flexShrink: 0 }} />
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                          Designed structured interaction flows, high-fidelity UI systems, and contributed to cross-functional discussions to align product goals with UX strategy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a href="#experience" style={{ textDecoration: 'none' }}>
                <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: 100, padding: '12px 12px 12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(9,16,10,0.5)', marginTop: 24, transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(109,215,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CircleDot size={16} color="var(--c-primary)" />
                    </div>
                    <div>
                      <div style={{ color: 'var(--c-white)', fontSize: 16, fontWeight: 600 }}>View Full Experience</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>See my complete professional journey</div>
                    </div>
                  </div>
                  
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #6dd74c, #3b8221)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(109,215,76,0.4)' }}>
                    <ArrowRight size={20} color="#000" />
                  </div>
                </div>
              </a>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
