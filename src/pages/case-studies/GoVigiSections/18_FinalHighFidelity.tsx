export default function FinalHighFidelity() {
  return (
    <section className="bg-[#1C3621] w-full pb-0 pt-0 overflow-hidden">
      <div className="w-full relative h-[70vh] md:h-[100vh]">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000" 
          alt="Edge-to-edge Final UI Mockups" 
          className="w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#1C3621_100%)] pointer-events-none"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
           <h2 className="font-bosan font-extrabold text-5xl md:text-8xl text-white opacity-20 tracking-tighter mix-blend-overlay">Omnichannel.</h2>
        </div>
      </div>
    </section>
  );
}

