import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import portrait from '../../assets/Freelance.png';
import SplitText from '../SplitText';
import Reveal from '../Reveal';

/* ─── Dot Background System ─────────────────────── */
function TwinklingDots() {
  const [dots, setDots] = useState<any[]>([]);

  useEffect(() => {
    // Generate 40 random dots
    const generated = Array.from({ length: 40 }, (_, i) => {
      const moveX = (Math.random() - 0.5) * 300; // random drift distance
      const moveY = (Math.random() - 0.5) * 300;
      
      return {
        id: i,
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        size: Math.random() * 2 + 2, // 2-4px
        duration: Math.random() * 3 + 3, // 3-6s for pulsing
        delay: Math.random() * 2,
        moveDuration: Math.random() * 20 + 30, // 30-50s for drifting (very slow)
        moveX,
        moveY
      };
    });
    setDots(generated);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      <style>{`
        @keyframes native-drift {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(var(--moveX), var(--moveY)); }
        }
        @keyframes native-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
      {dots.map(dot => (
        <div
          key={dot.id}
          style={{
            position: 'absolute',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size + 1,
            height: dot.size + 1,
            background: 'var(--c-primary)',
            borderRadius: '50%',
            boxShadow: '0 0 8px var(--c-primary)',
            '--moveX': `${dot.moveX}px`,
            '--moveY': `${dot.moveY}px`,
            animation: `native-drift ${dot.moveDuration}s ease-in-out infinite, native-pulse ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ─── Curved Marquee Ribbon ─────────────────────── */
function CurvedMarquee() {
  return (
    <>
      <style>{`
        .hero-ribbon {
          top: 48%;
        }
        @media (max-width: 1024px) {
          .hero-ribbon {
            top: calc(48% + 30px) !important;
          }
        }
      `}</style>
      <div className="hero-ribbon" style={{
        position: 'absolute',
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '100%',
        minWidth: 1440, 
        height: 300,
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'hidden'
      }}>
      <svg width="100%" height="100%" viewBox="0 0 1440 300" preserveAspectRatio="none">
        <defs>
          <path id="curve-path" d="M -200 50 C 106 50, 414 250, 720 250 S 1334 50, 1640 50" fill="transparent" />
          <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--c-primary)" />
            <stop offset="100%" stopColor="var(--c-secondary)" />
          </linearGradient>
        </defs>
        
        {/* Render thick stroke path for the ribbon background */}
        <path d="M -200 50 C 106 50, 414 250, 720 250 S 1334 50, 1640 50" fill="transparent" stroke="url(#ribbonGrad)" strokeWidth="48" />

        {/* Text on Path animated manually via CSS or motion */}
        <text 
          fontFamily="var(--font-sans)" 
          fontWeight="700" 
          fontSize="24" 
          letterSpacing="1px"
          fill="var(--c-base)"
          dominantBaseline="middle"
        >
          <textPath href="#curve-path" startOffset="0%">
            <animate attributeName="startOffset" from="0%" to="-100%" dur="30s" repeatCount="indefinite" />
            {"UX/UI DESIGN • WEBSITE DESIGN & DEVELOPMENT • INTERACTIVE & MOTION-LED WEB • DESIGN-TO-LIVE WORKFLOWS • ".repeat(30)}
          </textPath>
        </text>
      </svg>
    </div>
    </>
  );
}

export default function TzinrHero() {
  // Mouse parallax setup
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  // Spring physics for buttery smooth, heavy gliding follow
  const springConfig = { damping: 40, stiffness: 40, mass: 1.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Transform to rotate (-15deg to 15deg for dramatic 3D)
  const rotateX = useTransform(smoothY, [0, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [0, 1], [-15, 15]);

  // Holographic shifts for background glow
  const bgX = useTransform(smoothX, [0, 1], [-40, 40]);
  const bgY = useTransform(smoothY, [0, 1], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '116px 24px 48px',
        overflowX: 'clip',
        overflowY: 'visible', // Allow the glow to bleed into the tools marquee without a harsh line
        perspective: '1200px'
      }}
    >
      {/* Background Layers */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle at 50% 20%, rgba(32,97,215,0.14), transparent 55%)' }}
      />
      <div className="hero-grid-overlay" />
      <TwinklingDots />

      {/* ─── HERO CONTENT (Centered) ─── */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Eyebrow - Studio Status */}
        <Reveal delay={600}>
          <div
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--c-white)',
              letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12,
              marginBottom: 32, padding: '8px 16px', border: '1px solid var(--rgba-white-03)', borderRadius: 100,
              background: 'var(--rgba-dark-06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="relative flex h-2 w-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--c-primary)' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--c-primary)', boxShadow: '0 0 10px var(--c-primary)' }}></span>
              </div>
              DIGITAL PRODUCT & EXPERIENCE STUDIO
            </div>
          </div>
        </Reveal>

        {/* Headline */}
        <div 
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            lineHeight: 1.05, maxWidth: 1100, textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <SplitText 
                text="Helping businesses build better" 
                splitType="words" 
                delay={0.4}
                style={{ 
                  fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-1px',
                  fontSize: 'clamp(40px, 5.5vw, 72px)', color: 'var(--c-white)'
                }} 
              />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
            <Reveal delay={850}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(40px, 5.5vw, 72px)',
                  background: 'linear-gradient(135deg, var(--c-primary), var(--c-secondary))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  paddingRight: 8,
                  display: 'inline-block',
                  fontStyle: 'italic'
                }}
              >
                DIGITAL EXPERIENCES.
              </span>
            </Reveal>
          </div>
        </div>

        {/* Subtext */}
        <Reveal delay={800}>
            <p
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.72)',
              maxWidth: 700, textAlign: 'center', marginTop: 32, lineHeight: 1.6
            }}
          >
            We design and build thoughtful websites, digital products, and interactive experiences that help businesses move forward.
          </p>
        </Reveal>
      </div>

      {/* ─── CURVED RIBBON (Background) ─── */}
      <CurvedMarquee />

      {/* ─── PORTRAIT CARD ─── */}
      <div style={{
          marginTop: 24,
          position: 'relative',
          zIndex: 10,
          perspective: 1000,
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
      }}>
        <div
          style={{
            width: 'auto',
            height: 'auto'
          }}
        >
        <motion.div
          className="anim-float"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            width: 'clamp(260px, 34vw, 380px)',
            height: 'clamp(260px, 34vw, 380px)',
            position: 'relative',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Backside Glow Effect */}
          <motion.div style={{
            position: 'absolute',
            inset: -4, 
            background: 'var(--c-primary)',
            filter: 'blur(40px)',
            opacity: 0.85,
            x: bgX, y: bgY, z: -50,
            borderRadius: '36px',
            boxShadow: '-10px -10px 40px rgba(255, 255, 255, 0.6), 0 0 80px var(--c-primary)'
          }} />

          {/* Portrait Image */}
          <img
            src={portrait}
            alt="TZINR Studio"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={900}
            height={1200}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              display: 'block', 
              position: 'relative', 
              zIndex: 1,
              borderRadius: '32px'
            }}
          />

          {/* ─── CIRCULAR SCROLL BADGE ─── */}
          <motion.div style={{
            position: 'absolute', bottom: -10, right: -10,
            width: 120, height: 120,
            borderRadius: '50%',
            background: 'var(--rgba-dark-06)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--rgba-white-03)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 20,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <svg className="anim-rotate" width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', inset: 0 }}>
              <defs>
                <path id="badge-path" d="M 60, 60 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0" />
              </defs>
              <text fontSize="11" fill="var(--c-white)" fontWeight="600" letterSpacing="2px">
                <textPath href="#badge-path" startOffset="0">
                  LET'S EXPLORE • LET'S EXPLORE •
                </textPath>
              </text>
            </svg>

            <div className="anim-pulse" style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'var(--c-white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <ArrowDown size={20} color="var(--c-base)" strokeWidth={3} />
            </div>
          </motion.div>
          
        </motion.div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'center', width: '100%', marginTop: 64 }}>
        <Reveal delay={1000}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="#contact"
              style={{
                background: 'var(--c-primary)', color: 'var(--c-white)', padding: '16px 32px',
                borderRadius: 100, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16,
                textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 0 30px rgba(40,136,208,0.3)',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--c-secondary)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(80,168,232,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--c-primary)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(40,136,208,0.3)'; }}
            >
              Start a Project <ArrowUpRight size={20} />
            </a>
            <a 
              href="#work"
              style={{
                background: 'transparent', color: 'var(--c-white)', padding: '16px 32px',
                borderRadius: 100, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16,
                textDecoration: 'none', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.2)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >
              View Our Work →
            </a>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
