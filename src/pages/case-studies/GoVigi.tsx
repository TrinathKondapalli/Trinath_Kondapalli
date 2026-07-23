import { useEffect } from 'react';

// Phase 1: Context & Strategy
import GrandHero from './GoVigiSections/01_GrandHero';
import ProjectOverview from './GoVigiSections/02_ProjectOverview';
import TheFriction from './GoVigiSections/03_TheFriction';
import ProblemStatement from './GoVigiSections/04_ProblemStatement';
import TheProposition from './GoVigiSections/05_TheProposition';
import PlatformStrategy from './GoVigiSections/06_PlatformStrategy';

// Phase 2: Architecture & UX Logic
import InformationArchitecture from './GoVigiSections/07_InformationArchitecture';
import MobileFlow from './GoVigiSections/08_MobileFlow';
import DesktopFlow from './GoVigiSections/09_DesktopFlow';
import Wireframes from './GoVigiSections/10_Wireframes';

// Phase 3: Visual Design & Brand
import BrandFoundation from './GoVigiSections/11_BrandFoundation';
import UIComponents from './GoVigiSections/12_UIComponents';
import MobileFlagship from './GoVigiSections/13_MobileFlagship';
import DesktopFlagship from './GoVigiSections/14_DesktopFlagship';

// Phase 4: Execution & Reflection
import EdgeCases from './GoVigiSections/16_EdgeCases';
import TangibleOutcomes from './GoVigiSections/19_TangibleOutcomes';
import CandidReflection from './GoVigiSections/20_CandidReflection';
import ThankYou from './GoVigiSections/21_ThankYou';
import NextProject from './GoVigiSections/22_NextProject';

export default function GoVigiCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#F8F7F3] text-gray-900 font-sans selection:bg-[#1C3621] selection:text-[#F8F7F3]">
      <GrandHero />
      <ProjectOverview />
      <TheFriction />
      <ProblemStatement />
      <TheProposition />
      <PlatformStrategy />
      
      <InformationArchitecture />
      <MobileFlow />
      <DesktopFlow />
      <Wireframes />
      
      <BrandFoundation />
      <UIComponents />
      <MobileFlagship />
      <DesktopFlagship />
      
      <EdgeCases />
      <TangibleOutcomes />
      <CandidReflection />
      <ThankYou />
      <NextProject />
    </main>
  );
}

