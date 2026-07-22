import { useEffect } from 'react';

import Cover from './NutriBoxSections/01_Cover';
import BrandFoundation from './NutriBoxSections/06_BrandFoundation';
import DesignStrategy from './NutriBoxSections/07_DesignStrategy';
import InformationArchitecture from './NutriBoxSections/08_InformationArchitecture';
import Moodboard from './NutriBoxSections/10_Moodboard';
import Wireframes from './NutriBoxSections/11_Wireframes';
import DesignSystem from './NutriBoxSections/12_DesignSystem';
import LandingPageBreakdown from './NutriBoxSections/13_LandingPageBreakdown';
import ResponsiveDesign from './NutriBoxSections/20_ResponsiveDesign';
import Prototype from './NutriBoxSections/21_Prototype';
import Workflow from './NutriBoxSections/22_Workflow';
import QATesting from './NutriBoxSections/23_QATesting';
import FinalMockups from './NutriBoxSections/24_FinalMockups';
import OutcomesReflection from './NutriBoxSections/25_OutcomesReflection';
import ThankYou from './NutriBoxSections/26_ThankYou';
import NextProject from './NutriBoxSections/27_NextProject';

export default function NutriBoxCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#F9F8F6] text-gray-900 font-inter selection:bg-[#2A3B2E] selection:text-white">
      <Cover />
      <BrandFoundation />
      <DesignStrategy />
      <InformationArchitecture />
      <Moodboard />
      <Wireframes />
      <DesignSystem />
      <LandingPageBreakdown />
      <ResponsiveDesign />
      <Prototype />
      <Workflow />
      <QATesting />
      <FinalMockups />
      <OutcomesReflection />
      <ThankYou />
      <NextProject />
    </main>
  );
}
