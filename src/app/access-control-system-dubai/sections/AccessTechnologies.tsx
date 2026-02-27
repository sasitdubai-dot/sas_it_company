'use client';

import { motion } from 'framer-motion';
import { 
  FingerPrintIcon,
  FaceSmileIcon,
  IdentificationIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export default function AccessTechnologies() {
  const technologies = [
    {
      icon: FingerPrintIcon,
      title: 'Biometric Access',
      description: 'Fingerprint and palm recognition',
      features: [
        'Highest security level',
        'No lost cards',
        'No forgotten codes',
        'Fast authentication',
      ],
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: FaceSmileIcon,
      title: 'Facial Recognition',
      description: 'Contactless identification',
      features: [
        'Fast and hygienic',
        'AI-powered accuracy',
        'Works with masks',
        'Temperature screening',
      ],
      gradient: 'from-indigo-600 to-cyan-600',
    },
    {
      icon: IdentificationIcon,
      title: 'RFID Cards',
      description: 'Proximity cards and fobs',
      features: [
        'Easy to manage',
        'Cost-effective',
        'Quick to deploy',
        'Compatible systems',
      ],
      gradient: 'from-blue-500 to-sky-500',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Credentials',
      description: 'Smartphone-based access',
      features: [
        'Modern and convenient',
        'No physical cards',
        'Bluetooth/NFC enabled',
        'Easy provisioning',
      ],
      gradient: 'from-cyan-500 to-blue-600',
    },
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
            Control Who Enters Your Facility
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Modern access control systems eliminate traditional keys and provide complete visibility of who enters your premises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
              <p className="text-sm text-blue-400 mb-4">{tech.description}</p>

              <ul className="space-y-2">
                {tech.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
