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
import SchemaMarkup from "@/components/SchemaMarkup";

export default function NetworkingSecurityPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Networking & Security Solutions Dubai",
    "description": "Enterprise networking and security solutions in Dubai. Fortinet & Cisco certified. Office network setup, WiFi optimization, firewall, VPN. 500+ deployments. 24/7 NOC support.",
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
    "serviceType": "Networking and Security Solutions",
    "url": "https://www.sasitdubai.com/networking-security-dubai"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does office network setup cost in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Office network setup in Dubai starts from AED 3,999 for small businesses (up to 25 users). Enterprise setups for up to 100 users start from AED 12,999. Pricing includes hardware, installation, configuration, and warranty. Contact us for a free assessment."
        }
      },
      {
        "@type": "Question",
        "name": "Are you Fortinet certified network engineers in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SAS IT Services employs Fortinet NSE and Cisco CCNP certified engineers in Dubai. We are authorized Fortinet partners and have deployed 500+ networks across Dubai and the UAE."
        }
      },
      {
        "@type": "Question",
        "name": "How long does network installation take for a Dubai office?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard office network installation in Dubai takes 3-7 working days from design approval to go-live. This includes cabling, switch and router deployment, firewall configuration, WiFi setup, and testing. We can work outside business hours to minimize disruption."
        }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
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
      {/* Related Services */}
      <RelatedServices currentService="networking" />
    </main>
  );
}
