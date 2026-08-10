import { useLocation } from 'react-router-dom';

export default function TzinrFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-transparent via-[var(--c-base)]/50 to-[var(--c-base)] pt-12 pb-0 relative z-20 overflow-hidden">
      <style>{`
        .huge-footer-text-container {
           width: 100%;
           display: flex;
           justify-content: center;
           pointer-events: none;
           user-select: none;
           container-type: inline-size;
           overflow: hidden;
        }

        .huge-footer-text {
          font-family: var(--font-sans);
          font-size: 15.5cqi;
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          background: linear-gradient(180deg, var(--c-primary) 20%, rgba(32,97,215,0.1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          margin-bottom: -1vw; 
          width: 100%;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .huge-footer-text {
            font-size: 13.5cqi;
          }
        }

        @media (max-width: 768px) {
          .huge-footer-text {
            font-size: 11.5cqi;
            letter-spacing: -0.02em;
          }
        }
      `}</style>

      {/* HUGE FOOTER TEXT (Full Bleed) */}
      <div className="huge-footer-text-container">
        <div className="huge-footer-text">TZINR STUDIO</div>
      </div>
    </footer>
  );
}
