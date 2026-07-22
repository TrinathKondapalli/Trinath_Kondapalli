import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FinalMockups() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section ref={containerRef} className="pt-32 pb-40 bg-[#F8F7F3] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="font-inter font-extrabold text-5xl md:text-7xl text-[#1E3F22] mb-6 tracking-tight">The Digital Flagship</h2>
        <p className="font-inter text-lg text-[#1E3F22]/70 max-w-2xl mx-auto">
          Stripping away the noise to let the ingredients speak for themselves.
        </p>
      </div>
      
      {/* The Fix: Full-Bleed 100vw Raw UI Asset (No Stock Photos) */}
      <motion.div 
        style={{ scale }}
        className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] md:h-[90vh] bg-gray-200"
      >
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000" 
          alt="NutriBox Final Desktop UI" 
          className="w-full h-full object-cover object-top shadow-2xl mix-blend-multiply opacity-80"
        />
      </motion.div>

      {/* Grounded Mobile UI Mockups */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="font-inter font-extrabold text-4xl text-[#1E3F22] mb-6 tracking-tight">One-Thumb Trust</h3>
          <p className="font-inter text-[#1E3F22]/70 leading-relaxed text-lg">
            With 82% of D2C traffic originating from mobile, the responsive architecture prioritizes immediate visibility of trust badges and seamless, one-thumb navigation.
          </p>
        </div>
        
        {/* Layered, Shadowed Physical Elements */}
        <div className="relative flex justify-center md:justify-end h-[500px]">
          <motion.img 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" 
            alt="Mobile Interface Main" 
            className="absolute left-0 md:left-12 top-0 w-3/5 max-w-[260px] drop-shadow-[0_20px_50px_rgba(30,63,34,0.15)] rounded-[2.5rem] border-4 border-white z-10 object-cover aspect-[9/19]" 
          />
          <motion.img 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
            alt="Mobile Interface Secondary" 
            className="absolute right-0 md:right-4 top-24 w-3/5 max-w-[260px] drop-shadow-[0_30px_60px_rgba(30,63,34,0.25)] rounded-[2.5rem] border-4 border-white z-20 object-cover aspect-[9/19]" 
          />
        </div>
      </div>
      
    </section>
  );
}
