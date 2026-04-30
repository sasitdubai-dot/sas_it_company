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
import ReportingCommunication from './sections/ReportingCommunication';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function AmcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Annual Maintenance Contract (AMC) Dubai",
    "description": "Comprehensive IT AMC services in Dubai. 24/7 support, 4-hour response SLA, preventive maintenance, hardware and software support. 200+ companies under contract.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SAS IT Services",
      "telephone": "+971-526716178",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business Bay",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "url": "https://www.sasitdubai.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "serviceType": "IT Annual Maintenance Contract",
    "url": "https://www.sasitdubai.com/amc-annual-maintenance-dubai"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an IT AMC contract in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An IT Annual Maintenance Contract (AMC) in Dubai is a service agreement where an IT company provides scheduled preventive maintenance, 24/7 helpdesk support, hardware repairs, software updates, and emergency on-site response for a fixed monthly or annual fee. It ensures your IT infrastructure runs smoothly without unexpected repair costs."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in SAS IT's AMC services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our IT AMC in Dubai covers: 24/7 helpdesk support, preventive maintenance visits, hardware repair and replacement, network monitoring, server maintenance, antivirus and patch management, CCTV system maintenance, and quarterly performance reports. Response SLA of 4 hours for critical issues."
        }
      },
      {
        "@type": "Question",
        "name": "How much does an IT AMC cost in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT AMC costs in Dubai depend on the number of devices, users, and services included. SAS IT offers flexible AMC packages starting from AED 500/month for small businesses up to enterprise contracts for large organizations. Contact us for a free audit and custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "What is the response time for IT AMC support in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAS IT guarantees a 4-hour on-site response SLA for critical issues under our AMC contracts in Dubai. Remote support is available within 30 minutes for most issues. We operate 24/7 including weekends and public holidays."
        }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <HeroSection />
      <PricingPackages />
      <ServicesOverview />
      <TechnologyPartners />
      <SLASection />
      <WhyChooseUs />
      <InstallationProcess />
      <FAQAndCTA />
      <FinalCTA />
      <RelatedServices currentService="amc" />
    </main>
  );
}
