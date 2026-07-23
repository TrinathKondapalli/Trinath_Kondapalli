import { Globe } from 'lucide-react';

export default function ThankYou() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F8F7F3] border-t border-[#1C3621]/10 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-full border border-[#E6A743]/30 flex items-center justify-center relative">
            <div className="w-2 h-2 bg-[#E6A743] rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="font-bosan font-extrabold text-5xl md:text-7xl text-[#1C3621] mb-8 tracking-tight">Thank You.</h2>
        <p className="font-manrope text-xl text-[#1C3621]/70 mb-12">Thank you for reviewing the Go Vigi Case Study.</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://www.govigi.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1C3621]/20 hover:bg-white hover:shadow-sm transition-all text-[#1C3621] font-manrope">
            <Globe size={18} />
            <span className="font-bold text-sm">Live Website</span>
          </a>
        </div>
      </div>
    </section>
  );
}

