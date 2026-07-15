import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
// @ts-ignore
import portrait from '../assets/portrait.jpg?format=webp&width=900&quality=82';
import SplitText from './SplitText';
import Reveal from './Reveal';

/* ─── Dot Background System ─────────────────────── */
function TwinklingDots() {
  const [dots, setDots] = useState<any[]>([]);

  useEffect(() => {
    // Generate 40 random dots
    const generated = Array.from({ length: 40 }, (_, i) => {
      const moveX = (Math.random() - 0.5) * 100; // random drift -50px to 50px
      const moveY = (Math.random() - 0.5) * 100;
      
      return {
        id: i,
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        size: Math.random() * 2 + 2, // 2-4px
        duration: Math.random() * 3 + 3, // 3-6s for pulsing
        delay: Math.random() * 2,
        moveDuration: Math.random() * 10 + 15, // 15-25s for drifting
        moveX,
        moveY
      };
    });
    setDots(generated);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {dots.map(dot => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0.2, x: 0, y: 0 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            x: [0, dot.moveX, 0],
            y: [0, dot.moveY, 0]
          }}
          transition={{
            opacity: { duration: dot.duration, repeat: Infinity, ease: 'easeInOut', delay: dot.delay },
            x: { duration: dot.moveDuration, repeat: Infinity, ease: 'easeInOut', delay: dot.delay },
            y: { duration: dot.moveDuration, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }
          }}
          style={{
            position: 'absolute',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            background: 'var(--c-primary)',
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
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
            {"UX/UI Design • Website Design • Front-end Development • Creative Content • ".repeat(30)}
          </textPath>
        </text>
      </svg>
    </div>
    </>
  );
}

export default function Hero() {
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
      <div className="hero-grid-overlay" />
      <TwinklingDots />

      {/* ─── HERO CONTENT (Centered) ─── */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Eyebrow */}
        <Reveal delay={600}>
          <div
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--c-white)',
              letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: 12,
              marginBottom: 24
            }}
          >
            Hi! I'm Trinadh Kondapalli 
            <span style={{ color: 'var(--c-primary)' }}>•</span> 
            Based in India
          </div>
        </Reveal>

        {/* Headline */}
        <div 
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            lineHeight: 1.05, maxWidth: 1100, textAlign: 'center'
          }}
        >
          {/* Headline - Single Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <SplitText 
                text="Helping Businesses Build Better" 
                splitType="words" 
                delay={0.4}
                style={{ 
                  fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-1px',
                  fontSize: 'clamp(32px, 4.5vw, 64px)', color: 'var(--c-white)'
                }} 
              />
            <Reveal delay={850}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4.5vw, 64px)',
                  background: 'linear-gradient(135deg, var(--c-primary), var(--c-secondary))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  paddingRight: 8, // italic fix
                  display: 'inline-block'
                }}
              >
                Digital Experiences
              </span>
            </Reveal>
          </div>
        </div>

        {/* Subtext */}
        <Reveal delay={800}>
          <p
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 20, color: 'rgba(255,255,255,0.72)',
              maxWidth: 640, textAlign: 'center', marginTop: 24, lineHeight: 1.6
            }}
          >
            Designing experiences that inspire, engage, and grow businesses.
          </p>
        </Reveal>
      </div>

      {/* ─── CURVED RIBBON (Background) ─── */}
      <CurvedMarquee />

      {/* ─── PORTRAIT CARD (No artificial delay for LCP) ─── */}
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
            inset: -4, // expand slightly to match border
            background: 'var(--c-primary)',
            filter: 'blur(40px)',
            opacity: 0.85,
            x: bgX, y: bgY, z: -50,
            borderRadius: '36px', // slightly larger than image
            boxShadow: '-10px -10px 40px rgba(255, 255, 255, 0.6), 0 0 80px var(--c-primary)'
          }} />

          {/* Portrait Image */}
          <img
            src={portrait}
            alt="Portrait of Trinath Kondapalli"
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
            {/* Rotating SVG Text */}
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

            {/* Pulsing Center Icon */}
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
    </section>
  );
}
