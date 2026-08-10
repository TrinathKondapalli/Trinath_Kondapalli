import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import ToolsMarquee from '../components/ToolsMarquee';
import AboutMe from '../components/AboutMe';
import Achievements from '../components/Achievements';
import FeaturedProjects from '../components/FeaturedProjects';
import DesignProcess from '../components/DesignProcess';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';

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
      <ToolsMarquee />
      <AboutMe />
      <Achievements />
      <FeaturedProjects />
      <DesignProcess />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      
      <Suspense fallback={<SectionSkeleton height="800px" />}>
        <Contact />
      </Suspense>
    </main>
  );
}
