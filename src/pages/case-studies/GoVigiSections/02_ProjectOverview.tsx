import { motion } from 'framer-motion';

export default function ProjectOverview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1C3621] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Main Context */}
          <div className="md:col-span-7">
            <h2 className="font-bosan font-extrabold text-4xl md:text-5xl mb-6 tracking-tight">
              Powering the backbone of urban hospitality.
            </h2>
            <p className="font-manrope text-lg md:text-xl text-white/70 leading-relaxed font-light">
              Automating the 4:00 AM vegetable run for Tier-1 hostels with a frictionless, cross-platform ordering system.
            </p>
          </div>
          
          {/* Metrics & Timeline Grid */}
          <div className="md:col-span-4 md:col-start-9 grid grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
            <div>
              <p className="font-manrope text-xs uppercase tracking-[0.15em] text-[#E6A743] font-bold mb-2">Role</p>
              <p className="font-manrope text-sm text-white/80">Principal Product Designer<br/>Creative Technologist</p>
            </div>
            <div>
              <p className="font-manrope text-xs uppercase tracking-[0.15em] text-[#E6A743] font-bold mb-2">Timeline</p>
              <p className="font-manrope text-sm text-white/80">12 Weeks<br/>(Discovery to Handoff)</p>
            </div>
            <div>
              <p className="font-manrope text-xs uppercase tracking-[0.15em] text-[#E6A743] font-bold mb-2">Platforms</p>
              <p className="font-manrope text-sm text-white/80">React Native (Mobile)<br/>React.js (Web Admin)</p>
            </div>
            <div>
              <p className="font-manrope text-xs uppercase tracking-[0.15em] text-[#E6A743] font-bold mb-2">Deliverables</p>
              <p className="font-manrope text-sm text-white/80">Design System, UX flows, High-fidelity UI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

