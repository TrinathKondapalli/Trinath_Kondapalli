import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

/* ─── Floating Particle Canvas ─────────────────────── */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 100;
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      op: Math.random() * 0.15 + 0.05,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0, raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;
      for (const p of pts) {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        const op = p.op * ((Math.sin(t * 10 + p.phase) + 1) / 2);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,255,79,${op.toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas ref={ref} aria-hidden style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 1,
    }} />
  );
}

export default function Hero() {
  const services = ["UX/UI Design", "Website Design", "Frontend Development", "Graphic Design", "Video Editing"];

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '160px 80px 80px',
      overflow: 'hidden',
    }}>
      
      {/* ─── BACKGROUND EFFECTS ─────────────────────── */}
      <Particles />

      {/* Subtle Grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage:
          'linear-gradient(var(--border) 1px, transparent 1px),' +
          'linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        opacity: 0.5,
      }} />

      {/* Radial Gradient Glows */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '30%',
        width: 800, height: 800,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(124, 255, 79, 0.04) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden style={{
        position: 'absolute', top: '50%', right: '0%',
        width: 800, height: 800,
        transform: 'translate(20%, -50%)',
        background: 'radial-gradient(circle, rgba(124, 255, 79, 0.06) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ─── MAIN LAYOUT (12-Column Grid) ─────────────── */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 1280,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
        alignItems: 'center',
      }}>

        {/* ─── LEFT COLUMN (Content, 7 cols) ─────────── */}
        <div style={{
          gridColumn: '1 / 8',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}>
          
          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            fontFamily: 'var(--font-heading)',
            fontSize: 13, fontWeight: 700, letterSpacing: '0.15em',
            color: 'var(--text-secondary)',
            animation: 'fade-down 0.8s 0.1s ease both',
          }}>
            UX/UI DESIGNER <span style={{ color: 'var(--accent-primary)' }}>•</span> FRONTEND DEVELOPER <span style={{ color: 'var(--accent-primary)' }}>•</span> CREATIVE DESIGNER
          </div>

          {/* Headline */}
          <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(44px, 5.5vw, 80px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            animation: 'fade-up 0.8s 0.2s ease both',
          }}>
            Designing Digital Experiences <br/>
            <span style={{ color: 'var(--text-muted)' }}>That Help Businesses Grow.</span>
          </h1>

          {/* Supporting Copy */}
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 20,
            lineHeight: '170%',
            color: 'var(--text-secondary)',
            maxWidth: 580,
            animation: 'fade-up 0.8s 0.3s ease both',
          }}>
            I'm Trinadh Kondapalli, a UX/UI Designer and Frontend Developer passionate about designing modern websites and digital products that are intuitive, visually engaging, and built to help businesses grow online.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 20, marginTop: 8,
            animation: 'fade-up 0.8s 0.4s ease both',
          }}>
            <button style={{
              height: 56, padding: '0 32px', borderRadius: 16,
              background: 'var(--text-primary)', color: 'var(--bg-primary)',
              fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16,
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.03) translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1) translateY(0)';
            }}>
              View My Work
            </button>

            <button style={{
              height: 56, padding: '0 32px', borderRadius: 16,
              background: 'transparent', color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16,
              border: '1px solid var(--border)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
            }}>
              Let's Talk
              <ArrowUpRight style={{ width: 18, height: 18, color: 'var(--accent-primary)' }} />
            </button>
          </div>

          {/* Service Pills */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24,
            animation: 'fade-up 0.8s 0.5s ease both',
          }}>
            {services.map((service, i) => (
              <div key={i} style={{
                padding: '8px 16px',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-body)',
                fontSize: 14, fontWeight: 500,
                color: 'var(--text-secondary)',
              }}>
                {service}
              </div>
            ))}
          </div>

          {/* Trust Text */}
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 16,
            animation: 'fade-up 0.8s 0.6s ease both',
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--success)', marginTop: 6,
              boxShadow: '0 0 12px var(--success)',
              animation: 'pulse-dot 2s infinite',
            }} />
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '160%',
              color: 'var(--text-muted)',
            }}>
              Open to Freelance Projects <br/>
              Available for Remote Collaboration
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN (Visual, 5 cols) ─────────── */}
        <div className="hero-right-col" style={{
          gridColumn: '8 / 13',
          position: 'relative',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          animation: 'fade-up 1s 0.4s ease both',
        }}>
          
          {/* Glow Behind Portrait */}
          <div aria-hidden style={{
            position: 'absolute', inset: -20,
            background: 'var(--accent-glow)',
            filter: 'blur(60px)',
            borderRadius: '50%',
            zIndex: 0,
            animation: 'pulse-glow 6s ease-in-out infinite',
          }} />

          {/* Glass Panel Backing */}
          <div aria-hidden style={{
            position: 'absolute',
            width: '100%', height: '110%',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(20px)',
            borderRadius: 32,
            transform: 'rotate(3deg)',
            zIndex: 1,
          }} />

          {/* Portrait Card */}
          <div style={{
            position: 'relative', zIndex: 2,
            width: '100%',
            aspectRatio: '4/5',
            borderRadius: 24,
            overflow: 'hidden',
            background: 'var(--bg-surface)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            animation: 'float 8s ease-in-out infinite',
          }}>
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Trinadh Kondapalli Portrait"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Green Overlay Tint slightly to match vibe */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 40%)',
              pointerEvents: 'none',
            }} />
          </div>

        </div>
      </div>
      
      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-right-col {
            grid-column: 1 / -1 !important;
            margin-top: 60px;
            max-width: 500px;
            margin-inline: auto;
          }
        }
      `}</style>
    </section>
  );
}
