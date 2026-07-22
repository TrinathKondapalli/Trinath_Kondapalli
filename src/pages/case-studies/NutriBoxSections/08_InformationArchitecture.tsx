import { motion } from 'framer-motion';

export default function InformationArchitecture() {
  const steps = ["Hero", "Products", "Trust Panel", "Testimonials", "Instagram", "Footer"];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8F7F3] border-t border-[#1E3F22]/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-inter font-extrabold text-4xl md:text-5xl tracking-tight text-[#1E3F22] mb-4">Architecture & Flow</h2>
          <p className="font-inter text-[#1E3F22]/70 max-w-xl mx-auto">
            A linear, high-converting structure designed to build credibility before asking for the sale.
          </p>
        </div>

        {/* Editorial Flow Infographic */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1E3F22]/10 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-0 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-4 h-4 rounded-full bg-[#E5A835] border-4 border-[#F8F7F3] shadow-sm mb-4 hidden md:block"></div>
                <div className={`px-6 py-3 rounded-full font-inter font-bold text-sm text-center shadow-sm border ${index === 0 ? 'bg-[#1E3F22] text-[#F8F7F3] border-[#1E3F22]' : 'bg-white text-[#1E3F22] border-[#1E3F22]/10'}`}>
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
