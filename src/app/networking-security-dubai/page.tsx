'use client';
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

export default function NetworkingSecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <>
      <Hero />
      <ServicesOverview />
      <PricingPackages />
      <TechnologyPartners />
      <SecurityThreats />
      <WhyChooseUs />
      <InstallationProcess />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
    </>
    
     

            </div>
        );
        }

