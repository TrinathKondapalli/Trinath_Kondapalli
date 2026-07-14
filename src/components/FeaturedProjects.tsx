import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Healthcare Platform',
    slug: 'healthcare-platform',
    category: 'UX/UI Design',
    result: '↑ 40% conversion',
    className: 'card-hero', // spans 6 cols
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'
  },
  {
    title: 'Finance Dashboard',
    slug: 'finance-dashboard',
    category: 'Product Design',
    result: '↓ 25% churn rate',
    className: 'card-half', // spans 3 cols
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Premium Portfolio',
    slug: 'premium-portfolio',
    category: 'Web Design',
    result: '↑ 80% engagement',
    className: 'card-half', // spans 3 cols
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'E-Commerce App',
    slug: 'ecommerce-app',
    category: 'Mobile UX',
    result: '↑ 120% mobile sales',
    className: 'card-third', // spans 2 cols
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'SaaS Architecture',
    slug: 'saas-architecture',
    category: 'Design System',
    result: '↑ $10k MRR growth',
    className: 'card-third', // spans 2 cols
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AI Interface',
    slug: 'ai-interface',
    category: 'UX Engineering',
    result: '↓ 40% task time',
    className: 'card-third', // spans 2 cols
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [overlay, setOverlay] = useState({ x: 0, y: 0, opacity: 0 });
  
  // Parallax offsets
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    // Only apply on hover capable devices
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage from -1 to 1
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;
    
    // Max tilt ±8 degrees
    setTilt({
      rotateX: yPct * -8,
      rotateY: xPct * 8,
      scale: 1.02
    });
    
    // Opposite shift for parallax (image shifts up to 15px)
    setParallax({
      x: xPct * -15,
      y: yPct * -15
    });
    
    setOverlay({ x, y, opacity: 0.2 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    setParallax({ x: 0, y: 0 });
    setOverlay(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <Link
      to={`/case-study/${project.slug}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`editorial-card reveal ${project.className}`}
      style={{ 
        transitionDelay: `${index * 80}ms`, 
        display: 'block', 
        textDecoration: 'none',
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`
      }}
    >
      {/* Image Parallax Wrapper */}
      <div 
        style={{ 
          width: '100%', height: '100%', overflow: 'hidden',
          transform: `translate(${parallax.x}px, ${parallax.y}px)`,
          transition: overlay.opacity > 0 ? 'transform 0.1s ease' : 'transform 0.5s ease-out'
        }}
      >
        <img src={project.image} alt={project.title} className="editorial-img" />
      </div>
      
      {/* Dynamic Mouse Highlight */}
      <div 
        className="mouse-highlight"
        style={{
          transform: `translate(${overlay.x - 100}px, ${overlay.y - 100}px)`,
          opacity: overlay.opacity
        }}
      />
      
      <div className="card-hover-overlay" />
      
      {/* Top Left Project Number */}
      <div className="project-number">
        0{index + 1}
      </div>

      {/* Bottom Left Result Pill */}
      <div className="result-pill-persistent">
        {project.result}
      </div>

      {/* Centered Hover Block */}
      <div className="hover-center-block">
        <h3 className="hover-project-title">{project.title}</h3>
        <div className="hover-project-result">{project.result}</div>
        <div className="hover-view-case-study">View case study →</div>
      </div>
    </Link>
  );
}

export default function FeaturedProjects() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  return (
    <section id="work" style={{
      position: 'relative',
      width: '100%',
      padding: '160px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--c-base)'
    }}>
      <style>{`
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1440px;
        }

        .card-hero { grid-column: span 6; height: 640px; }
        .card-half { grid-column: span 3; height: 540px; }
        .card-third { grid-column: span 2; height: 440px; }

        .editorial-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          background: #000;
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.5s ease-out;
        }

        @media (hover: hover) {
          .editorial-card:hover {
            transition: transform 0.1s ease;
          }
        }

        /* Mouse highlight overlay */
        .mouse-highlight {
          position: absolute;
          top: 0; left: 0;
          width: 200px;
          height: 200px;
          background: #ffffff;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 5;
          transition: opacity 0.5s ease;
          will-change: transform;
        }

        /* Image treatment */
        .editorial-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
        }

        .editorial-card:hover .editorial-img {
          transform: scale(1.05);
          filter: grayscale(40%) contrast(1.1);
        }

        /* Dark Hover Overlay */
        .card-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
          z-index: 10;
        }
        .editorial-card:hover .card-hover-overlay {
          opacity: 1;
        }

        /* Project Number (Top Left) */
        .project-number {
          position: absolute;
          top: 24px;
          left: 24px;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          z-index: 20;
          transform: translateZ(20px);
        }

        /* Persistent Result Pill (Bottom Left) */
        .result-pill-persistent {
          position: absolute;
          bottom: 24px;
          left: 24px;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: rgba(100,220,100,0.8);
          background: rgba(100,220,100,0.1);
          border: 1px solid rgba(100,220,100,0.2);
          border-radius: 100px;
          padding: 6px 12px;
          z-index: 20;
          transform: translateZ(20px);
        }

        /* Centered Hover Block */
        .hover-center-block {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -40%) translateZ(40px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 30;
          text-align: center;
          pointer-events: none;
          width: 90%;
        }
        .editorial-card:hover .hover-center-block {
          opacity: 1;
          transform: translate(-50%, -50%) translateZ(40px);
        }
        
        .hover-project-title {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          color: var(--c-white);
          margin: 0;
          letter-spacing: 0;
        }
        
        .hover-project-result {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--c-primary);
          font-weight: 500;
        }

        .hover-view-case-study {
          margin-top: 12px;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          color: var(--c-white);
          opacity: 0.7;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .card-hero { grid-column: span 6; height: 500px; }
          .card-half { grid-column: span 6; height: 460px; }
          .card-third { grid-column: span 3; height: 400px; }
        }

        @media (max-width: 768px) {
          .editorial-grid { display: flex; flex-direction: column; }
          .card-hero, .card-half, .card-third { height: 400px; }
          
          .typo-row {
            grid-template-columns: 40px 1fr !important;
            padding: 24px 0 !important;
          }
          .typo-category { display: none !important; }
        }

        /* Typographic Row Hover Effects */
        .typo-row {
          position: relative;
          transition: opacity 0.3s ease;
        }
        .typographic-list:hover .typo-row:not(:hover) {
          opacity: 0.3;
        }
        .typo-title {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
        }
        .typo-row:hover .typo-title {
          transform: translateX(24px);
          color: var(--c-primary);
        }
      `}</style>

      {/* Eyebrow Pill */}
      <div 
        className="reveal"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '6px 16px',
          background: 'var(--rgba-dark-06)',
          border: '1px solid var(--rgba-white-03)',
          borderRadius: 100,
          marginBottom: 80
        }}
      >
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
          SELECTED WORK — 06 PROJECTS
        </span>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
      </div>

      {/* Editorial Grid (Top 3 only) */}
      <div className="editorial-grid">
        {projects.slice(0, 3).map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* Typographic List (Bottom 3) */}
      <div 
        className="typographic-list" 
        onMouseMove={(e) => {
          mouseX.set(e.clientX + 40);
          mouseY.set(e.clientY - 160);
        }}
        style={{ width: '100%', maxWidth: 1440, marginTop: 80, display: 'flex', flexDirection: 'column' }}
      >
        {projects.slice(3).map((project, i) => (
          <Link 
            key={i + 3}
            to={`/case-study/${project.slug}`}
            className="typo-row reveal"
            onMouseEnter={() => setHoveredImage(project.image)}
            onMouseLeave={() => setHoveredImage(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr auto',
              alignItems: 'center',
              padding: '40px 0',
              borderTop: '1px solid var(--rgba-white-03)',
              textDecoration: 'none',
              color: 'var(--c-white)',
              borderBottom: i === projects.slice(3).length - 1 ? '1px solid var(--rgba-white-03)' : 'none',
              transitionDelay: `${i * 100}ms`
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: 'rgba(255,255,255,0.4)' }}>
              0{i + 4}
            </div>
            <div className="typo-title" style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 400, letterSpacing: '-0.5px' }}>
              {project.title}
            </div>
            <div className="typo-category" style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1 }}>
              {project.category}
            </div>
          </Link>
        ))}
      </div>

      {/* Hover Image */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            id="hover-img"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 0, left: 0,
              x: smoothX, y: smoothY,
              width: 320, height: 420,
              borderRadius: 12,
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 100,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            <img src={hoveredImage} alt="Project Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
