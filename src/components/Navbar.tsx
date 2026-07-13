import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function MagneticButton({ children, className, style }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // Magnetic pull intensity
    y.set(middleY * 0.3);
  };

  const reset = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{ scale: isHovered ? 1.05 : 1, filter: isHovered ? 'brightness(1.1)' : 'brightness(1)' }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      style={{ ...style, x: smoothX, y: smoothY }}
    >
      {children}
    </motion.button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Work', 'Process', 'Skills', 'Blog', 'Contact'];

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px', 
        pointerEvents: 'none', 
      }}
    >
      <nav style={{
        pointerEvents: 'auto', 
        background: 'var(--rgba-dark-07)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--rgba-white-008)',
        borderRadius: 100, 
        padding: '12px 24px',
        height: 72,
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
        
        {/* Logo Monogram */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 22,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: 'var(--c-primary)' }}>T</span>
            <span style={{ color: 'var(--c-white)' }}>K</span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600, color: 'var(--c-white)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <span style={{ fontSize: 14, lineHeight: 1 }}>TRINATH</span>
            <span style={{ fontSize: 12, lineHeight: 1, marginTop: 2 }}>KONDAPALLI</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links" style={{
          display: 'flex', alignItems: 'center', gap: 32,
          fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500
        }}>
          {navItems.map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              position: 'relative', color: 'var(--c-white)', textDecoration: 'none',
              transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', gap: 6
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-white)')}
            >
              {i === 0 && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c-primary)' }} />}
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <MagneticButton
          className="cta-btn"
          style={{
            background: 'linear-gradient(135deg, var(--c-primary), var(--c-secondary))',
            color: 'var(--c-base)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15,
            padding: '0 24px', height: '100%', minHeight: 48, borderRadius: 100, border: 'none',
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'
          }}
        >
          Let's Talk
          <ArrowUpRight size={16} strokeWidth={3} />
        </MagneticButton>

        {/* Mobile Hamburger Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{
          background: 'none', border: 'none', color: 'var(--c-white)',
          cursor: 'pointer', padding: 8, display: 'none', alignItems: 'center', justifyContent: 'center'
        }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              pointerEvents: 'auto',
              position: 'absolute',
              top: 108, // right below the nav pill
              left: 24, right: 24,
              background: 'var(--rgba-dark-07)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--rgba-white-008)',
              borderRadius: 24,
              padding: 24,
              display: 'flex', flexDirection: 'column', gap: 16,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{
                color: 'var(--c-white)', textDecoration: 'none', fontSize: 18, fontWeight: 500,
                fontFamily: 'var(--font-sans)', padding: '8px 0', borderBottom: '1px solid var(--rgba-white-008)'
              }}>
                {item}
              </a>
            ))}
            <button style={{
              background: 'linear-gradient(135deg, var(--c-primary), var(--c-secondary))',
              color: 'var(--c-base)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16,
              padding: '16px', borderRadius: 100, border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, 
              cursor: 'pointer', marginTop: 8
            }}>
              Let's Talk <ArrowUpRight size={18} strokeWidth={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hide center links on smaller screens */}
      <style>{`
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .cta-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.div>
  );
}
