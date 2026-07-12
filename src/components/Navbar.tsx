import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: 32,
      left: 0,
      zIndex: 50,
      animation: 'fade-down 0.8s ease both',
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 88,
        paddingLeft: 32,
        paddingRight: 32,
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 24,
        border: '1px solid var(--border)',
        width: '90%',
        maxWidth: 1280,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 30px rgba(124, 255, 79, 0.05)',
      }}>

        {/* ── LOGO LEFT ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: 28, lineHeight: 1, letterSpacing: '-1px',
          }}>
            <span style={{ color: 'var(--accent-primary)' }}>T</span>
            <span style={{ color: 'var(--text-primary)', marginLeft: -1 }}>K</span>
          </div>
          <div style={{
            borderLeft: '1px solid rgba(255,255,255,0.15)',
            paddingLeft: 16,
            fontFamily: 'var(--font-body)', fontWeight: 500,
            fontSize: 11, letterSpacing: '2px',
            color: 'var(--text-primary)', lineHeight: 1.4, textTransform: 'uppercase',
          }}>
            Trinadh<br />Kondapalli
          </div>
        </div>

        {/* ── NAV LINKS CENTER ── */}
        <div className="nav-links" style={{
          display: 'flex', alignItems: 'center',
          gap: 36,
          fontFamily: 'var(--font-heading)',
          fontSize: 16, fontWeight: 500,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--accent-primary)',
              boxShadow: '0 0 8px var(--accent-primary)',
            }}/>
            <span style={{ color: 'var(--text-primary)' }}>Home</span>
          </div>
          {['About','Services','Work','Process','Skills','Blog','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* ── CTA BUTTON RIGHT ── */}
        <button
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--accent-primary)',
            color: '#050505',
            border: 'none', cursor: 'pointer',
            height: 56, padding: '0 28px',
            borderRadius: 16,
            fontFamily: 'var(--font-heading)',
            fontWeight: 600, fontSize: 16,
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px var(--accent-glow)';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.03) translateY(-2px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1) translateY(0)';
          }}
        >
          Let's Talk
          <ArrowUpRight style={{ width: 18, height: 18, strokeWidth: 2.5 }} />
        </button>
      </nav>
      
      {/* Basic responsive hiding for the nav center on smaller screens */}
      <style>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}
