'use client';

import { motion } from 'framer-motion';
import { 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowPathIcon,
  VideoCameraIcon,
  ClipboardDocumentListIcon,
  GlobeAltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export function CompleteFeatures() {
  const features = [
    { icon: ClockIcon, title: 'Time-Based Access', desc: 'Restrict entry by day, time and public holidays automatically' },
    { icon: ShieldCheckIcon, title: 'Multi-Level Security', desc: 'Different access rights for different user groups and departments' },
    { icon: UserGroupIcon, title: 'Visitor Management', desc: 'Temporary credentials with check-in and check-out tracking' },
    { icon: ArrowPathIcon, title: 'Anti-Passback', desc: 'Prevent credential sharing and tailgating' },
    { icon: VideoCameraIcon, title: 'CCTV Integration', desc: 'Visual verification linked to all access events' },
    { icon: ClipboardDocumentListIcon, title: 'Time Attendance', desc: 'Automated employee time tracking and HR reports' },
    { icon: GlobeAltIcon, title: 'Remote Management', desc: 'Control and monitor access from anywhere' },
    { icon: BuildingOfficeIcon, title: 'Elevator Control', desc: 'Restrict floor access for secure buildings' },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete System Features
          </h2>
          <p className="text-xl text-gray-400">Enterprise-grade access control capabilities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.4),0_0_25px_rgba(255,27,141,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6),0_0_40px_rgba(255,27,141,0.5)]">
  <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
    <feature.icon className="w-6 h-6 text-[#00D4FF] group-hover:text-white transition-colors" />
  </div>
</div>

              <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function IndustriesWeServe() {
  const industries = [
    { icon: '🏢', name: 'Corporate offices and business parks' },
    { icon: '📦', name: 'Warehouses and logistics' },
    { icon: '💾', name: 'Data centers and server rooms' },
    { icon: '🏭', name: 'Manufacturing and industrial' },
    { icon: '🎓', name: 'Schools and universities' },
    { icon: '🏥', name: 'Healthcare facilities' },
    { icon: '🏛️', name: 'Multi-tenant buildings' },
    { icon: '🚗', name: 'Parking and gate control' },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-400">Trusted access control solutions across sectors</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.4),0_0_25px_rgba(255,27,141,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6),0_0_40px_rgba(255,27,141,0.5)]">
  <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center text-3xl">
    {industry.icon}
  </div>
</div>

              <p className="text-white font-medium">{industry.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
