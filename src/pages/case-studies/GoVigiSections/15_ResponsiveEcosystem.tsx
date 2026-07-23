import { motion } from 'framer-motion';

export default function ResponsiveEcosystem() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-bosan font-extrabold text-4xl md:text-6xl text-[#1C3621] mb-6 tracking-tight">
            The Omnichannel Sync
          </h2>
          <p className="font-manrope text-lg text-[#1C3621]/70 max-w-2xl mx-auto">
            When a kitchen manager taps "Dispatch" at 11:00 PM, the desktop dashboard updates instantly, and the delivery driver's manifest is automatically populated. True real-time operational sync.
          </p>
        </motion.div>

        <div className="relative w-full aspect-video max-w-5xl mx-auto">
          {/* Conceptual connection lines */}
          <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20% 50% C 50% 20%, 50% 80%, 80% 50%" stroke="#E6A743" strokeWidth="2" fill="transparent" strokeDasharray="5,5" className="animate-pulse" />
          </svg>

          {/* Desktop Node */}
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
            alt="Desktop Sync" 
            className="absolute left-[10%] top-[10%] w-2/5 rounded-2xl shadow-2xl z-10 border-4 border-white"
          />

          {/* Mobile Node */}
          <motion.img 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" 
            alt="Mobile Sync" 
            className="absolute right-[10%] bottom-[10%] w-[25%] rounded-[2rem] shadow-2xl z-20 border-4 border-white"
          />

          {/* Data Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#1C3621] rounded-full flex items-center justify-center shadow-lg z-30"
          >
            <svg className="w-10 h-10 text-[#E6A743]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

