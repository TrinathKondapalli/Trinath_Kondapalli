import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

/* ─── Dot Background System ─────────────────────── */
function TwinklingDots() {
  const [dots, setDots] = useState<any[]>([]);

  useEffect(() => {
    // Generate 20 random dots
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      size: Math.random() * 2 + 2, // 2-4px
      duration: Math.random() * 3 + 3, // 3-6s
      delay: Math.random() * 2,
      drifting: i < 2 // 1-2 dots drift for parallax depth
    }));
    setDots(generated);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {dots.map(dot => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0.2, x: 0 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            x: dot.drifting ? [0, 20, 0] : 0,
            y: dot.drifting ? [0, 10, 0] : 0
          }}
          transition={{
            opacity: { duration: dot.duration, repeat: Infinity, ease: 'easeInOut', delay: dot.delay },
            x: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 15, repeat: Infinity, ease: 'linear' }
          }}
          style={{
            position: 'absolute',
            left: `${dot.x}vw`,
            top: `${dot.y}vh`,
            width: dot.size,
            height: dot.size,
            background: '#4ADE80',
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
    <div style={{
      position: 'absolute',
      top: '45%', // behind portrait
      left: 0, width: '100%',
      height: 200,
      pointerEvents: 'none',
      zIndex: 5,
      overflow: 'hidden'
    }}>
      <svg width="100%" height="100%" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <defs>
          <path id="curve-path" d="M -100 100 Q 360 0, 720 100 T 1540 100" fill="transparent" />
          <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="100%" stopColor="#86EFAC" />
          </linearGradient>
        </defs>
        
        {/* Render thick stroke path for the ribbon background */}
        <path d="M -100 100 Q 360 0, 720 100 T 1540 100" fill="transparent" stroke="url(#ribbonGrad)" strokeWidth="48" />

        {/* Text on Path animated manually via CSS or motion */}
        <text 
          fontFamily="var(--font-sans)" 
          fontWeight="700" 
          fontSize="20" 
          letterSpacing="2px"
          textTransform="uppercase"
          fill="#0A0D0A"
        >
          <textPath href="#curve-path" startOffset="0%">
            <animate attributeName="startOffset" from="0%" to="-50%" dur="20s" repeatCount="indefinite" />
            PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function Hero() {
  // Mouse parallax setup
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  // Spring physics for smooth follow
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Transform to rotate (-6deg to 6deg)
  const rotateX = useTransform(smoothY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [0, 1], [-6, 6]);

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

  // Stagger variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.7 }
    }
  };
  const wordVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '160px 24px 96px',
        overflow: 'hidden',
        perspective: '1200px'
      }}
    >
      {/* Background Layers */}
      <div className="hero-grid-overlay" />
      <TwinklingDots />

      {/* ─── HERO CONTENT (Centered) ─── */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Eyebrow */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-sub)',
            letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 24
          }}
        >
          Hi! I'm Trinadh Kondapalli 
          <span style={{ color: 'var(--primary-green)' }}>•</span> 
          Based in India
        </motion.div>

        {/* Headline */}
        <motion.div 
          variants={containerVars} initial="hidden" animate="show"
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            lineHeight: 1.05, maxWidth: 1100, textAlign: 'center'
          }}
        >
          {/* Line 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.span variants={wordVars} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 88px)',
              background: 'linear-gradient(135deg, #4ADE80, #86EFAC)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              paddingRight: 8 // italic fix
            }}>
              Creative
            </motion.span>
            <motion.span variants={wordVars} style={{
              fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-1px',
              fontSize: 'clamp(48px, 6vw, 88px)', color: 'var(--text-white)'
            }}>
              Designer &
            </motion.span>
          </div>
          
          {/* Line 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 4 }}>
            <motion.span variants={wordVars} style={{
              fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-1px',
              fontSize: 'clamp(48px, 6vw, 88px)', color: 'var(--text-white)'
            }}>
              Developer
            </motion.span>
            <motion.div variants={wordVars}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--primary-green)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transform: 'translateY(-4px)'
              }}>
                <ArrowUpRight size={20} color="#0A0D0A" strokeWidth={3} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--text-muted)',
            maxWidth: 600, textAlign: 'center', marginTop: 24, lineHeight: 1.6
          }}
        >
          I build designs that solve problems, inspire action, and drive success.
        </motion.p>
      </div>

      {/* ─── CURVED RIBBON (Background) ─── */}
      <CurvedMarquee />

      {/* ─── PORTRAIT CARD ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          marginTop: 48,
          position: 'relative',
          zIndex: 10,
          perspective: 1000
        }}
      >
        <motion.div
          className="anim-float"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            width: 'clamp(280px, 40vw, 420px)',
            height: 'clamp(360px, 50vw, 520px)',
            borderRadius: 32,
            background: 'linear-gradient(135deg, #6EE7A0, #22C55E)',
            boxShadow: '0 0 80px 20px rgba(74,222,128,0.4), 0 0 40px rgba(255,255,255,0.15)',
            position: 'relative',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Portrait Image */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 32, overflow: 'hidden',
            boxShadow: 'inset 2px -2px 10px rgba(255,255,255,0.6)' // Rim light effect
          }}>
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Portrait"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) saturate(0.8)' }}
            />
          </div>

          {/* ─── CIRCULAR SCROLL BADGE ─── */}
          <div style={{
            position: 'absolute', bottom: -30, right: -30,
            width: 140, height: 140,
            borderRadius: '50%',
            background: 'rgba(10, 15, 10, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: 'translateZ(30px)', // Pop out slightly due to 3D tilt
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            {/* Rotating SVG Text */}
            <svg className="anim-rotate" width="140" height="140" viewBox="0 0 140 140" style={{ position: 'absolute', inset: 0 }}>
              <defs>
                <path id="badge-path" d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
              </defs>
              <text fontSize="11" fill="white" fontWeight="600" letterSpacing="2px">
                <textPath href="#badge-path" startOffset="0">
                  LET'S EXPLORE • LET'S EXPLORE •
                </textPath>
              </text>
            </svg>

            {/* Pulsing Center Icon */}
            <div className="anim-pulse" style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'var(--text-white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <ArrowDown size={20} color="#0A0D0A" strokeWidth={3} />
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    </section>
  );
}
