import { motion } from 'framer-motion';

const principles = [
  {
    num: "01",
    title: "BUSINESS FIRST",
    desc: "Every design decision starts with the business objective. We measure success by real outcomes, not just aesthetics."
  },
  {
    num: "02",
    title: "USER FIRST",
    desc: "Digital experiences should feel intuitive and effortless. We eliminate friction so users can achieve their goals fast."
  },
  {
    num: "03",
    title: "BUILT FOR REALITY",
    desc: "Design is executed with technology and implementation in mind. No impossible mockups—only launch-ready systems."
  },
  {
    num: "04",
    title: "DESIGNED TO SCALE",
    desc: "We build flexible design systems and clean code architectures that easily grow alongside your business."
  }
];

export default function TzinrWhy() {
  return (
    <section id="why-tzinr" className="py-32 relative z-20 bg-[var(--c-base)] border-y border-[var(--c-deep)]/40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-24 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            DESIGN PHILOSOPHY
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight tracking-tight mb-6"
          >
            NOT JUST GOOD-LOOKING. <br />
            <span className="text-[var(--c-primary)] italic">BUILT TO WORK.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--c-body)] text-base md:text-lg max-w-xl"
          >
            We don't just make beautiful interfaces. We create useful digital products built on four core principles.
          </motion.p>
        </div>

        {/* 4 Principles Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((p, idx) => (
            <motion.div 
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 md:p-12 rounded-3xl bg-[var(--c-dark)]/40 border border-[var(--c-deep)]/60 hover:border-[var(--c-primary)]/40 transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--c-deep)]/60">
                  <span className="font-display text-2xl font-bold text-[var(--c-primary)] tracking-tight">
                    {p.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[var(--c-primary)]/40 group-hover:bg-[var(--c-primary)] group-hover:shadow-[0_0_10px_var(--c-primary)] transition-all duration-300" />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--c-white)] tracking-tight mb-4 group-hover:text-[var(--c-primary)] transition-colors">
                  {p.title}
                </h3>

                <p className="text-[var(--c-body)] text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
