'use client';
import CablingServices from "./sections/CablingServices";
import EmergencyCableRepair from "./sections/EmergencyCableRepair";
import  FAQ  from "./sections/FaqSection";
import FinalCTA from "./sections/FinalCTA";
import HeroSection from "./sections/HeroSection";
import InstallationProcess from "./sections/InstallationProcess";
import OurCablingServices from "./sections/OurCablingService";
import PricingPackages from "./sections/PricingPackages";
import ServiceAreas from "./sections/ServiceArea";
import WhatWeInstall from "./sections/WhatWeInstall";
import WhyChooseSASIT from "./sections/WhyChoose";



export default function NetworkingSecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <>
      <HeroSection />
      <PricingPackages />
      <WhatWeInstall />
      <OurCablingServices />
      <WhyChooseSASIT />
      <InstallationProcess />
     <FAQ />
     <CablingServices />
     <ServiceAreas />
     <EmergencyCableRepair />
     <FinalCTA />
    </>
    
     

            </div>
        );
        }

