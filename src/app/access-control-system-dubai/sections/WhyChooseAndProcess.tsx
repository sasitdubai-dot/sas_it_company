'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon,
  ArrowsPointingOutIcon,
  BellAlertIcon,
  DocumentTextIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'ZKTeco & Hikvision Certified',
      desc: 'Certified installers for leading access control brands',
    },
    {
      icon: CpuChipIcon,
      title: 'Complete Integration',
      desc: 'Integration with existing CCTV and alarm systems',
    },
    {
      icon: CloudIcon,
      title: 'Cloud or On-Premise',
      desc: 'Flexible deployment options to suit your needs',
    },
    {
      icon: ArrowsPointingOutIcon,
      title: 'Highly Scalable',
      desc: 'From 1 to 1000+ doors with ease',
    },
    {
      icon: BellAlertIcon,
      title: 'Emergency Features',
      desc: 'Override and fire alarm integration',
    },
    {
      icon: DocumentTextIcon,
      title: 'Compliance Reports',
      desc: 'Detailed audit trails and compliance documentation',
    },
    {
      icon: ClockIcon,
      title: '24/7 Technical Support',
      desc: 'Always available to keep your facility secure',
    },
  ];
  const Icon = reasons[6].icon;

  return (
    <section className="py-24 relative bg-gradient-to-r from-[#0a0a1a] via-[#1a1a3a] to-[#2a0a3a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose SAS IT for Access Control
          </h2>
          <p className="text-xl text-gray-400">Your trusted security partner in Dubai</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {reasons.slice(0, 6).map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.4),0_0_25px_rgba(255,27,141,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6),0_0_40px_rgba(255,27,141,0.5)]">
                <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-[#00D4FF] group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Last item centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/40 transition-all group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.4),0_0_25px_rgba(255,27,141,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6),0_0_40px_rgba(255,27,141,0.5)]">
              <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#00D4FF] group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{reasons[6].title}</h3>
            <p className="text-gray-400 leading-relaxed">{reasons[6].desc}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function InstallationProcess() {
  const steps = [
    { step: '01', title: 'Free Assessment', desc: 'Evaluate your facility, map entry points and security requirements' },
    { step: '02', title: 'System Design', desc: 'Select technology, plan hardware placement, integration design' },
    { step: '03', title: 'Installation', desc: 'Readers, controllers, locks, wiring and cable management' },
    { step: '04', title: 'Configuration', desc: 'Software setup, user enrollment, access rules and reporting' },
    { step: '05', title: 'Training & Support', desc: 'Admin training, user onboarding and ongoing technical support' },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-r from-[#0a0a1a] via-[#1a1a3a] to-[#2a0a3a]">
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
          <p className="text-xl text-gray-400">Professional deployment in 5 steps</p>
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
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] flex items-center justify-center text-2xl font-bold text-[#00D4FF] group-hover:text-white transition-colors shadow-[0_0_15px_rgba(0,212,255,0.4),0_0_25px_rgba(255,27,141,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6),0_0_40px_rgba(255,27,141,0.5)]">
                  <div className="w-full h-full rounded-2xl bg-[#0a0a1a] flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#00D4FF]/40 transition-all">
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
