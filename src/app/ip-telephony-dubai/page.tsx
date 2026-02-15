"use client";

import HeroSection from "./sections/Hero";
import PricingSection from "./sections/PricingPackages";
import FeaturesSection from "./sections/Features";
import WhyChooseSection from "./sections/WhyChooseUs";
import { InstallationProcess, FAQSection } from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";

import RelatedServices from "@/components/RelatedServices";

export default function IPTelephonyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <WhyChooseSection />
      <InstallationProcess />
      <FAQSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedServices
          title="Related Services"
          links={[
            {
              name: "Structured Cabling Services Dubai",
              href: "/structured-cabling-dubai",
              description: "Cabling, racks & patch panels for VoIP systems.",
              badge: "Infrastructure",
            },
            {
              name: "Networking & Security Services Dubai",
              href: "/networking-security-dubai",
              description: "Stable network setup & secure VoIP traffic handling.",
              badge: "Network",
            },
          ]}
        />
      </div>

      <FinalCTA />
    </div>
  );
}
