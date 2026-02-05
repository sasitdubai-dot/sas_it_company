'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Certified Technicians',
      desc: 'Dell & HP certified. Component-level repair skills. Not just part-swappers.',
      color: 'from-orange-600 to-orange-400',
    },
    {
      icon: ClockIcon,
      title: '90-Day Warranty',
      desc: 'All repairs covered for 90 days. Parts and labor included.',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Same-Day Service',
      desc: 'Most repairs done same day. Drop off morning, pick up evening.',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Genuine & Compatible Parts',
      desc: 'Original parts when available. Quality compatible parts when not. You choose.',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Free Diagnostics',
      desc: 'We check your device first. Quote before any work. No hidden charges.',
      color: 'from-pink-600 to-pink-400',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Corporate Contracts',
      desc: 'Volume discounts for businesses. Pick-up/delivery service for offices.',
      color: 'from-red-600 to-red-400',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-orange-950 via-red-900 to-orange-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose SAS IT for Repairs
          </h2>
          <p className="text-xl text-gray-400">Your trusted computer repair partner in Dubai</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RepairProcess() {
  const steps = [
    {
      step: '01',
      title: 'Drop-Off or Pickup',
      desc: 'Bring device to our workshop or we pick up from your office. (Free within Dubai for bulk orders)',
    },
    {
      step: '02',
      title: 'Free Diagnostics',
      desc: 'We test and identify exact problem. Usually within 2 hours.',
    },
    {
      step: '03',
      title: 'Quote Approval',
      desc: 'We call with quote. You approve before we proceed. No surprise charges.',
    },
    {
      step: '04',
      title: 'Repair',
      desc: 'Most repairs same day. Complex issues 2-3 days. We keep you updated.',
    },
    {
      step: '05',
      title: 'Testing',
      desc: 'Full testing before return. Ensure everything works properly.',
    },
    {
      step: '06',
      title: 'Pickup/Delivery',
      desc: 'You pick up or we deliver. 90-day warranty starts.',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Repair Process
          </h2>
          <p className="text-xl text-gray-400">Simple, transparent, and fast</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((process, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-110 transition-transform">
                {process.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{process.title}</h3>
              <p className="text-sm text-gray-400">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}