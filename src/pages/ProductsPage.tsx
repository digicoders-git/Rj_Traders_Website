import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Our Products</h1>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
            Industrial Water <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Explore our comprehensive range of advanced water treatment plants and specialized chemicals designed for industrial excellence and environmental sustainability.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
