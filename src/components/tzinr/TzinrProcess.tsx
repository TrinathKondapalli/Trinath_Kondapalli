import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const processSteps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand the business, users, and core objectives."
  },
  {
    num: "02",
    title: "DEFINE",
    desc: "Identify the real problem and establish clear direction."
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Turn strategy into a clear, intuitive digital experience."
  },
  {
    num: "04",
    title: "BUILD",
    desc: "Bring the design to life through responsive development."
  },
  {
    num: "05",
    title: "LAUNCH",
    desc: "Ship, learn, and continuously optimize for growth."
  }
];

export default function TzinrProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const widthPercentage = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="process" className="py-32 relative z-20 bg-[var(--c-base)] border-t border-[var(--c-deep)]/40 overflow-hidden">
      
      {/* Background Subtle Lighting */}
      <div 
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] pointer-events-none z-0 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(32,97,215,0.2) 0%, rgba(3,10,29,0) 70%)'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            HOW WE WORK
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight tracking-tight mb-6"
          >
            FROM IDEA TO <br />
            <span className="text-[var(--c-primary)]">DIGITAL EXPERIENCE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--c-body)] text-base md:text-lg max-w-xl"
          >
            A structured 5-step process designed to eliminate guesswork, accelerate delivery, and ensure launch readiness.
          </motion.p>
        </div>

        {/* Process Timeline Wrapper */}
        <div className="relative">

          {/* Row 1: Badges + Connecting Line */}
          <div className="hidden lg:flex items-center justify-between relative mb-6 px-6">
            {/* Background track line */}
            <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-[2px] bg-[var(--c-deep)]/80 z-0">
              {/* Animated Active Line */}
              <motion.div
                style={{ width: widthPercentage }}
                className="h-full bg-gradient-to-r from-[var(--c-primary)] via-[var(--c-bright)] to-[var(--c-primary)] shadow-[0_0_12px_var(--c-primary)] relative"
              >
                {/* Traveling Dot */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_16px_var(--c-primary)] border-2 border-[var(--c-primary)] z-20" />
              </motion.div>
            </div>

            {/* Badges — one per step */}
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex-1 flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--c-dark)] border border-[var(--c-primary)]/50 flex items-center justify-center text-[var(--c-primary)] font-display font-bold text-sm shadow-[0_0_12px_rgba(32,97,215,0.2)]">
                  {step.num}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Content Cards (no badge inside) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-[var(--c-dark)]/40 border border-[var(--c-deep)]/40 hover:border-[var(--c-primary)]/40 hover:bg-[var(--c-surface)]/30 transition-all duration-400"
              >
                {/* Mobile-only badge */}
                <div className="lg:hidden w-12 h-12 rounded-xl bg-[var(--c-dark)] border border-[var(--c-primary)]/40 flex items-center justify-center text-[var(--c-primary)] font-display font-bold text-sm shadow-[0_0_12px_rgba(32,97,215,0.15)]">
                  {step.num}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-display font-bold text-[var(--c-white)] mb-2 tracking-wide group-hover:text-[var(--c-primary)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[var(--c-body)] text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
