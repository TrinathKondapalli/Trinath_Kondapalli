const skills = [
  'UI/UX Design', 'Video Editing', 'Motion Graphics', 'Graphic Design', 'Frontend Development'
];

const tools = [
  'Figma', 'Adobe XD', 'Framer', 'Paper', 'Adobe Premiere Pro', 
  'DaVinci Resolve', 'CapCut Desktop', 'Adobe After Effects', 
  'Blender', 'Spline', 'Adobe Photoshop', 'Adobe Illustrator', 
  'Canva', 'Visual Studio Code', 'Anti Gravity', 'Cursor', 'Lovable', 'Windsurf'
];

// Duplicate for seamless infinite looping
const displaySkills = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills];
const displayTools = [...tools, ...tools, ...tools, ...tools];

export default function ToolsMarquee() {
  return (
    <section id="tools" style={{
      width: '100%',
      background: '#0d0d0d', // 2-3% lighter than the #0a0a0a base
      padding: '64px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 20
    }}>
      <style>{`
        .marquee-headline {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          font-variant: small-caps;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 40px;
          padding-left: 5%;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Gradient masks for smooth fade on edges */
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15%;
          z-index: 2;
          pointer-events: none;
        }
        
        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #0d0d0d, transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #0d0d0d, transparent);
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          width: fit-content;
          animation: marquee 35s linear infinite;
        }
        
        .marquee-track.reverse {
          animation-direction: reverse;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          font-family: var(--font-sans);
          font-size: 28px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .marquee-track.reverse .marquee-item {
          font-size: 16px;
          opacity: 0.5; /* 50% of the parent which is already 50% = 0.25 effective */
        }

        .marquee-dot {
          color: #6ddc6d;
          margin: 0 32px;
          font-weight: 700;
        }
        
        .marquee-track.reverse .marquee-dot {
          margin: 0 24px;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .marquee-item { font-size: 20px; }
          .marquee-track.reverse .marquee-item { font-size: 14px; }
          .marquee-dot { margin: 0 20px; }
          .marquee-headline { padding-left: 24px; }
        }
      `}</style>

      <div className="marquee-headline">
        Skills & Tools I reach for
      </div>

      <div className="marquee-wrapper">
        {/* Row 1: Forward, Large (Tools) */}
        <div className="marquee-track">
          {displayTools.map((tool, index) => (
            <div key={`r1-${index}`} className="marquee-item">
              {tool}
              <span className="marquee-dot">·</span>
            </div>
          ))}
        </div>
        
        {/* Row 2: Reverse, Small (Skills) */}
        <div className="marquee-track reverse">
          {displaySkills.map((skill, index) => (
            <div key={`r2-${index}`} className="marquee-item">
              {skill}
              <span className="marquee-dot">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
