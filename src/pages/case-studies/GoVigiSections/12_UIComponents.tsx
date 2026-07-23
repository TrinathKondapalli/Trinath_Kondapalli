import { motion } from 'framer-motion';

export default function UIComponents() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-bosan font-extrabold text-4xl md:text-5xl text-[#1C3621] mb-4 tracking-tight">
            Component Architecture
          </h2>
          <p className="font-manrope text-lg text-[#1C3621]/70 max-w-2xl">
            B2B apps demand high information density. We built clear data tables and high-contrast actions for rapid bulk ordering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-[#F8F7F3] rounded-[2rem] flex flex-col justify-center border border-[#1C3621]/10"
          >
            <h3 className="font-bosan font-bold text-sm tracking-[0.1em] text-[#8C6239] uppercase mb-8">Primary Actions</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <button className="bg-[#1C3621] text-white font-bosan font-bold py-4 px-8 rounded-full hover:bg-[#3B6645] transition-colors shadow-lg">
                  Confirm Dispatch
                </button>
                <button className="bg-[#E6A743] text-[#1C3621] font-bosan font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity shadow-lg">
                  Add to Bulk
                </button>
              </div>
              <div className="flex gap-4">
                <button className="bg-transparent border-2 border-[#1C3621] text-[#1C3621] font-bosan font-bold py-3.5 px-8 rounded-full hover:bg-[#1C3621] hover:text-white transition-colors">
                  Review Invoice
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 bg-[#F8F7F3] rounded-[2rem] flex flex-col justify-center border border-[#1C3621]/10"
          >
            <h3 className="font-bosan font-bold text-sm tracking-[0.1em] text-[#8C6239] uppercase mb-8">Data Tables</h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-left font-manrope text-sm text-[#1C3621]">
                <thead className="bg-[#1C3621] text-white">
                  <tr>
                    <th className="py-3 px-4 font-bold">Item</th>
                    <th className="py-3 px-4 font-bold">Qty</th>
                    <th className="py-3 px-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4 font-medium">Onions (Nashik)</td>
                    <td className="py-3 px-4">50 kg</td>
                    <td className="py-3 px-4"><span className="bg-[#3B6645]/20 text-[#3B6645] py-1 px-2 rounded font-bold text-xs">Loaded</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Tomatoes (Hybrid)</td>
                    <td className="py-3 px-4">25 kg</td>
                    <td className="py-3 px-4"><span className="bg-[#8C6239]/20 text-[#8C6239] py-1 px-2 rounded font-bold text-xs">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

