'use client';
import CablingServices from './sections/CablingServices';
import EmergencyCableRepair from './sections/EmergencyCableRepair';
import FAQ from './sections/FaqSection';
import FinalCTA from './sections/FinalCTA';
import HeroSection from './sections/HeroSection';
import InstallationProcess from './sections/InstallationProcess';
import OurCablingServices from './sections/OurCablingService';
import PricingPackages from './sections/PricingPackages';
import ServiceAreas from './sections/ServiceArea';
import WhatWeInstall from './sections/WhatWeInstall';
import WhyChooseSASIT from './sections/WhyChoose';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function NetworkingSecurityPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Structured Cabling Dubai',
    description: 'Professional structured cabling installation in Dubai. Cat6, Cat6A, and fiber optic cabling for offices and data centers. Certified installers, TIA/EIA standards compliant.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Structured Cabling Installation',
    url: 'https://www.sasitdubai.com/structured-cabling-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between Cat6 and Cat6A cabling?',
        acceptedAnswer: { '@type': 'Answer', text: 'Cat6 supports 1Gbps up to 55m in 10G environments. Cat6A supports 10Gbps up to 100m and is recommended for new office builds in Dubai. For most SME offices, Cat6 is sufficient. We recommend Cat6A for data centers or high-density environments.' }
      },
      {
        '@type': 'Question',
        name: 'How much does structured cabling cost in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Structured cabling in Dubai is typically priced per point. Cat6 cabling ranges from AED 150–300 per point including materials and installation. Fiber optic runs are quoted separately based on distance and connector type. Contact us for a free site survey and quote.' }
      },
      {
        '@type': 'Question',
        name: 'Do you provide structured cabling for new office fit-outs in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SAS IT is experienced in structured cabling for new office fit-outs across Dubai including Business Bay, DIFC, JLT, Media City, and Dubai Silicon Oasis. We work with fit-out contractors and can provide cabling as part of a full IT infrastructure setup.' }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <HeroSection />
      <OurCablingServices />
      <CablingServices />
      <WhatWeInstall />
      <PricingPackages />
      <WhyChooseSASIT />
      <InstallationProcess />
      <ServiceAreas />
      <EmergencyCableRepair />
      <FAQ />
      <FinalCTA />
      <RelatedServices currentService="cabling" />
    </main>
  );
}
