import { useEffect } from 'react';
import TzinrHero from '../../components/tzinr/TzinrHero';
import TzinrServices from '../../components/tzinr/TzinrServices';
import TzinrProblems from '../../components/tzinr/TzinrProblems';
import TzinrWork from '../../components/tzinr/TzinrWork';
import TzinrWhy from '../../components/tzinr/TzinrWhy';
import TzinrProcess from '../../components/tzinr/TzinrProcess';
import TzinrCaseStudies from '../../components/tzinr/TzinrCaseStudies';
import TzinrFAQ from '../../components/tzinr/TzinrFAQ';
import TzinrContact from '../../components/tzinr/TzinrContact';

export default function TzinrHome() {
  // Update document title for TZINR specifically
  useEffect(() => {
    document.title = "TZINR — Digital Product & Experience Studio";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "TZINR designs and builds thoughtful websites, digital products, and interactive experiences for ambitious businesses.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', "TZINR designs and builds thoughtful websites, digital products, and interactive experiences for ambitious businesses.");
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <>
      <TzinrHero />
      <TzinrServices />
      <TzinrProblems />
      <TzinrWork />
      <TzinrWhy />
      <TzinrProcess />
      <TzinrCaseStudies />
      <TzinrFAQ />
      <TzinrContact />
    </>
  );
}
