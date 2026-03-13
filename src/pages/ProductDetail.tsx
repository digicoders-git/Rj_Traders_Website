import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Phone, Mail } from 'lucide-react';
import { PRODUCTS, COMPANY_DETAILS } from '../constants';
import InquirySection from '../components/InquirySection';

const productImages = import.meta.glob('../assets/images/products/*.{png,jpg,jpeg,svg,webp}', { eager: true });

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-16 pb-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h2>
        <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
      </div>
    );
  }

  const imagePath = `../assets/images/products/${product.image}`;
  const imageSrc = (productImages[imagePath] as any)?.default || product.image;

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
      className="pt-16 pb-12 bg-white"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
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
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] h-[320px] lg:h-[380px] overflow-hidden rounded-xl shadow-lg border border-slate-100">
              <img
                src={imageSrc}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto">
          {/* Section 1 – Product Introduction */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2"
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
                <div className="mt-2">
                  {product.detailedExplanation.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </motion.section>          {/* Section 2 – Benefits */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2"
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
        </div>

        <InquirySection />

        <div className="max-w-4xl mx-auto">
          {/* Section 3 – Key Features */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2"
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
        </div>
      </div>
    </motion.div>
  );
}
