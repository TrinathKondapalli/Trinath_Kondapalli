export default function Moodboard() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl mb-12">Visual Design & Moodboard</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh]">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" alt="Fresh ingredients" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=600" alt="Snack texture" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#2A3B2E] p-6 flex items-center justify-center text-center">
            <span className="font-playfair text-3xl text-[#F9F8F6] italic">"Earthy, honest, and boldly minimal."</span>
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1200" alt="Packaging inspiration" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
