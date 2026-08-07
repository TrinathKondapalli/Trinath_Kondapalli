import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const chapters = [
  {
    id: "01",
    title: "Executive Summary",
    intro: "Director.AI is an enterprise-grade AI interface bridging the gap between raw LLM outputs and usable creative assets.",
    content: [
      "Creative teams spend hours engineering complex prompts to generate UI layouts and UGC scripts, only to receive unstructured, unusable text formats.",
      "By designing a node-based prompt architecture that visualizes LLM generation and validates JSON outputs, we instantly render creative assets in a WYSIWYG studio."
    ],
    insight: "Users don't want to write better prompts; they want intuitive UI controls that write the prompts for them.",
    impact: "Reduced asset generation time by 75% and achieved a 92% successful output validation rate.",
    image: {
      name: "Image 01 — Hero Product Showcase",
      req: "Include: Desktop Mockup, Mobile Mockup, Product Branding, Hero Presentation."
    }
  },
  {
    id: "02",
    title: "The Challenge",
    intro: "LLMs are incredibly powerful, but their UX is fundamentally broken for visual designers.",
    content: [
      "When we observed art directors trying to generate ad campaigns using ChatGPT, the friction was obvious. They were copying and pasting text into Figma, dealing with hallucinated variables, and losing context across long chat threads.",
      "The core problem was that existing AI tools are text-first, while designers are visual-first. There was no middle ground between engineering a prompt and seeing the visual result."
    ],
    pullQuote: "I spend more time fixing AI hallucinations than actually designing.",
    decision: "Move away from standard chat interfaces and build a spatial canvas where AI generations are tied directly to UI nodes."
  },
  {
    id: "03",
    title: "Research & Strategy",
    intro: "Understanding the true barrier to AI adoption in creative workflows.",
    content: [
      "We conducted contextual inquiries with 12 Creative Directors and surveyed over 150 designers. The data revealed a phenomenon we called 'Prompt Fatigue'—users abandoned the tool if they didn't get a usable result within 3 attempts.",
      "We realized the barrier wasn't AI capability; it was prompt predictability. We needed to abstract the complexity."
    ],
    image: {
      name: "Image 02 — Research & Strategy Board",
      req: "Combine into one clean infographic: User Persona, User Journey, JTBD, Research Insights, Competitive Analysis, Information Architecture."
    }
  },
  {
    id: "04",
    title: "Design Process",
    intro: "Iterating toward a seamless human-AI interaction model.",
    content: [
      "Our first iteration was a standard sidebar chat. It failed in testing because users felt disconnected from the design canvas. They were talking to an assistant rather than directing a tool.",
      "We pivoted to a floating contextual AI menu, placing the controls exactly where the user's attention was focused. By utilizing direct manipulation sliders (e.g., corner radius, mood, color palette), the system silently rewrites the Master Prompt under the hood."
    ],
    decision: "Abstract the complexity of prompt engineering into familiar visual sliders and toggles.",
    image: {
      name: "Image 03 — Design Process",
      req: "Combine into one presentation board: User Flow, Wireframes, Iterations, Design Decisions, Component Evolution."
    }
  },
  {
    id: "05",
    title: "The Solution",
    intro: "A visual canvas that feels like a professional camera, but operates an AI engine.",
    content: [
      "Director.AI provides a node-based architecture. When a user tweaks a slider, the system enforces a strict JSON schema and validates the output before rendering.",
      "If the LLM hallucinates, our backend repair system catches the anomaly and fixes the JSON structure without ever showing the user an error. We replaced the technical 'Error' states with human-centric microcopy like 'Re-aligning creative vision...' to maintain trust."
    ],
    impact: "Eliminated JSON formatting errors completely and maintained flow state for creatives.",
    image: {
      name: "Image 04 — Final Product Showcase",
      req: "Present in one premium mockup composition: Landing Page, Dashboard, AI Design Publisher, AI UGC Studio, Responsive Views."
    }
  },
  {
    id: "06",
    title: "Results & Future Vision",
    intro: "Building for the next paradigm of AI-native creation.",
    content: [
      "The beta launch proved our core hypothesis: abstraction leads to adoption. By hiding the prompt and exposing the controls, we unlocked AI for creatives who were previously intimidated by text-heavy LLM interfaces."
    ],
    impact: "Saved an average of 4 hours per campaign and eliminated 3 separate tools from the agency workflow stack.",
    pullQuote: "Designing for AI requires letting go of pixel perfection and embracing probabilistic interfaces.",
    image: {
      name: "Image 05 — Results & Future Vision",
      req: "Combine into one infographic: Success Metrics, Business Impact, Key Learnings, Future Roadmap, Final Reflection."
    }
  }
];

export default function DirectorAICaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#081509] min-h-screen text-white font-sans selection:bg-[#6dd74c] selection:text-[#081509]">
      
      {/* Sticky Header */}
      <div className="fixed top-0 w-full bg-[#081509]/90 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <span className="text-xs uppercase tracking-widest text-[#6dd74c] font-semibold">
          DIRECTOR.AI • Typography-First Case Study
        </span>
      </div>

      <div className="pt-40 pb-16 w-full flex flex-col items-center">
        
        {/* Intro Header */}
        <div className="w-full max-w-[800px] px-6 text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            DIRECTOR.AI
          </h1>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light">
            Empowering creative teams to generate, validate, and scale prompt-based UI and UGC campaigns in seconds.
          </p>
        </div>

        {/* Chapters */}
        <div className="w-full flex flex-col gap-40 items-center">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="w-full flex flex-col items-center">
              
              {/* Editorial Text Block */}
              <div className="w-full max-w-[800px] px-6 flex flex-col gap-12">
                
                <div className="flex flex-col gap-6">
                  <span className="text-[#6dd74c] font-bold tracking-widest uppercase text-sm">
                    {chapter.id}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white/90">
                    {chapter.title}
                  </h2>
                  <p className="text-2xl font-light text-white/80 leading-relaxed mt-2">
                    {chapter.intro}
                  </p>
                </div>

                <div className="flex flex-col gap-6 mt-4">
                  {chapter.content.map((paragraph, i) => (
                    <p key={i} className="text-lg text-white/60 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {chapter.pullQuote && (
                  <div className="mt-8 mb-4 border-l-2 border-[#6dd74c] pl-8 py-2">
                    <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-snug">
                      "{chapter.pullQuote}"
                    </p>
                  </div>
                )}

                {/* Highlight Cards (Insight / Impact / Decision) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {chapter.insight && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40">Key Insight</span>
                      <p className="text-white/80 leading-relaxed text-sm">{chapter.insight}</p>
                    </div>
                  )}
                  {chapter.decision && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#6dd74c]">Design Decision</span>
                      <p className="text-white/80 leading-relaxed text-sm">{chapter.decision}</p>
                    </div>
                  )}
                  {chapter.impact && (
                    <div className="bg-[#6dd74c]/10 border border-[#6dd74c]/20 rounded-2xl p-8 flex flex-col gap-3 md:col-span-full">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#6dd74c]">Business Impact</span>
                      <p className="text-[#6dd74c] leading-relaxed text-lg font-medium">{chapter.impact}</p>
                    </div>
                  )}
                </div>

              </div>

              {/* Full Width Visual Showcase */}
              {chapter.image && (
                <div className="w-full max-w-[1440px] px-6 mt-24">
                  <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#0a1a0b] border border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6dd74c]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-6">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2">
                        <span className="text-white/40 font-mono text-sm">{chapter.id}</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-white/70 tracking-tight">
                        {chapter.image.name}
                      </h3>
                      <p className="text-white/40 mt-2 max-w-xl text-sm md:text-base leading-relaxed">
                        {chapter.image.req}
                      </p>
                    </div>

                    <div className="absolute bottom-8 text-xs text-white/20 uppercase tracking-widest">
                      Replace with Final Composition
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      {/* Up Next Footer CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#081509] text-center border-t border-white/10 relative overflow-hidden mt-32">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#6dd74c] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center items-center mb-6">
            <div className="w-8 h-8 rounded-full border border-[#6dd74c]/30 flex items-center justify-center mr-2 relative">
              <div className="w-1.5 h-1.5 bg-[#6dd74c] rounded-full animate-pulse" />
            </div>
            <p className="text-sm font-sans uppercase tracking-widest text-white/40">Up Next</p>
          </div>
          <Link to="/case-study/nutribox" className="group inline-flex flex-col items-center hover:opacity-80 transition-opacity">
            <h2 className="font-sans font-bold tracking-tight text-5xl md:text-7xl mb-8 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              NutriBox
            </h2>
            <div className="flex items-center gap-3 px-8 py-4 bg-[#6dd74c] text-[#081509] rounded-full font-sans font-bold group-hover:bg-white transition-colors shadow-[0_0_30px_rgba(109,215,76,0.3)]">
              View Case Study
              <ArrowRight size={20} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
