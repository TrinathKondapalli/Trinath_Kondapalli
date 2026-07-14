import { Globe, MessageCircle, Link } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      position: 'relative',
      width: '100%',
      padding: '32px 24px',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 10,
      background: 'var(--c-base)',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <style>{`
        .footer-thin-bar {
          width: 100%;
          max-width: 1440px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
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

        @media (max-width: 768px) {
          .footer-thin-bar {
            grid-template-columns: 1fr;
            gap: 24px;
            text-align: center;
          }
          .footer-name, .footer-copyright, .footer-socials {
            justify-self: center;
          }
        }
      `}</style>

      <div 
        className="footer-thin-bar reveal"
        style={{ transitionDelay: '0ms' }}
      >
        <div className="footer-name">Trinadh Kondapalli</div>
        
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
    </footer>
  );
}
