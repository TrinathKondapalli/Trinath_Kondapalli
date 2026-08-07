import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const sections = [
  {
    num: "01", title: "Hero Section", goal: "Create a premium first impression.",
    content: "Project Name: DIRECTOR.AI\\nTagline: The AI Co-Director for Creative Workflows.\\nOne-line Value Proposition: Empowering creative teams to generate, validate, and scale prompt-based UI and UGC campaigns in seconds.\\nTimeline: 8 Weeks\\nRole: Principal Product Designer\\nTeam: 1 PM, 2 AI Engineers, 1 Product Designer\\nPlatform: Web Application (Desktop)\\nTools: Figma, Framer, Claude, Gemini API\\nResponsibilities: End-to-end Product Design, Prompt Architecture, Prototyping\\nCTA: View Live Prototype",
    image: "[Hero Mockup]",
    req: "Desktop mockup, Laptop mockup, Floating UI, Dark gradient background",
    notes: "This should immediately communicate the product value."
  },
  {
    num: "02", title: "Executive Summary", goal: "Allow recruiters to understand the product in under 30 seconds.",
    content: "Project Summary: Director.AI is an enterprise-grade AI interface that bridges the gap between raw LLM outputs and usable creative assets.\\nProblem: Creative teams spend hours engineering complex prompts to generate UI layouts and UGC scripts, only to receive unstructured, unusable text formats.\\nSolution: A node-based prompt architecture that visualizes LLM generation, validates JSON outputs, and instantly renders creative assets in a WYSIWYG studio.\\nOutcome: Reduced asset generation time by 75% and achieved a 92% successful output validation rate.",
    image: "[Overview Dashboard Screenshot]"
  },
  {
    num: "03", title: "The Problem", goal: "Explain WHY this product exists.",
    content: "Pain points: Unpredictable AI outputs, broken JSON schemas, lack of visual control.\\nStatistics: 68% of creatives abandon AI tools due to inconsistent formatting.\\nCurrent workflow: Text Prompt -> ChatGPT -> Copy/Paste to Figma -> Manual Layout.\\nFrustrations: Context windows break, hallucinated variables, impossible to iterate visually.\\nBusiness problems: High agency costs, slow time-to-market for digital campaigns.",
    image: "[Pain Point Illustration] \\n [Current Workflow Diagram]"
  },
  {
    num: "04", title: "Market Opportunity", goal: "Explain why solving this problem matters.",
    content: "Market gap: Existing AI tools are text-first; designers are visual-first. There is no middle ground.\\nIndustry trends: The shift from AI chat interfaces to AI-Native spatial canvases.\\nBusiness opportunity: Capturing the $1.2B generative design tool market.\\nTarget market: Product Designers, Creative Directors, Marketing Agencies.",
    image: "[Market Opportunity Infographic]"
  },
  {
    num: "05", title: "Project Goals", goal: "Define measurable objectives.",
    content: "Business Goals: Reach 5,000 active beta users, achieve >40% week-1 retention.\\nUser Goals: Generate usable, code-ready UI components and video storyboards in under 2 minutes.\\nSuccess Metrics: Time-to-first-asset (TTFA), JSON validation success rate.\\nKPIs: Session length, Export rate.",
    image: "[Goals Dashboard]"
  },
  {
    num: "06", title: "Research", goal: "Show evidence-based thinking.",
    content: "Research methods: Contextual inquiry, A/B Testing.\\nInterviews: 12 Creative Directors.\\nCompetitive analysis: Audited Midjourney, ChatGPT, Framer AI.\\nSurveys: 150+ responses.\\nOnline communities: Figma forums, AI creator Discords.\\nInsights: Users don't want to write better prompts; they want UI controls that write the prompts for them.",
    image: "[Research Board] \\n [Interview Notes] \\n [Affinity Mapping]"
  },
  {
    num: "07", title: "Competitive Analysis", goal: "Explain why your solution is different.",
    content: "Compare:\\nChatGPT\\nClaude\\nGemini\\nJasper\\nCopy.ai\\nGamma\\nCanva AI",
    image: "[Comparison Table]"
  },
  {
    num: "08", title: "User Personas", goal: "Understand the target audience.",
    content: "Primary Persona: Agency Art Director.\\nSecondary Persona: UX Engineer.\\nGoals: Fast iterations without coding, clean JSON outputs.\\nFrustrations: Spending more time fixing AI hallucinations than designing.\\nMotivations: Speed to market.\\nBehavior: highly visual, skips long text.",
    image: "[Persona Card]"
  },
  {
    num: "09", title: "Jobs To Be Done", goal: "Focus on outcomes.",
    content: "Generate JTBD statements: When I have a tight deadline, I want to instantly generate 5 variations of a landing page, so that I can present options today.",
    image: "[JTBD Diagram]"
  },
  {
    num: "10", title: "User Journey", goal: "Map the emotional and practical experience.",
    content: "Discovery -> Onboarding -> First Generation -> Iteration -> Export.",
    image: "[Journey Map]"
  },
  {
    num: "11", title: "Pain Point Analysis", goal: "Drill down into specific UX flaws.",
    content: "Prompt Fatigue phenomenon where users give up after 3 failed generations.",
    image: "[Pain Point Matrix]"
  },
  {
    num: "12", title: "How Might We", goal: "Frame problems as opportunities.",
    content: "Generate HMW Statements: HMW abstract the complexity of prompt engineering into familiar visual sliders?",
    image: "[Sticky Notes]"
  },
  {
    num: "13", title: "Product Vision", goal: "The North Star.",
    content: "To make directing AI as intuitive as using a camera.",
    image: "[Vision Statement Graphic]"
  },
  {
    num: "14", title: "Feature Prioritization", goal: "Show business constraints.",
    content: "Use MoSCoW or Impact vs Effort.\\nMust Have: Node-based prompt editor, real-time preview, JSON validator.\\nWon't Have (V1): 3D model generation.",
    image: "[Prioritization Matrix]"
  },
  {
    num: "15", title: "Information Architecture", goal: "System structure.",
    content: "Dashboard / Project Canvas / Node Editor / Asset Library / Settings.",
    image: "[Sitemap]"
  },
  {
    num: "16", title: "User Flow", goal: "Show the core loop.",
    content: "Create Project -> Add Context Node -> Add Style Node -> Generate -> Visual QA -> Export.",
    image: "[Complete User Flow]"
  },
  {
    num: "17", title: "Task Flow", goal: "Micro-interaction focus.",
    content: "Task: Modifying a generated button's corner radius using the AI chat.",
    image: "[Task Flow Diagram]"
  },
  {
    num: "18", title: "Wireframes", goal: "Show the structural foundation.",
    content: "Show Low Fidelity and Mid Fidelity. Moving away from standard chat UI toward a spatial canvas layout.",
    image: "[Wireframes]"
  },
  {
    num: "19", title: "Design Iterations", goal: "Show how feedback improved design.",
    content: "Show Version 1, Version 2, Version 3.\\nExplain: Why changes happened (e.g. users felt disconnected from the canvas in V1).",
    image: "[Iteration Comparison]"
  },
  {
    num: "20", title: "Design System", goal: "Visual consistency and engineering readiness.",
    content: "Generate Colors, Typography, Spacing, Grid, Elevation, Radius, Icons, Buttons, Inputs, Cards.",
    image: "[Design System Overview]"
  },
  {
    num: "21", title: "Visual Exploration", goal: "The aesthetic direction.",
    content: "Moodboards, Typography, Color Exploration, Glassmorphism, Brand Direction.",
    image: "[Moodboard]"
  },
  {
    num: "22", title: "Final UI", goal: "The polished product.",
    content: "Generate Desktop Screens, Tablet Screens, Mobile Screens.",
    image: "[Landing Page] \\n [Dashboard] \\n [UGC Studio] \\n [Design Publisher] \\n [Settings] \\n [History]"
  },
  {
    num: "23", title: "Core Features", goal: "Problem/Solution framing.",
    content: "Explain Problem -> Solution -> Outcome.\\nProblem: Prompting is trial and error.\\nSolution: Visual Prompt Nodes.\\nOutcome: Users tweak sliders; system writes the prompt.",
    image: "[Feature Showcase]"
  },
  {
    num: "24", title: "AI Experience Design", goal: "Show deep technical UX understanding.",
    content: "Explain Prompt Architecture, Backend Flow, Gemini, JSON, Validation.",
    image: "[AI Workflow Diagram]"
  },
  {
    num: "25", title: "UX Writing", goal: "Tone of voice.",
    content: "Replaced 'Error: JSON invalid' with 'Re-aligning creative vision...'",
    image: "[Microcopy Examples]"
  },
  {
    num: "26", title: "Accessibility", goal: "Inclusive design.",
    content: "Explain Contrast, Keyboard Navigation, ARIA, Focus States, WCAG.",
    image: "[Accessibility Audit]"
  },
  {
    num: "27", title: "Responsive Design", goal: "Multi-device logic.",
    content: "How a massive spatial canvas translates to an iPad and Mobile device.",
    image: "[Responsive Mockups]"
  },
  {
    num: "28", title: "Micro Interactions", goal: "The delightful details.",
    content: "Examples: Hover, Loading, Copy Success, Progress.",
    image: "[GIF Placeholder]"
  },
  {
    num: "29", title: "Challenges", goal: "Honesty and problem-solving.",
    content: "Generate Challenge, Why it happened, How it was solved.",
    image: "[Problem vs Solution]"
  },
  {
    num: "30", title: "Results & Expected Impact", goal: "ROI and business value.",
    content: "Generate Time Saved, Workflow Improvement, Business Value, Expected Outcomes.",
    image: "[Metrics Dashboard]"
  },
  {
    num: "31", title: "Future Roadmap", goal: "Long-term vision.",
    content: "Generate Version 2, Version 3, Long-term Vision.",
    image: "[Roadmap Timeline]"
  },
  {
    num: "32", title: "Final Reflection", goal: "Personal growth.",
    content: "Explain What I learned, Design decisions, Product thinking, Next improvements.",
    image: "[Final Product Mockup]"
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
          DIRECTOR.AI • Product Case Study
        </span>
      </div>

      <div className="pt-32 pb-16 px-6 max-w-[1280px] mx-auto flex flex-col gap-24">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">DIRECTOR.AI</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            A world-class UX case study demonstrating product thinking, UX process, visual design, research, and business understanding.
          </p>
        </div>

        {/* 32 Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-12 items-start border-t border-white/10 pt-16">
            
            {/* Left Column: Content */}
            <div className="w-full md:w-1/3 flex flex-col gap-6 sticky top-32">
              <div className="flex items-center gap-4">
                <span className="text-[#6dd74c] font-bold text-xl">{section.num}</span>
                <h2 className="text-3xl font-semibold">{section.title}</h2>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <p className="text-sm text-[#6dd74c] font-medium uppercase tracking-wider mb-2">Section Goal</p>
                <p className="text-white/80">{section.goal}</p>
              </div>

              <div className="flex flex-col gap-4">
                {section.content.split('\\n').map((paragraph, i) => {
                  const isBold = paragraph.includes(':');
                  if (isBold) {
                    const [title, ...rest] = paragraph.split(':');
                    return (
                      <p key={i} className="text-white/70 leading-relaxed text-sm">
                        <strong className="text-white">{title}:</strong> {rest.join(':')}
                      </p>
                    );
                  }
                  return <p key={i} className="text-white/70 leading-relaxed text-sm">{paragraph}</p>;
                })}
              </div>

              {section.req && (
                <div className="mt-4">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Screenshot Requirements</p>
                  <p className="text-sm text-white/60">{section.req}</p>
                </div>
              )}
              {section.notes && (
                <div className="mt-2">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Designer Notes</p>
                  <p className="text-sm text-[#6dd74c]/80 italic">{section.notes}</p>
                </div>
              )}
            </div>

            {/* Right Column: Visual Placeholders */}
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              {section.image.split('\\n').map((imgText, i) => (
                <div key={i} className="w-full aspect-[16/10] bg-white/5 border border-white/10 border-dashed rounded-2xl flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6dd74c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-white/30 font-medium text-lg tracking-wide uppercase">{imgText.trim()}</span>
                  <span className="text-white/20 text-xs mt-4 max-w-xs leading-relaxed">
                    Replace this placeholder with the final visual asset when designing in Figma/Framer.
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

      {/* Up Next Footer CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#081509] text-center border-t border-white/10 relative overflow-hidden mt-20">
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
