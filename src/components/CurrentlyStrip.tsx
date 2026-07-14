export default function CurrentlyStrip() {
  return (
    <div style={{
      width: '100%',
      background: '#0d1f0d',
      padding: '16px 24px',
      borderTop: '0.5px solid rgba(255,255,255,0.08)',
      borderBottom: '0.5px solid rgba(255,255,255,0.08)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      position: 'relative'
    }}>
      <style>{`
        .currently-content {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--c-white);
          line-height: 1.5;
          text-align: center;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6ddc6d;
          box-shadow: 0 0 8px #6ddc6d;
          animation: pulse-dot 2s infinite ease-in-out;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .currently-arrow {
          color: #6ddc6d;
          font-weight: 500;
        }

        .currently-project {
          font-style: italic;
          opacity: 0.9;
        }

        .currently-muted {
          color: rgba(255,255,255,0.5);
        }

        @media (max-width: 768px) {
          .currently-content {
            flex-direction: column;
            gap: 8px;
          }
          .currently-separator {
            display: none;
          }
        }
      `}</style>

      <div className="currently-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="pulse-dot" />
          <span>
            <span className="currently-arrow">↳</span> Currently — <span className="currently-project">designing a SaaS dashboard for a Berlin fintech</span>
          </span>
        </div>
        <span className="currently-separator currently-muted">·</span>
        <span className="currently-muted">Open to new projects from September 2025</span>
      </div>
    </div>
  );
}
