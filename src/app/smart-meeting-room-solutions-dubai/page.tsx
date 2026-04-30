'use client';
import HeroSection from './sections/HeroSection';
import MeetingRoomSolutions from './sections/MeetingRoomSolutions';
import { CompleteAVSolutions, PlatformIntegration } from './sections/AVAndPlatforms';
import { WhyChooseSection, InstallationProcess } from './sections/WhyChooseAndProcess';
import { BrandsSection, WhatsIncluded } from './sections/BrandsAndIncludes';
import FinalCTA from './sections/FinalCTA';
import RelatedServices from '@/components/RelatedServices';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function MeetingRoomPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Smart Meeting Room Solutions Dubai',
    description: 'Professional smart meeting room setup in Dubai. AV systems, video conferencing, Zoom and Teams rooms, interactive displays. Logitech and Yealink certified. Business Bay, DIFC, JLT.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Smart Meeting Room Installation',
    url: 'https://www.sasitdubai.com/smart-meeting-room-solutions-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a smart meeting room setup cost in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Smart meeting room setup in Dubai starts from AED 5,000 for a basic huddle room with a display, conference speaker, and camera. Full boardroom AV systems with a 4K display, ceiling microphones, and Zoom/Teams integration typically range AED 15,000–50,000 depending on room size and equipment. Contact us for a free consultation.' }
      },
      {
        '@type': 'Question',
        name: 'Do you set up Zoom Rooms and Microsoft Teams Rooms in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SAS IT installs and configures certified Zoom Rooms and Microsoft Teams Rooms in Dubai using Logitech, Yealink, and Poly hardware. We handle hardware procurement, installation, licensing setup, and staff training.' }
      },
      {
        '@type': 'Question',
        name: 'Can you upgrade our existing conference room in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We assess your current AV equipment and recommend targeted upgrades — adding wireless presentation, upgrading the camera or microphone, or fully integrating with Zoom or Teams — without necessarily replacing everything. We work around your budget.' }
      }
    ]
  };

  return (
    <main>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <HeroSection />
      <MeetingRoomSolutions />
      <CompleteAVSolutions />
      <PlatformIntegration />
      <WhyChooseSection />
      <InstallationProcess />
      <BrandsSection />
      <WhatsIncluded />
      <RelatedServices currentService="meeting-rooms" />
      <FinalCTA />
    </main>
  );
}
