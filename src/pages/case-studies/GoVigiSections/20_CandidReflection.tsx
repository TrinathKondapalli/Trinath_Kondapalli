import { motion } from 'framer-motion';

export default function CandidReflection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#8C6239] text-[#F8F7F3]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bosan font-extrabold text-4xl md:text-5xl mb-8 tracking-tight">
            A Candid Reflection
          </h2>
          <div className="space-y-6 font-manrope text-lg md:text-xl text-white/80 leading-relaxed font-light">
            <p>
              Designing for operational users proves speed beats aesthetics. The dual ecosystem saves hostel owners 15 hours every single week.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

