import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './Reveal';
import { 
  Search, User, Share2, PenTool, MousePointer2, Layers, RefreshCw, Code2 
} from 'lucide-react';

const steps = [
  { 
    title: 'Understand the Problem', 
    desc: 'Before designing anything, I understand what needs to be solved.',
    activities: ['Business goals', 'User needs', 'Existing problems', 'Project constraints'],
    icon: Search
  },
  { 
    title: 'Learn About the Users', 
    desc: 'I gather insights about users so the experience is based on real needs rather than assumptions.',
    activities: ['User research', 'User needs', 'Pain points', 'Existing behavior'],
    icon: User
  },
  { 
    title: 'Shape the Experience', 
    desc: 'I organize information and define how people move through the product.',
    activities: ['User journeys', 'Information architecture', 'User flows', 'Navigation structure'],
    icon: Share2
  },
  { 
    title: 'Explore Solutions', 
    desc: 'I turn ideas into early layouts so problems can be solved before visual details take over.',
    activities: ['Wireframes', 'Layout exploration', 'Interaction ideas', 'Early prototypes'],
    icon: PenTool
  },
  { 
    title: 'Design the Interface', 
    desc: 'I transform the structure into clear, polished interfaces that are easy to understand and use.',
    activities: ['High-fidelity UI', 'Interaction design', 'Visual hierarchy', 'Responsive layouts'],
    icon: MousePointer2
  },
  { 
    title: 'Build the System', 
    desc: 'I create reusable components and design patterns so the product stays consistent as it grows.',
    activities: ['Design systems', 'Reusable components', 'Typography', 'UI patterns', 'Consistency'],
    icon: Layers
  },
  { 
    title: 'Test and Improve', 
    desc: 'I review the experience, identify problems, and refine the design before it moves forward.',
    activities: ['Usability testing', 'Feedback', 'Iteration', 'Accessibility'],
    icon: RefreshCw
  },
  { 
    title: 'Work With Developers', 
    desc: 'I document the design clearly and collaborate with developers to help the final product stay true to the intended experience.',
    activities: ['Design documentation', 'Responsive behavior', 'Developer collaboration', 'Design handoff', 'Implementation awareness'],
    icon: Code2
  }
];

export default function DesignProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" style={{
      position: 'relative',
      width: '100%',
      padding: '120px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10
    }}>
      <style>{`
        .dp-container {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        .dp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 32px;
        }

        .dp-title {
          font-family: var(--font-sans);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          color: var(--c-white);
          letter-spacing: -1px;
          line-height: 1.1;
        }
        
        .dp-title em {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: var(--c-primary);
        }

        .dp-timeline-wrapper {
          position: relative;
          width: 100%;
          padding-left: 24px;
        }
        
        @media (min-width: 768px) {
          .dp-timeline-wrapper {
            padding-left: 50%;
          }
        }

        .dp-line-bg {
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,0.05);
        }
        
        @media (min-width: 768px) {
          .dp-line-bg {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .dp-line-fill {
          position: absolute;
          left: 24px;
          top: 0;
          width: 2px;
          background: var(--c-primary);
          box-shadow: 0 0 10px var(--c-primary);
          transform-origin: top;
        }
        
        @media (min-width: 768px) {
          .dp-line-fill {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .dp-step {
          position: relative;
          display: flex;
          flex-direction: column;
          padding-left: 48px;
          margin-bottom: 80px;
          width: 100%;
        }
        
        @media (min-width: 768px) {
          .dp-step {
            width: 100%;
            margin-bottom: 120px;
          }
          .dp-step:nth-child(odd) {
            left: -100%;
            padding-left: 0;
            padding-right: 64px;
            text-align: right;
            align-items: flex-end;
          }
          .dp-step:nth-child(even) {
            padding-left: 64px;
            align-items: flex-start;
          }
        }

        .dp-step:last-child {
          margin-bottom: 0;
        }

        .dp-node {
          position: absolute;
          left: -4px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #09100a;
          border: 2px solid rgba(255,255,255,0.2);
          z-index: 2;
          transition: all 0.4s ease;
        }
        
        @media (min-width: 768px) {
          .dp-step:nth-child(odd) .dp-node {
            left: auto;
            right: -7px;
          }
          .dp-step:nth-child(even) .dp-node {
            left: -7px;
          }
        }

        .dp-step.active .dp-node {
          border-color: var(--c-primary);
          background: var(--c-primary);
          box-shadow: 0 0 12px var(--c-primary);
        }

        .dp-step-content {
          opacity: 0.4;
          transition: all 0.5s ease;
          transform: translateY(10px);
          width: 100%;
          max-width: 440px;
        }
        
        @media (min-width: 768px) {
          .dp-step:nth-child(odd) .dp-step-content {
            margin-left: auto;
          }
        }

        .dp-step.active .dp-step-content {
          opacity: 1;
          transform: translateY(0);
        }

        .dp-step:hover .dp-step-content {
          opacity: 1;
          transform: translateY(0);
        }
        .dp-step:hover .dp-node {
          border-color: rgba(109,215,76,0.5);
          box-shadow: 0 0 12px rgba(109,215,76,0.3);
        }
        .dp-step.active:hover .dp-node {
          border-color: var(--c-primary);
          box-shadow: 0 0 12px var(--c-primary);
        }

        .dp-step-num {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 700;
          color: var(--c-primary);
          letter-spacing: 2px;
          margin-bottom: 12px;
          padding-left: 52px;
        }

        .dp-step-title {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 700;
          color: var(--c-white);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        @media (min-width: 768px) {
          .dp-step:nth-child(odd) .dp-step-title {
            flex-direction: row-reverse;
          }
        }

        .dp-step-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary);
          transition: all 0.4s ease;
        }

        .dp-step.active .dp-step-icon, .dp-step:hover .dp-step-icon {
          background: rgba(109,215,76,0.1);
          box-shadow: 0 0 16px rgba(109,215,76,0.15);
        }

        .dp-step-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-bottom: 24px;
          padding-left: 52px;
        }

        .dp-activities {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 8px;
          padding-left: 52px;
        }
        
        @media (min-width: 768px) {
          .dp-step:nth-child(odd) .dp-step-num,
          .dp-step:nth-child(odd) .dp-step-desc,
          .dp-step:nth-child(odd) .dp-activities {
            padding-left: 0;
            padding-right: 52px;
          }
          
          .dp-step:nth-child(odd) .dp-activities {
            justify-content: flex-end;
          }
        }

        .dp-activity {
          padding: 6px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.02);
          transition: all 0.4s ease;
        }

        .dp-step.active .dp-activity, .dp-step:hover .dp-activity {
          border-color: rgba(109,215,76,0.2);
          color: rgba(255,255,255,0.8);
        }

        .dp-outro {
          text-align: center;
          margin-top: 80px;
          padding-top: 80px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .dp-outro-text {
          font-family: var(--font-sans);
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 32px;
        }

        .dp-loop {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 12px 24px;
          border-radius: 100px;
          background: rgba(109,215,76,0.05);
          border: 1px solid rgba(109,215,76,0.2);
          color: var(--c-primary);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .dp-loop-arrow {
          opacity: 0.5;
        }
        
        @media (max-width: 600px) {
          .dp-loop {
            font-size: 12px;
            gap: 8px;
            padding: 10px 16px;
          }
        }
      `}</style>

      <div className="dp-container">
        <div className="dp-header">
          <Reveal delay={0}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
              <div style={{ color: 'var(--c-primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>HOW I WORK</div>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-primary)', boxShadow: '0 0 8px var(--c-primary)' }} />
            </div>
            <h2 className="dp-title">From problem<br/>to <em>product.</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 24, fontSize: 16, maxWidth: 600, margin: '24px auto 0', lineHeight: 1.6 }}>
              I use a structured design process to understand the problem, shape the experience, design the interface, and work with development teams to bring the solution to life.
            </p>
          </Reveal>
        </div>

        <div className="dp-timeline-wrapper" ref={containerRef}>
          <div className="dp-line-bg" />
          <motion.div 
            className="dp-line-fill" 
            style={{ 
              scaleY: smoothProgress,
              height: '100%'
            }} 
          />

          {steps.map((step, idx) => {
            return (
              <StepItem 
                key={idx} 
                step={step} 
                idx={idx} 
                progress={scrollYProgress} 
                total={steps.length} 
              />
            );
          })}
        </div>

        <Reveal>
          <div className="dp-outro">
            <div className="dp-outro-text">
              Good design is not a single step. It is a continuous loop of understanding, designing, testing, and improving.
            </div>
            <div className="dp-loop">
              Understand <span className="dp-loop-arrow">→</span> Design <span className="dp-loop-arrow">→</span> Test <span className="dp-loop-arrow">→</span> Improve <span className="dp-loop-arrow">↺</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepItem({ step, idx }: any) {
  const [active, setActive] = useState(false);

  return (
    <motion.div 
      className={`dp-step ${active ? 'active' : ''}`}
      onViewportEnter={() => setActive(true)}
      onViewportLeave={() => setActive(false)}
      viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
    >
      <div className="dp-node" />
      <div className="dp-step-content">
        <div className="dp-step-num">0{idx + 1}</div>
        <div className="dp-step-title">
          <div className="dp-step-icon">
            <step.icon size={18} strokeWidth={2} />
          </div>
          {step.title}
        </div>
        <div className="dp-step-desc">{step.desc}</div>
        <div className="dp-activities">
          {step.activities.map((act: string, i: number) => (
            <div key={i} className="dp-activity">{act}</div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
