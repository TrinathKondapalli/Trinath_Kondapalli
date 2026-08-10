import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Tzinr_logo.png';
import { useCurtainStore } from './RouteTransition';
import GlobalMagneticButton from '../GlobalMagneticButton';

export default function TzinrNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { triggerCurtain } = useCurtainStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Why TZINR', href: '#why-tzinr' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'FAQ', href: '#faq' },
  ];

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
        className={scrolled ? 'scrolled' : ''}
        style={{
          pointerEvents: 'auto', 
          background: 'rgba(3, 10, 29, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(67, 126, 240, 0.25)',
          borderRadius: 100, 
          padding: '12px 24px',
          height: 72,
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo */}
        <Link to="/tzinr" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="TZINR Studio" style={{ height: 42, width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 15, fontWeight: 500 }}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#437EF0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              triggerCurtain('toPersonal', () => navigate('/'));
            }} 
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#437EF0')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            Trinath's Portfolio ↗
          </a>

          {/* CTA Button */}
          <GlobalMagneticButton
            className="tzinr-cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#437EF0',
              color: '#ffffff',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: 15,
              padding: '0 24px',
              height: 48,
              borderRadius: 100,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer'
            }}
          >
            Start a Project
            <ArrowUpRight size={16} strokeWidth={3} />
          </GlobalMagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          style={{
            background: 'none', border: 'none', color: '#ffffff',
            cursor: 'pointer', padding: 8, display: 'none', alignItems: 'center', justifyContent: 'center'
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              pointerEvents: 'auto',
              position: 'absolute',
              top: 108,
              left: 24, right: 24,
              background: 'rgba(3, 10, 29, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(67, 126, 240, 0.25)',
              borderRadius: 24,
              padding: 24,
              display: 'flex', flexDirection: 'column', gap: 16,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#ffffff', textDecoration: 'none', fontSize: 18, fontWeight: 500,
                  padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                triggerCurtain('toPersonal', () => navigate('/'));
              }}
              style={{
                color: '#ffffff', textDecoration: 'none', fontSize: 18, fontWeight: 500,
                padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              Trinath's Portfolio ↗
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: '#437EF0',
                color: '#ffffff', fontWeight: 600, fontSize: 16,
                padding: '16px', borderRadius: 100, border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, 
                cursor: 'pointer', marginTop: 8
              }}
            >
              Start a Project <ArrowUpRight size={18} strokeWidth={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .tzinr-cta-btn { 
          background: #437EF0;
          transition: transform 0.2s, background 0.2s !important; 
        }
        .tzinr-cta-btn:hover { 
          transform: scale(1.05); 
          background: #3269d6 !important; 
        }

        .mobile-menu-btn { display: none !important; }
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.div>
  );
}
