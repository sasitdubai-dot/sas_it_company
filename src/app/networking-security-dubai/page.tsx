"use client";

import Hero from "./sections/Hero";
import ServicesOverview from "./sections/ServicesOverview";
import PricingPackages from "./sections/PricingPackages";
import TechnologyPartners from "./sections/TechnologyPartners";
import SecurityThreats from "./sections/SecurityThreats";
import WhyChooseUs from "./sections/WhyChooseUs";
import InstallationProcess from "./sections/InstallationProcess";
import ServiceAreas from "./sections/ServiceAreas";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";

import RelatedServices from "@/components/RelatedServices";

export default function NetworkingSecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Hero />
      <ServicesOverview />
      <PricingPackages />
      <TechnologyPartners />
      <SecurityThreats />
      <WhyChooseUs />
      <InstallationProcess />
      <ServiceAreas />
      <FAQ />

      {/* Related Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedServices
          title="Related Services"
          links={[
            {
              name: "Structured Cabling Services Dubai",
              href: "/structured-cabling-dubai",
              description: "Network-ready cabling, racks, patch panels & fiber.",
              badge: "Infrastructure",
            },
            {
              name: "Server Solutions Dubai",
              href: "/server-solutions-dubai",
              description: "On-prem / cloud servers, setup, monitoring & support.",
              badge: "Data Center",
            },
          ]}
        />
      </div>

      <FinalCTA />
    </div>
  );
}
