import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const featuredTestimonial = {
  name: 'Michael Chen',
  role: 'Founder & CEO, TechFlow',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', // Abstract proxy for monochrome logo
  text: "Trinadh transformed our outdated platform into a modern, high-converting experience. The new design not only looks stunning, but it increased conversions by 3× in the first month alone. He is the rare designer who actually understands business."
};

const supportingTestimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    text: "His attention to detail and ability to execute complex frontend tasks flawlessly sets him apart from anyone else."
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    text: "Exceptional quality and professionalism. The brand identity he delivered exceeded all our expectations."
  },
  {
    name: 'Emma Watson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    text: "Trinadh does not just build websites, he builds digital ecosystems. Fast, responsive, and incredibly polished."
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax for the quote mark (moves up as user scrolls down)
  const quoteY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="testimonials" style={{
      position: 'relative',
      width: '100%',
      padding: '160px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: '#0a1a0a',
      overflow: 'hidden'
    }}>
      <style>{`
        .testimonials-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Giant Featured Quote Section */
        .featured-quote-wrapper {
          position: relative;
          width: 100%;
          max-width: 680px; 
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 120px;
        }

        .giant-quote-mark {
          position: absolute;
          top: -60px;
          left: -40px;
          font-family: serif;
          font-size: 120px;
          line-height: 1;
          color: #6ddc6d;
          opacity: 0.4;
          font-weight: 300;
          pointer-events: none;
          z-index: 0;
        }

        .featured-text {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--c-white);
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .featured-divider {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin-bottom: 32px;
        }

        .featured-author {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .featured-name {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 700;
          color: var(--c-white);
        }

        .featured-role {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }

        .company-logo {
          width: 80px;
          margin-top: 16px;
          opacity: 0.8;
          filter: grayscale(100%) brightness(200%);
        }

        /* Supporting Quotes Strip */
        .supporting-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        .support-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 40px 32px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .support-card:hover {
          transform: translateY(-8px);
          border-color: rgba(109,215,76,0.2);
        }

        .support-text {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 32px;
        }

        .support-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .support-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          filter: grayscale(20%);
        }

        .support-name {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          color: var(--c-white);
        }

        .support-role {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }

        @media (max-width: 1024px) {
          .supporting-grid { grid-template-columns: repeat(2, 1fr); }
          .support-card:last-child { display: none; /* Hide 3rd on tablet to keep grid even */ }
        }

        @media (max-width: 768px) {
          .giant-quote-mark { left: -10px; font-size: 120px; top: -40px; }
          .supporting-grid { grid-template-columns: 1fr; }
          .support-card:last-child { display: flex; }
        }
      `}</style>

      <div className="testimonials-container">
        
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
            WHAT CLIENTS SAY
          </span>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        </div>

        {/* Featured Hero Quote */}
        <div className="featured-quote-wrapper">
          <motion.div 
            className="giant-quote-mark"
            style={{ y: quoteY }}
          >
            “
          </motion.div>
          
          <p 
            className="featured-text reveal"
            style={{ transitionDelay: '100ms' }}
          >
            "{featuredTestimonial.text}"
          </p>

          <div className="featured-divider reveal" style={{ transitionDelay: '150ms' }} />

          <div 
            className="featured-author reveal"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="featured-name">{featuredTestimonial.name}</div>
            <div className="featured-role">{featuredTestimonial.role}</div>
            <img src={featuredTestimonial.logo} alt="Company Logo" className="company-logo" />
          </div>
        </div>

        {/* Supporting Quotes Row */}
        <div className="supporting-grid">
          {supportingTestimonials.map((item, i) => (
            <div 
              key={i}
              className="support-card reveal"
              style={{ transitionDelay: `${300 + (i * 100)}ms` }}
            >
              <p className="support-text">"{item.text}"</p>
              
              <div className="support-author">
                <img src={item.image} alt={item.name} className="support-img" />
                <div>
                  <div className="support-name">{item.name}</div>
                  <div className="support-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
