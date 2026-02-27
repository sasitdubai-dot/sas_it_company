'use client';

import HeroSection from './sections/HeroSection';
import SolutionsSection from './sections/SolutionsSection';
import CameraTechnologies from './sections/CameraTechnologies';
import IndustriesSection from './sections/IndustriesSection';
import WhyChooseSection from './sections/WhyChooseSection';
import InstallationProcess from './sections/InstallationProcess';
import BrandsSection from './sections/BrandsSection';
import FinalCTA from './sections/FinalCTA';

export default function CommercialCCTVPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsSection />
      <CameraTechnologies />
      <IndustriesSection />
      <WhyChooseSection />
      <InstallationProcess />
      <BrandsSection />
      <FinalCTA />
    </div>
  );
}
