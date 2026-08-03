import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const caseStudySlides = [
  { id: 1, title: 'Cover', src: '/fittrack/01_Cover.png' },
  { id: 2, title: 'The Short Version', src: '/fittrack/02_The_Short_Version.png' },
  { id: 3, title: 'Context', src: '/fittrack/03_Context.png' },
  { id: 4, title: 'The Problem', src: '/fittrack/04_The_Problem.png' },
  { id: 5, title: 'Research Snapshot', src: '/fittrack/05_Research_Snapshot.png' },
  { id: 6, title: 'Competitive Landscape', src: '/fittrack/06_Competitive_Landscape.png' },
  { id: 7, title: 'Meet Ananya', src: '/fittrack/07_Meet_Ananya.png' },
  { id: 8, title: 'Also Designing For', src: '/fittrack/08_Also_Designing_For.png' },
  { id: 9, title: 'The Journey', src: '/fittrack/09_The_Journey.png' },
  { id: 10, title: 'The Pivot', src: '/fittrack/10_The_Pivot.png' },
  { id: 11, title: 'Structure', src: '/fittrack/11_Structure.png' },
  { id: 12, title: 'The Design System', src: '/fittrack/12_The_Design_System.png' },
  { id: 13, title: 'From Sketch to Screen', src: '/fittrack/13_From_Sketch_to_Screen.png' },
  { id: 14, title: 'Screen Showcase', src: '/fittrack/14_Screen_Showcase.png' },
  { id: 15, title: 'Signature Details', src: '/fittrack/15_Signature_Details.png' },
  { id: 16, title: 'Prototype', src: '/fittrack/16_Prototype.png' },
  { id: 17, title: 'Accessibility and Craft', src: '/fittrack/17_Accessibility_and_Craft.png' },
  { id: 18, title: 'Reflection', src: '/fittrack/18_Reflection.png' },
  { id: 19, title: 'Thank You', src: '/fittrack/19_Thank_You.png' },
];

export default function FitTrackCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#081509] min-h-screen text-white font-sans selection:bg-[#6dd74c] selection:text-[#081509]">
      
      {/* Sticky Header */}
      <div className="fixed top-0 w-full bg-[#081509]/90 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <span className="text-xs uppercase tracking-widest text-[#6dd74c] font-semibold">
          Fit Track India • Product Case Study
        </span>
      </div>

      {/* 19 Slide Image Stack */}
      <div className="w-full pt-20 flex flex-col items-center gap-6 bg-[#081509] pb-16 px-4 md:px-0">
        {caseStudySlides.map((slide) => (
          <div key={slide.id} className="w-full max-w-[1280px] shadow-2xl rounded-2xl overflow-hidden border border-white/5">
            <img 
              src={slide.src} 
              alt={`Fit Track India - ${slide.title}`} 
              loading={slide.id <= 2 ? "eager" : "lazy"}
              className="w-full h-auto block object-cover"
            />
          </div>
        ))}
      </div>

      {/* Up Next Footer CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#081509] text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#6dd74c] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center items-center mb-6">
            <div className="w-8 h-8 rounded-full border border-[#6dd74c]/30 flex items-center justify-center mr-2 relative">
              <div className="w-1.5 h-1.5 bg-[#6dd74c] rounded-full animate-pulse" />
            </div>
            <p className="text-sm font-sans uppercase tracking-widest text-white/40">Up Next</p>
          </div>
          <Link to="/case-study/nutribox" className="group inline-flex flex-col items-center hover:opacity-80 transition-opacity">
            <h2 className="font-sans font-bold tracking-tight text-5xl md:text-7xl mb-8 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              NutriBox
            </h2>
            <div className="flex items-center gap-3 px-8 py-4 bg-[#6dd74c] text-[#081509] rounded-full font-sans font-bold group-hover:bg-white transition-colors shadow-[0_0_30px_rgba(109,215,76,0.3)]">
              View Case Study
              <ArrowRight size={20} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
