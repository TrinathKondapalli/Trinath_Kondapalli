import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Code-split heavy pages to make the website ultra lightweight & fast
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NutriBox = lazy(() => import('./pages/case-studies/NutriBox'));
const GoVigi = lazy(() => import('./pages/case-studies/GoVigi'));
const LinguLink = lazy(() => import('./pages/case-studies/LinguLink'));
const FitTrack = lazy(() => import('./pages/case-studies/FitTrack'));
const DirectorAI = lazy(() => import('./pages/case-studies/DirectorAI'));
const TzinrHome = lazy(() => import('./pages/tzinr/TzinrHome'));

import TzinrLayout from './components/tzinr/TzinrLayout';
import RouteTransition from './components/tzinr/RouteTransition';

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

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isCaseStudy = location.pathname.startsWith('/case-study');
  const isTzinr = location.pathname.startsWith('/tzinr');

  if (isTzinr) {
    return (
      <>
        <div className="tzinr-theme">
          <CustomCursor />
          <ScrollProgressBar />
        </div>
        <TzinrLayout>
          {children}
        </TzinrLayout>
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
      {!isCaseStudy && <Navbar />}
      {children}
      {!isCaseStudy && <Footer />}
    </>
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

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div 
              initial={false} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/case-study/nutribox" 
          element={
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <NutriBox />
            </motion.div>
          } 
        />
        <Route 
          path="/case-study/go-vigi" 
          element={
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <GoVigi />
            </motion.div>
          } 
        />
        <Route 
          path="/case-study/lingu-link" 
          element={
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <LinguLink />
            </motion.div>
          } 
        />
        <Route 
          path="/case-study/fit-track" 
          element={
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <FitTrack />
            </motion.div>
          } 
        />
        <Route 
          path="/case-study/director-ai" 
          element={
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <DirectorAI />
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
        <Route 
          path="/tzinr" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <TzinrHome />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteTransition />
      <Layout>
        <Suspense fallback={null}>
          <AnimatedRoutes />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
