import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: { service: Service; index: number; key?: any }) {
  const IconComponent = (Icons as any)[service.icon] || Icons.Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/10 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <IconComponent size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {service.description}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-primary font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More <Icons.ArrowRight size={14} />
      </div>
    </motion.div>
  );
}
