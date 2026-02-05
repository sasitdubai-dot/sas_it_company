'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, MapPinIcon, BoltIcon, ClockIcon, CpuChipIcon, CurrencyDollarIcon,DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Certified Engineers',
      desc: 'Yeastar certified, Grandstream trained. Real telephony expertise.',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: MapPinIcon,
      title: 'Dubai Telco Experience',
      desc: 'We work with Etisalat, du, EITC. Handle number porting, SIP trunks.',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost Savings',
      desc: 'Save 40-60% vs traditional phone lines. Lower call rates internationally.',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Remote Work Ready',
      desc: 'Mobile apps, softphones, work from anywhere with same extension.',
      color: 'from-yellow-600 to-yellow-400',
    },
    {
      icon: BoltIcon,
      title: 'Scalable',
      desc: 'Start small, grow easily. Add users without hardware changes.',
      color: 'from-pink-600 to-pink-400',
    },
    {
      icon: CpuChipIcon,
      title: 'Integration Specialists',
      desc: 'Connect to your CRM, helpdesk, ERP systems.',
      color: 'from-red-600 to-red-400',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose SAS IT for Telephony
          </h2>
          <p className="text-xl text-gray-400">Your trusted IP phone system partner in Dubai</p>
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

