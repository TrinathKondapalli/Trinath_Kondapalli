import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import CurrentlyStrip from '../components/CurrentlyStrip';
import ToolsMarquee from '../components/ToolsMarquee';
import Services from '../components/Services';
import WhoIHelp from '../components/WhoIHelp';
import ProblemsISolve from '../components/ProblemsISolve';
import FeaturedProjects from '../components/FeaturedProjects';
import DesignProcess from '../components/DesignProcess';
import AboutMe from '../components/AboutMe';
import Testimonials from '../components/Testimonials';

const FAQ = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));

function SectionSkeleton({ height = '600px' }: { height?: string }) {
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
      <Services />
      <WhoIHelp />
      <ProblemsISolve />
      <FeaturedProjects />
      <DesignProcess />
      <AboutMe />
      {/* <Testimonials /> */}
      
      <Suspense fallback={<SectionSkeleton height="800px" />}>
        <FAQ />
        <Contact />
      </Suspense>
    </main>
  );
}
