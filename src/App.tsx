import { useEffect, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsMarquee from './components/ToolsMarquee';
import Availability from './components/Availability';
import Services from './components/Services';
import WhoIHelp from './components/WhoIHelp';
import ProblemsISolve from './components/ProblemsISolve';
import FeaturedProjects from './components/FeaturedProjects';
import DesignProcess from './components/DesignProcess';
import AboutMe from './components/AboutMe';
import SkillsAndTools from './components/SkillsAndTools';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  useEffect(() => {
    // Only run on desktop devices that support hover, and never for users who asked for reduced motion
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches || reducedMotionQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX); // Set exact cursor position
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function') {
        const textTarget = target.closest<HTMLElement>('[data-cursor-text]');
        setCursorText(textTarget ? textTarget.dataset.cursorText ?? null : null);

        if (textTarget || target.closest('a') || target.closest('button')) {
          setIsHoveringLink(true);
        } else {
          setIsHoveringLink(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Hide the native cursor everywhere except form fields, where a visible caret cue still matters
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `
      * { cursor: none !important; }
      input, textarea, select, [contenteditable="true"] { cursor: auto !important; }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0, top: 0,
        x: smoothX,
        y: smoothY,
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference',
      }}
    >
      <motion.div
        animate={{
          width: isHoveringLink ? 80 : 20,
          height: isHoveringLink ? 80 : 20,
          x: isHoveringLink ? -40 : -10, // Center offset
          y: isHoveringLink ? -40 : -10, // Center offset
          backgroundColor: isHoveringLink ? 'transparent' : '#ffffff',
          border: isHoveringLink ? '1px solid #ffffff' : '0px solid #ffffff',
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.5px',
              color: '#ffffff',
              whiteSpace: 'nowrap',
            }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 3,
        transformOrigin: '0%',
        scaleX,
        background: 'linear-gradient(90deg, var(--c-primary), var(--c-secondary))',
        boxShadow: '0 0 8px rgba(109,215,76,0.5)',
        zIndex: 60,
        pointerEvents: 'none',
      }}
    />
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reduced;
}

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const content = (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <ToolsMarquee />
        <Availability />
        <Services />
        <WhoIHelp />
        <ProblemsISolve />
        <FeaturedProjects />
        <DesignProcess />
        <AboutMe />
        <SkillsAndTools />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );

  // Skip Lenis entirely for users who've asked for reduced motion — fall back to native scroll.
  if (prefersReducedMotion) return content;

  return (
    <ReactLenis root options={{ anchors: true, lerp: 0.1, duration: 1.2 }}>
      {content}
    </ReactLenis>
  );
}

export default App;
