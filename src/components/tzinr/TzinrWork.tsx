import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

const featuredProject = {
  id: '01',
  title: 'FITTRACK INDIA',
  subtitle: 'Healthcare / Fitness',
  services: 'Product Design · UX/UI',
  tagline: 'Designing a fitness & nutrition experience built around Indian lifestyles.',
  problemSolution: 'Problem: Standard global fitness apps ignore Indian dietary habits and cultural nuance. Solution: Built an intuitive, habit-forming experience with localized tracking and tailored guidance.',
  image: '/fittrack/01_Cover.png',
  href: '/case-study/fittrack'
};

const supportingProjects = [
  {
    id: '02',
    title: 'DIRECTOR AI',
    category: 'Creative Tech / AI Workspace',
    services: 'Interactive Web · UI Engineering',
    description: 'Generative AI platform enabling filmmakers and agency directors to craft storyboards in real-time.',
    image: '/director_ai/Director_ai.png',
    href: '/case-study/director-ai'
  },
  {
    id: '03',
    title: 'NUTRIBOX',
    category: 'D2C / Food Tech',
    services: 'UX/UI · Web Design',
    description: 'Personalized meal subscription platform built for visual clarity and effortless ordering.',
    image: '/nutribox/nutribox-hero.png',
    href: '/case-study/nutribox'
  },
  {
    id: '04',
    title: 'GOVIGI',
    category: 'Logistics / Enterprise SaaS',
    services: 'Product Design · Design System',
    description: 'Streamlining complex bulk shipping workflows and fleet tracking for logistics operators.',
    image: '/govigi/Govigi_Hero_image_1.png',
    href: '/case-study/govigi'
  }
];

export default function TzinrWork() {
  return (
    <section id="work" className="py-32 relative z-20 bg-[var(--c-base)] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] pointer-events-none z-0 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(32,97,215,0.15) 0%, rgba(3,10,29,0) 70%)'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            SELECTED WORK
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight tracking-tight mb-6"
          >
            A FEW THINGS <br />
            <span className="text-[var(--c-primary)]">WE'VE BUILT.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--c-body)] text-base md:text-lg max-w-xl"
          >
            Every project begins with a real business problem. Here is how we combine strategy, design, and code to create measurable impact.
          </motion.p>
        </div>

        {/* ─── 01. FEATURED PROJECT (LARGE EDITORIAL CARD) ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl border border-[var(--c-deep)] bg-gradient-to-br from-[var(--c-dark)] via-[var(--c-base)] to-[var(--c-surface)]/30 overflow-hidden mb-20 hover:border-[var(--c-primary)]/50 transition-colors duration-500 shadow-2xl shadow-black/40"
        >
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-primary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Project Image Container */}
            <div className="lg:col-span-7 relative h-[360px] md:h-[480px] lg:h-[560px] overflow-hidden bg-black/40">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-base)] via-transparent to-transparent lg:hidden" />
              
              {/* Badge Overlay */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--c-base)]/80 backdrop-blur-md border border-[var(--c-primary)]/30 text-[var(--c-primary)] text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>FLAGSHIP CASE STUDY</span>
              </div>
            </div>

            {/* Project Meta & Narrative */}
            <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between h-full relative z-20">
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-[var(--c-muted)] font-mono uppercase tracking-widest mb-6 pb-4 border-b border-[var(--c-deep)]">
                  <span>{featuredProject.subtitle}</span>
                  <span className="text-[var(--c-primary)] font-bold">{featuredProject.services}</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[var(--c-white)] tracking-tight mb-4 group-hover:text-[var(--c-primary)] transition-colors">
                  {featuredProject.title}
                </h3>

                {/* Tagline */}
                <p className="text-lg md:text-xl font-medium text-[var(--c-white)]/90 mb-6 leading-snug">
                  "{featuredProject.tagline}"
                </p>

                {/* Problem & Solution Breakdown */}
                <p className="text-sm text-[var(--c-body)] leading-relaxed mb-8">
                  {featuredProject.problemSolution}
                </p>
              </div>

              {/* CTA Link */}
              <div className="pt-6 border-t border-[var(--c-deep)] flex items-center justify-between">
                <a 
                  href={featuredProject.href}
                  className="inline-flex items-center gap-3 text-sm font-bold text-[var(--c-white)] group-hover:text-[var(--c-primary)] transition-colors uppercase tracking-wider"
                >
                  <span>View Case Study</span>
                  <div className="w-9 h-9 rounded-full bg-[var(--c-surface)] border border-[var(--c-deep)] flex items-center justify-center text-[var(--c-white)] group-hover:border-[var(--c-primary)] group-hover:bg-[var(--c-primary)] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

        {/* ─── 02. SUPPORTING PROJECTS GRID (ASYMMETRICAL LAYOUT) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportingProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl border border-[var(--c-deep)] bg-[var(--c-dark)]/60 overflow-hidden hover:border-[var(--c-primary)]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--c-primary)]/5"
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden bg-black/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-dark)] via-transparent to-transparent opacity-80" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 text-[10px] font-mono font-semibold uppercase tracking-widest text-[var(--c-white)]/80 px-3 py-1 rounded-full bg-[var(--c-base)]/80 backdrop-blur-md border border-[var(--c-deep)]">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-semibold text-[var(--c-primary)] uppercase tracking-wider mb-2">
                    {project.services}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[var(--c-white)] tracking-tight mb-3 group-hover:text-[var(--c-primary)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--c-body)] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer CTA Link */}
                <div className="pt-4 border-t border-[var(--c-deep)]/60 flex items-center justify-between mt-auto">
                  <a 
                    href={project.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[var(--c-white)] group-hover:text-[var(--c-primary)] transition-colors uppercase tracking-wider"
                  >
                    <span>View Project</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-20 flex justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full bg-[var(--c-surface)] border border-[var(--c-primary)]/40 text-[var(--c-white)] font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-[var(--c-primary)] hover:border-[var(--c-primary)] transition-all duration-300 shadow-lg shadow-[var(--c-primary)]/10"
          >
            <span>View All Work & Case Studies</span>
            <ArrowRight size={16} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
