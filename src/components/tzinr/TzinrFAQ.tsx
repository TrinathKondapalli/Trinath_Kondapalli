import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "We specialize in UX/UI product design, flagship marketing websites, interactive web experiences, and design systems for tech startups and ambitious businesses."
  },
  {
    question: "How does the process work?",
    answer: "We follow a 5-step collaborative process: Discover → Define → Design → Build → Launch. Every phase has clear deliverables, regular check-ins, and direct access to our core design team."
  },
  {
    question: "How long does a project take?",
    answer: "Most engagements take between 4 to 8 weeks depending on scope, complexity, and feedback speed. We lock down a strict project timeline before kickoff."
  },
  {
    question: "Do you provide development?",
    answer: "Yes. We build responsive, high-performance websites and frontend web applications using React, Next.js, Framer, and Webflow."
  },
  {
    question: "Can you work with an existing development team?",
    answer: "Absolutely. We often partner with internal engineering teams to deliver structured Figma design systems, pixel-perfect component libraries, and detailed developer handoffs."
  },
  {
    question: "What do you need from us to get started?",
    answer: "A clear overview of your business goals, target audience, brand assets (if any), and key project milestones. We take care of structuring the rest."
  },
  {
    question: "How does pricing work?",
    answer: "We work on transparent, fixed-fee proposals based on value and deliverables rather than unpredictable hourly billing."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we offer retainer partnerships for design system maintenance, iterative feature enhancements, and continuous web optimization."
  }
];

export default function TzinrFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative z-20 bg-[var(--c-base)] border-t border-[var(--c-deep)]/40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            FREQUENTLY ASKED QUESTIONS
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight tracking-tight mb-6"
          >
            CLEAR ANSWERS FOR <br />
            <span className="text-[var(--c-primary)]">AMBITIOUS CLIENTS.</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col border-t border-[var(--c-deep)]/60">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="border-b border-[var(--c-deep)]/60"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-7 flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className={`text-lg md:text-xl font-bold tracking-wide transition-colors ${isOpen ? 'text-[var(--c-primary)]' : 'text-[var(--c-white)] group-hover:text-[var(--c-primary)]'}`}>
                      {faq.question}
                    </span>
                    <div className={`ml-4 w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'border-[var(--c-primary)] bg-[var(--c-primary)] text-white shadow-[0_0_12px_var(--c-primary)]' : 'border-[var(--c-deep)] text-[var(--c-muted)] group-hover:border-[var(--c-primary)] group-hover:text-[var(--c-primary)]'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[var(--c-body)] text-base md:text-lg leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
