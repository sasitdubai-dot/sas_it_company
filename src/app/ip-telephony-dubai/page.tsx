'use client';

import HeroSection from './sections/Hero';
import PricingSection from './sections/PricingPackages';
import FeaturesSection from './sections/Features';
import WhyChooseSection from './sections/WhyChooseUs';
import { InstallationProcess, FAQSection } from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';

export default function IPTelephonyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <WhyChooseSection />
      <InstallationProcess />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}