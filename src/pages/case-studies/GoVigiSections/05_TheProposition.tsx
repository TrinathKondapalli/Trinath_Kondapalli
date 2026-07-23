import { motion } from 'framer-motion';

export default function TheProposition() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-bosan font-bold text-sm tracking-[0.2em] text-[#8C6239] uppercase mb-4">
            The Proposition
          </h2>
          <h3 className="font-bosan font-extrabold text-4xl md:text-6xl text-[#1C3621] tracking-tight max-w-2xl">
            From Haggling to One-Click Logistics.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Prop 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2rem] shadow-sm border border-[#1C3621]/5"
          >
            <div className="w-16 h-16 rounded-full bg-[#1C3621] flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-[#E6A743]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bosan font-extrabold text-3xl text-[#1C3621] mb-4 tracking-tight">1-Click Bulk Ordering</h4>
            <p className="font-manrope text-lg text-[#1C3621]/70 leading-relaxed">
              Replacing fragmented WhatsApp messages with a streamlined mobile interface. Kitchen staff can finalize a 100kg vegetable order for tomorrow morning in under 30 seconds.
            </p>
          </motion.div>

          {/* Prop 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 rounded-[2rem] shadow-sm border border-[#1C3621]/5"
          >
            <div className="w-16 h-16 rounded-full bg-[#1C3621] flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-[#E6A743]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="font-bosan font-extrabold text-3xl text-[#1C3621] mb-4 tracking-tight">Dedicated Delivery</h4>
            <p className="font-manrope text-lg text-[#1C3621]/70 leading-relaxed">
              Go Vigi operates a proprietary fleet of delivery vehicles. No more coordinating with unreliable third-party autos. Produce arrives directly at the kitchen door by 6:00 AM, every single day.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

