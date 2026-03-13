import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

const productImages = import.meta.glob('../assets/images/products/*.{png,jpg,jpeg,svg,webp}', { eager: true });

export default function ProductCard({ product, index }: ProductCardProps) {
  const imagePath = `../assets/images/products/${product.image}`;
  const imageSrc = (productImages[imagePath] as any)?.default || product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageSrc}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group/btn"
        >
          View Details
          <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
