import { useEffect, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import './index.css';

// A component to automatically scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for smooth trailing effect (lerp equivalent in framer-motion)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    // Only run on desktop devices that support hover, and never for users who asked for reduced motion
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches || reducedMotionQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function') {
        if (target.closest('a') || target.closest('button') || target.closest('.editorial-card') || target.closest('.project-card')) {
          setIsHoveringLink(true);
        } else {
          setIsHoveringLink(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Hide the native cursor everywhere except form fields
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `
      @media (pointer: fine) {
        * { cursor: none !important; }
        input, textarea, select, [contenteditable="true"] { cursor: auto !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        id="cursor"
        style={{
          position: 'fixed',
          left: 0, top: 0,
          x: smoothX,
          y: smoothY,
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: isHoveringLink ? 48 : 32,
          height: isHoveringLink ? 48 : 32,
          border: isHoveringLink ? '1.5px solid rgba(100, 220, 100, 1)' : '1.5px solid rgba(100, 220, 100, 0.6)',
          borderRadius: '50%',
          scale: isMouseDown ? 0.8 : 1
        }}
        transition={{ 
          width: { duration: 0.3, ease: 'easeOut' },
          height: { duration: 0.3, ease: 'easeOut' },
          border: { duration: 0.3, ease: 'easeOut' },
          scale: { duration: 0.1 }
        }}
      />
      
      {/* Inner instant dot */}
      <motion.div
        id="cursor-dot"
        style={{
          position: 'fixed',
          left: 0, top: 0,
          x: cursorX,
          y: cursorY,
          width: 5,
          height: 5,
          background: '#6ddc6d',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isMouseDown ? 0.8 : 1
        }}
        transition={{ scale: { duration: 0.1 } }}
      />
    </>
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

function useScrollReveal() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      // Instantly make everything visible if reduced motion is requested
      const instantReveal = () => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
          el.classList.add('visible');
          if (el.classList.contains('stat-num') && !el.classList.contains('counted')) {
            el.classList.add('counted');
            const endVal = parseInt((el as HTMLElement).dataset.countTo || '0', 10);
            const suffix = (el as HTMLElement).dataset.suffix || '';
            el.textContent = endVal + suffix;
          }
        });
      };
      instantReveal();
      const mo = new MutationObserver(instantReveal);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateValue = (obj: Element, start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(easeOutCubic(progress) * (end - start) + start);
        const suffix = (obj as HTMLElement).dataset.suffix || '';
        obj.textContent = currentCount + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          obj.textContent = end + suffix;
        }
      };
      window.requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          if (entry.target.classList.contains('stat-num') && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const endVal = parseInt((entry.target as HTMLElement).dataset.countTo || '0', 10);
            animateValue(entry.target, 0, endVal, 1200);
          }
          
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '50px' });

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
        el.classList.add('observed');
        io.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
           el.classList.add('visible');
        }
      });
    };

    // Extreme fallback: Force everything to show after 1.5s just in case IntersectionObserver entirely fails in this environment
    const failsafe = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        el.classList.add('visible');
        if (el.classList.contains('stat-num') && !el.classList.contains('counted')) {
          el.classList.add('counted');
          const endVal = parseInt((el as HTMLElement).dataset.countTo || '0', 10);
          animateValue(el, 0, endVal, 1200);
        }
      });
    }, 1500);

    observeElements();
    
    const mo = new MutationObserver(observeElements);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
      mo.disconnect();
    };
  }, [prefersReducedMotion]);
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/case-study/:id" 
          element={
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <CaseStudy />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  useScrollReveal();

  const content = (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
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
