import { motion } from 'framer-motion';

export default function TangibleOutcomes() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <h2 className="font-bosan font-extrabold text-4xl text-[#1C3621] mb-6 tracking-tight">
            The Impact
          </h2>
          <p className="font-manrope text-lg text-[#1C3621]/70 mb-8 leading-relaxed">
            By shifting from fragmented WhatsApp conversations to a unified, bespoke logistics platform, Go Vigi completely changed the operational landscape for PG owners in the city.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#1C3621]/5"
          >
            <h3 className="font-bosan font-extrabold text-5xl text-[#3B6645] mb-2 tracking-tighter">0 hrs</h3>
            <p className="font-bosan font-bold text-[#1C3621] mb-2">Morning Market Visits</p>
            <p className="font-manrope text-sm text-[#1C3621]/70">Property owners reclaimed their mornings, entirely eliminating 4:00 AM procurement trips.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#1C3621]/5"
          >
            <h3 className="font-bosan font-extrabold text-5xl text-[#3B6645] mb-2 tracking-tighter">100%</h3>
            <p className="font-bosan font-bold text-[#1C3621] mb-2">Digital Reconciliation</p>
            <p className="font-manrope text-sm text-[#1C3621]/70">No more lost paper dockets or disputed invoices at the end of the month.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#1C3621]/5"
          >
            <h3 className="font-bosan font-extrabold text-5xl text-[#3B6645] mb-2 tracking-tighter">15 sec</h3>
            <p className="font-bosan font-bold text-[#1C3621] mb-2">Average Order Time</p>
            <p className="font-manrope text-sm text-[#1C3621]/70">Using templates, kitchen staff can place tomorrow's 100kg order in under 15 seconds.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#1C3621] p-8 rounded-2xl shadow-sm border border-[#1C3621]/5"
          >
            <h3 className="font-bosan font-extrabold text-5xl text-[#E6A743] mb-2 tracking-tighter">&lt; 1%</h3>
            <p className="font-bosan font-bold text-white mb-2">Error Rate</p>
            <p className="font-manrope text-sm text-white/70">Visual confirmation and strict quantity rules drastically reduced wrong deliveries.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

