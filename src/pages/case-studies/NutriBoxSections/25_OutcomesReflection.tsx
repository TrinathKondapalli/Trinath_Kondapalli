

export default function OutcomesReflection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#4A3320] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-inter font-extrabold text-5xl md:text-7xl mb-20 text-center tracking-tight">
          Outcomes & Reflection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Deliverables List */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#E5A835] font-bold mb-8 border-b border-white/10 pb-4">
              The Deliverables
            </h3>
            <div className="space-y-4">
              {[
                "Complete brand identity & typography system",
                "High-fidelity responsive landing page",
                "Scalable UI Design System",
                "AI-assisted code implementation workflow",
                "Comprehensive QA & Lighthouse optimization"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-[#4C7D36]"></div>
                  <p className="font-inter font-medium text-sm md:text-base text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Candid Reflection */}
          <div className="space-y-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#E5A835] font-bold mb-6 border-b border-white/10 pb-4">
                What Worked Well
              </h3>
              <p className="font-inter font-bold text-2xl text-gray-100 mb-4 tracking-tight">The Design-to-Code Velocity</p>
              <p className="font-inter text-gray-400 leading-relaxed">
                Establishing strict typographic and spatial variables early allowed the AI-assisted coding phase to translate Figma components to React flawlessly. 
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#E5A835] font-bold mb-6 border-b border-white/10 pb-4">
                Future Improvements
              </h3>
              <p className="font-inter font-bold text-2xl text-gray-100 mb-4 tracking-tight">Accessibility & Edge Cases</p>
              <p className="font-inter text-gray-400 leading-relaxed">
                While the visual contrast meets standards, I would want to integrate thorough screen-reader testing and A/B test the primary CTA verbiage.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
