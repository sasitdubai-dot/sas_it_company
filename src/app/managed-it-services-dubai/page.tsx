import Link from 'next/link';
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Managed IT Services Dubai | Fully Managed IT Support | SAS IT',
  description: 'Fully managed IT services in Dubai. Proactive monitoring, 24/7 support, network management, cybersecurity, cloud administration. Fixed monthly cost. Call +971-526716178',
  keywords: 'managed IT services Dubai, managed IT services in Dubai, managed IT support Dubai, IT managed services provider Dubai, outsourced IT Dubai',
  alternates: { canonical: 'https://www.sasitdubai.com/managed-it-services-dubai' },
  openGraph: {
    title: 'Managed IT Services Dubai | Fully Managed IT Support | SAS IT',
    description: 'Fully managed IT services in Dubai. Proactive monitoring, 24/7 support, network management, cybersecurity. Fixed monthly pricing.',
    url: 'https://www.sasitdubai.com/managed-it-services-dubai',
    siteName: 'SAS IT Services',
    images: [{ url: '/images/logo.jpeg', width: 800, height: 600, alt: 'Managed IT Services Dubai - SAS IT Services' }],
    locale: 'en_AE',
    type: 'website'
  }
};

export default function ManagedITServicesDubai() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Managed IT Services Dubai',
    description: 'Fully managed IT services for Dubai businesses. Proactive 24/7 monitoring, helpdesk, network management, cybersecurity, cloud, and on-site support under one fixed monthly cost.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SAS IT Services',
      telephone: '+971-526716178',
      address: { '@type': 'PostalAddress', streetAddress: 'Business Bay', addressLocality: 'Dubai', addressCountry: 'AE' },
      url: 'https://www.sasitdubai.com'
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Managed IT Services',
    url: 'https://www.sasitdubai.com/managed-it-services-dubai'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are managed IT services and how do they differ from regular IT support in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Regular IT support in Dubai is reactive — you call when something breaks. Managed IT services are proactive — we continuously monitor your infrastructure, prevent issues before they happen, and handle everything IT-related for a fixed monthly fee. This means fewer outages, predictable costs, and no surprise repair bills.' }
      },
      {
        '@type': 'Question',
        name: 'What is included in managed IT services in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our managed IT services in Dubai include: 24/7 infrastructure monitoring, remote and on-site helpdesk, network management, server administration, cybersecurity (firewall, antivirus, patch management), Microsoft 365 and cloud administration, CCTV and access control maintenance, monthly reporting, and a dedicated account manager.' }
      },
      {
        '@type': 'Question',
        name: 'How much do managed IT services cost in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Managed IT services in Dubai are priced per user or per device per month. Typical pricing ranges from AED 150–400 per user per month depending on the service level and number of users. For 10–50 user businesses, expect AED 2,000–15,000/month. Contact us for a free assessment and custom quote.' }
      },
      {
        '@type': 'Question',
        name: 'Can you take over IT management from our current IT team or provider in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly onboard businesses transitioning from in-house IT teams or switching managed IT providers in Dubai. Our onboarding process includes a full infrastructure audit, documentation of all systems, and a smooth handover within 2 weeks with zero downtime.' }
      }
    ]
  };

  const included = [
    { title: '24/7 Monitoring', desc: 'Servers, network, and endpoints monitored around the clock. Alerts and auto-remediation before users notice.' },
    { title: 'Helpdesk Support', desc: '30-minute remote response. Unlimited support tickets. 4-hour on-site SLA for critical issues.' },
    { title: 'Network Management', desc: 'Firewall, switches, WiFi, VPN — proactively managed, patched, and optimised.' },
    { title: 'Cybersecurity', desc: 'Endpoint protection, patch management, vulnerability scanning, phishing simulation, and incident response.' },
    { title: 'Cloud Administration', desc: 'Microsoft 365, Azure, Google Workspace, and AWS — user management, licensing, backups, and optimisation.' },
    { title: 'Backup & Disaster Recovery', desc: 'Automated daily backups with tested recovery. RTO and RPO defined in your service agreement.' },
    { title: 'Hardware Management', desc: 'Asset tracking, warranty management, hardware procurement, and lifecycle planning.' },
    { title: 'Monthly Reporting', desc: 'Full visibility into your IT health — uptime stats, ticket trends, security events, and recommendations.' },
  ];

  const plans = [
    { name: 'Essential', price: 'AED 150', unit: '/user/month', users: 'Up to 25 users', features: ['24/7 remote helpdesk', 'Endpoint monitoring', 'Antivirus & patching', 'Monthly report', 'Email support'] },
    { name: 'Business', price: 'AED 250', unit: '/user/month', users: 'Up to 100 users', features: ['Everything in Essential', 'On-site support (4hr SLA)', 'Network monitoring', 'Firewall management', 'Microsoft 365 admin', 'Quarterly review'], highlight: true },
    { name: 'Enterprise', price: 'Custom', unit: 'pricing', users: '100+ users', features: ['Everything in Business', 'Dedicated account manager', 'CCTV & access control', 'Cybersecurity audits', 'DR planning & testing', 'Weekly reporting'] },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Fully Managed IT — Dubai Businesses
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Managed IT Services<br />
            <span className="text-indigo-400">Dubai</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop reacting to IT problems. We proactively monitor, manage, and secure your entire IT infrastructure for a fixed monthly cost — so you can focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971526716178" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all">
              Call: +971-526716178
            </a>
            <a href="https://wa.me/971526716178" className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all">
              WhatsApp for Free Quote
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[['500+', 'Devices Managed'], ['99.9%', 'Uptime SLA'], ['24/7', 'Monitoring'], ['30min', 'Remote Response']].map(([num, label]) => (
              <div key={label} className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-indigo-400">{num}</div>
                <div className="text-sm text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-4">What's Included in Our Managed IT Services</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">One monthly fee covers your entire IT operation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-4">Managed IT Services Pricing Dubai</h2>
          <p className="text-gray-400 text-center mb-12">Simple per-user pricing. No hidden costs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border ${ plan.highlight ? 'bg-indigo-900/40 border-indigo-500' : 'bg-gray-800 border-gray-700' }`}>
                {plan.highlight && <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">Most Popular</div>}
                <h3 className="text-white font-black text-2xl mb-1">{plan.name}</h3>
                <div className="mb-1"><span className="text-3xl font-black text-indigo-400">{plan.price}</span><span className="text-gray-400 text-sm">{plan.unit}</span></div>
                <div className="text-gray-500 text-sm mb-6">{plan.users}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>{f}</li>
                  ))}
                </ul>
                <a href="tel:+971526716178" className="block text-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">Managed IT Services Dubai — FAQs</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">{faq.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-8">Related IT Services in Dubai</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'IT Support Dubai', href: '/it-support-dubai' },
              { label: 'IT AMC Dubai', href: '/amc-annual-maintenance-dubai' },
              { label: 'Networking & Security', href: '/networking-security-dubai' },
              { label: 'CCTV Installation Dubai', href: '/commercial-cctv-installation-dubai' },
              { label: 'Server Solutions Dubai', href: '/server-solutions-dubai' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Outsource Your IT in Dubai?</h2>
          <p className="text-gray-300 mb-8">Free IT audit. No obligation. We'll show you exactly what's at risk and what it costs to fix it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971526716178" className="bg-white text-indigo-900 font-black py-4 px-8 rounded-xl text-lg hover:bg-indigo-50 transition-all">Call +971-526716178</a>
            <a href="https://wa.me/971526716178" className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
