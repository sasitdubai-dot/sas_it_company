'use client';

import { motion } from 'framer-motion';
import { 
  VideoCameraIcon,
  ComputerDesktopIcon,
  SpeakerWaveIcon,
  WifiIcon,
  Cog6ToothIcon,
  CalendarIcon,
  VideoCameraSlashIcon
} from '@heroicons/react/24/outline';

export function CompleteAVSolutions() {
  const solutions = [
    {
      icon: VideoCameraIcon,
      title: 'Video Conferencing',
      desc: 'Microsoft Teams Rooms, Zoom Rooms and Google Meet certified systems',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Interactive Displays',
      desc: '4K touchscreens, digital whiteboards and annotation tools',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Professional Audio',
      desc: 'Ceiling microphones, DSP processing, echo cancellation and premium speakers',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: WifiIcon,
      title: 'Wireless Presentation',
      desc: 'BYOD connectivity, screen mirroring and content sharing',
      color: 'from-orange-600 to-orange-400',
    },
    {
      icon: Cog6ToothIcon,
      title: 'Room Control',
      desc: 'Touch panels, one-touch meeting start and automated systems',
      color: 'from-pink-600 to-pink-400',
    },
    {
      icon: CalendarIcon,
      title: 'Room Scheduling',
      desc: 'Digital displays outside rooms with calendar integration',
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      icon: VideoCameraSlashIcon,
      title: 'Recording & Streaming',
      desc: 'Record or live-stream meetings and training sessions',
      color: 'from-red-600 to-red-400',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete AV Solutions
          </h2>
          <p className="text-xl text-gray-400">Everything you need for modern collaboration</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{solution.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformIntegration() {
  const platforms = [
    {
      name: 'Microsoft Teams',
      icon: '👥',
      desc: 'Certified Teams Rooms with one-touch join',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Zoom Rooms',
      icon: '🎥',
      desc: 'Dedicated Zoom hardware and licensing support',
      color: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Google Meet',
      icon: '📹',
      desc: 'Meet-optimized hardware and configuration',
      color: 'from-green-600 to-teal-600',
    },
    {
      name: 'Cisco Webex',
      icon: '💼',
      desc: 'Webex Room devices and full integration',
      color: 'from-orange-600 to-red-600',
    },
    {
      name: 'Calendar Sync',
      icon: '📅',
      desc: 'Outlook and Google Calendar integration',
      color: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-violet-950 via-fuchsia-900 to-violet-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Platform Integration
          </h2>
          <p className="text-xl text-gray-400">Seamless integration with your favorite platforms</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${platform.color}/10 border border-white/10 hover:border-white/20 transition-all group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
              <p className="text-gray-400">{platform.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}