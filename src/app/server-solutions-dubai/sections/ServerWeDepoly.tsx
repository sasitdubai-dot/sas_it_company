'use client';

import { motion } from 'framer-motion';
import {
  ServerIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

export default function ServerBrands() {
  const brands = [
    {
      name: 'Dell PowerEdge',
      description: 'Industry leader, excellent support in UAE',
      icon: ServerIcon,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'HP ProLiant',
      description: 'Reliable, cost-effective enterprise servers',
      icon: DevicePhoneMobileIcon,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Lenovo ThinkSystem',
      description: 'Innovation + value',
      icon: ComputerDesktopIcon,
      color: 'from-yellow-500 to-amber-500',
    },
    {
      name: 'Supermicro',
      description: 'High-performance custom builds',
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -right-32"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SERVER BRANDS WE DEPLOY
          </h2>
          <p className="text-xl text-gray-400">
            We provide industry-leading server brands with exceptional support in the UAE.
          </p>
        </motion.div>

        {/* Brand Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/40 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {/* Icon bubble */}
              <div
                className={`flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${brand.color} shadow-md mb-6 group-hover:scale-110 transition-transform`}
              >
                <brand.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-bold text-white mb-2">{brand.name}</h3>
              <p className="text-gray-300 text-sm">{brand.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Warranty Info */}
        <p className="text-lg text-gray-400 mt-12">
          All servers include manufacturer warranty + our installation warranty.
        </p>
      </div>
    </section>
  );
}