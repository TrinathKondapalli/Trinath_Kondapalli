import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Founder & CEO, TechFlow',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    text: "Trinadh transformed our outdated platform into a modern, high-converting experience. The new design not only looks stunning but has significantly improved our user engagement. Highly recommended for any serious startup."
  },
  {
    name: 'Sarah Jenkins',
    role: 'Product Director, ScaleUp',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    text: "Working with Trinadh was an absolute pleasure. His attention to detail, deep understanding of UX strategy, and ability to execute complex frontend tasks flawlessly sets him apart from anyone else we've worked with."
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Marketing, Elevate',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    text: "Exceptional quality and professionalism. He truly understands how to align design with business goals. The brand identity and website he delivered exceeded all our expectations and elevated our entire brand."
  }
];

export default function Testimonials() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          width: 100%;
          max-width: 1280px;
        }

        .testimonial-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px;
          border-radius: 32px;
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(109,215,76,0.05);
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: rgba(109,215,76,0.3);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .client-img {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(109,215,76,0.2);
        }

        .client-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .client-name {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 700;
          color: var(--c-white);
        }

        .client-role {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        .stars-container {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .testimonial-text {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          flex-grow: 1;
        }

        .quote-icon {
          position: absolute;
          top: 32px;
          right: 32px;
          color: rgba(109,215,76,0.1);
        }

        .linkedin-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .linkedin-badge:hover {
          color: #0A66C2; /* LinkedIn Brand Color on hover, or primary green */
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-card { padding: 32px 24px; }
        }
      `}</style>

      {/* Eyebrow Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
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
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'var(--c-primary)', textTransform: 'uppercase' }}>
          TESTIMONIALS
        </span>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
      </motion.div>

      {/* Headline */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(40px, 5vw, 72px)',
          fontWeight: 800,
          color: 'var(--c-white)',
          textAlign: 'center',
          letterSpacing: '-2px',
          marginBottom: 32,
          lineHeight: 1.1
        }}
      >
        What <br/>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px'
        }}>
          Clients
        </span> <br/>
        Say.
      </motion.h2>

      {/* Subhead */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 20,
          color: 'rgba(255,255,255,0.72)',
          textAlign: 'center',
          maxWidth: 760,
          lineHeight: 1.6,
          marginBottom: 80
        }}
      >
        Building meaningful relationships is just as important as building exceptional digital experiences. Here's what clients have to say about working with me.
      </motion.p>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="testimonial-card"
          >
            {/* Massive Background Quote Icon */}
            <Quote size={80} className="quote-icon" fill="currentColor" strokeWidth={0} />

            {/* Client Info */}
            <div className="testimonial-header">
              <img src={item.image} alt={item.name} className="client-img" />
              <div className="client-info">
                <span className="client-name">{item.name}</span>
                <span className="client-role">{item.role}</span>
              </div>
            </div>

            {/* 5-Star Rating */}
            <div className="stars-container">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} fill="var(--c-primary)" color="var(--c-primary)" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="testimonial-text">
              "{item.text}"
            </p>

            {/* LinkedIn Verification */}
            <div className="linkedin-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              Verified via LinkedIn
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
