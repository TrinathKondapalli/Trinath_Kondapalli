import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams();

  // For the template, we'll use placeholder content based on the "Healthcare Platform" project.
  const project = {
    title: 'Healthcare Platform',
    description: 'A complete redesign of a telemedicine application to improve patient engagement and streamline doctor consultations.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    overview: {
      client: 'HealthSync Inc.',
      industry: 'Health & Wellness',
      timeline: '4 Months',
      role: 'Lead Product Designer'
    },
    problem: 'The previous application suffered from high bounce rates and a complex booking flow that frustrated elderly patients. Doctors reported that the digital consultation interface was cluttered, leading to extended appointment times and decreased daily capacity.',
    approach: [
      {
        num: '01',
        title: 'User Research & Journey Mapping',
        desc: 'Conducted 24 interviews with both patients and healthcare providers to identify key friction points. We mapped out the entire end-to-end journey to understand emotional highs and lows.'
      },
      {
        num: '02',
        title: 'Simplified Booking Architecture',
        desc: 'Restructured the appointment scheduling flow from a 7-step process down to just 3 steps. We introduced clear, large typography and high-contrast UI elements specifically for accessibility.'
      },
      {
        num: '03',
        title: 'Clinical Dashboard Redesign',
        desc: 'Created a modular, widget-based dashboard for doctors that surfaces patient history, active prescriptions, and consultation notes in a single unified view.'
      }
    ],
    screens: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800'
    ],
    results: [
      { stat: '↑ 40%', label: 'conversion rate' },
      { stat: '4.8★', label: 'app store rating' },
      { stat: '3×', label: 'faster load time' }
    ],
    nextProject: {
      title: 'Finance Dashboard',
      slug: 'finance-dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    }
  };

  useEffect(() => {
    // Re-trigger scroll reveal animations when page loads
    const observeElements = () => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '50px' });

      document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
        el.classList.add('observed');
        io.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
           el.classList.add('visible');
        }
      });
    };
    
    // Give a tiny delay for React Router to render the DOM
    setTimeout(observeElements, 100);
  }, [id]);

  return (
    <div style={{ paddingBottom: 120 }}>
      <style>{`
        .case-study-hero {
          width: 100%;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 160px 5% 80px;
          position: relative;
        }

        .cs-back-btn {
          position: absolute;
          top: 40px;
          left: 5%;
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease, transform 0.3s ease;
          z-index: 50;
        }

        .cs-back-btn:hover {
          color: var(--c-white);
          transform: translateX(-4px);
        }

        .cs-hero-img-container {
          position: relative;
          width: 100%;
          height: 70vh;
          max-height: 800px;
          border-radius: 24px;
          overflow: hidden;
          margin: 0 auto;
        }

        .cs-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85);
        }

        .cs-overview-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1200px;
          margin: 80px auto;
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .cs-overview-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cs-overview-label {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .cs-overview-value {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 500;
          color: var(--c-white);
        }

        .cs-problem-section {
          max-width: 900px;
          margin: 120px auto;
          padding: 0 5%;
        }

        .cs-section-title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--c-primary);
          margin-bottom: 24px;
        }

        .cs-problem-text {
          font-family: var(--font-sans);
          font-size: clamp(20px, 2.5vw, 28px);
          line-height: 1.6;
          color: rgba(255,255,255,0.85);
        }

        .cs-approach-section {
          max-width: 1200px;
          margin: 160px auto;
          padding: 0 5%;
        }

        .cs-approach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          margin-top: 64px;
        }

        .cs-step-num {
          font-family: var(--font-display);
          font-size: 64px;
          color: rgba(255,255,255,0.1);
          margin-bottom: 16px;
          line-height: 1;
        }

        .cs-step-title {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 16px;
        }

        .cs-step-desc {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
        }

        .cs-screens-section {
          width: 100%;
          max-width: 1440px;
          margin: 160px auto;
          padding: 0 5%;
        }

        .cs-screens-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .cs-screen-img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          background: #000;
        }

        .cs-results-section {
          max-width: 1200px;
          margin: 160px auto;
          padding: 80px 5%;
          background: var(--rgba-dark-06);
          border-radius: 32px;
          border: 1px solid var(--rgba-white-008);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          text-align: center;
        }

        .cs-stat-value {
          font-family: var(--font-display);
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 400;
          color: var(--c-primary);
          margin-bottom: 8px;
        }

        .cs-stat-label {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cs-next-project {
          max-width: 1200px;
          margin: 160px auto 0;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cs-next-card {
          position: relative;
          width: 100%;
          max-width: 800px;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          margin-top: 48px;
          display: block;
          text-decoration: none;
        }

        .cs-next-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease, filter 0.8s ease;
        }

        .cs-next-card:hover img {
          transform: scale(1.05);
          filter: brightness(0.7) contrast(1.1);
        }

        .cs-next-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.4);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .cs-next-card:hover .cs-next-overlay {
          opacity: 1;
        }

        .cs-next-btn {
          background: var(--c-primary);
          color: var(--c-base);
          padding: 16px 32px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          transform: translateY(20px);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-next-card:hover .cs-next-btn {
          transform: translateY(0);
        }

        /* Mobile specific adjustments */
        @media (max-width: 900px) {
          .cs-overview-bar { grid-template-columns: 1fr 1fr; gap: 40px; }
          .cs-approach-grid { grid-template-columns: 1fr; gap: 64px; }
          .cs-results-section { grid-template-columns: 1fr; padding: 64px 24px; }
          .cs-screens-grid { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 600px) {
          .cs-overview-bar { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="case-study-hero">
        <Link to="/" className="cs-back-btn">← Back to work</Link>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', marginBottom: 48, zIndex: 2 }}>
          <h1 className="reveal" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '48px',
            fontWeight: 700,
            color: 'var(--c-white)',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            marginBottom: 24,
            transitionDelay: '0ms'
          }}>
            {project.title}
          </h1>
          <p className="reveal" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '20px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 800,
            lineHeight: 1.6,
            transitionDelay: '100ms'
          }}>
            {project.description}
          </p>
        </div>

        <div className="cs-hero-img-container reveal" style={{ transitionDelay: '200ms' }}>
          <img src={project.heroImage} alt={project.title} className="cs-hero-img" />
        </div>
      </section>

      {/* Overview Bar */}
      <div className="cs-overview-bar reveal" style={{ padding: '40px 5%' }}>
        <div className="cs-overview-item">
          <span className="cs-overview-label">Client</span>
          <span className="cs-overview-value">{project.overview.client}</span>
        </div>
        <div className="cs-overview-item">
          <span className="cs-overview-label">Industry</span>
          <span className="cs-overview-value">{project.overview.industry}</span>
        </div>
        <div className="cs-overview-item">
          <span className="cs-overview-label">Timeline</span>
          <span className="cs-overview-value">{project.overview.timeline}</span>
        </div>
        <div className="cs-overview-item">
          <span className="cs-overview-label">My Role</span>
          <span className="cs-overview-value">{project.overview.role}</span>
        </div>
      </div>

      {/* The Problem */}
      <section className="cs-problem-section reveal">
        <div className="cs-section-title">The Problem</div>
        <div className="cs-problem-text">
          {project.problem}
        </div>
      </section>

      {/* The Approach */}
      <section className="cs-approach-section">
        <div className="cs-section-title reveal">The Approach</div>
        <div className="cs-approach-grid">
          {project.approach.map((step, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="cs-step-num">{step.num}</div>
              <h3 className="cs-step-title">{step.title}</h3>
              <p className="cs-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Screens */}
      <section className="cs-screens-section">
        <div className="cs-screens-grid">
          {project.screens.map((screen, i) => (
            <img key={i} src={screen} alt="Key Screen" className="cs-screen-img reveal" style={{ transitionDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="cs-results-section reveal">
        {project.results.map((res, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 100 + 200}ms` }}>
            <div className="cs-stat-value">{res.stat}</div>
            <div className="cs-stat-label">{res.label}</div>
          </div>
        ))}
      </section>

      {/* Next Project */}
      <section className="cs-next-project reveal">
        <div className="cs-section-title">Up Next</div>
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700,
          color: 'var(--c-white)',
          letterSpacing: '-1px'
        }}>
          {project.nextProject.title}
        </h2>
        
        <Link to={`/case-study/${project.nextProject.slug}`} className="cs-next-card" data-cursor-text="View">
          <img src={project.nextProject.image} alt={project.nextProject.title} />
          <div className="cs-next-overlay">
            <div className="cs-next-btn">
              View Case Study <ArrowUpRight size={20} strokeWidth={3} />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
