import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { useCountUp } from '../hooks/useCountUp'

// ─── Add your real case study data here ───────────────────────────────────────
const caseStudies: Record<string, any> = {
  'healthcare-platform': {
    title: 'MedConnect Patient Portal',
    description: 'Transforming telehealth from a bureaucratic maze into a seamless, accessible patient experience.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5950?auto=format&fit=crop&q=80&w=1600',
    overview: {
      client: 'MedConnect',
      industry: 'Healthcare / Telemedicine',
      timeline: '12 weeks',
      role: 'Lead UX/UI Designer & Frontend Dev',
    },
    problem:
      'MedConnect’s existing portal was built from the perspective of hospital administrators, resulting in a clinical, dense, and confusing interface for patients. With a 74% abandonment rate during the booking flow, users were frustrated by complex medical jargon, hidden navigation, and zero mobile optimization. They needed a complete structural overhaul that prioritized empathy, clarity, and speed.',
    approach: [
      {
        num: '01',
        title: 'Deep-dive & empathize',
        body: 'I began by shadowing patient support calls and analyzing 6 months of Hotjar recordings. This qualitative data revealed three primary friction points: confusing insurance terminology, an overwhelming date-picker, and a lack of clear progress indicators.',
      },
      {
        num: '02',
        title: 'Information architecture reboot',
        body: 'I stripped the booking flow down to its absolute essentials. By grouping related tasks and mapping every edge case, I reduced the cognitive load and cut the process from 11 fragmented steps down to a linear, digestible 4-step wizard.',
      },
      {
        num: '03',
        title: 'Design system & accessibility',
        body: 'Healthcare demands trust. I developed a design system focused on high-contrast typography, calming color palettes, and large, touch-friendly targets. The entire interface was rigorously tested to meet WCAG 2.1 AA accessibility standards.',
      },
      {
        num: '04',
        title: 'Frontend collaboration',
        body: 'I didn’t just hand over a Figma file. I built the React component library in tandem with the engineering team, ensuring that complex micro-interactions (like calendar swiping and form validation) felt perfectly smooth on every device.',
      },
    ],
    screens: [
      { image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', caption: 'The streamlined 4-step booking flow.' },
      { image: 'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=800', caption: 'Patient dashboard and upcoming appointments.' },
      { image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800', caption: 'Mobile-optimized insurance verification.' }
    ],
    results: [
      { value: 62, suffix: '%', label: 'Drop in abandonment' },
      { value: 40, suffix: '%', label: 'Conversion Increase' },
      { value: 4.8, suffix: '★', label: 'App store rating', isDecimal: true },
    ],
    nextProject: {
      slug: 'finance-dashboard',
      title: 'Finance Dashboard',
    },
  },
  'finance-dashboard': {
    title: 'Finance Dashboard',
    description: 'A comprehensive analytics dashboard for fintech professionals.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    overview: {
      client: 'FinEdge',
      industry: 'Finance',
      timeline: '10 weeks',
      role: 'Product Design',
    },
    problem: 'Users were overwhelmed by data density and struggling to find key actionable insights quickly.',
    approach: [
      { num: '01', title: 'Data Audit', body: 'Analyzed the most utilized data points.' },
      { num: '02', title: 'Wireframing', body: 'Created modular dashboard layouts.' },
      { num: '03', title: 'Implementation', body: 'Built scalable charting components.' },
    ],
    screens: [
      { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', caption: 'Main Dashboard' }
    ],
    results: [
      { value: 25, suffix: '%', label: 'Churn rate reduction' },
      { value: 2, suffix: 'x', label: 'Faster load times' }
    ],
    nextProject: {
      slug: 'premium-portfolio',
      title: 'Premium Portfolio',
    },
  },
  'premium-portfolio': {
    title: 'Premium Portfolio',
    description: 'An Awwwards-winning portfolio for a top creative agency.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    overview: {
      client: 'Studio X',
      industry: 'Design Agency',
      timeline: '6 weeks',
      role: 'Web Design',
    },
    problem: 'The agency needed a digital presence that matched their high-end physical work.',
    approach: [
      { num: '01', title: 'Concept', body: 'Explored cinematic motion and typography.' },
      { num: '02', title: 'Prototyping', body: 'Built high-fidelity motion prototypes.' },
      { num: '03', title: 'Development', body: 'Implemented with WebGL and Framer Motion.' },
    ],
    screens: [
      { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', caption: 'Homepage' }
    ],
    results: [
      { value: 80, suffix: '%', label: 'Engagement Increase' },
      { value: 95, suffix: '', label: 'Lighthouse Score' }
    ],
    nextProject: {
      slug: 'ecommerce-app',
      title: 'E-Commerce App',
    },
  },
  'ecommerce-app': {
    title: 'E-Commerce App',
    description: 'A seamless mobile shopping experience.',
    heroImage: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',
    overview: {
      client: 'RetailCo',
      industry: 'E-Commerce',
      timeline: '12 weeks',
      role: 'Mobile UX',
    },
    problem: 'Mobile checkout conversion was drastically lower than desktop.',
    approach: [
      { num: '01', title: 'User Testing', body: 'Identified friction in the checkout process.' },
      { num: '02', title: 'Redesign', body: 'Streamlined to a one-page checkout.' },
      { num: '03', title: 'Launch', body: 'Rolled out to 1M+ users.' },
    ],
    screens: [
      { image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800', caption: 'Checkout Flow' }
    ],
    results: [
      { value: 120, suffix: '%', label: 'Mobile Sales Growth' },
      { value: 30, suffix: '%', label: 'Cart abandonment drop' }
    ],
    nextProject: {
      slug: 'saas-architecture',
      title: 'SaaS Architecture',
    },
  },
  'saas-architecture': {
    title: 'SaaS Architecture',
    description: 'A robust design system for a complex enterprise product.',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    overview: {
      client: 'CloudTech',
      industry: 'Enterprise Software',
      timeline: '4 months',
      role: 'Design System',
    },
    problem: 'Inconsistent UI components were slowing down engineering teams.',
    approach: [
      { num: '01', title: 'Audit', body: 'Cataloged 200+ inconsistent components.' },
      { num: '02', title: 'Systematize', body: 'Built a unified token system.' },
      { num: '03', title: 'Documentation', body: 'Created interactive guidelines for devs.' },
    ],
    screens: [
      { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800', caption: 'Component Library' }
    ],
    results: [
      { value: 10, suffix: 'k', label: 'MRR Growth' },
      { value: 40, suffix: '%', label: 'Faster dev cycles' }
    ],
    nextProject: {
      slug: 'ai-interface',
      title: 'AI Interface',
    },
  },
  'ai-interface': {
    title: 'AI Interface',
    description: 'Humanizing artificial intelligence interactions.',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    overview: {
      client: 'OpenAI',
      industry: 'Technology',
      timeline: '8 weeks',
      role: 'UX Engineering',
    },
    problem: 'Users found the AI responses too robotic and difficult to parse.',
    approach: [
      { num: '01', title: 'Prototyping', body: 'Experimented with conversational UI.' },
      { num: '02', title: 'Micro-interactions', body: 'Added fluid animations to states.' },
      { num: '03', title: 'Refinement', body: 'Polished typographic hierarchy.' },
    ],
    screens: [
      { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', caption: 'Chat Interface' }
    ],
    results: [
      { value: 40, suffix: '%', label: 'Task time reduction' },
      { value: 98, suffix: '%', label: 'User satisfaction' }
    ],
    nextProject: {
      slug: 'healthcare-platform',
      title: 'Healthcare Platform',
    },
  }
}
// ──────────────────────────────────────────────────────────────────────────────

function ResultStat({ value, suffix, label, isDecimal }: any) {
  const { count, ref } = useCountUp(isDecimal ? value * 10 : value, 1200)
  const display = isDecimal ? (count / 10).toFixed(1) : count

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(48px,6vw,80px)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
        {display}{suffix}
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {label}
      </div>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies[slug as string]
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

  if (!study) {
    return (
      <div style={{ color: '#fff', padding: '20vh 5vw', textAlign: 'center' }}>
        <h1>Case study not found</h1>
        <Link to="/" style={{ color: '#6ddc6d' }}>← Back to home</Link>
      </div>
    )
  }

  const s = {
    page: { background: '#0a1a0a', minHeight: '100vh', color: '#fff', fontFamily: 'inherit' },
    container: { maxWidth: 1100, margin: '0 auto', padding: '0 5vw' },
    label: { fontSize: 11, color: '#6ddc6d', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 },
  }

  return (
    <div style={s.page as any}>
      <style>{`
        .case-stats-grid {
          display: grid;
          grid-template-columns: repeat(${study.results.length}, 1fr);
          gap: 48px;
          max-width: 800px;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .case-stats-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
      {/* Scroll progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: 2, width: `${scrollPct}%`, background: '#6ddc6d', zIndex: 10000, transition: 'width .1s linear', pointerEvents: 'none' }} />

      {/* Back nav */}
      <div style={{ ...s.container, paddingTop: 32 }}>
        <Link
          to="/"
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        >
          ← Back to work
        </Link>
      </div>

      {/* Hero */}
      <div style={{ ...s.container, paddingTop: 64, paddingBottom: 64 }}>
        <Reveal>
          <p style={{ ...s.label as any, marginBottom: 16 }}>Case study</p>
          <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 700, lineHeight: 1.1, margin: '0 0 20px', maxWidth: 800 }}>
            {study.title}
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.55)', maxWidth: 600, lineHeight: 1.6, margin: 0 }}>
            {study.description}
          </p>
        </Reveal>
      </div>

      {/* Hero image */}
      <Reveal>
        <img src={study.heroImage} alt={study.title} loading="eager" fetchPriority="high" decoding="async" width="1600" height="900" style={{ width: '100%', maxHeight: 560, objectFit: 'cover', display: 'block' }} />
      </Reveal>

      {/* Overview bar */}
      <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)', borderBottom: '0.5px solid rgba(255,255,255,0.08)', margin: '0 0' }}>
        <div style={{ ...s.container, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {Object.entries(study.overview).map(([key, val]: any) => (
            <div key={key} style={{ padding: '28px 0', borderRight: '0.5px solid rgba(255,255,255,0.08)' }}>
              <div style={{ ...s.label as any, marginBottom: 8 }}>{key}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Problem */}
      <div style={{ ...s.container, padding: '80px 5vw' }}>
        <Reveal>
          <p style={{ ...s.label as any, marginBottom: 20 }}>The problem</p>
          <p style={{ fontSize: 'clamp(18px,2.5vw,22px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: 760, fontWeight: 300 }}>
            {study.problem}
          </p>
        </Reveal>
      </div>

      {/* Approach */}
      <div style={{ ...s.container, paddingBottom: 80 }}>
        <Reveal>
          <p style={{ ...s.label as any, marginBottom: 40 }}>The approach</p>
        </Reveal>
        {study.approach.map((step: any, i: number) => (
          <Reveal key={i} delay={i * 100}>
            <div style={{ display: 'flex', gap: 40, padding: '32px 0', borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 13, color: 'rgba(109,220,109,0.6)', fontWeight: 500, minWidth: 28, marginTop: 3 }}>{step.num}</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{step.title}</div>
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{step.body}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Screens */}
      <div style={{ ...s.container, paddingBottom: 80 }}>
        <Reveal><p style={{ ...s.label as any, marginBottom: 32 }}>Key screens</p></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: study.screens.length > 1 ? '1fr 1fr' : '1fr', gap: 16 }}>
          {study.screens.map((screen: any, i: number) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ borderRadius: 12, overflow: 'hidden', background: '#0d1f0d' }}>
                <img src={screen.image} alt={screen.caption} loading="lazy" width="800" height="600" style={{ width: '100%', display: 'block' }} />
                {screen.caption && (
                  <div style={{ padding: '12px 16px', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{screen.caption}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Results */}
      <div style={{ background: '#0d1f0d', padding: '80px 5vw', textAlign: 'center' }}>
        <Reveal><p style={{ ...s.label as any, marginBottom: 56 }}>Results</p></Reveal>
        <div className="case-stats-grid">
          {study.results.map((r: any, i: number) => (
            <ResultStat key={i} {...r} />
          ))}
        </div>
      </div>

      {/* Next project */}
      {study.nextProject && (
        <div style={{ ...s.container, padding: '64px 5vw' }}>
          <Reveal>
            <p style={{ ...s.label as any, marginBottom: 20 }}>Next project</p>
            <Link
              to={`/case-study/${study.nextProject.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '28px 32px',
                background: '#0d1f0d',
                borderRadius: 12,
                border: '0.5px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(109,220,109,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{study.nextProject.title}</span>
              <span style={{ fontSize: 20, color: '#6ddc6d' }}>→</span>
            </Link>
          </Reveal>
        </div>
      )}
    </div>
  )
}
