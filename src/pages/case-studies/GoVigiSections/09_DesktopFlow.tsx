import { motion } from 'framer-motion';

export default function DesktopFlow() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1 order-2 md:order-1 relative">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-[#EAE4DD] rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,54,33,0.05),transparent_70%)]"></div>
            <img 
              src="/govigi/Govigi_Users_List.png" 
              alt="Desktop Admin Flow" 
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>

        <div className="flex-1 order-1 md:order-2">
          <h2 className="font-bosan font-extrabold text-3xl md:text-5xl text-[#1C3621] mb-8 tracking-tight">
            Property Owner Control
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 rounded-full bg-[#1C3621] flex items-center justify-center text-[#E6A743] font-bold text-sm">1</div>
              <div>
                <h4 className="font-bosan font-bold text-[#1C3621] mb-1">Global Dashboard</h4>
                <p className="font-manrope text-sm text-[#1C3621]/70">Monitor spend across 5+ properties in real-time, detecting anomalies in consumption.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 rounded-full bg-[#1C3621] flex items-center justify-center text-[#E6A743] font-bold text-sm">2</div>
              <div>
                <h4 className="font-bosan font-bold text-[#1C3621] mb-1">Budget Guardrails</h4>
                <p className="font-manrope text-sm text-[#1C3621]/70">Set hard limits on specific categories (e.g., premium fruits) that require admin approval if exceeded by kitchen staff.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 rounded-full bg-[#1C3621] flex items-center justify-center text-[#E6A743] font-bold text-sm">3</div>
              <div>
                <h4 className="font-bosan font-bold text-[#1C3621] mb-1">Automated Reconciliation</h4>
                <p className="font-manrope text-sm text-[#1C3621]/70">End of month invoices are automatically generated, cross-referenced with digital delivery dockets, and paid via 1-click RTGS.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

