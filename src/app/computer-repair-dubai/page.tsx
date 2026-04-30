'use client';
import HeroSection from './sections/HeroSection';
import RepairServicesSection from './sections/RepairServicesSection';
import { BrandsWeRepair, CommonRepairs } from './sections/BrandsAndRepairs';
import { WhyChooseSection, RepairProcess } from './sections/WhyChooseAndProcess';
import { DataRecoverySection, CorporateServices, CommonIssuesSection, PreventiveMaintenanceSection } from './sections/AdditionalServices';
import { FAQSection, FinalCTA } from './sections/FAQAndCTA';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function ComputerRepairPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Computer Repair Dubai',
    description: 'Professional computer and laptop repair services in Dubai. Same-day diagnosis, hardware replacement, data recovery, virus removal. Corporate and home users. Call +971-526716178.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Computer Repair',
    url: 'https://www.sasitdubai.com/computer-repair-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly can you repair my computer in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'SAS IT offers same-day computer repair in Dubai for most common issues including virus removal, slow performance, OS reinstall, and RAM/SSD upgrades. Hardware repairs requiring parts typically take 1–3 business days. We offer on-site repair for corporate clients across Dubai.' }
      },
      {
        '@type': 'Question',
        name: 'Do you repair Apple Mac computers in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We repair MacBook, iMac, and Mac Mini computers in Dubai including screen replacement, battery replacement, logic board diagnostics, and macOS reinstallation. We service all Apple Mac models.' }
      },
      {
        '@type': 'Question',
        name: 'Can you recover data from a crashed hard drive in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer professional data recovery services in Dubai for crashed HDDs, failed SSDs, accidentally deleted files, and corrupted drives. Success rates depend on the type of failure. Contact us for a free assessment before committing to data recovery.' }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <HeroSection />
      <RepairServicesSection />
      <BrandsWeRepair />
      <CommonRepairs />
      <WhyChooseSection />
      <RepairProcess />
      <DataRecoverySection />
      <CorporateServices />
      <CommonIssuesSection />
      <PreventiveMaintenanceSection />
      <FAQSection />
      <RelatedServices currentService="computer-repair" />
      <FinalCTA />
    </main>
  );
}
