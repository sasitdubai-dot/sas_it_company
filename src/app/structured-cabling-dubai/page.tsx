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

import RelatedServices from "@/components/RelatedServices";


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
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <RelatedServices
        title="Related Services"
        links={[
          {
            name: "Networking & Security Services Dubai",
            href: "/networking-security-dubai",
            description: "Switching, routing, firewall & secure network setup.",
            badge: "Network",
          },
          {
            name: "IP Telephony Services Dubai",
            href: "/ip-telephony-dubai",
            description: "VoIP PBX, extensions & call routing over structured cabling.",
            badge: "Voice",
          },
        ]}
      />
      </div>
     <FinalCTA />
    </>
    
     

            </div>
        );
        }

