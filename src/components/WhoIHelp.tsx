import { useCountUp } from '../hooks/useCountUp';

function BigStat({ stat, delayMs }: any) {
  // Use duration 1600ms, value is stat.value
  const { count, ref } = useCountUp(stat.value, 1600);
  
  return (
    <div 
      className="metric-col reveal"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="metric-number" ref={ref}>
        {count}{stat.suffix}
      </div>
      
      <div className="metric-bottom">
        <span className="metric-label">{stat.label}</span>
        <span className="metric-note">{stat.note}</span>
      </div>
    </div>
  );
}

export default function WhoIHelp() {
  const stats = [
    { value: 40, suffix: '+', label: 'projects delivered', note: '↑ 2024' },
    { value: 100, suffix: '%', label: 'client satisfaction', note: '↑ 2024' },
    { value: 5, suffix: '+', label: 'years experience', note: '↑ 2024' }
  ];

  return (
    <section id="metrics" style={{
      width: '100%',
      background: '#0d1a0d', // Slightly lighter dark green
      borderTop: '1px solid rgba(109,215,76,0.1)',
      borderBottom: '1px solid rgba(109,215,76,0.1)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 10
    }}>
      <style>{`
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .metric-col {
          padding: 80px 40px;
          border-right: 1px solid rgba(109,215,76,0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .metric-col:last-child {
          border-right: none;
        }

        .metric-number {
          font-family: var(--font-sans);
          font-size: clamp(80px, 8vw, 140px);
          font-weight: 800;
          color: var(--c-white);
          letter-spacing: -4px;
          line-height: 1;
          margin-bottom: 40px;
        }

        .metric-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 24px;
        }

        .metric-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.6);
        }

        .metric-note {
          font-family: var(--font-display);
          font-size: 13px;
          font-style: italic;
          color: var(--c-primary);
        }

        @media (max-width: 1024px) {
          .metric-number {
            font-size: clamp(64px, 10vw, 100px);
            letter-spacing: -2px;
          }
        }

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          .metric-col {
            border-right: none;
            border-bottom: 1px solid rgba(109,215,76,0.1);
            padding: 60px 24px;
          }
          .metric-col:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <div className="metrics-grid">
        {stats.map((stat, i) => (
          <BigStat key={i} stat={stat} delayMs={i * 80} />
        ))}
      </div>
    </section>
  );
}
