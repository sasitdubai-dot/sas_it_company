'use client';
import DisasterRecovery from './sections/DisasterRecovery';
import CommonQuestions from './sections/CommonQuestion';
import EmergencyServerSupport from './sections/EmergencyServerSupport';
import FinalCTA from './sections/FinalCTA';
import Hero from './sections/Hero';
import ServerPricing from './sections/PricingPackages';
import ServerInstallationProcess from './sections/ServerInstallationProcess';
import ServerMaintenancePlans from './sections/ServerMaintenancePlans';
import ServerWeDepoly from './sections/ServerWeDepoly';
import ServiceAreas from './sections/ServiceAreas';
import WhatWeOffer from './sections/WhatWeOffer';
import WhyChooseServers from './sections/WhyChooseServer';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function ServerSolution() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Server Solutions Dubai',
    description: 'Professional server setup, installation, and maintenance in Dubai. Dell, HP, and Lenovo certified. On-premises and cloud server solutions for businesses of all sizes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Server Solutions',
    url: 'https://www.sasitdubai.com/server-solutions-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What server brands do you install in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'SAS IT Services installs and supports Dell PowerEdge, HP ProLiant, Lenovo ThinkSystem, and IBM servers in Dubai. We also support Synology and QNAP NAS solutions for SMEs.' }
      },
      {
        '@type': 'Question',
        name: 'Do you offer cloud server migration in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide full cloud migration services in Dubai to AWS, Microsoft Azure, and Google Cloud. Our team handles planning, migration, and post-migration support with zero data loss.' }
      },
      {
        '@type': 'Question',
        name: 'How much does server setup cost in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Server setup costs in Dubai depend on hardware specifications and number of users. Entry-level NAS servers start from AED 3,000. Rack servers for SMEs typically range AED 8,000–25,000 including installation and configuration. Contact us for a free assessment.' }
      },
      {
        '@type': 'Question',
        name: 'Do you provide server maintenance contracts in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer annual server maintenance contracts (AMC) in Dubai covering preventive maintenance, OS updates, hardware health checks, backup monitoring, and 24/7 emergency support with 4-hour response SLA.' }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <Hero />
      <WhatWeOffer />
      <ServerWeDepoly />
      <ServerPricing />
      <ServerMaintenancePlans />
      <WhyChooseServers />
      <ServerInstallationProcess />
      <ServiceAreas />
      <DisasterRecovery />
      <EmergencyServerSupport />
      <CommonQuestions />
      <FinalCTA />
      <RelatedServices currentService="server" />
    </main>
  );
}
