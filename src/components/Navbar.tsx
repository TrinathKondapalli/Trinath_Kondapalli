import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
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
        justifyContent: 'center',
        padding: '24px', // margin: 24px per spec
        pointerEvents: 'none', // Allow clicking through the container
      }}
    >
      <nav style={{
        pointerEvents: 'auto', // Re-enable for the nav bar itself
        background: 'var(--rgba-dark-07)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--rgba-white-008)',
        borderRadius: 100, // full pill
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
          {/* TK Icon */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 22,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: 'var(--c-primary)' }}>T</span>
            <span style={{ color: 'var(--c-white)' }}>K</span>
          </div>
          {/* Name Text */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600, color: 'var(--c-white)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <span style={{ fontSize: 14, lineHeight: 1 }}>TRINADH</span>
            <span style={{ fontSize: 12, lineHeight: 1, marginTop: 2 }}>KONDAPALLI</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="nav-links" style={{
          display: 'flex', alignItems: 'center', gap: 32,
          fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500
        }}>
          {['Home', 'About', 'Services', 'Work', 'Process', 'Skills', 'Blog', 'Contact'].map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              position: 'relative',
              color: 'var(--c-white)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              display: 'flex', alignItems: 'center', gap: 6
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-white)')}
            >
              {i === 0 && (
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c-primary)' }} />
              )}
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: 'linear-gradient(135deg, var(--c-primary), var(--c-secondary))',
            color: 'var(--c-base)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600, fontSize: 15,
            padding: '0 24px', height: '100%', minHeight: 48,
            borderRadius: 100,
            border: 'none',
            display: 'flex', alignItems: 'center', gap: 8,
            cursor: 'pointer'
          }}
        >
          Let's Talk
          <ArrowUpRight size={16} strokeWidth={3} />
        </motion.button>
      </nav>
      
      {/* Hide center links on smaller screens */}
      <style>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </motion.div>
  );
}
