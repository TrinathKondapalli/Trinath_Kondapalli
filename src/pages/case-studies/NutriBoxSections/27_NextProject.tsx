import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NextProject() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-center border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center items-center mb-6">
            <div className="w-8 h-8 rounded-full border border-[#6DD74C]/30 flex items-center justify-center mr-2 relative">
                <div className="w-1.5 h-1.5 bg-[#6DD74C] rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-400">Up Next</p>
        </div>
        <Link to="/case-study/lingu-link" className="group inline-flex flex-col items-center hover:opacity-80 transition-opacity">
          <h2 className="font-playfair text-5xl md:text-7xl mb-8 text-[#2A3B2E]">LinguLink</h2>
          <div className="flex items-center gap-3 px-8 py-4 bg-[#6DD74C] text-[#081509] rounded-full font-inter font-bold group-hover:bg-[#5bc43d] transition-colors shadow-sm">
            View Case Study
            <ArrowRight size={20} strokeWidth={2.5} />
          </div>
        </Link>
      </div>
    </section>
  );
}
