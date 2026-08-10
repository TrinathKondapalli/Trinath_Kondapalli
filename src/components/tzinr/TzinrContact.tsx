import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, Check } from 'lucide-react';

const projectTypes = [
  "UX/UI Design",
  "Website Design & Dev",
  "Product Design / MVP",
  "Design System",
  "Interactive Web",
  "Full Redesign"
];

const budgetRanges = [
  "<$5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k+"
];

export default function TzinrContact() {
  const [selectedType, setSelectedType] = useState<string>("UX/UI Design");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5k - $10k");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 relative z-20 bg-[var(--c-base)] border-t border-[var(--c-deep)]/40 overflow-hidden">
      
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(32,97,215,0.15) 0%, rgba(3,10,29,0) 70%)'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--c-primary)] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
            START A PROJECT
            <div className="w-1 h-1 rounded-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--c-white)] leading-tight tracking-tight mb-6"
          >
            HAVE A PROBLEM <br />
            <span className="text-[var(--c-primary)]">WORTH SOLVING?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--c-body)] leading-relaxed max-w-xl"
          >
            Tell us what you're building, improving, or trying to solve. We'll figure out the next step together.
          </motion.p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-16 rounded-3xl bg-[var(--c-dark)] border border-[var(--c-primary)]/40 text-center flex flex-col items-center gap-6 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--c-primary)]/20 text-[var(--c-primary)] flex items-center justify-center border border-[var(--c-primary)]/40">
                <Check size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-[var(--c-white)]">Message Received!</h3>
              <p className="text-[var(--c-body)] max-w-md text-base leading-relaxed">
                Thank you for reaching out. We review every project request carefully and will get back to you within 24-48 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit} 
              className="bg-[#07132F]/80 border border-[#2061D7]/30 rounded-3xl p-8 md:p-12 flex flex-col gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              {/* Step 1: Project Type Selection */}
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-[#437EF0] mb-4 block">
                  1. What type of project are you looking for?
                </label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                        selectedType === type
                          ? 'bg-[#2061D7] text-white border border-[#437EF0] shadow-[0_0_16px_rgba(32,97,215,0.6)]'
                          : 'bg-[#030A1D] text-gray-200 border border-[#0D2660] hover:border-[#2061D7] hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Budget Selection */}
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-[#437EF0] mb-4 block">
                  2. What is your estimated budget range?
                </label>
                <div className="flex flex-wrap gap-3">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                        selectedBudget === budget
                          ? 'bg-[#2061D7] text-white border border-[#437EF0] shadow-[0_0_16px_rgba(32,97,215,0.6)]'
                          : 'bg-[#030A1D] text-gray-200 border border-[#0D2660] hover:border-[#2061D7] hover:text-white'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Text Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#0D2660]/80">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase text-white/90">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#030A1D]/90 border border-[#0D2660] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#2061D7] focus:ring-1 focus:ring-[#2061D7] transition-all placeholder:text-gray-400"
                    placeholder="Alex Morgan"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-white/90">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#030A1D]/90 border border-[#0D2660] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#2061D7] focus:ring-1 focus:ring-[#2061D7] transition-all placeholder:text-gray-400"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-semibold tracking-widest uppercase text-white/90">Company / Organization</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#030A1D]/90 border border-[#0D2660] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#2061D7] focus:ring-1 focus:ring-[#2061D7] transition-all placeholder:text-gray-400"
                    placeholder="Stripe, Vercel, Startup..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="timeline" className="text-xs font-semibold tracking-widest uppercase text-white/90">Target Timeline</label>
                  <input 
                    type="text" 
                    id="timeline" 
                    name="timeline" 
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-[#030A1D]/90 border border-[#0D2660] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#2061D7] focus:ring-1 focus:ring-[#2061D7] transition-all placeholder:text-gray-400"
                    placeholder="e.g. 4-6 weeks, Next Month"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-xs font-semibold tracking-widest uppercase text-white/90">Project Details *</label>
                <textarea 
                  id="description" 
                  name="description" 
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-[#030A1D]/90 border border-[#0D2660] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#2061D7] focus:ring-1 focus:ring-[#2061D7] transition-all placeholder:text-gray-400 resize-none leading-relaxed"
                  placeholder="Describe what you're trying to build or solve..."
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4.5 rounded-full bg-[#2061D7] hover:bg-[#437EF0] text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(32,97,215,0.4)] cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <Send size={16} />
                </motion.button>

                <p className="text-xs text-gray-400 font-mono">
                  Direct response within 24-48 hours.
                </p>
              </div>

            </motion.form>
          )}

          {/* Bottom Copyright Line */}
          <div className="w-full border-t border-[var(--c-deep)]/40 pt-8 mt-12 text-center text-sm text-[var(--c-muted)] font-sans">
            © <span className="text-[var(--c-primary)] font-semibold">Copyright 2026.</span> Rights Reserved.
          </div>
        </div>

      </div>
    </section>
  );
}
