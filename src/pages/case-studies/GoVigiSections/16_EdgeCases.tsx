import { motion } from 'framer-motion';

export default function EdgeCases() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1">
          <h2 className="font-bosan font-extrabold text-4xl md:text-5xl text-[#1C3621] mb-6 tracking-tight">
            Designing for Failure.
          </h2>
          <p className="font-manrope text-lg text-[#1C3621]/70 mb-8 leading-relaxed">
            In agricultural supply chains, out-of-stock scenarios are inevitable due to seasonal changes or market shortages. We designed a robust substitution logic that keeps operations running without requiring phone calls.
          </p>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-6 h-6 shrink-0 mt-1 rounded-full bg-[#E6A743]/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#E6A743] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bosan font-bold text-[#1C3621]">Automated Alternatives</h4>
                <p className="font-manrope text-sm text-[#1C3621]/70">If hybrid tomatoes are out, the system suggests local variants with price deltas instantly.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 shrink-0 mt-1 rounded-full bg-[#E6A743]/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#E6A743] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bosan font-bold text-[#1C3621]">Credit Logic</h4>
                <p className="font-manrope text-sm text-[#1C3621]/70">If an item is short-delivered, the exact weight difference is credited to the monthly invoice ledger automatically.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-[#F8F7F3] rounded-3xl p-8 shadow-inner border border-[#1C3621]/10 flex flex-col justify-center"
          >
            {/* Mock Error State UI */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E6A743]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E6A743]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#E6A743]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bosan font-bold text-[#1C3621]">Partial Fulfillment Detected</h5>
                  <p className="font-manrope text-xs text-[#1C3621]/60 mt-1">Only 40kg of 50kg Onions (Nashik) delivered. ₹240 has been credited to your ledger.</p>
                </div>
              </div>
              <button className="w-full py-3 bg-[#F8F7F3] text-[#1C3621] font-bosan font-bold text-sm rounded-xl border border-[#1C3621]/10 hover:bg-[#EAE4DD] transition-colors">
                View Ledger Entry
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

