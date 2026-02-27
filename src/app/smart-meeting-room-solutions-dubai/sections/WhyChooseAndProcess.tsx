'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  ClockIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Logitech and Poly Certified',
      desc: 'Certified installers for industry-leading AV equipment',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: CpuChipIcon,
      title: 'Microsoft Teams Rooms Certified',
      desc: 'Official certification for Teams Rooms deployment',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: PencilSquareIcon,
      title: 'Custom Design',
      desc: 'Tailored to your space, brand, and collaboration needs',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Professional Cable Management',
      desc: 'Clean installations with hidden cables and premium finishes',
      color: 'from-orange-600 to-orange-400',
    },
    {
      icon: AcademicCapIcon,
      title: 'Comprehensive Training',
      desc: 'Staff training and easy-to-follow documentation',
      color: 'from-pink-600 to-pink-400',
    },
    {
      icon: ClockIcon,
      title: '24/7 Technical Support',
      desc: 'Always available to keep your meetings running smoothly',
      color: 'from-cyan-600 to-cyan-400',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose SAS IT for Meeting Rooms
          </h2>
          <p className="text-xl text-gray-400">Your trusted AV integration partner in Dubai</p>
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

export function InstallationProcess() {
  const steps = [
    {
      step: '01',
      title: 'Room Assessment',
      desc: 'Measure space, understand usage and identify requirements',
    },
    {
      step: '02',
      title: 'System Design',
      desc: 'Equipment selection, layout planning and integration design',
    },
    {
      step: '03',
      title: 'Installation',
      desc: 'Displays, cameras, mics, speakers, cabling and control systems',
    },
    {
      step: '04',
      title: 'Configuration',
      desc: 'Network setup, platform integration and quality testing',
    },
    {
      step: '05',
      title: 'Training & Support',
      desc: 'User training, documentation and ongoing technical support',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Installation Process
          </h2>
          <p className="text-xl text-gray-400">From concept to completion in 5 steps</p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((process, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}