export default function FinalMockups() {
  return (
    <section className="pt-32 pb-40 bg-[#F8F7F3] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="font-inter font-extrabold text-5xl md:text-7xl text-[#1E3F22] mb-6 tracking-tight">The Digital Flagship</h2>
        <p className="font-inter text-lg text-[#1E3F22]/70 max-w-2xl mx-auto">
          Stripping away the noise to let the ingredients speak for themselves.
        </p>
      </div>
      
      {/* Full-Bleed Desktop UI with Internal Scroll */}
      <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] md:h-[90vh] bg-gray-200 overflow-hidden group">
        <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <img 
            src="/nutribox-desktop.png" 
            alt="NutriBox Final Desktop UI" 
            className="w-full h-auto object-top shadow-2xl"
          />
        </div>
      </div>

      {/* Grounded Mobile UI Mockups */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="font-inter font-extrabold text-4xl text-[#1E3F22] mb-6 tracking-tight">One-Thumb Trust</h3>
          <p className="font-inter text-[#1E3F22]/70 leading-relaxed text-lg">
            With 82% of D2C traffic originating from mobile, the responsive architecture prioritizes immediate visibility of trust badges and seamless, one-thumb navigation.
          </p>
        </div>
        
        {/* Layered, Shadowed Physical Elements */}
        <div className="relative flex justify-center md:justify-end h-[500px]">
          <img 
            src="/nutribox/nutribox-mobile.png" 
            alt="Mobile Interface Main" 
            className="absolute left-0 md:left-12 top-0 w-3/5 max-w-[260px] drop-shadow-[0_20px_50px_rgba(30,63,34,0.15)] rounded-[2.5rem] border-4 border-white z-10 object-cover object-top aspect-[9/19]" 
          />
          <img 
            src="/nutribox/nutribox-mobile.png" 
            alt="Mobile Interface Secondary" 
            className="absolute right-0 md:right-4 top-24 w-3/5 max-w-[260px] drop-shadow-[0_30px_60px_rgba(30,63,34,0.25)] rounded-[2.5rem] border-4 border-white z-20 object-cover object-bottom aspect-[9/19]" 
          />
        </div>
      </div>
      
    </section>
  );
}
