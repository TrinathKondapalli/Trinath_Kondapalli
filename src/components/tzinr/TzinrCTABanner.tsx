import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, PenTool, BarChart3, Rocket } from 'lucide-react';

const floatingIcons = [
  { icon: PenTool,   position: 'top-8 left-8',    delay: 0 },
  { icon: Smartphone, position: 'top-8 right-8',   delay: 0.15 },
  { icon: Code2,     position: 'bottom-8 left-8',  delay: 0.3 },
  { icon: BarChart3, position: 'bottom-8 right-8', delay: 0.45 },
];

const particles = [
  { top: '15%', left: '20%', size: 2, delay: 0 },
  { top: '30%', left: '75%', size: 1.5, delay: 0.5 },
  { top: '60%', left: '15%', size: 1, delay: 1 },
  { top: '70%', left: '80%', size: 2, delay: 0.8 },
  { top: '45%', left: '50%', size: 1.5, delay: 1.2 },
  { top: '20%', left: '55%', size: 1, delay: 0.3 },
];

export default function TzinrCTABanner() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[var(--c-base)] relative z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(8,18,52,0.95) 0%, rgba(3,10,29,0.98) 50%, rgba(10,22,60,0.95) 100%)',
            border: '1px solid rgba(32,97,215,0.4)',
            boxShadow: '0 0 60px rgba(32,97,215,0.15), 0 0 120px rgba(32,97,215,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Ambient inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(32,97,215,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Animated particles */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[var(--c-primary)] pointer-events-none"
              style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* Floating icon badges */}
          {floatingIcons.map(({ icon: Icon, position, delay }, i) => (
            <motion.div
              key={i}
              className={`absolute ${position} w-12 h-12 rounded-2xl flex items-center justify-center pointer-events-none z-10`}
              style={{
                background: 'rgba(32,97,215,0.15)',
                border: '1px solid rgba(32,97,215,0.3)',
                backdropFilter: 'blur(8px)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay, duration: 0.5 }}
            >
              <Icon size={20} className="text-[var(--c-primary)]" strokeWidth={1.5} />
            </motion.div>
          ))}

          {/* Main content */}
          <div className="relative z-10 py-16 px-8 md:px-20 flex flex-col items-center text-center gap-6">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{
                background: 'rgba(32,97,215,0.15)',
                border: '1px solid rgba(32,97,215,0.4)',
                color: 'var(--c-primary)',
              }}
            >
              <Rocket size={13} />
              Let's Build Something Great
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--c-white)] leading-tight tracking-tight">
                Have a project in mind?
              </h2>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight tracking-tight text-[var(--c-primary)]">
                Let's build it together.
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[var(--c-body)] text-sm md:text-base max-w-md leading-relaxed"
            >
              Tell us about your idea, goals, and challenges.
              <br />
              We'll handle the design, strategy, and technology.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-300 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, var(--c-primary) 0%, rgba(32,97,215,0.8) 100%)',
                boxShadow: '0 0 30px rgba(32,97,215,0.4), 0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Avatar stack removed */}
              <span className="text-sm md:text-base">Start a Project</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
