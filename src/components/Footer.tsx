import Reveal from './Reveal';

export default function Footer() {
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
        }

        .huge-footer-text {
          font-family: var(--font-sans);
          font-size: 8vw;
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          background: linear-gradient(180deg, var(--c-primary) 20%, rgba(109,220,109,0.1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          margin-bottom: -1vw; /* pull it down slightly to touch the bottom */
          width: 100%;
          text-align: center;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .huge-footer-text {
            font-size: 8.5vw;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .huge-footer-text {
            font-size: 9.5vw;
            letter-spacing: -0.06em;
            margin-left: -24px;
            margin-right: -24px;
            width: calc(100% + 48px);
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
