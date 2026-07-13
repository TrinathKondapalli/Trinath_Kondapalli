import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
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

  useEffect(() => {
    // Only run on desktop devices that support hover
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX); // Set exact cursor position
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function') {
        if (target.closest('a') || target.closest('button')) {
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

    // Hide default cursor
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
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
        }}
      />
    </motion.div>
  );
}

function App() {
  return (
    <>
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
  )
}

export default App;
