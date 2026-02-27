'use client';

import HeroSection from './sections/HeroSection';
import SolutionsSection from './sections/SolutionsSection';
import CameraTechnologies from './sections/CameraTechnologies';
import IndustriesSection from './sections/IndustriesSection';
import WhyChooseSection from './sections/WhyChooseSection';
import InstallationProcess from './sections/InstallationProcess';
import BrandsSection from './sections/BrandsSection';
import FinalCTA from './sections/FinalCTA';
import RelatedServices from "@/components/RelatedServices";

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
       {/* Related Services */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
                          <RelatedServices
                            title="Related Services"
                            links={[
                              {
                                name: "Access Control System Dubai",
                                href: "/access-control-system-dubai",
                                description: "Secure your premises with modern biometric and card access technology",
                                badge: "Access",
                                },
                              {
                                  name: "IT Annual Maintenance Contract (AMC) Dubai",
                                  href: "/amc-annual-maintenance-dubai",
                                  description: "Preventive maintenance to reduce breakdowns.",
                                  badge: "Maintenance",
                              },
                              {
                                  name: "Networking & Security Services Dubai",
                                  href: "/networking-security-dubai",
                                  description: "Office network setup, WiFi optimization & security.",
                                  badge: "Network",
                              },
                                          ]}
                          />
                        </div>
      <FinalCTA />
    </div>
  );
}
