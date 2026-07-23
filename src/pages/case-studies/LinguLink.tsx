import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function LinguLink() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030D22] min-h-screen text-white font-poppins selection:bg-[#00B2E2] selection:text-[#030D22]">
      
      {/* Sticky Header */}
      <div className="fixed top-0 w-full bg-[#030D22]/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
        <Link to="/" className="flex items-center gap-2 text-sm font-poppins font-medium text-white/70 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      {/* The Case Study Image Wrapper */}
      <div className="w-full pt-20 flex justify-center bg-[#030D22]">
        <img 
          src="/case_study.png" 
          alt="LinguLink Case Study" 
          className="w-full max-w-[1280px] h-auto block"
        />
      </div>

      {/* Standard Up Next Footer CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#030D22] text-center border-t border-white/10 relative overflow-hidden">
        {/* Glow Effects inside card */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00B2E2] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center items-center mb-6">
              <div className="w-8 h-8 rounded-full border border-[#00B2E2]/30 flex items-center justify-center mr-2 relative">
                  <div className="w-1.5 h-1.5 bg-[#00B2E2] rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-montserrat uppercase tracking-widest text-white/40">Up Next</p>
          </div>
          <Link to="/case-study/govigi" className="group inline-flex flex-col items-center hover:opacity-80 transition-opacity">
            <h2 className="font-poppins font-bold tracking-tight text-5xl md:text-7xl mb-8 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">GoVigi</h2>
            <div className="flex items-center gap-3 px-8 py-4 bg-[#00B2E2] text-[#030D22] rounded-full font-poppins font-bold group-hover:bg-white transition-colors shadow-[0_0_30px_rgba(0,178,226,0.3)]">
              View Case Study
              <ArrowRight size={20} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
