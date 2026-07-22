import Reveal from './Reveal';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  if (location.pathname === '/case-study/nutribox') return null;

  return (
    <footer style={{
      position: 'relative',
      width: '100%',
      padding: '48px 0 0 0', /* Removed side padding for full bleed */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      background: 'var(--c-base)',
      borderTop: 'none',
      overflow: 'hidden'
    }}>
      <style>{`
        .huge-footer-text-container {
           width: 100%;
           display: flex;
           justify-content: center;
           pointer-events: none;
           user-select: none;
           container-type: inline-size; /* Enables cqi units */
        }

        .huge-footer-text {
          font-family: var(--font-sans);
          font-size: 11cqi;
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          background: linear-gradient(180deg, var(--c-primary) 20%, rgba(109,220,109,0.1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          margin-bottom: -1vw; 
          width: 100%;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .huge-footer-text {
            font-size: 10cqi;
          }
        }

        @media (max-width: 768px) {
          .huge-footer-text {
            font-size: 8.8cqi;
            letter-spacing: -0.02em;
          }
        }
      `}</style>

      <Reveal delay={200} style={{width: '100%'}}>
        <div className="huge-footer-text-container">
          <div className="huge-footer-text">TRINATH KONDAPALLI</div>
        </div>
      </Reveal>
    </footer>
  );
}
