import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function GrandHero() {
  return (
    <section className="relative w-full pt-32 pb-0 bg-[#F8F7F3] overflow-hidden flex flex-col items-center">
      
      {/* Back Navigation */}
      <Link to="/" className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-sm font-manrope font-medium text-gray-500 hover:text-[#1C3621] transition-colors z-30">
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      {/* Typography Anchor */}
      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bosan font-bold tracking-[0.2em] text-[#E6A743] uppercase text-xs md:text-sm mb-6"
        >
          B2B Agri-Tech & Logistics
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-bosan font-extrabold text-[56px] md:text-[104px] leading-[1.0] tracking-tighter text-[#1C3621]"
        >
          Farm Fresh. <br className="hidden md:block"/>
          <span className="text-[#3B6645]">Highly Operational.</span>
        </motion.h1>
      </div>

      {/* Cinematic Full-Bleed Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-16 md:mt-24 w-full flex justify-center items-end px-6 md:px-12"
      >
        {/* Mockups Overlap */}
        <div className="relative z-10 w-full max-w-5xl flex justify-center">
            {/* Desktop Mockup */}
            <img 
                src="/govigi/Govigi_Hero_image_1.png"
                alt="Desktop Mockup"
                className="w-full md:w-4/5 rounded-2xl md:rounded-[2rem] shadow-2xl"
            />
            {/* Mobile Mockup overlapping */}
            <img 
                src="/govigi/Govigi_Hero_image_2.png"
                alt="Mobile Mockup"
                className="absolute -right-2 md:-right-8 -bottom-8 md:-bottom-16 w-1/3 md:w-1/4 rounded-xl md:rounded-[2rem] border-4 border-[#F8F7F3] shadow-2xl"
            />
        </div>
      </motion.div>
      
    </section>
  );
}

