import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NextProject() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-center border-t border-[#1C3621]/10">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center items-center mb-6">
            <div className="w-8 h-8 rounded-full border border-[#E6A743]/30 flex items-center justify-center mr-2 relative">
                <div className="w-1.5 h-1.5 bg-[#E6A743] rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm font-manrope uppercase tracking-widest text-[#1C3621]/40">Up Next</p>
        </div>
        <Link to="/case-study/nutribox" className="group inline-flex flex-col items-center hover:opacity-80 transition-opacity">
          <h2 className="font-bosan font-extrabold tracking-tight text-5xl md:text-7xl mb-8 text-[#1C3621]">NutriBox</h2>
          <div className="flex items-center gap-3 px-8 py-4 bg-[#1C3621] text-[#F8F7F3] rounded-full font-bosan font-bold group-hover:bg-[#3B6645] transition-colors shadow-lg">
            View Case Study
            <ArrowRight size={20} strokeWidth={2.5} />
          </div>
        </Link>
      </div>
    </section>
  );
}

