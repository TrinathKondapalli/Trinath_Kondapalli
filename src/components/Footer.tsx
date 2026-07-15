import { Globe, MessageCircle, Link } from 'lucide-react';
import Reveal from './Reveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      position: 'relative',
      width: '100%',
      padding: '48px 24px 0 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--c-base)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      overflow: 'hidden'
    }}>
      <style>{`
        .footer-thin-bar {
          width: 100%;
          max-width: 1440px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          margin-bottom: 64px;
        }

        .footer-name {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: var(--c-white);
          justify-self: flex-start;
        }

        .footer-copyright {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          justify-self: center;
        }

        .footer-socials {
          display: flex;
          gap: 24px;
          justify-self: flex-end;
        }

        .social-link {
          color: rgba(255,255,255,0.4);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-link:hover {
          color: var(--c-primary);
          transform: translateY(-2px);
        }

        .huge-footer-text-container {
           width: 100%;
           display: flex;
           justify-content: center;
           pointer-events: none;
           user-select: none;
        }

        .huge-footer-text {
          font-family: var(--font-sans);
          font-size: 8.5vw;
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          background: linear-gradient(180deg, var(--c-primary) 0%, rgba(10,25,12,0) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          margin-bottom: -1vw; /* pull it down slightly to touch the bottom */
        }

        @media (max-width: 768px) {
          .footer-thin-bar {
            grid-template-columns: 1fr;
            gap: 24px;
            text-align: center;
            margin-bottom: 40px;
          }
          .footer-name, .footer-copyright, .footer-socials {
            justify-self: center;
          }
          .huge-footer-text {
            font-size: 12vw;
            letter-spacing: -0.06em;
          }
        }
      `}</style>

      <Reveal delay={0} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div className="footer-thin-bar">
          <div className="footer-name">Trinath Kondapalli</div>
          
          <div className="footer-copyright">
            © {currentYear} All Rights Reserved.
          </div>

          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Dribbble">
              <Link size={20} />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200} style={{width: '100%'}}>
        <div className="huge-footer-text-container">
          <div className="huge-footer-text">TRINATH KONDAPALLI</div>
        </div>
      </Reveal>
    </footer>
  );
}
