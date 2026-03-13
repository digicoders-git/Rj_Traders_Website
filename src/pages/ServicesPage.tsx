import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Our Services</h1>
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">
            Professional Water Solutions
          </h2>
          <p className="text-slate-600 text-sm">
            We offer a wide range of water treatment services tailored to meet the specific needs of industrial, commercial, and residential clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
