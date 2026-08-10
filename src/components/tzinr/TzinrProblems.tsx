import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const problemSolutions = [
  {
    id: '01',
    problemTitle: 'OUTDATED WEBSITE',
    problemDesc: 'Your business has evolved, but your website still reflects where you were years ago.',
    solutionTitle: 'MODERN EXPERIENCE',
    solutionDesc: 'We redesign your web presence with high-end aesthetics, strong editorial copy, and scalable architecture.',
    impact: '+ Modern brand positioning'
  },
  {
    id: '02',
    problemTitle: 'COMPLEX / HARD TO USE PRODUCT',
    problemDesc: 'Users struggle with confusing navigation, cluttered dashboards, and friction points.',
    solutionTitle: 'INTUITIVE UX / UI',
    solutionDesc: 'We simplify complex workflows, streamline navigation, and build intuitive interfaces users enjoy.',
    impact: '↓ Lower drop-off & friction'
  },
  {
    id: '03',
    problemTitle: 'POOR CONVERSION & ENGAGEMENT',
    problemDesc: 'Visitors drop off before understanding your core value proposition or taking action.',
    solutionTitle: 'PURPOSE-DRIVEN FLOWS',
    solutionDesc: 'We rethink your user journey, structure clear CTAs, and design pages optimized for action.',
    impact: '↑ Higher client conversion'
  },
  {
    id: '04',
    problemTitle: 'NEW STARTUP NEEDING PRESENCE',
    problemDesc: 'You have a breakthrough product or service, but lack a flagship digital experience.',
    solutionTitle: 'GROUND-UP DIGITAL BUILD',
    solutionDesc: 'We craft your complete digital presence from strategy and wireframes to design and launch.',
    impact: 'Investor & Client Ready'
  }
];

export default function TzinrProblems() {
  const [activeTab, setActiveTab] = useState<string>('01');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    if (hoveredCard !== null) return;
    
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = problemSolutions.findIndex(p => p.id === current);
        const nextIndex = (currentIndex + 1) % problemSolutions.length;
        return problemSolutions[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [hoveredCard]);

  const activeItem = problemSolutions.find(p => p.id === activeTab) || problemSolutions[0];

  return (
    <section id="problems" className="py-32 relative z-20 bg-[var(--c-base)] border-y border-[var(--c-deep)]/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(32,97,215,0.12) 0%, rgba(3,10,29,0) 70%)'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Eyebrow & Header */}
        <div className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            PROBLEMS WE SOLVE
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight mb-6 tracking-tight"
          >
            YOUR DIGITAL EXPERIENCE <br />
            <span className="text-[var(--c-primary)]">SHOULDN'T HOLD YOU BACK.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--c-body)] text-base md:text-lg max-w-xl"
          >
            Hover or tap any challenge below to see how TZINR transforms friction into measurable business outcomes.
          </motion.p>
        </div>

        {/* Interactive Grid: Problem Cards with Morphing Interactive Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive List of Problems */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {problemSolutions.map((item) => {
              const isSelected = activeTab === item.id;
              const isHovered = hoveredCard === item.id;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-6 md:p-8 rounded-2xl cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                    isSelected 
                      ? 'bg-[var(--c-surface)] border-[var(--c-primary)] shadow-lg shadow-[var(--c-primary)]/10' 
                      : 'bg-[var(--c-dark)]/40 border-[var(--c-deep)]/60 hover:border-[var(--c-primary)]/40'
                  }`}
                >
                  {/* Subtle highlight bar on active */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--c-primary)] shadow-[0_0_12px_var(--c-primary)]"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-display text-sm font-bold tracking-widest ${isSelected ? 'text-[var(--c-primary)]' : 'text-[var(--c-muted)]'}`}>
                        {item.id}
                      </span>
                      <h3 className={`text-lg md:text-xl font-bold tracking-wide transition-colors ${isSelected ? 'text-[var(--c-white)]' : 'text-[var(--c-body)]'}`}>
                        {item.problemTitle}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full border transition-colors ${
                      isSelected 
                        ? 'border-[var(--c-primary)] text-[var(--c-primary)] bg-[var(--c-primary)]/10' 
                        : 'border-[var(--c-deep)] text-[var(--c-muted)]'
                    }`}>
                      <ArrowRight size={16} className={`transition-transform duration-300 ${isSelected ? 'rotate-0' : 'rotate-45 opacity-50'}`} />
                    </div>
                  </div>

                  <p className="text-sm text-[var(--c-muted)] mt-3 leading-relaxed pl-9">
                    {item.problemDesc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Solution Transformation View (Interactive Stage) */}
          <div className="lg:col-span-6 min-h-[420px] rounded-3xl border border-[var(--c-primary)]/30 bg-gradient-to-br from-[var(--c-dark)] via-[var(--c-base)] to-[var(--c-surface)]/20 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            {/* Ambient Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(32,97,215,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col h-full justify-between gap-8"
              >
                {/* Header Tag */}
                <div>
                  <div className="flex items-center justify-between mb-8 border-b border-[var(--c-deep)] pb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--c-primary)]/10 border border-[var(--c-primary)]/30 text-[var(--c-primary)] text-xs font-semibold uppercase tracking-wider">
                      <Sparkles size={14} />
                      <span>TZINR Approach #{activeItem.id}</span>
                    </div>

                    <span className="text-xs text-[var(--c-muted)] font-mono">
                      PROBLEM → SOLUTION MORPH
                    </span>
                  </div>

                  {/* Friction vs Solution comparison */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--c-muted)] flex items-center gap-2 mb-2">
                        <AlertCircle size={14} className="text-rose-400/80" />
                        The Problem
                      </span>
                      <h4 className="text-lg font-medium text-[var(--c-white)]/70 line-through decoration-rose-500/50">
                        "{activeItem.problemDesc}"
                      </h4>
                    </div>

                    <div className="pt-4 border-t border-[var(--c-deep)]/60">
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--c-primary)] flex items-center gap-2 mb-2">
                        <CheckCircle2 size={14} className="text-[var(--c-primary)]" />
                        The Solution
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--c-white)] leading-snug">
                        {activeItem.solutionDesc}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Bottom Impact Badge */}
                <div className="pt-6 border-t border-[var(--c-deep)] flex items-center justify-between">
                  <span className="text-xs text-[var(--c-muted)] uppercase tracking-wider">Expected Impact</span>
                  <span className="text-sm font-bold text-[var(--c-primary)] px-4 py-2 rounded-xl bg-[var(--c-primary)]/10 border border-[var(--c-primary)]/20">
                    {activeItem.impact}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
