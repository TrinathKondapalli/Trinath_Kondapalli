import { motion } from 'framer-motion';

export default function TheFriction() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto relative h-[800px] flex items-center">
        
        {/* Massive Disruptive Timestamp */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 0.08, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 md:top-[-100px] -left-12 md:-left-24 font-bosan font-extrabold text-[180px] md:text-[380px] text-[#1C3621] leading-none select-none z-0 tracking-tighter mix-blend-multiply"
        >
          04:00
        </motion.div>

        {/* Text Block - Pulled left, overlapping timestamp */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute left-0 md:left-12 top-24 md:top-48 z-20 max-w-xl bg-[#F8F7F3]/80 backdrop-blur-md p-8 md:p-12 rounded-3xl"
        >
          <h2 className="font-bosan font-bold text-sm tracking-[0.2em] text-[#8C6239] uppercase mb-6">
            The Reality of Procurement
          </h2>
          <h3 className="font-bosan font-extrabold text-5xl md:text-7xl text-[#1C3621] leading-[1.0] tracking-tight mb-8">
            The 4:00 AM Struggle.
          </h3>
          <div className="space-y-6 font-manrope text-[#1C3621]/80 text-lg md:text-xl leading-relaxed font-light">
            <p>
              PG owners waste hours haggling at wholesale markets. We designed a system to take logistics entirely off their shoulders.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Staggered Images */}
        <div className="absolute right-0 md:right-12 bottom-0 md:bottom-24 z-10 w-full md:w-1/2 h-[500px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute right-12 top-0 w-3/4 aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F8F7F3] z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
              alt="Chaotic Wholesale Market" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute -right-4 bottom-[-40px] w-3/5 aspect-square bg-[#E6A743] rounded-2xl overflow-hidden shadow-xl border-4 border-[#F8F7F3] z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1595858688461-9c6065588370?auto=format&fit=crop&q=80&w=800" 
              alt="Transport Logistics" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

