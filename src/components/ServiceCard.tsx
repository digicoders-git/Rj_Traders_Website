import React, { FC } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  product: Product;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ product, index }) => {
  const IconComponent = (Icons as any)[product.icon || 'Droplets'] || Icons.Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors" />
      
      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
        <IconComponent size={32} />
      </div>

      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
        {product.title}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-8">
        {product.description}
      </p>

      <Link 
        to={`/products/${product.id}`}
        className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group/link"
      >
        <span>Explore Details</span>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
          <Icons.ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
