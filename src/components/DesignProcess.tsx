import { PenTool, Lightbulb, Rocket, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  { 
    icon: PenTool,
    title: 'Think First', 
    desc: 'I start every project with research and strategy to understand the problem before designing the solution.' 
  },
  { 
    icon: Lightbulb,
    title: 'Design Smart', 
    desc: 'I design intuitive, user-centered interfaces that balance aesthetics with real-world usability.' 
  },
  { 
    icon: Rocket,
    title: 'Execute & Deliver', 
    desc: 'I turn ideas into high-quality digital products that are functional, scalable, and ready to perform.' 
  }
];

export default function DesignProcess() {
  return (
    <section id="process" style={{
      position: 'relative',
      width: '100%',
      padding: '160px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--c-base)' 
    }}>
      {/* Eyebrow Pill */}
      <Reveal>
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 16px',
            background: 'var(--rgba-dark-06)',
            border: '1px solid var(--rgba-white-03)',
            borderRadius: 100,
            marginBottom: 32
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
            WHAT I DO
          </span>
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={100}>
        <h2 
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(40px, 5vw, 56px)',
            fontWeight: 800,
            color: 'var(--c-white)',
            textAlign: 'center',
            letterSpacing: '-1px',
            marginBottom: 24,
            lineHeight: 1.1
          }}
        >
          Design That <span style={{ color: 'var(--c-primary)' }}>Solves.</span>
        </h2>
      </Reveal>
      
      {/* Subtext */}
      <Reveal delay={200}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '18px',
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: 1.6,
          marginBottom: 80
        }}>
          I combine creativity with strategy to craft digital experiences that are purposeful, functional, and built to make an impact.
        </p>
      </Reveal>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {steps.map((step, i) => (
          <Reveal key={i} delay={i * 100 + 300}>
            <div style={{
              position: 'relative',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}>
              {/* Bottom green glow */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translate(-50%, 50%)',
                width: '70%',
                height: '100px',
                background: 'var(--c-primary)',
                filter: 'blur(50px)',
                opacity: 0.15,
                pointerEvents: 'none'
              }} />

              {/* Top right dot */}
              <div style={{
                position: 'absolute',
                top: '32px',
                right: '32px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--c-primary)',
                boxShadow: '0 0 10px var(--c-primary)'
              }} />

              {/* Icon Circle */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                border: '1px solid rgba(109,215,76,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px',
                background: 'rgba(109,215,76,0.05)',
                boxShadow: 'inset 0 0 20px rgba(109,215,76,0.1)'
              }}>
                <step.icon size={28} color="var(--c-primary)" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '28px',
                fontWeight: 700,
                color: 'var(--c-white)',
                marginBottom: '16px'
              }}>
                {step.title}
              </h3>

              {/* Divider */}
              <div style={{
                width: '32px',
                height: '3px',
                background: 'var(--c-primary)',
                borderRadius: '2px',
                marginBottom: '24px'
              }} />

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6,
                marginBottom: '48px',
                flexGrow: 1
              }}>
                {step.desc}
              </p>

              {/* Button */}
              <button style={{
                alignSelf: 'flex-start',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'transparent',
                border: '1px solid rgba(109,215,76,0.3)',
                borderRadius: '100px',
                color: 'var(--c-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--c-primary)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--c-primary)';
              }}
              >
                LEARN MORE <ArrowUpRight size={16} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
