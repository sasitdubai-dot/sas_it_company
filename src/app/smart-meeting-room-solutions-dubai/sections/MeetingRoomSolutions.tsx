'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  PresentationChartBarIcon,
  BuildingOffice2Icon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function MeetingRoomSolutions() {
  const solutions = [
    {
      icon: UserGroupIcon,
      title: 'Huddle Rooms',
      description: 'Small 2-6 person spaces',
      features: [
        'All-in-one video bars',
        'Wireless sharing',
        'Plug-and-play simplicity',
        'Perfect for quick meetings',
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: PresentationChartBarIcon,
      title: 'Conference Rooms',
      description: 'Standard 8-12 person rooms',
      features: [
        'PTZ cameras',
        'Ceiling mics',
        'Interactive displays',
        'Professional setup',
      ],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: BuildingOffice2Icon,
      title: 'Executive Boardrooms',
      description: 'Large premium spaces',
      features: [
        'Dual displays',
        'Advanced audio',
        'Automated lighting control',
        'Premium experience',
      ],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: AcademicCapIcon,
      title: 'Training Rooms',
      description: 'Multi-purpose spaces',
      features: [
        'Recording capability',
        'Audience mics',
        'Content sharing tools',
        'Flexible layouts',
      ],
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Meeting Spaces
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Create professional, productive meeting environments with state-of-the-art audiovisual technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
              <p className="text-sm text-blue-400 mb-4">{solution.description}</p>

              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
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