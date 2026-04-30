'use client';
import HeroSection from './sections/HeroSection';
import AccessTechnologies from './sections/AccessTechnologies';
import { CompleteFeatures, IndustriesWeServe } from './sections/FeaturesAndIndustries';
import { WhyChooseSection, InstallationProcess } from './sections/WhyChooseAndProcess';
import { BrandsSection, KeyBenefits, FinalCTA } from './sections/BrandsBenefitsCTA';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function AccessControlPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Access Control System Dubai',
    description: 'Professional access control system installation in Dubai. Biometric, card reader, and smart lock systems for offices, warehouses, and commercial properties. ZKTeco certified installers.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Access Control System Installation',
    url: 'https://www.sasitdubai.com/access-control-system-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of access control systems do you install in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'We install biometric fingerprint systems, face recognition access control, RFID card and fob readers, PIN keypads, and smart lock systems in Dubai. We work with ZKTeco, Hikvision, and other leading brands. Systems can be standalone or integrated with your CCTV and HR software.' }
      },
      {
        '@type': 'Question',
        name: 'Can access control integrate with CCTV in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We design and install fully integrated access control and CCTV systems in Dubai. When an access event occurs, the linked camera automatically records the entry or exit. This is ideal for Dubai offices requiring complete audit trails and security compliance.' }
      },
      {
        '@type': 'Question',
        name: 'How much does access control installation cost in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Access control installation in Dubai starts from AED 800 per door for a basic RFID reader system. Biometric fingerprint or face recognition systems start from AED 1,200 per door. Full office systems with multiple doors are quoted based on site survey. Contact us for a free assessment.' }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <HeroSection />
      <AccessTechnologies />
      <CompleteFeatures />
      <IndustriesWeServe />
      <WhyChooseSection />
      <InstallationProcess />
      <BrandsSection />
      <KeyBenefits />
      <RelatedServices currentService="access-control" />
      <FinalCTA />
    </main>
  );
}
