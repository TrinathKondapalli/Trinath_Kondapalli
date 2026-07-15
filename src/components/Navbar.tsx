import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, ArrowLeft } from 'lucide-react';

import GlobalMagneticButton from './GlobalMagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const navItems = ['Home', 'About', 'Services', 'Work', 'Process', 'Contact'];

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
      <nav 
        className={isScrolled ? 'scrolled' : ''}
        style={{
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
        
        {/* Logo Monogram or Back Button */}
        {!isHome ? (
          <button 
            onClick={() => navigate('/')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8, 
              background: 'none', 
              border: 'none', 
              color: 'var(--c-white)', 
              fontFamily: 'var(--font-sans)', 
              fontWeight: 600, 
              fontSize: 14, 
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: 1,
              padding: 0
            }}
          >
            <ArrowLeft size={16} />
            Back to all work
          </button>
        ) : (
          <a href="/#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', cursor: 'pointer' }}>
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
          </a>
        )}

        {/* Desktop Nav Links */}
        <div className="nav-links" style={{
          display: 'flex', alignItems: 'center', gap: 32,
          fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500
        }}>
          {isHome && navItems.map((item) => (
            <a key={item} href={`/#${item.toLowerCase()}`} style={{
              position: 'relative', color: 'var(--c-white)', textDecoration: 'none',
              transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', gap: 6
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-white)')}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <GlobalMagneticButton
          className="cta-btn"
          style={{
            color: 'var(--c-base)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15,
            padding: '0 24px', height: '100%', minHeight: 48, borderRadius: 100, border: 'none',
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'
          }}
        >
          Let's Talk
          <ArrowUpRight size={16} strokeWidth={3} />
        </GlobalMagneticButton>

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
            {isHome && navItems.map((item) => (
              <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{
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
        nav { transition: background 0.3s; }
        nav.scrolled { background: rgba(10,26,10,0.85) !important; backdrop-filter: blur(14px) !important; WebkitBackdropFilter: blur(14px) !important; }

        .cta-btn { 
          background: linear-gradient(135deg, var(--c-primary), var(--c-secondary));
          transition: transform 0.2s, background 0.2s !important; 
        }
        .cta-btn:hover { 
          transform: scale(1.05); 
          background: #7fe87f !important; 
        }

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
