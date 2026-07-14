import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" style={{
      position: 'relative',
      width: '100%',
      padding: '140px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          max-width: 1280px;
          width: 100%;
          align-items: flex-start;
        }

        /* Left Side */
        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .contact-subheading {
          font-family: var(--font-sans);
          font-size: 32px;
          font-weight: 700;
          color: var(--c-white);
          letter-spacing: -1px;
          margin-bottom: 16px;
        }

        .contact-subdesc {
          font-family: var(--font-sans);
          font-size: 18px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-sans);
          font-size: 16px;
          color: var(--c-white);
          transition: transform 0.3s ease;
          text-decoration: none;
        }

        a.contact-detail-item:hover {
          color: var(--c-primary);
          transform: translateX(8px);
        }

        .detail-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
        }

        /* Right Side / Form */
        .contact-form-card {
          background: var(--rgba-dark-06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(109,215,76,0.05);
          padding: 48px;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .contact-form-card:hover {
          border-color: rgba(109,215,76,0.2);
          box-shadow: 0 10px 40px -10px rgba(109,215,76,0.15);
          transform: translateY(-4px);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-label {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          background: rgba(8, 21, 9, 0.5);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--c-white);
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input::placeholder {
          color: rgba(255,255,255,0.2);
        }

        .form-input:focus {
          border-color: rgba(109,215,76,0.5);
          box-shadow: 0 0 0 4px rgba(109,215,76,0.1);
        }

        textarea.form-input {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          margin-top: 16px;
          width: 100%;
          padding: 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6DD74C, #81DD6A);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          color: #081509; /* Dark text on green background */
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 20px rgba(109,215,76,0.2);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(109,215,76,0.4);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .contact-container { grid-template-columns: 1fr; gap: 48px; }
          .contact-form-card { padding: 40px 32px; }
        }

        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; gap: 24px; }
          .contact-form-card { padding: 32px 24px; }
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
          LET'S BUILD TOGETHER
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
        Let's Build <br/>
        Something <br/>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #6DD74C, #81DD6A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px'
        }}>
          Extraordinary.
        </span>
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
        Whether you're launching a new product, redesigning your website, or improving your digital experience, I'd love to help bring your ideas to life.
      </motion.p>

      <div className="contact-container">
        {/* LEFT COLUMN: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="contact-left"
        >
          <div>
            <h3 className="contact-subheading">Ready to start your next project?</h3>
            <p className="contact-subdesc">Let's discuss your ideas and create something meaningful together.</p>
          </div>

          <div className="contact-details">
            <a href="mailto:hello@trinadh.com" className="contact-detail-item">
              <div className="detail-icon-wrap"><Mail size={20} /></div>
              hello@trinadh.com
            </a>
            <a href="#" className="contact-detail-item">
              <div className="detail-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              Trinadh Kondapalli
            </a>
            <a href="#" className="contact-detail-item">
              <div className="detail-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              @trinadh.design
            </a>
            <div className="contact-detail-item" style={{ cursor: 'default' }}>
              <div className="detail-icon-wrap"><MapPin size={20} /></div>
              Available Worldwide
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="contact-form-card"
        >
          <div className="form-row">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input type="text" className="form-input" placeholder="John Doe" />
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input type="email" className="form-input" placeholder="john@company.com" />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Company</label>
            <input type="text" className="form-input" placeholder="Your Company Name" />
          </div>

          <div className="form-row">
            <div className="input-group">
              <label className="input-label">Project Type</label>
              <select className="form-input" style={{ appearance: 'none', cursor: 'pointer' }} defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="website">Website Design</option>
                <option value="frontend">Frontend Development</option>
                <option value="video">Video Editing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Budget</label>
              <select className="form-input" style={{ appearance: 'none', cursor: 'pointer' }} defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="1k-3k">$1,000 - $3,000</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Message</label>
            <textarea className="form-input" placeholder="Tell me about your project, timeline, and goals..." />
          </div>

          <button className="submit-btn">
            Start Your Project
            <ArrowRight size={20} className="btn-arrow" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
