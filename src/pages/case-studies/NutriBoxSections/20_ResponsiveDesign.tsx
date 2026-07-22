export default function ResponsiveDesign() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#2A3B2E] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl mb-16 border-b border-white/20 pb-8">Responsive Adaptation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-inter text-2xl font-bold mb-4">Desktop (1440px)</h3>
            <p className="text-gray-300 text-sm mb-6">Expansive grids and high-res product assets.</p>
            <div className="aspect-[16/9] bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
               <span className="text-xs uppercase tracking-widest text-white/50">Desktop Layout</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-inter text-2xl font-bold mb-4">Tablet (834px)</h3>
            <p className="text-gray-300 text-sm mb-6">Adjusted horizontal padding and stacked feature blocks.</p>
            <div className="aspect-[4/5] bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
               <span className="text-xs uppercase tracking-widest text-white/50">Tablet Layout</span>
            </div>
          </div>

          <div>
            <h3 className="font-inter text-2xl font-bold mb-4">Mobile (390px)</h3>
            <p className="text-gray-300 text-sm mb-6">One-thumb navigation and sticky 'Add to Cart' actions.</p>
            <div className="aspect-[9/16] bg-white/10 rounded-xl flex items-center justify-center border border-white/20 mx-auto w-2/3">
               <span className="text-xs uppercase tracking-widest text-white/50">Mobile Layout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
