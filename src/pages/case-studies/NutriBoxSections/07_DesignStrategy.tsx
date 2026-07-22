export default function DesignStrategy() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl mb-16 text-center">Design Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-playfair text-2xl mb-4 text-[#2A3B2E]">Visual Direction</h3>
            <p className="font-inter text-gray-600 mb-6">A clean, natural, and premium aesthetic that steps back to let the product quality speak for itself.</p>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li>• Minimal</li>
              <li>• Natural</li>
              <li>• Premium</li>
              <li>• Friendly</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl mb-4 text-[#2A3B2E]">Content Strategy</h3>
            <p className="font-inter text-gray-600 mb-6">Cutting out marketing fluff in favor of direct, honest, and punchy messaging that builds immediate trust.</p>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li>• Short headlines</li>
              <li>• Trust-first messaging</li>
              <li>• Simple CTAs</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl mb-4 text-[#2A3B2E]">Conversion Strategy</h3>
            <p className="font-inter text-gray-600 mb-6">Strategically placing conversion triggers seamlessly into the reading experience without feeling aggressive.</p>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li>• Sticky hero CTAs</li>
              <li>• Trust badges</li>
              <li>• Social proof</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
