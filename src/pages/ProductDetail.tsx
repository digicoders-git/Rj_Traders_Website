import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Phone, Mail } from 'lucide-react';
import { PRODUCTS, COMPANY_DETAILS } from '../constants';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
      </div>
    );
  }

  // Default lists if not provided in constants
  const defaultBenefits = [
    "Improves water quality",
    "Environment friendly solution",
    "Energy efficient operation",
    "Low maintenance cost",
    "Suitable for industrial and commercial use",
    "Supports water recycling and reuse"
  ];

  const defaultFeatures = [
    "Compact design",
    "Durable construction",
    "Advanced filtration or treatment technology",
    "Easy installation",
    "Reliable performance",
    "Long service life"
  ];

  const benefits = product.benefits || defaultBenefits;
  const features = product.features || defaultFeatures;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest mb-8"
        >
          <ArrowLeft size={14} />
          Back to Products
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              {product.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="btn-primary flex items-center gap-2">
                <Phone size={18} />
                Call for Inquiry
              </a>
              <Link to="/contact" className="btn-outline flex items-center gap-2">
                <Mail size={18} />
                Get a Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto">
          {/* Section 1 – Product Introduction */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Product Introduction
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-sm space-y-4">
              {product.fullDescription ? (
                product.fullDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              ) : (
                <>
                  <p>
                    The {product.title} by RJ Traders is a state-of-the-art solution designed to meet the rigorous demands of modern industrial and residential water treatment. Our systems are engineered for maximum efficiency, ensuring that every drop of water is treated to the highest standards of purity and safety.
                  </p>
                  <p>
                    Used extensively across various sectors including pharmaceuticals, food and beverage, and municipal water supply, the {product.title} helps users achieve compliance with environmental regulations while significantly reducing operational costs. Its advanced technology ensures reliable performance even under challenging conditions.
                  </p>
                  <p>
                    By choosing our {product.title}, you are investing in a sustainable future. Our commitment to innovation and quality means you get a product that not only performs exceptionally but also contributes to water conservation and environmental protection.
                  </p>
                </>
              )}
              {product.detailedExplanation && (
                <div className="mt-6">
                  {product.detailedExplanation.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </motion.section>

          {/* Section 2 – Benefits */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Benefits of the Product
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3 – Key Features */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="text-2xl md:text-3xl font-black mb-4">Need More Details?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Our experts are ready to provide you with a customized solution for your water treatment needs. Contact us today for a free consultation.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-10 py-4">
              Contact Us for More Details
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
