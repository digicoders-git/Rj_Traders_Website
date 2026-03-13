import React from 'react';
import { motion } from 'motion/react';

const logoModules = import.meta.glob('../assets/images/logos/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const clientLogos = Object.entries(logoModules).map(([path, module], index) => ({
  id: index + 1,
  url: (module as any).default,
  name: path.split('/').pop()?.split('.')[0].replace(/-/g, ' ') || `Client ${index + 1}`,
}));

export default function ClientsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">OUR PARTNERS</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Our Trusted Clients
          </h2>
        </div>


        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: (index % 8) * 0.1 
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden p-4 hover:shadow-xl hover:border-primary/20">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
