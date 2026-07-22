import { motion } from 'framer-motion';

export default function Wireframes() {
  return (
    <section className="py-40 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-2xl">
          <h2 className="font-playfair text-5xl md:text-7xl text-gray-900 mb-6">
            Sketches & Early Iteration
          </h2>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            When ingredient transparency is radical, the interface must step back. The earliest explorations focused entirely on stripping away marketing noise.
          </p>
        </div>

        {/* Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Small Sketch - Offset */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-4 md:mt-32 aspect-[4/5] bg-[#EAE4DD] p-4 shadow-sm"
          >
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" alt="Early layout sketch" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
          </motion.div>

          {/* Massive Key Wireframe */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 aspect-square md:aspect-[16/10] bg-white p-8 shadow-md"
          >
            <img src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=1200" alt="Primary structure wireframe" className="w-full h-full object-cover" />
          </motion.div>

          {/* Overlapping Detail Shot */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-5 md:col-start-7 md:-mt-32 z-10 bg-[#F9F8F6] p-4 border border-gray-200 shadow-xl"
          >
             <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=800" alt="Component detail" className="w-full h-auto" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
