import Reveal from './Reveal';

const row1Testimonials = [
  {
    name: 'Emma Johnson',
    role: 'Project Manager at Tech Innovators',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    text: "Trinadh transformed our platform into a modern, high-converting experience. The design not only looks stunning, but it increased conversions seamlessly."
  },
  {
    name: 'Michael Smith',
    role: 'Sales Executive at Global Enterprises',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    text: "I love how cleanly everything integrates with our design system. It saves us so much time and prevents double bookings or errors."
  },
  {
    name: 'David Miller',
    role: 'Operations Manager at Apex',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: "The frontend execution is spot-on. Highly efficient development that significantly reduced UI bugs and improved user retention."
  },
  {
    name: 'Sarah Jenkins',
    role: 'Product Director at Velocity',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    text: "His attention to detail and ability to execute complex UI tasks flawlessly sets him apart from anyone else."
  }
];

const row2Testimonials = [
  {
    name: 'Sam Smith',
    role: 'CEO at Business Solutions Group',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    text: "Time is my most valuable resource. Trinadh helps optimize our interface so our team can focus on what matters most."
  },
  {
    name: 'Jane Doe',
    role: 'Marketing Director at Creative Solutions',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    text: "Trinadh revolutionized our workflow. It's like having a personal design engineering powerhouse working around the clock!"
  },
  {
    name: 'Sophia Lee',
    role: 'HR Director at People First Corp',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    text: "Working with Trinadh has been a breeze. The final frontend output is a total game changer for our department."
  },
  {
    name: 'Alex Rivera',
    role: 'Creative Lead at Pulse Digital',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    text: "Exceptional quality and responsiveness. The digital ecosystems he delivers exceed all our expectations."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      position: 'relative',
      width: '100%',
      padding: '120px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--c-base)',
      overflow: 'hidden'
    }}>
      <style>{`
        .testimonials-header-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 24px;
          margin-bottom: 60px;
        }

        .marquee-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          overflow: hidden;
          padding: 20px 0;
        }

        .marquee-fade-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(90deg, var(--c-base) 0%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        .marquee-fade-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(-90deg, var(--c-base) 0%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-track-left {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollLeft 35s linear infinite;
        }

        .marquee-track-right {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollRight 38s linear infinite;
        }

        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }

        .testimonial-card {
          width: 400px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }

        .testimonial-card:hover {
          border-color: color-mix(in srgb, var(--c-primary) 40%, transparent);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px -10px color-mix(in srgb, var(--c-primary) 20%, transparent);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .card-author-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-author-name {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }

        .card-author-role {
          font-family: var(--font-sans);
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
        }

        .card-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-text {
          font-family: var(--font-sans);
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            width: 320px;
            padding: 20px;
          }
          .marquee-fade-left, .marquee-fade-right {
            width: 40px;
          }
        }
      `}</style>

      {/* Heading Section (Left Untouched) */}
      <div className="testimonials-header-container">
        <Reveal delay={0}>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '6px 16px',
              background: 'var(--rgba-dark-06)',
              border: '1px solid var(--rgba-white-03)',
              borderRadius: 100,
              marginBottom: 24
            }}
          >
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
              WHAT CLIENTS SAY
            </span>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
          </div>
        </Reveal>
      </div>

      {/* Dual Row Marquee Scrollers */}
      <div className="marquee-wrapper">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        {/* Row 1 - Left Scroll */}
        <div className="marquee-track-left">
          {[...row1Testimonials, ...row1Testimonials].map((item, idx) => (
            <div key={`r1-${idx}`} className="testimonial-card">
              <div className="card-header">
                <div className="card-author-info">
                  <div className="card-author-name">{item.name}</div>
                  <div className="card-author-role">{item.role}</div>
                </div>
                <img src={item.image} alt={item.name} className="card-avatar" loading="lazy" />
              </div>
              <p className="card-text">"{item.text}"</p>
            </div>
          ))}
        </div>

        {/* Row 2 - Right Scroll */}
        <div className="marquee-track-right">
          {[...row2Testimonials, ...row2Testimonials].map((item, idx) => (
            <div key={`r2-${idx}`} className="testimonial-card">
              <div className="card-header">
                <div className="card-author-info">
                  <div className="card-author-name">{item.name}</div>
                  <div className="card-author-role">{item.role}</div>
                </div>
                <img src={item.image} alt={item.name} className="card-avatar" loading="lazy" />
              </div>
              <p className="card-text">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
