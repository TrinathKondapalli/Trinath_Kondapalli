import { motion } from 'framer-motion';

export default function InformationArchitecture() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-[#1C3621]/20 pb-8 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <h2 className="font-bosan font-extrabold text-5xl md:text-6xl tracking-tight text-[#1C3621]">System Topology</h2>
          <p className="font-manrope font-medium text-[#8C6239] max-w-md uppercase tracking-[0.2em] text-xs">
            Information Architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-[#1C3621]/10 bg-white rounded-2xl"
          >
            <h3 className="font-bosan font-bold text-xl text-[#1C3621] mb-6 border-b border-[#1C3621]/10 pb-4">Core Inventory</h3>
            <ul className="space-y-4 font-manrope text-[#1C3621]/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E6A743]"></div>
                Daily Dynamic Pricing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E6A743]"></div>
                Bulk Quantity Rules (kg/quintal)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E6A743]"></div>
                Seasonal Availability Flags
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 border border-[#1C3621]/10 bg-white rounded-2xl"
          >
            <h3 className="font-bosan font-bold text-xl text-[#1C3621] mb-6 border-b border-[#1C3621]/10 pb-4">Transaction Engine</h3>
            <ul className="space-y-4 font-manrope text-[#1C3621]/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#62A87C]"></div>
                Recurring Subscription Templates
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#62A87C]"></div>
                One-Off Top-up Orders
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#62A87C]"></div>
                Monthly Credit Invoicing
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-[#1C3621]/10 bg-white rounded-2xl"
          >
            <h3 className="font-bosan font-bold text-xl text-[#1C3621] mb-6 border-b border-[#1C3621]/10 pb-4">Fulfillment Hub</h3>
            <ul className="space-y-4 font-manrope text-[#1C3621]/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8C6239]"></div>
                Live Vehicle Tracking
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8C6239]"></div>
                Digital Proof of Delivery
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8C6239]"></div>
                Dispute & Substitution Logs
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

