import { motion } from 'framer-motion';

export default function DesignSystem() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8F7F3] border-t border-[#1C3621]/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-bosan font-extrabold text-4xl md:text-5xl text-[#1C3621] mb-16 tracking-tight">
          Systematizing the Operations
        </h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200"
        >
          {/* We will use the provided design system image when exported, for now an atmospheric placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=2000" 
            alt="B2B Design System Components" 
            className="w-full h-full object-cover mix-blend-luminosity opacity-40 grayscale"
          />
        </motion.div>
      </div>
    </section>
  );
}

