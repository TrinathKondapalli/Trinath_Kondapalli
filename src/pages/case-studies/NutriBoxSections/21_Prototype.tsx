import { ArrowUpRight } from 'lucide-react';

export default function Prototype() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl mb-6">Interactive Prototype</h2>
        <p className="font-inter text-xl text-gray-500 mb-12">Experience the high-fidelity Figma prototype with scroll-linked interactions and micro-animations.</p>
        
        <a href="https://figma.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#6DD74C] text-[#081509] rounded-full font-inter font-bold hover:bg-[#5bc43d] transition-colors shadow-xl shadow-[#6DD74C]/20">
          Open Prototype in Figma
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
