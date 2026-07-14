import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy.tsx';

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
  useEffect(() => {
    const cur = document.getElementById('cur');
    const dot = document.getElementById('cur-dot');
    if (!cur || !dot) return;

    // Only apply on fine pointers, and respect reduced motion
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches || reducedMotionQuery.matches) return;

    let mx = -100, my = -100, cx = -100, cy = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    document.addEventListener('mousemove', onMouseMove);

    const loop = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      cur.style.left = cx + 'px';
      cur.style.top = cy + 'px';
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    // Attach hover effects dynamically to interactive elements
    const attachHovers = () => {
      document.querySelectorAll('a, button, .editorial-card, .support-card, .accordion-row, .faq-header, .typo-row, .magnetic-btn').forEach(el => {
        if ((el as any)._cursorAttached) return;
        (el as any)._cursorAttached = true;

        el.addEventListener('mouseenter', () => {
          cur.style.width = '48px';
          cur.style.height = '48px';
          cur.style.borderColor = 'rgba(109,220,109,1)';
        });
        el.addEventListener('mouseleave', () => {
          cur.style.width = '32px';
          cur.style.height = '32px';
          cur.style.borderColor = 'rgba(109,220,109,0.55)';
        });
      });
    };

    attachHovers();
    const mo = new MutationObserver(attachHovers);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        #cur { width:32px; height:32px; border:1.5px solid rgba(109,220,109,0.55); border-radius:50%; position:fixed; pointer-events:none; z-index:9999; transform:translate(-50%,-50%); transition:width .3s,height .3s,border-color .3s; }
        #cur-dot { width:5px; height:5px; background:#6ddc6d; border-radius:50%; position:fixed; pointer-events:none; z-index:9999; transform:translate(-50%,-50%); }
        @media (pointer:fine) { * { cursor:none !important; } }
      `}</style>
      <div id="cur"></div>
      <div id="cur-dot"></div>
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
        height: 2,
        transformOrigin: '0%',
        scaleX,
        background: '#6ddc6d',
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
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible');
        if (el.classList.contains('stat-num') && !el.classList.contains('counted')) {
          el.classList.add('counted');
          const endVal = parseInt((el as HTMLElement).dataset.countTo || '0', 10);
          const suffix = (el as HTMLElement).dataset.suffix || '';
          el.textContent = endVal + suffix;
        }
      });
      return;
    }

    const animateStat = (el: HTMLElement) => {
      if (el.classList.contains('counted')) return;
      el.classList.add('counted');
      const end = parseInt(el.dataset.countTo || '0', 10);
      const suffix = el.dataset.suffix || '';
      const dur = 1200;
      let startTime: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const p = Math.min((timestamp - startTime) / dur, 1);
        el.textContent = Math.floor(p * p * (3 - 2 * p) * end) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const checkReveal = () => {
      const windowHeight = window.innerHeight;
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        // If the top of the element is within the viewport (plus a tiny buffer)
        if (rect.top < windowHeight - 20) {
          el.classList.add('visible');
          if (el.classList.contains('stat-num')) {
            animateStat(el as HTMLElement);
          }
        }
      });
    };

    // Run on scroll and resize
    window.addEventListener('scroll', checkReveal, { passive: true });
    window.addEventListener('resize', checkReveal, { passive: true });
    
    // Initial checks (staggered to catch Framer Motion mount)
    checkReveal();
    const t1 = setTimeout(checkReveal, 100);
    const t2 = setTimeout(checkReveal, 500);
    const t3 = setTimeout(checkReveal, 1500);

    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('resize', checkReveal);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
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
