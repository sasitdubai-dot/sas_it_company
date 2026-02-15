'use client';
import HeroSection from './sections/HeroSection';
import PricingPackages from './sections/PricingPackages';
import ServicesOverview from './sections/ServicesOverview';
import AdditionalServices from './sections/AdditionalServices';
import EmergencyEscalation from './sections/EmergencyEscalation';
import TechnologyPartners from './sections/TechnologyPartners';
import SecurityThreats from './sections/SecurityThreats';
import WhyChooseUs from './sections/WhyChooseUs';
import InstallationProcess from './sections/InstallationProcess';
import FAQAndCTA from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import SLASection from './sections/SLASection';
import ServiceAreas from './sections/ServiceAreas';
import ReportingCommunication  from './sections/ReportingCommunication';

import RelatedServices from "@/components/RelatedServices";


export default function AmcPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Pricing Packages */}
      <PricingPackages />

      {/* Services Overview */}
      <ServicesOverview />
         <ServiceAreas />
         <AdditionalServices/>
         <EmergencyEscalation />

       <SLASection /> 
      {/* Technology Partners */}
      {/* <TechnologyPartners /> */}

      {/* Security Threats */}
      <SecurityThreats />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Installation Process */}
      <InstallationProcess />
      <ReportingCommunication />

      {/* FAQ and Call to Action */}
      <FAQAndCTA />
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <RelatedServices
        title="Related Services"
        links={[
          {
            name: "Server Solutions Dubai",
            href: "/server-solutions-dubai",
            description: "Server health checks, updates, backups & monitoring.",
            badge: "Infrastructure",
          },
          {
            name: "Computer Repair Services Dubai",
            href: "/computer-repair-dubai",
            description: "Workstation troubleshooting, upgrades & fast fixes.",
            badge: "Support",
          },
        ]}
      />
      </div>
      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
