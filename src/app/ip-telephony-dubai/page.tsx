'use client';
import HeroSection from './sections/Hero';
import PricingSection from './sections/PricingPackages';
import FeaturesSection from './sections/Features';
import WhyChooseSection from './sections/WhyChooseUs';
import { InstallationProcess, FAQSection } from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function IPTelephonyPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IP Telephony Solutions Dubai',
    description: 'Professional IP telephone system installation in Dubai. Yeastar, Grandstream, Avaya, and Yealink VoIP systems. Scalable communication solutions for businesses.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'IP Telephony Installation',
    url: 'https://www.sasitdubai.com/ip-telephony-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an IP telephone system and why does my Dubai business need one?',
        acceptedAnswer: { '@type': 'Answer', text: 'An IP telephone (VoIP) system routes calls over your internet connection instead of traditional phone lines. For Dubai businesses, this means lower call costs, remote working capability, easy scalability, and features like call recording, auto-attendant, and mobile integration — all at a fraction of traditional PBX costs.' }
      },
      {
        '@type': 'Question',
        name: 'Which IP phone brands do you install in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'We install and configure Yeastar, Grandstream, Avaya, Yealink, and 3CX IP telephone systems in Dubai. All systems include full warranty, configuration, and staff training.' }
      },
      {
        '@type': 'Question',
        name: 'Can I keep my existing phone numbers when switching to VoIP in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Number porting is available for most UAE telecom providers. We handle the full porting process as part of our IP telephony installation service in Dubai, ensuring zero downtime during the transition.' }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <WhyChooseSection />
      <InstallationProcess />
      <FAQSection />
      <FinalCTA />
      <RelatedServices currentService="telephony" />
    </main>
  );
}
