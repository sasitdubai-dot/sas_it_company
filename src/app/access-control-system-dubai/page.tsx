'use client';

import HeroSection from './sections/HeroSection';
import AccessTechnologies from './sections/AccessTechnologies';
import { CompleteFeatures, IndustriesWeServe } from './sections/FeaturesAndIndustries';
import { WhyChooseSection, InstallationProcess } from './sections/WhyChooseAndProcess';
import { BrandsSection, KeyBenefits, FinalCTA } from './sections/BrandsBenefitsCTA';
import RelatedServices from "@/components/RelatedServices";

export default function AccessControlPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Emerald/Teal/Green gradient */}
      <HeroSection />
      
      {/* Access Technologies - Slate/Gray gradient */}
      <AccessTechnologies />
      
      {/* Complete Features - Teal/Emerald gradient */}
      <CompleteFeatures />
      
      {/* Industries - Green/Lime gradient */}
      <IndustriesWeServe />
      
      {/* Why Choose - Slate/Gray gradient */}
      <WhyChooseSection />
      
      {/* Installation Process - Emerald/Teal gradient */}
      <InstallationProcess />
      
      {/* Brands - Lime/Green gradient */}
      <BrandsSection />
      
      {/* Key Benefits - Teal/Cyan gradient */}
      <KeyBenefits />
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
      {/* Final CTA - Emerald/Teal/Green gradient */}
      <FinalCTA />
    </div>
  );
}
