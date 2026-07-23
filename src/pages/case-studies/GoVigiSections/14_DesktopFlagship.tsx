import { motion } from 'framer-motion';

export default function DesktopFlagship() {
  return (
    <section className="pt-32 pb-0 bg-[#8C6239] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <h2 className="font-bosan font-extrabold text-5xl md:text-7xl text-[#F8F7F3] mb-6 tracking-tight">
          Control from the Desk.
        </h2>
        <p className="font-manrope text-lg text-[#1C3621] font-bold tracking-[0.2em] uppercase">
          Desktop Flagship UI
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative translate-y-24 md:translate-y-32"
      >
        <img 
          src="/govigi/Govigi_Users_List.png" 
          alt="Desktop Flagship UI" 
          className="w-full h-auto object-cover shadow-[0_-30px_60px_rgba(0,0,0,0.3)]" 
        />
      </motion.div>
    </section>
  );
}

