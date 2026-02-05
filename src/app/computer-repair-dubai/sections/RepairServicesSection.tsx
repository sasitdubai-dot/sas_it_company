'use client';

import { motion } from 'framer-motion';
import { 
  ComputerDesktopIcon, 
  CpuChipIcon, 
  CircleStackIcon, 
  ShieldExclamationIcon,
  BeakerIcon,
  BoltIcon 
} from '@heroicons/react/24/outline';

export default function RepairServicesSection() {
  const services = [
    {
      icon: ComputerDesktopIcon,
      title: 'Laptop Screen Replacement',
      price: 'Starting from AED 350',
      features: [
        'Cracked/broken screen repair',
        'LCD/LED panel replacement',
        'Touch screen repairs',
        'MacBook screen replacement',
        'Same-day service available',
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: CpuChipIcon,
      title: 'Motherboard Repair',
      price: 'Starting from AED 450',
      features: [
        'No power issues',
        'USB port repairs',
        'Charging port fixes',
        'BIOS chip replacement',
        'Component-level repair',
      ],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: CircleStackIcon,
      title: 'Hard Drive & SSD Services',
      price: 'Starting from AED 250',
      features: [
        'Hard drive replacement',
        'SSD upgrade',
        'Data recovery',
        'Clone to new drive',
        'OS reinstallation',
      ],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: ShieldExclamationIcon,
      title: 'Virus Removal & Tune-up',
      price: 'AED 199',
      features: [
        'Complete virus/malware removal',
        'System optimization',
        'Software cleanup',
        'Driver updates',
        'Performance tuning',
        'Same-day service',
      ],
      gradient: 'from-red-600 to-orange-600',
    },
    {
      icon: BeakerIcon,
      title: 'Liquid Damage Repair',
      price: 'Starting from AED 400',
      features: [
        'Coffee/water spill damage',
        'Component cleaning',
        'Corrosion treatment',
        'Board-level repair',
        'Success rate: 70%+',
      ],
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      icon: BoltIcon,
      title: 'Battery Replacement',
      price: 'Starting from AED 180',
      features: [
        'Laptop battery replacement',
        'Original & compatible batteries',
        'Dell, HP, Lenovo, Apple',
        'Installation included',
        '6-month warranty',
      ],
      gradient: 'from-yellow-600 to-orange-600',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Repair Services & Pricing
          </h2>
          <p className="text-xl text-gray-400">Fast, professional repairs with warranty</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                {service.price}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="tel:+971526716178"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-center hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Call for Quote
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}