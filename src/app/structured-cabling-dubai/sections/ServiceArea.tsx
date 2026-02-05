'use client';

import { motion } from 'framer-motion';

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-400">
            Covering all major business districts in Dubai
          </p>
        </motion.div>

        {/* Map Embed */}
        <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115827.91363409156!2d55.220207!3d25.197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f00000001%3A0x3e5f434f00000001!2sDubai!5e0!3m2!1sen!2sae!4v1707150000000!5m2!1sen!2sae"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Areas List */}
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Business Bay',
            'DIFC',
            'Dubai Marina',
            'JLT',
            'Media City',
            'Internet City',
            'Knowledge Park',
            'Silicon Oasis',
            'All Dubai commercial areas',
          ].map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-blue-400/40 transition-all"
            >
              {area}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}