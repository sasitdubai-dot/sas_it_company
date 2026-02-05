'use client';

import HeroSection from './sections/HeroSection';
import RepairServicesSection from './sections/RepairServicesSection';
import { BrandsWeRepair, CommonRepairs } from './sections/BrandsAndRepairs';
import { WhyChooseSection, RepairProcess } from './sections/WhyChooseAndProcess';
import { 
  DataRecoverySection, 
  CorporateServices, 
  CommonIssuesSection,
  PreventiveMaintenanceSection 
} from './sections/AdditionalServices';
import { FAQSection, FinalCTA } from './sections/FAQAndCTA';

export default function ComputerRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Slate/Gray gradient */}
      <HeroSection />
      
      {/* Repair Services - Blue/Indigo/Purple gradient */}
      <RepairServicesSection />
      
      {/* Brands - Gray/Slate gradient */}
      <BrandsWeRepair />
      
      {/* Common Repairs - Slate/Blue gradient */}
      <CommonRepairs />
      
      {/* Why Choose - Orange/Red gradient */}
      <WhyChooseSection />
      
      {/* Process - Indigo/Purple gradient */}
      <RepairProcess />
      
      {/* Data Recovery - Emerald/Teal gradient */}
      <DataRecoverySection />
      
      {/* Corporate Services - Blue/Cyan gradient */}
      <CorporateServices />
      
      {/* Common Issues - Violet/Fuchsia gradient */}
      <CommonIssuesSection />
      
      {/* Preventive Maintenance - Amber/Orange gradient */}
      <PreventiveMaintenanceSection />
      
      {/* FAQ - Slate/Gray gradient */}
      <FAQSection />
      
      {/* Final CTA - Orange/Red gradient */}
      <FinalCTA />
    </div>
  );
}