import { motion } from 'framer-motion';

export default function Wireframes() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <h2 className="font-bosan font-extrabold text-4xl md:text-6xl text-[#1C3621] mb-6 tracking-tight">
            Raw UX Logic
          </h2>
          <p className="font-manrope text-lg text-[#1C3621]/80 leading-relaxed">
            The core challenge was translating complex bulk units (crates, quintals, loose kg) into a fast, error-free mobile selection mechanism.
          </p>
        </div>

        {/* Asymmetrical Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:mt-16 aspect-[3/4] bg-white p-6 shadow-xl rounded-2xl border border-gray-200"
          >
            <img src="/govigi/wireframe1.png" alt="Wireframe Sketch" className="w-full h-full object-cover rounded-xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 aspect-square md:aspect-[16/10] bg-white p-8 shadow-2xl rounded-2xl border border-gray-200"
          >
            <img src="/govigi/wireframe2.png" alt="Bulk Logic Wireframe" className="w-full h-full object-cover rounded-xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-6 md:col-start-7 md:-mt-24 z-10 bg-white p-4 border border-gray-200 shadow-xl rounded-2xl"
          >
             <img src="/govigi/wireframe3.png" alt="Wireframe Component" className="w-full h-auto rounded-lg" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

