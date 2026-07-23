import { motion } from 'framer-motion';

export default function ProblemStatement() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3] text-center flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <p className="font-manrope text-xs uppercase tracking-[0.2em] text-[#8C6239] font-bold mb-8">
          The Problem
        </p>
        <h2 className="font-bosan font-extrabold text-4xl md:text-6xl text-[#1C3621] leading-[1.3] tracking-tight">
          How do we automate bulk logistics so property owners never have to visit a wholesale market again?
        </h2>
      </motion.div>
    </section>
  );
}

