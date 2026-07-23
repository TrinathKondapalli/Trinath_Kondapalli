

export default function BrandFoundation() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1C3621] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bosan font-extrabold text-4xl md:text-5xl mb-16 tracking-tight">
          Visual Identity & Palette
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Typography Spec */}
          <div>
            <h3 className="font-manrope text-xs uppercase tracking-[0.2em] text-white/50 mb-8 font-bold">Typography</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bosan font-extrabold text-4xl mb-2 tracking-tighter">Manrope & Bosan</p>
                <p className="font-manrope text-sm text-white/60">Geometric Sans-Serif & Bold Accents / Headings & UI</p>
              </div>
            </div>
          </div>

          {/* Palette Spec */}
          <div>
            <h3 className="font-manrope text-xs uppercase tracking-[0.2em] text-white/50 mb-8 font-bold">B2B Agricultural System</h3>
            <div className="grid grid-cols-5 gap-4">
              
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#1C3621] border border-white/20 rounded-lg shadow-inner"></div>
                <p className="font-manrope text-[10px] text-white/50 text-center uppercase font-bold">Deep Forest</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#3B6645] rounded-lg shadow-inner"></div>
                <p className="font-manrope text-[10px] text-white/50 text-center uppercase font-bold">Leaf Green</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#8C6239] rounded-lg shadow-inner"></div>
                <p className="font-manrope text-[10px] text-white/50 text-center uppercase font-bold">Earth Brown</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#E6A743] rounded-lg shadow-inner"></div>
                <p className="font-manrope text-[10px] text-white/50 text-center uppercase font-bold">Sunrise Gold</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#F8F7F3] rounded-lg shadow-inner text-black"></div>
                <p className="font-manrope text-[10px] text-white/50 text-center uppercase font-bold">Oat Base</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

