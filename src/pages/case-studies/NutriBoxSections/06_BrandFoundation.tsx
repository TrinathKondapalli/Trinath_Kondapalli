import { motion } from 'framer-motion';

export default function BrandFoundation() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1A251C] text-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Tightened Header Margin (mb-12 instead of mb-24) */}
        <div className="mb-12 border-b border-white/20 pb-8 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <h2 className="font-playfair text-5xl md:text-6xl">Brand Foundation</h2>
          <p className="font-inter text-base text-[#A2B3A6] max-w-md">
            Radical transparency demands a restricted palette. No gradients. No noise.
          </p>
        </div>

        {/* Content flows immediately after */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <h3 className="text-xs uppercase tracking-widest text-[#A2B3A6] mb-6">Personality</h3>
            <ul className="space-y-4 font-playfair text-3xl">
              <li>Honest</li>
              <li>Warm</li>
              <li>Modern</li>
              <li>Energetic</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xs uppercase tracking-widest text-[#A2B3A6] mb-6">Target Audience</h3>
            <p className="font-inter text-lg leading-relaxed text-gray-300">
              Urban India, 22–35, health-conscious professionals.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-xs uppercase tracking-widest text-[#A2B3A6] mb-6">Brand Promise</h3>
            <div className="space-y-6">
              <div className="p-6 border border-[#F9F8F6]/20 rounded-lg">
                <p className="font-inter font-medium">5 Ingredients Max</p>
              </div>
              <div className="p-6 border border-[#F9F8F6]/20 rounded-lg">
                <p className="font-inter font-medium">No Preservatives</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
