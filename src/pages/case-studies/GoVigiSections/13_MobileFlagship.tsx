import { motion } from 'framer-motion';

export default function MobileFlagship() {
  return (
    <section className="py-24 md:py-32 bg-[#1C3621] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <h2 className="font-bosan font-extrabold text-5xl md:text-7xl text-[#F8F7F3] mb-6 tracking-tight">
          Speed in the Kitchen.
        </h2>
        <p className="font-manrope text-lg text-[#E6A743] font-bold tracking-[0.2em] uppercase">
          Mobile Flagship UI
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex justify-center relative"
      >
        <div className="w-[85%] max-w-[380px] rounded-[2.5rem] overflow-hidden border-[12px] border-[#2A4D30] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <img 
            src="/Mobile_Home_page.png" 
            alt="Mobile Flagship UI" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </motion.div>
    </section>
  );
}

