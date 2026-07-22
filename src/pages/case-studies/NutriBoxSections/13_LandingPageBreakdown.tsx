export default function LandingPageBreakdown() {
  const sections = [
    { title: "Navigation", purpose: "Persistent CTA for frictionless purchasing", decision: "" },
    { title: "Hero", purpose: "Immediate focus on ingredient transparency", decision: "" },
    { title: "Products", purpose: "Image-first layouts with clear price visibility", decision: "" },
    { title: "Why NutriBox", purpose: "4 feature blocks building core credibility", decision: "" },
    { title: "Testimonials", purpose: "Real customer locations to reduce anxiety", decision: "" },
    { title: "Footer", purpose: "Brand storytelling and quick social links", decision: "" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl mb-6">Landing Page Breakdown</h2>
        <p className="font-inter text-xl text-gray-500 mb-16 max-w-3xl">Anatomy of a high-converting, trust-first landing page. Every section is purpose-built to reduce friction.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow bg-[#F9F8F6]">
              <h3 className="font-playfair text-3xl mb-6 text-[#2A3B2E]">{sec.title}</h3>
              <div>
                <p className="font-inter font-medium text-gray-800">{sec.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
