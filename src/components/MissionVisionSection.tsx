import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { MISSION_VISION } from '../constants';

export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_VISION.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <IconComponent size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
