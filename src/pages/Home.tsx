import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import CurrentlyStrip from '../components/CurrentlyStrip';
import ToolsMarquee from '../components/ToolsMarquee';

const Services = lazy(() => import('../components/Services'));
const WhoIHelp = lazy(() => import('../components/WhoIHelp'));
const ProblemsISolve = lazy(() => import('../components/ProblemsISolve'));
const FeaturedProjects = lazy(() => import('../components/FeaturedProjects'));
const DesignProcess = lazy(() => import('../components/DesignProcess'));
const AboutMe = lazy(() => import('../components/AboutMe'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));

function SectionSkeleton({ height = '400px' }: { height?: string }) {
  return (
    <div 
      style={{
        width: '100%',
        minHeight: height,
        background: '#081509',
        borderBottom: '1px solid rgba(255,255,255,0.03)'
      }}
    />
  );
}

export default function Home() {
  return (
    <main style={{ background: '#081509' }}>
      <Hero />
      <CurrentlyStrip />
      <ToolsMarquee />
      <Suspense fallback={<SectionSkeleton height="500px" />}>
        <Services />
        <WhoIHelp />
        <ProblemsISolve />
        <FeaturedProjects />
        <DesignProcess />
        <AboutMe />
        <Testimonials />
        <FAQ />
        <Contact />
      </Suspense>
    </main>
  );
}
