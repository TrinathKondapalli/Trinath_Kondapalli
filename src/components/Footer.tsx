import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      width: '100%',
      padding: '120px 24px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--bg-dark)',
      borderTop: '1px solid rgba(109,215,76,0.05)'
    }}>
      <style>{`
        .footer-container {
          width: 100%;
          max-width: 1280px;
          display: flex;
          flex-direction: column;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 64px;
          margin-bottom: 80px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-logo {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--c-white);
          letter-spacing: -1px;
          margin-bottom: 8px;
        }

        .footer-desc {
          font-family: var(--font-sans);
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          max-width: 320px;
        }

        .footer-heading {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: var(--c-white);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-link {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          position: relative;
          width: fit-content;
          transition: color 0.3s ease;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 1px;
          background: var(--c-primary);
          box-shadow: 0 0 8px var(--c-primary);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: var(--c-white);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-bottom-text {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.4);
        }

        /* Decorative Glow */
        .footer-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: radial-gradient(circle, rgba(109,215,76,0.3) 0%, rgba(109,215,76,0) 70%);
          box-shadow: 0 0 40px 2px rgba(109,215,76,0.1);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px 32px;
          }
          .footer-col:first-child {
            grid-column: span 2;
          }
          .footer-desc {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-col:first-child {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-glow" />

      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-col"
          >
            <div className="footer-logo">TZINR</div>
            <p className="footer-desc">
              Designing digital experiences that help businesses grow through thoughtful design and modern development.
            </p>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-col"
          >
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Home</a>
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Projects</a>
              <a href="#" className="footer-link">Services</a>
              <a href="#" className="footer-link">Process</a>
              <a href="#" className="footer-link">Testimonials</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-col"
          >
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">UX/UI Design</a>
              <a href="#" className="footer-link">Website Design</a>
              <a href="#" className="footer-link">Frontend Development</a>
              <a href="#" className="footer-link">Graphic Design</a>
              <a href="#" className="footer-link">Video Editing</a>
            </div>
          </motion.div>

          {/* Column 4: Connect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-col"
          >
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Email</a>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">GitHub</a>
              <a href="#" className="footer-link">Behance</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="footer-bottom"
        >
          <div className="footer-bottom-text">
            © 2026 Trinadh Kondapalli. All Rights Reserved.
          </div>
          <div className="footer-bottom-text">
            Designed & Developed by Trinadh Kondapalli
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
