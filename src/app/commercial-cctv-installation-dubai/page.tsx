'use client';
import HeroSection from './sections/HeroSection';
import SolutionsSection from './sections/SolutionsSection';
import CameraTechnologies from './sections/CameraTechnologies';
import IndustriesSection from './sections/IndustriesSection';
import WhyChooseSection from './sections/WhyChooseSection';
import InstallationProcess from './sections/InstallationProcess';
import BrandsSection from './sections/BrandsSection';
import FinalCTA from './sections/FinalCTA';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function CommercialCCTVPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial CCTV Installation Dubai",
    "description": "Professional CCTV and security camera installation services for businesses in Dubai. Hikvision and Dahua certified installers. Same-day installation available.",
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
    "serviceType": "CCTV Installation",
    "url": "https://www.sasitdubai.com/commercial-cctv-installation-dubai"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does CCTV installation cost in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CCTV installation in Dubai starts from AED 600 for a basic system. Enterprise systems for offices and warehouses typically range from AED 2,000 to AED 20,000+ depending on the number of cameras, resolution, and storage requirements. We provide free site surveys and custom quotes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day CCTV installation in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SAS IT Services offers same-day CCTV installation across Dubai subject to availability. Call +971-526716178 or WhatsApp us to confirm availability for your area."
        }
      },
      {
        "@type": "Question",
        "name": "Are you SIRA approved CCTV installers in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We install CCTV systems compliant with Dubai's SIRA (Security Industry Regulatory Agency) requirements. All our installations meet UAE building code standards for commercial properties."
        }
      },
      {
        "@type": "Question",
        "name": "What CCTV brands do you install in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are certified installers for Hikvision, Dahua, Samsung, Uniview, Axis, CP Plus, and Bosch CCTV systems. All equipment comes with manufacturer warranty plus our 2-year installation warranty."
        }
      },
      {
        "@type": "Question",
        "name": "Can I view my CCTV cameras remotely from my phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All CCTV systems we install include mobile app setup for iOS and Android. You can view live footage and recordings from anywhere in the world. We configure remote access and provide full training as part of every installation."
        }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <HeroSection />
      <SolutionsSection />
      <CameraTechnologies />
      <IndustriesSection />
      <WhyChooseSection />
      <InstallationProcess />
      <BrandsSection />
      <FinalCTA />
      {/* Related Services */}
      <RelatedServices currentService="cctv" />
    </main>
  );
}
