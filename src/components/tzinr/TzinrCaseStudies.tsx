import { motion } from 'framer-motion';
import { ArrowRight, Layers, Lightbulb, Target, Trophy } from 'lucide-react';

const featuredTeaser = {
  title: 'FITTRACK INDIA',
  subtitle: 'Featured Case Study',
  problem: 'How do we make fitness and nutrition tracking intuitive and habit-forming for Indian users?',
  approach: ['Research', 'Structure', 'UX', 'UI & Design System'],
  solution: 'A focused, culturally-tailored fitness and nutrition experience built around daily habit loops.',
  outcome: 'Increased daily active engagement by 40% with zero-friction logging.',
  image: '/fittrack/14_Screen_Showcase.png',
  href: '/case-study/fittrack'
};

export default function TzinrCaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative z-20 bg-[var(--c-base)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            BEHIND THE WORK
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight tracking-tight mb-6"
          >
            THE THINKING <br />
            <span className="text-[var(--c-primary)]">BEHIND THE WORK.</span>
          </motion.h2>
        </div>

        {/* Single Featured Case Study Teaser Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-[var(--c-deep)] bg-gradient-to-br from-[var(--c-dark)] via-[var(--c-base)] to-[var(--c-surface)]/30 p-8 md:p-14 overflow-hidden relative shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--c-primary)]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Narrative (Problem -> Approach -> Solution -> Outcome) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full gap-8">
              
              <div>
                <div className="text-xs font-mono text-[var(--c-primary)] uppercase tracking-widest mb-3">
                  {featuredTeaser.subtitle}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[var(--c-white)] mb-8 tracking-tight">
                  {featuredTeaser.title}
                </h3>

                <div className="space-y-6">
                  {/* Problem */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--c-muted)] mb-1">The Problem</h4>
                    <p className="text-base text-[var(--c-white)]/90 leading-relaxed">{featuredTeaser.problem}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--c-muted)] mb-1">The Approach</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {featuredTeaser.approach.map((step, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 rounded-full bg-[var(--c-surface)] border border-[var(--c-deep)] text-[var(--c-white)]">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--c-muted)] mb-1">The Solution</h4>
                    <p className="text-base text-[var(--c-white)]/90 leading-relaxed">{featuredTeaser.solution}</p>
                  </div>
                </div>

              </div>

              {/* Outcome & CTA */}
              <div className="pt-6 border-t border-[var(--c-deep)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs md:text-sm font-bold text-[var(--c-white)]">{featuredTeaser.outcome}</span>
                </div>

                <a 
                  href={featuredTeaser.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--c-primary)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--c-bright)] transition-colors shadow-lg shadow-[var(--c-primary)]/20"
                >
                  <span>Read Case Study</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>

            {/* Right Column: Visual Image Showcase */}
            <div className="lg:col-span-6 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-[var(--c-deep)]/60 bg-black/40 group">
              <img 
                src={featuredTeaser.image} 
                alt={featuredTeaser.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-base)]/80 via-transparent to-transparent" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
