import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import InquirySection from '../components/InquirySection';
import servicesHero from '../assets/images/wttreet.jpg';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${servicesHero})` 
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
            Our <span className="text-primary text-glow">Expertise</span>
          </h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Industrial <span className="text-primary">Water</span> Solutions
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We provide end-to-end water treatment services, from initial design and consultation to installation and long-term maintenance of high-performance industrial plants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ServiceCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <InquirySection />
    </div>
  );
}
