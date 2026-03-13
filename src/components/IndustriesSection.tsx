import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { INDUSTRIES } from '../constants';

export default function IndustriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Our Reach</span>
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-sm text-slate-600">
            Providing specialized water treatment solutions across diverse industrial sectors with precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = (Icons as any)[industry.icon] || Icons.Building;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <IconComponent size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xs group-hover:text-white transition-colors">
                  {industry.name}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
