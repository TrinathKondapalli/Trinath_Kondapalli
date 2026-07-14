import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';

import './index.css';

// A component to automatically scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
          path="/case-study/:slug" 
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

  const content = (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgressBar />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );

  return (
    <>
      <CustomCursor />
      {prefersReducedMotion ? (
        content
      ) : (
        <ReactLenis root options={{ anchors: true, lerp: 0.1, duration: 1.2 }}>
          {content}
        </ReactLenis>
      )}
    </>
  );
}

export default App;
