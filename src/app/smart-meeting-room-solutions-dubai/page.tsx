'use client';

import HeroSection from './sections/HeroSection';
import MeetingRoomSolutions from './sections/MeetingRoomSolutions';
import { CompleteAVSolutions, PlatformIntegration } from './sections/AVAndPlatforms';
import { WhyChooseSection, InstallationProcess } from './sections/WhyChooseAndProcess';
import { BrandsSection, WhatsIncluded } from './sections/BrandsAndIncludes';
import FinalCTA from './sections/FinalCTA';
import RelatedServices from "@/components/RelatedServices";
export default function MeetingRoomPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Slate/Blue/Purple gradient */}
      <HeroSection />
      
      {/* Meeting Room Solutions - Indigo/Purple gradient */}
      <MeetingRoomSolutions />
      
      {/* Complete AV Solutions - Slate/Blue gradient */}
      <CompleteAVSolutions />
      
      {/* Platform Integration - Violet/Fuchsia gradient */}
      <PlatformIntegration />
      
      {/* Why Choose - Emerald/Teal gradient */}
      <WhyChooseSection />
      
      {/* Installation Process - Blue/Cyan gradient */}
      <InstallationProcess />
      
      {/* Brands - Amber/Orange gradient */}
      <BrandsSection />
      
      {/* What's Included - Rose/Pink gradient */}
      <WhatsIncluded />
      {/* Related Services */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
              <RelatedServices
                title="Related Services"
                links={[
                  {
                    name: "Networking & Security Services Dubai",
                    href: "/networking-security-dubai",
                    description: "Stable network setup & secure VoIP traffic handling.",
                    badge: "Network",
                    },
                  {
                    name: "Structured Cabling Services Dubai",
                    href: "/structured-cabling-dubai",
                    description: "Network-ready cabling, racks, patch panels & fiber.",
                    badge: "Infrastructure",
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
      {/* Final CTA - Slate/Blue/Purple gradient */}
      <FinalCTA />
    </div>
  );
}