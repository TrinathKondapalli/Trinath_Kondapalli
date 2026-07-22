import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Cover() {
  return (
    <section className="relative w-full pt-32 bg-[#F8F7F3] overflow-hidden flex flex-col items-center">
      
      <Link to="/" className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-sm font-inter font-medium text-gray-500 hover:text-gray-900 transition-colors z-30">
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      {/* Massive Sans-Serif Typography Anchor */}
      <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-inter font-extrabold text-[56px] md:text-[96px] leading-[1.05] tracking-tight text-[#1E3F22]"
        >
          The clean-label industry doesn't have a flavor problem.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-inter font-bold text-3xl md:text-5xl text-[#E5A835] mt-6 tracking-tight"
        >
          It has a trust problem.
        </motion.p>
      </div>

      {/* The Fix: Compositional Weight via Device Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-16 w-full max-w-6xl mx-auto px-4 z-20 translate-y-12 md:translate-y-24 flex justify-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1599490659213-e2b9527bd08c?auto=format&fit=crop&q=80&w=1200" 
          alt="NutriBox Landing Page Reveal" 
          className="w-full max-w-4xl h-auto object-cover aspect-[21/9] rounded-[2rem] drop-shadow-[0_30px_60px_rgba(30,63,34,0.15)]" 
        />
      </motion.div>
      
      {/* Spacer to account for the translated mockup */}
      <div className="h-12 md:h-24 w-full"></div>
    </section>
  );
}
