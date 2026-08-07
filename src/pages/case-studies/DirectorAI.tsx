import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const chapters = [
  {
    id: "CHAPTER 01",
    title: "INTRODUCTION",
    sections: [
      {
        num: "1.1", title: "Hero", subtitle: "Setting the Stage",
        intro: "A premium first impression communicating the core value of Director.AI.",
        story: ["Director.AI is an enterprise-grade AI interface that bridges the gap between raw LLM outputs and usable creative assets. It serves as an AI Co-Director for creative workflows, empowering teams to generate, validate, and scale prompt-based UI and UGC campaigns in seconds."],
        insight: "Creative teams need abstraction, not better prompt engineering.",
        impact: "Positioned the product for the $1.2B generative design market."
      },
      {
        num: "1.2", title: "Project Overview", subtitle: "The 30-Second Pitch",
        intro: "Allowing recruiters and stakeholders to understand the product instantly.",
        story: ["Over 8 weeks, as the Principal Product Designer, I collaborated with AI engineers and product managers to build a visual, node-based prompt architecture. The goal was to eliminate the unpredictable nature of text-based AI chat interfaces for visual designers."],
        decision: "Focus on a visual-first WYSIWYG studio rather than a chat-based assistant."
      },
      {
        num: "1.3", title: "Executive Summary", subtitle: "High-Level Breakdown",
        intro: "The what, why, and how of the Director.AI platform.",
        story: ["The platform replaces disjointed workflows where designers copy-paste ChatGPT text into Figma. Instead, it provides a spatial canvas where AI generations are tied directly to UI nodes, with built-in JSON validation under the hood."],
        quote: "We are moving from AI chat interfaces to AI-Native spatial canvases."
      },
      {
        num: "1.4", title: "Problem Statement", subtitle: "The Core Friction",
        intro: "Existing AI tools are text-first; designers are visual-first.",
        story: ["Creative teams spend hours engineering complex prompts to generate UI layouts and UGC scripts, only to receive unstructured, unusable text formats. 68% of creatives abandon AI tools due to inconsistent formatting, hallucinated variables, and broken JSON schemas."],
        insight: "Prompt Fatigue is real. Users abandon tools if they fail 3 times."
      },
      {
        num: "1.5", title: "Business Opportunity", subtitle: "Market Gap",
        intro: "Why solving this problem matters at scale.",
        story: ["High agency costs and slow time-to-market for digital campaigns present a massive opportunity. By capturing the middle ground between raw LLMs and design tools, Director.AI can become the default operating system for modern creative agencies."],
        impact: "Targeting a 75% reduction in asset generation time."
      }
    ],
    image: {
      name: "Hero Product Showcase",
      req: "Include Desktop Mockup, Mobile Mockup, Product Branding, and Hero Presentation."
    }
  },
  {
    id: "CHAPTER 02",
    title: "DISCOVERY",
    sections: [
      {
        num: "2.1", title: "User Research", subtitle: "Contextual Inquiry",
        intro: "Understanding the true barrier to AI adoption in creative workflows.",
        story: ["We conducted contextual inquiries with 12 Creative Directors and surveyed over 150 designers from Figma forums and AI creator Discords. We watched them struggle to maintain context windows and format JSON outputs correctly."],
        quote: "I spend more time fixing AI hallucinations than actually designing."
      },
      {
        num: "2.2", title: "Research Insights", subtitle: "Data-Driven Truths",
        intro: "What the numbers told us.",
        story: ["The data revealed a stark reality: users don't want to learn how to write better prompts. They want intuitive UI controls that write the complex prompts for them."],
        insight: "The barrier wasn't AI capability; it was prompt predictability."
      },
      {
        num: "2.3", title: "Competitive Analysis", subtitle: "Market Landscape",
        intro: "Auditing ChatGPT, Midjourney, Claude, and Canva AI.",
        story: ["Existing tools either offer zero visual control (ChatGPT) or zero structural control (Midjourney). None provided the precise, component-level UI generation required for enterprise creative work."],
        decision: "Provide structural JSON guarantees alongside visual generation."
      },
      {
        num: "2.4", title: "Personas", subtitle: "Target Audience",
        intro: "Who we are building for.",
        story: ["Primary: The Agency Art Director who needs fast iterations without coding. Secondary: The UX Engineer who needs clean, predictable JSON outputs to feed into production environments."],
        insight: "Both personas value speed to market over granular technical control."
      },
      {
        num: "2.5", title: "Jobs To Be Done", subtitle: "Outcome Focus",
        intro: "Aligning product features with user motivations.",
        story: ["'When I have a tight deadline, I want to instantly generate 5 variations of a landing page, so that I can present options today without spending hours on layout.'"],
        decision: "Implement a 1-click variant generation feature."
      },
      {
        num: "2.6", title: "User Journey", subtitle: "End-to-End Flow",
        intro: "Mapping the emotional and practical experience.",
        story: ["From Discovery to Onboarding, First Generation, Iteration, and finally Export. We identified the 'First Generation' as the critical make-or-break moment for user retention."],
        lesson: "Onboarding must lead to a successful generation within 60 seconds."
      },
      {
        num: "2.7", title: "Pain Points", subtitle: "UX Flaws",
        intro: "Where the current workflow breaks down.",
        story: ["Disjointed tool stacks, broken context windows, and the sheer mental load of remembering prompt syntax parameters lead to massive cognitive overhead."],
        insight: "Cognitive load is the enemy of creative flow."
      },
      {
        num: "2.8", title: "How Might We", subtitle: "Reframing Problems",
        intro: "Turning frustrations into opportunities.",
        story: ["How might we abstract the complexity of prompt engineering into familiar visual sliders? How might we make directing AI as intuitive as using a professional camera?"],
        impact: "Established the core interaction model for the product."
      }
    ],
    image: {
      name: "Research & Strategy Board",
      req: "Combine User Persona, User Journey, JTBD, Research Insights, Competitive Analysis, and Information Architecture into one clean infographic."
    }
  },
  {
    id: "CHAPTER 03",
    title: "STRATEGY",
    sections: [
      {
        num: "3.1", title: "Product Vision", subtitle: "The North Star",
        intro: "To make directing AI as intuitive as using a camera.",
        story: ["We envisioned a future where designers never look at a blank text input. Instead, they interact with physical-feeling digital controls—dials, sliders, and nodes—that translate their intent into perfect machine instructions."],
        quote: "Designing for AI requires letting go of pixel perfection and embracing probabilistic interfaces."
      },
      {
        num: "3.2", title: "Business Goals", subtitle: "Measurable Objectives",
        intro: "Aligning UX with business outcomes.",
        story: ["Our target was to reach 5,000 active beta users within 3 months and achieve a >40% week-1 retention rate by proving immediate value in the first session."],
        impact: "Ensured design decisions were tied directly to acquisition and retention."
      },
      {
        num: "3.3", title: "Success Metrics", subtitle: "KPIs",
        intro: "How we measure success.",
        story: ["Primary metrics included Time-To-First-Asset (TTFA), JSON validation success rate, and total exports per session."],
        insight: "A 90%+ JSON success rate was non-negotiable for engineering trust."
      },
      {
        num: "3.4", title: "Feature Prioritization", subtitle: "Scope Management",
        intro: "Applying the MoSCoW framework.",
        story: ["Must Have: Node-based prompt editor, real-time preview, JSON validator. Should Have: Team workspaces. Won't Have (V1): 3D model generation."],
        decision: "Cut 3D generation to focus entirely on UI and UGC workflows."
      },
      {
        num: "3.5", title: "Information Architecture", subtitle: "System Structure",
        intro: "Organizing the complex platform.",
        story: ["We structured the app into a Dashboard, Project Canvas, Node Editor, Asset Library, and Settings. The canvas needed to be the hero, occupying 80% of the screen real estate."],
        insight: "Hide complexity in contextual menus; keep the canvas clean."
      },
      {
        num: "3.6", title: "Task & User Flow", subtitle: "The Core Loop",
        intro: "From intent to export.",
        story: ["Create Project -> Add Context Node -> Add Style Node -> Generate -> Visual QA -> Export. The flow was designed to mimic a film director setting up a scene before calling 'action'."],
        lesson: "Users prefer visual nodes over linear forms."
      },
      {
        num: "3.7", title: "Design Principles", subtitle: "Guiding the Craft",
        intro: "The rules we lived by.",
        story: ["1. Visual over Verbal. 2. Forgiving by Default. 3. Immediate Feedback. These principles guided every micro-interaction and architectural decision."],
        decision: "Never show raw JSON errors to the user."
      }
    ]
  },
  {
    id: "CHAPTER 04",
    title: "DESIGN PROCESS",
    sections: [
      {
        num: "4.1", title: "Low & Mid Fidelity", subtitle: "Structural Foundation",
        intro: "Moving away from the standard chat UI.",
        story: ["Our early wireframes explored a standard sidebar chat. It failed in testing because users felt disconnected from the design canvas. They were talking to an assistant rather than directing a tool."],
        insight: "Chat UI creates a master/servant dynamic. A canvas creates a director/tool dynamic."
      },
      {
        num: "4.2", title: "Iterations & UX Decisions", subtitle: "Pivoting the UX",
        intro: "Iterating toward a seamless human-AI interaction model.",
        story: ["We pivoted to a floating contextual AI menu, placing the controls exactly where the user's attention was focused. By utilizing direct manipulation sliders (e.g., corner radius, mood, color palette), the system silently rewrites the Master Prompt under the hood."],
        decision: "Abstract prompt engineering into familiar visual sliders."
      },
      {
        num: "4.3", title: "Visual Exploration", subtitle: "Aesthetic Direction",
        intro: "Defining the premium dark-mode brand.",
        story: ["We explored moodboards centered around glassmorphism, deep dark gradients, and vibrant accent colors to evoke a sense of futuristic precision. The UI needed to feel like a high-end professional tool, akin to DaVinci Resolve or Final Cut."],
        quote: "The interface should feel like a cockpit for creativity."
      },
      {
        num: "4.4", title: "Component Thinking & Design System", subtitle: "Engineering Readiness",
        intro: "Building for scale.",
        story: ["We developed a comprehensive design system featuring custom typography scales, 8pt grid spacing, elevated glass cards, and a robust icon set. Every component was built with React/Tailwind implementation in mind."],
        impact: "Reduced front-end handoff friction by standardizing all states."
      },
      {
        num: "4.5", title: "Accessibility & Responsive Strategy", subtitle: "Inclusive Design",
        intro: "Ensuring usability for all.",
        story: ["We conducted strict contrast audits, implemented keyboard navigation for the node editor, and designed a complex responsive logic to translate a massive spatial canvas onto an iPad screen without losing functionality."],
        lesson: "Spatial canvases require intelligent zooming and panning algorithms on touch devices."
      }
    ],
    image: {
      name: "Design Process Board",
      req: "Combine User Flow, Wireframes, Iterations, Design Decisions, and Component Evolution into one presentation board."
    }
  },
  {
    id: "CHAPTER 05",
    title: "FINAL SOLUTION",
    sections: [
      {
        num: "5.1", title: "Core Features", subtitle: "Problem to Solution",
        intro: "A visual canvas that feels like a professional camera.",
        story: ["Director.AI provides a node-based architecture. When a user tweaks a slider, the system enforces a strict JSON schema and validates the output before rendering. The core features abstract prompt engineering entirely."],
        impact: "Users tweak sliders; the system writes the prompt."
      },
      {
        num: "5.2", title: "AI UGC Studio & Design Publisher", subtitle: "The Twin Engines",
        intro: "Catering to both video and UI workflows.",
        story: ["The UGC Studio allows directors to drag and drop camera angles, scripts, and actors into a timeline, generating perfect prompts for video AI. The Design Publisher applies the same logic to UI components and landing pages."],
        insight: "Unifying video and UI under one interaction model reduced the learning curve."
      },
      {
        num: "5.3", title: "AI Experience & UX Writing", subtitle: "Building Trust",
        intro: "Handling hallucinations gracefully.",
        story: ["If the LLM hallucinates, our backend repair system catches the anomaly and fixes the JSON structure without ever showing the user an error. We replaced technical 'Error' states with human-centric microcopy like 'Re-aligning creative vision...'"],
        decision: "Maintain the illusion of magic by hiding backend retries."
      },
      {
        num: "5.4", title: "Empty States & Loading", subtitle: "Delightful Details",
        intro: "Making the wait feel productive.",
        story: ["LLM generation takes time. We designed skeleton loaders that pulse with the brand's gradient, accompanied by dynamic text explaining the specific AI steps occurring (e.g., 'Optimizing layout parameters...')."],
        lesson: "Transparency in loading states reduces perceived wait time."
      },
      {
        num: "5.5", title: "Micro Interactions & Export", subtitle: "The Final Polish",
        intro: "Rewarding user actions.",
        story: ["Hover states, satisfying click animations on nodes, and a seamless export experience that packages the final JSON, React code, or raw image assets into a neat zip file."],
        impact: "Created a tactile, premium feel that users loved."
      }
    ],
    image: {
      name: "Final Product Showcase",
      req: "Present Landing Page, Dashboard, AI Design Publisher, AI UGC Studio, and Responsive Views in one premium mockup composition."
    }
  },
  {
    id: "CHAPTER 06",
    title: "OUTCOME",
    sections: [
      {
        num: "6.1", title: "Results & Impact", subtitle: "ROI and Business Value",
        intro: "Building for the next paradigm of AI-native creation.",
        story: ["The beta launch proved our core hypothesis: abstraction leads to adoption. By hiding the prompt and exposing the controls, we unlocked AI for creatives who were previously intimidated by text-heavy LLM interfaces."],
        impact: "Reduced asset generation time by 75% and achieved a 92% successful output validation rate."
      },
      {
        num: "6.2", title: "Challenges & Lessons Learned", subtitle: "Honesty in Design",
        intro: "What didn't work initially.",
        story: ["Our biggest challenge was latency. Rendering complex UI from LLM JSON took up to 15 seconds. We learned to stream the JSON and render components progressively, giving users immediate visual feedback."],
        insight: "Progressive rendering is essential for AI product UX."
      },
      {
        num: "6.3", title: "Future Roadmap", subtitle: "Long-term Vision",
        intro: "Where we go from here.",
        story: ["Version 2 will introduce multi-agent collaboration, allowing users to define 'Critic' nodes that automatically evaluate and iterate on the generated designs before presenting them to the user."],
        decision: "Double down on agentic workflows for V2."
      },
      {
        num: "6.4", title: "Final Reflection", subtitle: "Personal Growth",
        intro: "Looking back at the journey.",
        story: ["Designing Director.AI fundamentally changed how I view interfaces. We are transitioning from tools that 'do what we say' to partners that 'interpret what we mean.' The role of the designer is evolving from pixel-pusher to system-director."],
        quote: "The interface of the future is an invisible collaborator."
      }
    ],
    image: {
      name: "Results & Future Vision",
      req: "Combine Success Metrics, Business Impact, Key Learnings, Future Roadmap, and Final Reflection into one infographic."
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
          DIRECTOR.AI • Premium Editorial Case Study
        </span>
      </div>

      <div className="pt-40 pb-16 w-full flex flex-col items-center">
        
        {/* Chapters */}
        <div className="w-full flex flex-col gap-32 items-center">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="w-full flex flex-col items-center border-t border-white/5 pt-32 first:border-0 first:pt-0">
              
              {/* Chapter Header */}
              <div className="w-full max-w-[800px] px-6 flex flex-col gap-4 mb-20 text-center">
                <span className="text-[#6dd74c] font-mono tracking-[0.2em] uppercase text-sm font-semibold">
                  {chapter.id}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  {chapter.title}
                </h1>
              </div>

              {/* Sections */}
              <div className="w-full max-w-[800px] px-6 flex flex-col gap-24">
                {chapter.sections.map((section, idx) => (
                  <div key={section.num} className="flex flex-col gap-8">
                    
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 border-b border-white/10 pb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-[#6dd74c]/50 font-mono text-sm">{section.num}</span>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white/90">
                          {section.title}
                        </h2>
                      </div>
                      <p className="text-lg font-light text-white/50 uppercase tracking-widest text-sm">
                        {section.subtitle}
                      </p>
                    </div>

                    {/* Intro & Story */}
                    <div className="flex flex-col gap-6">
                      <p className="text-2xl font-light text-white/80 leading-relaxed">
                        {section.intro}
                      </p>
                      {section.story.map((paragraph, i) => (
                        <p key={i} className="text-lg text-white/60 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Pull Quote */}
                    {section.quote && (
                      <div className="my-8 border-l-4 border-[#6dd74c] pl-8 py-2">
                        <p className="text-3xl md:text-4xl font-serif italic text-white/90 leading-snug">
                          "{section.quote}"
                        </p>
                      </div>
                    )}

                    {/* Highlight Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {section.insight && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                          <span className="text-xs font-bold uppercase tracking-widest text-white/40">Key Insight</span>
                          <p className="text-white/80 leading-relaxed text-sm">{section.insight}</p>
                        </div>
                      )}
                      {section.decision && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#6dd74c]">Design Decision</span>
                          <p className="text-white/80 leading-relaxed text-sm">{section.decision}</p>
                        </div>
                      )}
                      {section.lesson && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Lesson Learned</span>
                          <p className="text-white/80 leading-relaxed text-sm">{section.lesson}</p>
                        </div>
                      )}
                      {section.impact && (
                        <div className="bg-[#6dd74c]/10 border border-[#6dd74c]/30 rounded-2xl p-8 flex flex-col gap-3 md:col-span-full shadow-[0_0_30px_rgba(109,215,76,0.05)]">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#6dd74c]">Business Impact</span>
                          <p className="text-[#6dd74c] leading-relaxed text-lg font-medium">{section.impact}</p>
                        </div>
                      )}
                    </div>

                  </div>
                ))}
              </div>

              {/* Full Width Visual Showcase (If exists for the chapter) */}
              {chapter.image && (
                <div className="w-full max-w-[1440px] px-6 mt-32 mb-12">
                  <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#050a06] border border-white/10 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6dd74c]/10 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-6">
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 bg-black/50 backdrop-blur-md">
                        <span className="text-white/50 font-mono text-lg">{chapter.id.split(' ')[1]}</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
                        {chapter.image.name}
                      </h3>
                      <p className="text-white/60 mt-4 max-w-2xl text-sm md:text-lg leading-relaxed font-light">
                        {chapter.image.req}
                      </p>
                    </div>

                    <div className="absolute bottom-8 text-xs text-white/30 uppercase tracking-[0.2em] font-medium">
                      Replace with Final High-Fidelity Composition
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      {/* Up Next Footer CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#050a06] text-center border-t border-white/10 relative overflow-hidden mt-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6dd74c] rounded-full blur-[200px] opacity-10 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center items-center mb-8">
            <div className="w-8 h-8 rounded-full border border-[#6dd74c]/30 flex items-center justify-center mr-3 relative">
              <div className="w-2 h-2 bg-[#6dd74c] rounded-full animate-pulse shadow-[0_0_10px_rgba(109,215,76,1)]" />
            </div>
            <p className="text-sm font-sans uppercase tracking-[0.2em] text-white/50 font-semibold">Up Next</p>
          </div>
          <Link to="/case-study/nutribox" className="group inline-flex flex-col items-center hover:opacity-80 transition-all duration-300 transform hover:scale-105">
            <h2 className="font-sans font-bold tracking-tighter text-6xl md:text-8xl mb-12 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              NutriBox
            </h2>
            <div className="flex items-center gap-4 px-10 py-5 bg-[#6dd74c] text-[#081509] rounded-full font-sans font-bold group-hover:bg-white transition-colors shadow-[0_0_40px_rgba(109,215,76,0.4)] text-lg">
              View Next Case Study
              <ArrowRight size={24} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
