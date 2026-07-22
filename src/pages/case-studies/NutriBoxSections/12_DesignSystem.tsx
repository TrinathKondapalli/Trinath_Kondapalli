import { motion } from 'framer-motion';

export default function DesignSystem() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1E3F22] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <h2 className="font-inter font-extrabold text-5xl md:text-6xl tracking-tight">Crafting Authority</h2>
          <p className="font-inter font-medium text-[#4C7D36] max-w-md uppercase tracking-widest text-xs">
            Visual Identity & Design System
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Typography Spec */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/50 mb-8 font-bold">Typography</h3>
            <div className="space-y-6">
              <div>
                <p className="font-playfair text-4xl mb-2 tracking-tight">Playfair Display</p>
                <p className="font-inter text-sm text-white/60">Primary Display / Italic Accents</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="font-inter font-medium text-2xl mb-2">Inter</p>
                <p className="font-inter text-sm text-white/60">Interface / Utility / Body</p>
              </div>
            </div>
          </div>

          {/* Core Palette Spec */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/50 mb-8 font-bold">Core Palette</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#1E3F22] border border-white/20 rounded-lg shadow-inner"></div>
                <p className="font-inter text-[10px] text-white/50 text-center uppercase font-bold">Dark</p>
              </div>
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#4C7D36] rounded-lg shadow-inner"></div>
                <p className="font-inter text-[10px] text-white/50 text-center uppercase font-bold">Green</p>
              </div>
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#F8F7F3] rounded-lg shadow-inner text-black"></div>
                <p className="font-inter text-[10px] text-white/50 text-center uppercase font-bold">Oat</p>
              </div>
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#4A3320] rounded-lg shadow-inner"></div>
                <p className="font-inter text-[10px] text-white/50 text-center uppercase font-bold">Brown</p>
              </div>
              <div className="space-y-3">
                <div className="w-full aspect-square bg-[#E5A835] rounded-lg shadow-inner"></div>
                <p className="font-inter text-[10px] text-white/50 text-center uppercase font-bold">Gold</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
