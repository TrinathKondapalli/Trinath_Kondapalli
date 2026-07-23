import { Globe } from 'lucide-react';

export default function ThankYou() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F9F8F6] border-t border-gray-200 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-full border border-[#6DD74C]/30 flex items-center justify-center relative">
            <div className="w-2 h-2 bg-[#6DD74C] rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="font-playfair text-5xl md:text-7xl mb-8">Thank You.</h2>
        <p className="font-inter text-xl text-gray-500 mb-12">Thank you for reviewing the NutriBox Case Study.</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://nutri-box-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-white hover:shadow-sm transition-all text-gray-700">
            <Globe size={18} />
            <span className="font-medium text-sm">Live Website</span>
          </a>
        </div>
      </div>
    </section>
  );
}
