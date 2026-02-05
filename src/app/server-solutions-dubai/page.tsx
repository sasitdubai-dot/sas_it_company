'use client';
import DisasterRecovery from "./sections/DisasterRecovery";
import CommonQuestions from "./sections/CommonQuestion";
import EmergencyServerSupport from "./sections/EmergencyServerSupport";
import FinalCTA from "./sections/FinalCTA";
import Hero from "./sections/Hero";
import ServerPricing from "./sections/PricingPackages";
import ServerInstallationProcess from "./sections/ServerInstallationProcess";
import ServerMaintenancePlans from "./sections/ServerMaintenancePlans";
import ServerWeDepoly from "./sections/ServerWeDepoly";
import ServiceAreas from "./sections/ServiceAreas";
import WhatWeOffer from "./sections/WhatWeOffer";
import WhyChooseServers from "./sections/WhyChooseServer";



export default function ServerSolution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <>
      <Hero />
      <ServerPricing />
      <ServerWeDepoly />
      <WhatWeOffer />
      <WhyChooseServers />
      <ServerInstallationProcess />
      <CommonQuestions />
      <ServerMaintenancePlans />
      <ServiceAreas />
      <DisasterRecovery />
      <EmergencyServerSupport />
      <FinalCTA />
    </>
    
     
  </div>
 );
  }

