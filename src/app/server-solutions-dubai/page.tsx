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

import RelatedServices from "@/components/RelatedServices";


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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RelatedServices
        title="Related Services"
        links={[
          {
            name: "Networking & Security Services Dubai",
            href: "/networking-security-dubai",
            description: "Server networking, firewall rules & secure access.",
            badge: "Security",
          },
          {
            name: "IT Annual Maintenance Contract (AMC) Dubai",
            href: "/amc-annual-maintenance-dubai",
            description: "Ongoing monitoring, patching & server maintenance support.",
            badge: "Maintenance",
          },
        ]}
      />
</div>
      <FinalCTA />
    </>
    
     
  </div>
 );
  }

