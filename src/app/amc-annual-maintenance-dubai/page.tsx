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

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
