import { CheckCircle } from 'lucide-react';

export default function QATesting() {
  const checklist = [
    "Mobile responsiveness at 390px, 430px, and 834px",
    "Typography scaling and line-height validation",
    "Color contrast consistency (WCAG AA)",
    "Performance scores (Lighthouse > 95)",
    "Functional anchor link testing"
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl mb-6">QA & Testing</h2>
        <p className="font-inter text-xl text-gray-500 mb-12">Shifting away from extensive pre-launch user testing in favor of rapid, technical quality assurance for immediate launch readiness.</p>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
          <ul className="space-y-6">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle className="text-[#6DD74C] mt-1 shrink-0" size={24} />
                <span className="font-inter text-lg text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
