import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

const statusPhrases = [
  'SYSTEMS ARCHITECTURE',
  'INTERACTION DESIGN',
  'CREATIVE TECHNOLOGY',
  'EXPERIENCE READY'
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // Fast 1.6s progress sweep
    const intervalTime = 16;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + (Math.random() * 0.4);
        if (next >= 100) {
          clearInterval(timer);
          // Instant call on 100% completion
          if (onComplete) onComplete();
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const displayProgress = Math.min(100, Math.floor(progress));
  const formattedCounter = String(displayProgress).padStart(3, '0');

  const phraseIndex = Math.min(
    statusPhrases.length - 1,
    Math.floor((displayProgress / 100) * statusPhrases.length)
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] select-none overflow-hidden pointer-events-auto">
        
        {/* Top Half Aperture Curtain (Instant Snappy Exit) */}
        <motion.div
          key="top-curtain"
          initial={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.45, ease: [0.87, 0, 0.13, 1] }}
          className="absolute top-0 left-0 right-0 h-[50.5vh] bg-[#040904] z-10"
        />

        {/* Bottom Half Aperture Curtain (Instant Snappy Exit) */}
        <motion.div
          key="bottom-curtain"
          initial={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.45, ease: [0.87, 0, 0.13, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[50.5vh] bg-[#040904] z-10"
        />

        {/* Central Content Box */}
        <motion.div
          key="central-hud"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(6px)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4"
        >
          {/* Cyber Grid Matrix Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(109,215,76,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(109,215,76,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Ambient Glowing Green Orb */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#6DD74C] blur-[150px] pointer-events-none opacity-20" />

          {/* Centerpiece: Precision HUD Compass Ring & TK Emblem */}
          <div className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 mb-8">
            
            {/* Outer Rotating Compass Ring */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-0 w-full h-full text-[#6DD74C]/30"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="20 40"
              />
            </motion.svg>

            {/* Inner Liquid Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="3"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#6DD74C"
                strokeWidth="3"
                strokeDasharray="565.48"
                strokeDashoffset={565.48 - (565.48 * progress) / 100}
                strokeLinecap="round"
                className="transition-all duration-75 ease-out shadow-[0_0_15px_#6DD74C]"
              />
            </svg>

            {/* Centered Glowing Signature Emblem "TK" */}
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-black font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#6DD74C] via-[#A8F88B] to-white drop-shadow-[0_0_25px_rgba(109,215,76,0.6)]">
                TK
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#6DD74C] uppercase mt-1">
                PORTFOLIO '26
              </span>
            </div>
          </div>

          {/* Rolling 3-Digit Counter */}
          <div className="flex items-baseline gap-1 font-mono mb-3">
            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {formattedCounter}
            </span>
            <span className="text-xl font-bold text-[#6DD74C]">%</span>
          </div>

          {/* Status Badge Phrase */}
          <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-[#6DD74C]/30 bg-[#6DD74C]/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6DD74C] animate-pulse" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.25em] text-[#6DD74C] uppercase">
              {statusPhrases[phraseIndex]}
            </span>
          </div>

          {/* Top Brand Name */}
          <div className="mt-8 text-xs font-mono tracking-[0.3em] text-white/50 uppercase text-center">
            TRINATH KONDAPALLI — UX/UI ARCHITECT
          </div>

        </motion.div>

        {/* Bottom Corner Tech Details */}
        <div className="absolute bottom-6 left-8 z-30 font-mono text-[10px] text-white/40 tracking-widest uppercase hidden sm:block">
          HYDERABAD / GLOBAL
        </div>
        <div className="absolute bottom-6 right-8 z-30 font-mono text-[10px] text-white/40 tracking-widest uppercase hidden sm:block">
          SYS.VER // 2026.04
        </div>
      </div>
    </AnimatePresence>
  );
}
