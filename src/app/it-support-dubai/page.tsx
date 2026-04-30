import Link from 'next/link';
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'IT Support Dubai | 24/7 IT Support Company | SAS IT Services',
  description: 'Trusted IT support company in Dubai. 24/7 helpdesk, on-site engineers, 4-hour response SLA. Serving Business Bay, DIFC, JLT, Dubai Marina & all Dubai areas. Call +971-526716178',
  keywords: 'IT support Dubai, IT support company Dubai, IT support services Dubai, 24/7 IT support Dubai, on-site IT support Dubai, IT helpdesk Dubai',
  alternates: { canonical: 'https://www.sasitdubai.com/it-support-dubai' },
  openGraph: {
    title: 'IT Support Dubai | 24/7 IT Support Company | SAS IT Services',
    description: 'Trusted IT support company in Dubai with 24/7 helpdesk and 4-hour on-site response. 500+ businesses supported across Dubai.',
    url: 'https://www.sasitdubai.com/it-support-dubai',
    siteName: 'SAS IT Services',
    images: [{ url: '/images/logo.jpeg', width: 800, height: 600, alt: 'IT Support Dubai - SAS IT Services' }],
    locale: 'en_AE',
    type: 'website'
  }
};

export default function ITSupportDubai() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Support Dubai',
    description: '24/7 IT support services in Dubai. Remote helpdesk and on-site engineers available across all Dubai business zones. 4-hour response SLA.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'IT Support',
    url: 'https://www.sasitdubai.com/it-support-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What IT support services do you offer in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'SAS IT provides 24/7 remote helpdesk support, on-site IT support, network troubleshooting, server maintenance, hardware repair, cybersecurity support, and IT AMC contracts for businesses across Dubai.' }
      },
      {
        '@type': 'Question',
        name: 'How fast is your IT support response time in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'We guarantee 30-minute remote response and 4-hour on-site response for critical IT issues in Dubai under our AMC contracts. Ad-hoc support is available same-day across most Dubai business zones.' }
      },
      {
        '@type': 'Question',
        name: 'Do you provide IT support for small businesses in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SAS IT supports businesses of all sizes in Dubai, from 5-user startups to 500+ user enterprises. We offer flexible support plans — pay-as-you-go or annual IT AMC contracts — tailored to your budget and requirements.' }
      },
      {
        '@type': 'Question',
        name: 'Which areas of Dubai do you provide IT support in?',
        acceptedAnswer: { '@type': 'Answer', text: 'We provide on-site IT support across all Dubai business zones including Business Bay, DIFC, Dubai Marina, JLT, Jumeirah Lake Towers, Media City, Internet City, Dubai Silicon Oasis, DAFZA, JAFZA, Downtown Dubai, Deira, and Bur Dubai.' }
      }
    ]
  };

  const services = [
    { title: '24/7 Remote Helpdesk', desc: 'Phone, email and remote desktop support around the clock. Most issues resolved in under 30 minutes without an engineer visit.' },
    { title: 'On-Site IT Support', desc: 'Dubai-based engineers deployed to your office within 4 hours. No outsourcing, no waiting — local team, fast response.' },
    { title: 'Network Troubleshooting', desc: 'WiFi issues, slow internet, VPN failures, switch/router faults — diagnosed and fixed same day.' },
    { title: 'Server & Infrastructure Support', desc: 'Windows Server, Linux, VMware, Hyper-V, Active Directory, Exchange — full server support across all platforms.' },
    { title: 'Cybersecurity Support', desc: 'Virus removal, firewall configuration, security audits, patch management, and employee phishing training.' },
    { title: 'Hardware Support & Repair', desc: 'Laptop, desktop, printer, and peripheral repair. Warranty management and spare parts sourcing.' },
    { title: 'Cloud Support', desc: 'Microsoft 365, Google Workspace, Azure, and AWS — setup, migration, and ongoing administration.' },
    { title: 'IT AMC Contracts', desc: 'Fixed-cost annual contracts covering all support needs. Predictable IT costs, no surprise bills.' },
  ];

  const areas = ['Business Bay', 'DIFC', 'Dubai Marina', 'JLT', 'Media City', 'Internet City', 'Dubai Silicon Oasis', 'DAFZA', 'JAFZA', 'Downtown Dubai', 'Sheikh Zayed Road', 'Deira', 'Bur Dubai', 'Al Quoz'];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            24/7 IT Support — Dubai-Based Engineers
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            IT Support Company<br />
            <span className="text-blue-400">Dubai</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Fast, reliable IT support for Dubai businesses. 24/7 helpdesk, 4-hour on-site response, 500+ companies supported. No overseas call centres — local Dubai engineers only.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971526716178" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all">
              Call Now: +971-526716178
            </a>
            <a href="https://wa.me/971526716178" className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all">
              WhatsApp for Free Quote
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[['500+', 'Businesses Supported'], ['24/7', 'Support Available'], ['4hr', 'On-Site Response'], ['10+', 'Years in Dubai']].map(([num, label]) => (
              <div key={label} className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-black text-blue-400">{num}</div>
                <div className="text-sm text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-4">IT Support Services in Dubai</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Everything your Dubai business needs, from a single support team.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">IT Support Across All Dubai Areas</h2>
          <p className="text-gray-400 mb-10">On-site engineers covering every major business zone in Dubai.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why SAS IT */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">Why Dubai Businesses Choose SAS IT for IT Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Local Dubai Team', body: 'All our engineers are based in Dubai. No overseas helpdesks, no delays. When you call, a local engineer answers.' },
              { title: '4-Hour On-Site SLA', body: 'We guarantee on-site response within 4 hours for critical issues. Most remote issues resolved in 30 minutes.' },
              { title: 'No Lock-In Contracts', body: 'Flexible monthly or annual IT support contracts. Scale up or down as your business grows. No hidden fees.' },
              { title: 'Certified Engineers', body: 'Fortinet NSE, Cisco CCNP, and Microsoft certified engineers handling your infrastructure.' },
              { title: 'Transparent Pricing', body: 'Fixed-cost AMC contracts so you always know what you pay. No surprise call-out charges.' },
              { title: 'Complete IT Coverage', body: 'One provider for all your IT: support, networking, CCTV, servers, telephony, and cabling.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-blue-400 font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">IT Support Dubai — Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">{faq.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-8">Related IT Services in Dubai</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'IT AMC Dubai', href: '/amc-annual-maintenance-dubai' },
              { label: 'Networking & Security', href: '/networking-security-dubai' },
              { label: 'CCTV Installation Dubai', href: '/commercial-cctv-installation-dubai' },
              { label: 'Server Solutions Dubai', href: '/server-solutions-dubai' },
              { label: 'Managed IT Services Dubai', href: '/managed-it-services-dubai' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Get IT Support for Your Dubai Business Today</h2>
          <p className="text-gray-300 mb-8">Free consultation. No obligation. Local Dubai engineers ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971526716178" className="bg-white text-blue-900 font-black py-4 px-8 rounded-xl text-lg hover:bg-blue-50 transition-all">Call +971-526716178</a>
            <a href="https://wa.me/971526716178" className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
