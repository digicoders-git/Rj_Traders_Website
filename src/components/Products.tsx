import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Our Catalog</span>
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">
            Our Latest Products
          </h2>
          <p className="text-sm text-slate-600">
            Discover our range of high-performance water treatment systems, engineered for durability and superior purification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
