import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

// ─── Phase 1: Expanded Data Schema for 16-Step Blueprint ──────────────────────
const caseStudies: Record<string, any> = {
  'nutribox': {
    // 1. Hero
    title: 'NutriBox',
    subtitle: 'A brand people trust before they buy. Redefining the digital experience of healthy snacking.',
    heroImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1600',
    meta: {
      role: 'Lead UX/UI Designer',
      duration: '8 weeks',
      tools: 'Figma, Framer, React',
    },
    
    // 2. Project Overview
    overview: {
      problem: 'Healthy snacks have become mainstream. Healthy experiences haven\'t. Ingredient lists are overwhelming, brands sound like pharmacies, and digital experiences lack trust.',
      solution: 'Instead of creating another standard ecommerce website, NutriBox needed to become a brand that people trust implicitly. A high-contrast editorial interface, generous whitespace, and premium product photography work together to create a visual hierarchy that feels confident rather than promotional.',
      responsibilities: ['Brand Strategy', 'Information Architecture', 'Interaction Design', 'Frontend Development'],
      deliverables: ['Brand Identity', 'Design System', 'E-commerce Platform', 'Responsive Web App']
    },

    // 3. Challenge
    challenge: {
      business: 'Consumers struggle because ingredient lists are overwhelming, brands sound like pharmacies, and digital experiences lack trust.',
      ux: 'The opportunity was not just to sell snacks, but to build a calming, trustworthy, and accessible visual language that elevates the product into a premium lifestyle choice.'
    },

    // 4. Goals
    goals: {
      business: 'Establish a premium brand presence that commands trust and drives high conversion without aggressive marketing tactics.',
      user: 'Provide a stress-free, beautiful, and transparent shopping experience where ingredients and benefits are instantly understandable.',
      design: 'First impressions are earned in milliseconds. Create an editorial, confident, and minimalist aesthetic that speaks volumes through whitespace.'
    },

    // 5. Brand Identity
    brandIdentity: {
      logo: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
      colors: [
        { hex: '#6DDC6D', name: 'Nutri Green' },
        { hex: '#050A05', name: 'Rich Charcoal' },
        { hex: '#FFFFFF', name: 'Clean White' },
        { hex: '#1E251E', name: 'Muted Forest' }
      ],
      typography: {
        primary: { name: 'Inter', weights: '400, 500, 600' },
        secondary: { name: 'Playfair Display', weights: '400i, 600i' }
      },
      tone: 'Confident, Transparent, Premium, Minimalist'
    },

    // 6. Moodboard
    moodboard: [
      'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=800'
    ],

    // 7. Design System
    designSystem: {
      description: 'The foundation is built on extreme clarity. Every button, input field, and spacing token was designed to eliminate friction. We utilized a 4pt grid system to ensure vertical rhythm remains flawless across all viewport sizes.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600'
    },

    // 8. Phase 3 Data (Wireframes, Hero, Final UI, Product Showcase, Responsive)
    wireframes: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1600',
    heroEvolution: {
      rationale: 'First impressions are earned in milliseconds. The hero section needed to communicate trust before the visitor even started reading. A high-contrast editorial headline, generous whitespace, and premium product photography work together to create a visual hierarchy that feels confident rather than promotional.',
      images: [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800'
      ]
    },
    finalUi: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600'
    ],
    responsive: {
      description: 'Mobile checkout conversion is where most e-commerce fails. We didn’t just shrink the desktop site; we re-engineered the mobile flow to feel like a native app. Swipable galleries, sticky bottom-bar add-to-cart buttons, and Apple Pay integration reduced time-to-purchase by 40%.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600'
    },

    nextProject: {
      slug: 'finance-dashboard',
      title: 'Finance Dashboard',
    },
  },
}
// ──────────────────────────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies[slug as string] || caseStudies['nutribox'] // fallback for testing
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const update = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
      setScrollPct(pct)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [slug])

  const s = {
    page: { background: '#050a05', minHeight: '100vh', color: '#fff', fontFamily: 'inherit' },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 5vw' },
    sectionLabel: { fontSize: 12, color: 'var(--c-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 24, display: 'block' },
    sectionTitle: { fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, lineHeight: 1.1, marginBottom: 32 },
    bodyText: { fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontWeight: 300 },
  }

  return (
    <div style={s.page as any}>
      <style>{`
        .case-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
        .info-pill { padding: 8px 16px; background: rgba(109,220,109,0.1); border-radius: 100px; font-size: 14px; color: var(--c-primary); display: inline-block; margin-right: 12px; margin-bottom: 12px; }
        
        .section-divider { width: 100%; height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%); margin: 120px 0; }
        
        @media (max-width: 768px) {
          .case-stats-grid { grid-template-columns: 1fr; gap: 32px; }
          .section-divider { margin: 80px 0; }
        }
      `}</style>
      
      {/* Scroll progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: 3, width: `${scrollPct}%`, background: 'var(--c-primary)', zIndex: 10000, transition: 'width .1s linear', pointerEvents: 'none' }} />

      {/* Back nav */}
      <div style={{ ...s.container, paddingTop: 32 }}>
        <Link
          to="/"
          style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          <span style={{ fontSize: 18 }}>←</span> Back to portfolio
        </Link>
      </div>

      {/* 1. Hero Section */}
      <div style={{ ...s.container, paddingTop: '10vh', paddingBottom: '10vh' }}>
        <Reveal>
          <span style={s.sectionLabel as any}>Case Study</span>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.03em', margin: '0 0 32px', maxWidth: 1000 }}>
            {study.title}
          </h1>
          <p style={{ ...s.bodyText as any, maxWidth: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'rgba(255,255,255,0.8)' }}>
            {study.subtitle}
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginTop: 80, padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Role</div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>{study.meta.role}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Duration</div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>{study.meta.duration}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Tools</div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>{study.meta.tools}</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Large Product Mockup (Hero part 2) */}
      <div style={{ padding: '0 24px' }}>
        <Reveal>
          <div style={{ width: '100%', maxWidth: 1600, margin: '0 auto', borderRadius: 24, overflow: 'hidden', height: 'clamp(400px, 60vh, 800px)' }}>
            <img src={study.heroImage} alt="Hero Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </Reveal>
      </div>

      <div className="section-divider" />

      {/* 2. Project Overview */}
      <div style={s.container}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }}>
          <Reveal>
            <h2 style={s.sectionTitle}>Project Overview</h2>
            <div style={{ marginTop: 40 }}>
              <h3 style={{ fontSize: 20, marginBottom: 16, color: 'var(--c-primary)' }}>Responsibilities</h3>
              <div>{study.overview.responsibilities.map((r: string, i: number) => <span key={i} className="info-pill">{r}</span>)}</div>
              
              <h3 style={{ fontSize: 20, marginBottom: 16, color: 'var(--c-primary)', marginTop: 40 }}>Deliverables</h3>
              <div>{study.overview.deliverables.map((d: string, i: number) => <span key={i} className="info-pill">{d}</span>)}</div>
            </div>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <h3 style={{ fontSize: 24, marginBottom: 24, fontWeight: 500 }}>The Problem</h3>
              <p style={{ ...s.bodyText as any, marginBottom: 48 }}>{study.overview.problem}</p>
            </Reveal>
            <Reveal delay={200}>
              <h3 style={{ fontSize: 24, marginBottom: 24, fontWeight: 500 }}>The Solution</h3>
              <p style={s.bodyText as any}>{study.overview.solution}</p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* 3. Challenge */}
      <div style={s.container}>
        <Reveal>
          <span style={s.sectionLabel as any}>The Challenge</span>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 500, lineHeight: 1.1, marginBottom: 64, maxWidth: 900 }}>
            Bridging the gap between complex hospital systems and everyday patient needs.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          <Reveal delay={100}>
            <div style={{ padding: 48, background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: 24, marginBottom: 24, color: 'var(--c-primary)' }}>Business Challenge</h3>
              <p style={s.bodyText as any}>{study.challenge.business}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ padding: 48, background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: 24, marginBottom: 24, color: 'var(--c-primary)' }}>UX Challenge</h3>
              <p style={s.bodyText as any}>{study.challenge.ux}</p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="section-divider" />

      {/* 4. Goals */}
      <div style={s.container}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <Reveal>
            <span style={s.sectionLabel as any}>Project Goals</span>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 500, lineHeight: 1.1 }}>
              What does success look like?
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            <Reveal delay={100}>
              <h3 style={{ fontSize: 24, marginBottom: 16 }}>1. Business Goal</h3>
              <p style={s.bodyText as any}>{study.goals.business}</p>
            </Reveal>
            <Reveal delay={200}>
              <h3 style={{ fontSize: 24, marginBottom: 16 }}>2. User Goal</h3>
              <p style={s.bodyText as any}>{study.goals.user}</p>
            </Reveal>
            <Reveal delay={300}>
              <h3 style={{ fontSize: 24, marginBottom: 16 }}>3. Design Goal</h3>
              <p style={s.bodyText as any}>{study.goals.design}</p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* 5. Brand Identity */}
      <div style={s.container}>
        <Reveal>
          <span style={s.sectionLabel as any}>Brand Identity</span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, marginBottom: 48 }}>{study.brandIdentity.tone}</h2>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <Reveal delay={100}>
            <div style={{ borderRadius: 24, overflow: 'hidden', height: '100%', minHeight: 300, background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <img src={study.brandIdentity.logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h3 style={{ fontSize: 20, marginBottom: 24 }}>Color Palette</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {study.brandIdentity.colors.map((c: any, i: number) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,0.02)', padding: 16, borderRadius: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: c.hex, border: '1px solid rgba(255,255,255,0.1)' }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 style={{ fontSize: 20, marginBottom: 24, marginTop: 48 }}>Typography</h3>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: 24, borderRadius: 16 }}>
              <div style={{ fontSize: 32, fontWeight: 500, marginBottom: 8 }}>{study.brandIdentity.typography.primary.name}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Weights: {study.brandIdentity.typography.primary.weights}</div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="section-divider" />

      {/* 6. Moodboard */}
      <div style={s.container}>
        <Reveal>
          <span style={s.sectionLabel as any}>Moodboard</span>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 24 }}>
          {study.moodboard.map((img: string, i: number) => (
             <Reveal key={i} delay={i * 100}>
               <div style={{ borderRadius: 24, overflow: 'hidden', height: 400 }}>
                 <img src={img} alt="Moodboard reference" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
             </Reveal>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* 7. Design System */}
      <div style={s.container}>
        <Reveal>
          <span style={s.sectionLabel as any}>Design System</span>
          <p style={{ ...s.bodyText as any, maxWidth: 800, marginBottom: 64 }}>
            {study.designSystem.description}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={study.designSystem.image} alt="Design System" style={{ width: '100%', display: 'block' }} />
          </div>
        </Reveal>
      </div>

      <div className="section-divider" />

      {/* 8. Wireframes */}
      <div style={s.container}>
        <Reveal>
          <span style={s.sectionLabel as any}>Wireframes & Architecture</span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, marginBottom: 48, maxWidth: 800 }}>
            Laying the groundwork before applying a single pixel of color.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ borderRadius: 24, overflow: 'hidden', height: 'clamp(300px, 50vh, 600px)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={study.wireframes} alt="Wireframes" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'grayscale(100%)' }} />
          </div>
        </Reveal>
      </div>

      <div className="section-divider" />

      {/* 9. Hero Evolution */}
      <div style={s.container}>
        <Reveal>
          <span style={s.sectionLabel as any}>Design Iteration</span>
          <p style={{ ...s.bodyText as any, maxWidth: 800, marginBottom: 64, fontSize: 'clamp(20px, 3vw, 28px)', color: '#fff', lineHeight: 1.5 }}>
            "{study.heroEvolution.rationale}"
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {study.heroEvolution.images.map((img: string, i: number) => (
             <Reveal key={i} delay={i * 100}>
               <div style={{ borderRadius: 24, overflow: 'hidden', height: 400, border: '1px solid rgba(255,255,255,0.05)' }}>
                 <img src={img} alt="Hero Iteration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
             </Reveal>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* 10. Final UI Showcase */}
      <div style={{ width: '100%', background: '#000', padding: '120px 0' }}>
        <div style={s.container}>
          <Reveal>
            <span style={s.sectionLabel as any}>The Final Output</span>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {study.finalUi.map((img: string, i: number) => (
               <Reveal key={i} delay={100}>
                 <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <img src={img} alt="Final UI Screen" style={{ width: '100%', display: 'block' }} />
                 </div>
               </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* 12. Responsive Design */}
      <div style={s.container}>
        <Reveal>
          <span style={s.sectionLabel as any}>Responsive Design</span>
          <p style={{ ...s.bodyText as any, maxWidth: 800, marginBottom: 64 }}>
            {study.responsive.description}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={study.responsive.image} alt="Mobile Responsive UI" style={{ width: '100%', display: 'block' }} />
          </div>
        </Reveal>
      </div>

      <div className="section-divider" />

      {/* Phase 4 Placeholders (To be implemented) */}
      <div style={{ ...s.container, textAlign: 'center', paddingBottom: 160, opacity: 0.5 }}>
        <p>[ Sections 13-16 will be injected here during Phase 4 ]</p>
      </div>

      {/* Next project */}
      {study.nextProject && (
        <div style={{ ...s.container, paddingBottom: 120 }}>
          <Reveal>
            <p style={s.sectionLabel as any}>Next project</p>
            <Link
              to={`/case-study/${study.nextProject.slug}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '40px 48px',
                background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)',
                textDecoration: 'none', transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-primary)'; e.currentTarget.style.background = 'rgba(109,220,109,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
              <span style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 600, color: '#fff' }}>{study.nextProject.title}</span>
              <span style={{ fontSize: 32, color: 'var(--c-primary)' }}>→</span>
            </Link>
          </Reveal>
        </div>
      )}
    </div>
  )
}
