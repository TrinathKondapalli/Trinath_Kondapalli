import { useState } from 'react';
import { User, Mail, MessageSquare, Send, Phone } from 'lucide-react';
import Reveal from './Reveal';

// Custom SVGs for socials
const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    const mailtoUrl = `mailto:trinathkondapalli@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.email)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center justify-center z-10">
      
      {/* Section Eyebrow */}
      <Reveal delay={0}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6dd74c]/30 bg-[#143113]/50 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-[#6dd74c] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6dd74c]">
            Contact / Let's Connect
          </span>
        </div>
      </Reveal>

      {/* Main Section Heading & Supporting Text */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Reveal delay={100}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 font-sans">
            Let's Connect.
          </h2>
          <p className="text-base md:text-lg text-gray-300/80 leading-relaxed font-sans">
            Have an opportunity, idea, or just want to say hello? I'd love to hear from you.
          </p>
        </Reveal>
      </div>

      {/* Glassmorphic Contact Card */}
      <Reveal delay={200} className="w-full max-w-2xl">
        <div 
          className="relative w-full rounded-[32px] p-6 sm:p-10 border border-[#6dd74c]/20 overflow-hidden backdrop-blur-xl"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(20,49,19,0.75) 0%, rgba(8,21,9,0.95) 80%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(109, 215, 76, 0.15)'
          }}
        >
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 mb-10">
            {/* Name input */}
            <div className="relative flex items-center">
              <div className="absolute left-5 text-[#6dd74c] pointer-events-none">
                <User size={18} />
              </div>
              <input
                type="text"
                placeholder="Enter your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full bg-[#081509]/80 border border-[#6dd74c]/30 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#6dd74c] focus:ring-1 focus:ring-[#6dd74c] transition-all"
              />
            </div>

            {/* Email input */}
            <div className="relative flex items-center">
              <div className="absolute left-5 text-[#6dd74c] pointer-events-none">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full bg-[#081509]/80 border border-[#6dd74c]/30 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#6dd74c] focus:ring-1 focus:ring-[#6dd74c] transition-all"
              />
            </div>

            {/* Message input */}
            <div className="relative">
              <div className="absolute left-5 top-4 text-[#6dd74c] pointer-events-none">
                <MessageSquare size={18} />
              </div>
              <textarea
                rows={4}
                placeholder="Type your message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                className="w-full bg-[#081509]/80 border border-[#6dd74c]/30 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#6dd74c] focus:ring-1 focus:ring-[#6dd74c] transition-all resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-[#6dd74c] hover:bg-[#81dd6a] text-[#081509] font-bold py-4 rounded-2xl flex items-center justify-center gap-2.5 text-base transition-all duration-300 active:scale-[0.99] shadow-[0_0_25px_rgba(109,215,76,0.4)] cursor-pointer"
            >
              <Send size={18} className="-rotate-12" />
              <span>{submitted ? 'Message Sent!' : 'Send message'}</span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-10">
            <div className="w-full border-t border-[#6dd74c]/20" />
            <div className="absolute bg-[#0b1d0c] px-4 flex items-center gap-2 text-sm text-[#6dd74c] font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#6dd74c]" />
              <span>Let's Connect</span>
              <span className="w-2 h-2 rounded-full bg-[#6dd74c]" />
            </div>
          </div>

          {/* Phone & Email Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a
              href="tel:+919553302087"
              className="flex items-center gap-4 p-4 bg-[#081509]/60 border border-[#6dd74c]/20 rounded-2xl hover:border-[#6dd74c]/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#143113] border border-[#6dd74c]/30 flex items-center justify-center text-[#6dd74c] group-hover:scale-105 transition-transform flex-shrink-0">
                <Phone size={20} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-gray-400 font-medium">Phone</span>
                <span className="text-sm text-[#6dd74c] font-bold truncate">+91 95533 02087</span>
              </div>
            </a>

            <a
              href="mailto:trinathkondapalli@gmail.com"
              className="flex items-center gap-4 p-4 bg-[#081509]/60 border border-[#6dd74c]/20 rounded-2xl hover:border-[#6dd74c]/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#143113] border border-[#6dd74c]/30 flex items-center justify-center text-[#6dd74c] group-hover:scale-105 transition-transform flex-shrink-0">
                <Mail size={20} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-gray-400 font-medium">Email</span>
                <span className="text-sm text-[#6dd74c] font-bold truncate">trinathkondapalli@gmail.com</span>
              </div>
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { href: "https://www.linkedin.com/in/trinathkondapalli/", icon: LinkedInIcon, label: "LinkedIn" },
              { href: "https://www.behance.net/trinath", icon: BehanceIcon, label: "Behance" },
              { href: "https://www.instagram.com/tzinr.in/", icon: InstagramIcon, label: "Instagram" },
              { href: "https://dribbble.com/Trinadh_7", icon: DribbbleIcon, label: "Dribbble" },
              { href: "https://www.facebook.com/trinath.devarakonda.3", icon: FacebookIcon, label: "Facebook" },
              { href: "https://github.com/Trinadh7", icon: GitHubIcon, label: "GitHub" },
              { href: "https://x.com/Thiru7484", icon: XIcon, label: "X" },
            ].map(({ href, icon: Icon, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-2xl bg-[#081509]/80 border border-[#6dd74c]/20 flex items-center justify-center text-[#6dd74c] hover:bg-[#143113] hover:border-[#6dd74c]/60 transition-all hover:scale-105"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Bottom Copyright Line */}
          <div className="w-full border-t border-[#6dd74c]/20 pt-8 mt-10 text-center text-sm text-gray-400 font-sans">
            © <span className="text-[#6dd74c] font-semibold">Copyright 2026.</span> Rights Reserved.
          </div>

        </div>
      </Reveal>
    </section>
  );
}
