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
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <CurrentlyStrip />
      <ToolsMarquee />
      <Services />
      <WhoIHelp />
      <ProblemsISolve />
      <FeaturedProjects />
      <DesignProcess />
      <AboutMe />

      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
