import { motion } from 'framer-motion';

export default function MobileFlow() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bosan font-extrabold text-3xl md:text-5xl text-[#1C3621] mb-12 tracking-tight">
          The Kitchen Manager Workflow
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl flex flex-col h-full border border-[#1C3621]/5 shadow-sm"
          >
            <div className="text-[#3B6645] font-bosan font-bold text-xl mb-4">01</div>
            <h4 className="font-bosan font-bold text-[#1C3621] mb-2">Inventory Check</h4>
            <p className="font-manrope text-sm text-[#1C3621]/70 flex-grow">
              Review current stock in the walk-in fridge against tomorrow's menu requirements.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl flex flex-col h-full border border-[#1C3621]/5 shadow-sm"
          >
            <div className="text-[#3B6645] font-bosan font-bold text-xl mb-4">02</div>
            <h4 className="font-bosan font-bold text-[#1C3621] mb-2">Template Adjustment</h4>
            <p className="font-manrope text-sm text-[#1C3621]/70 flex-grow">
              Open the pre-configured daily order template and quickly adjust bulk quantities using large hit targets.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl flex flex-col h-full border border-[#1C3621]/5 shadow-sm"
          >
            <div className="text-[#3B6645] font-bosan font-bold text-xl mb-4">03</div>
            <h4 className="font-bosan font-bold text-[#1C3621] mb-2">1-Click Dispatch</h4>
            <p className="font-manrope text-sm text-[#1C3621]/70 flex-grow">
              Confirm the order. The system routes it directly to the wholesale packing center by 11:00 PM.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#1C3621] p-6 rounded-2xl flex flex-col h-full"
          >
            <div className="text-[#E6A743] font-bosan font-bold text-xl mb-4">04</div>
            <h4 className="font-bosan font-bold text-white mb-2">Morning Receiving</h4>
            <p className="font-manrope text-sm text-white/70 flex-grow">
              Track the dedicated vehicle via GPS at 5:00 AM. Digitally sign the delivery docket upon arrival.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

