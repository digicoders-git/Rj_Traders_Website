import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Our Expertise</h2>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
              Comprehensive Water <br /> Treatment Solutions
            </h3>
          </div>
          <Link to="/services" className="btn-outline flex items-center gap-2">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
