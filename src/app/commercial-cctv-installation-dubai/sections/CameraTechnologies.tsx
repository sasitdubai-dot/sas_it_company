'use client';

import { motion } from 'framer-motion';

export default function CameraTechnologies() {
  const cameras = [
    { title: 'Bullet Cameras', desc: 'Long-range outdoor surveillance. Weather-resistant with infrared night vision up to 50m.' },
    { title: 'Dome Cameras', desc: 'Discrete indoor/outdoor coverage. 360 degree monitoring, vandal-resistant housing.' },
    { title: 'PTZ Cameras', desc: 'Pan-tilt-zoom control. Large area coverage with automated object tracking.' },
    { title: 'Thermal Cameras', desc: 'Heat detection for perimeter security. Effective in complete darkness.' },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Camera Technologies We Deploy</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cameras.map((cam, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/40 transition-all group">
              <h3 className="text-xl font-bold text-white mb-2">{cam.title}</h3>
              <p className="text-gray-400">{cam.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
