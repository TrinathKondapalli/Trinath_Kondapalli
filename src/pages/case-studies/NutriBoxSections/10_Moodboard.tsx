export default function Moodboard() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl mb-12">Visual Design & Moodboard</h2>
        
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-white">
          <img 
            src="/nutribox/nutribox-design-system.png" 
            alt="NutriBox Design System" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>
    </section>
  );
}
