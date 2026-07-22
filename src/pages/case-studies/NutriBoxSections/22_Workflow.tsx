import { motion } from 'framer-motion';
import { PenTool, Terminal, CheckCircle2 } from 'lucide-react';

export default function ExecutionPipeline() {
  const steps = [
    {
      icon: PenTool,
      title: "Step 1",
      desc: "High-fidelity Figma component architecture."
    },
    {
      icon: Terminal,
      title: "Step 2",
      desc: "AI-assisted development using Anti-Gravity."
    },
    {
      icon: CheckCircle2,
      title: "Step 3",
      desc: "Vercel edge deployment and Lighthouse QA testing."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8F7F3] border-t border-[#1E3F22]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Sans-Serif Editorial Header */}
        <div className="max-w-3xl mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter font-extrabold text-5xl md:text-6xl text-[#1E3F22] mb-6 tracking-tight"
          >
            Execution Pipeline
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-lg text-[#1E3F22]/70 leading-relaxed"
          >
            Moving from static pixels to a live application in record time using an AI-augmented development workflow.
          </motion.p>
        </div>

        {/* Premium Pipeline Layout (Replaces standard template cards) */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Background Connective Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1E3F22]/10 -translate-y-1/2 hidden md:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                className="bg-white p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(30,63,34,0.05)] border border-[#1E3F22]/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Icon Container with Hover State */}
                <div className="w-20 h-20 rounded-full bg-[#F8F7F3] border border-[#1E3F22]/10 flex items-center justify-center mb-8 group-hover:bg-[#4C7D36] group-hover:border-[#4C7D36] group-hover:shadow-lg transition-all duration-500">
                  <step.icon size={32} className="text-[#1E3F22] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                {/* Card Typography */}
                <h3 className="font-inter font-extrabold text-2xl text-[#1E3F22] mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="font-inter text-[15px] text-[#1E3F22]/70 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
