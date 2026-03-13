import React from 'react';
import { motion } from 'motion/react';
import InquirySection from './InquirySection';

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=2000"
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {title}
          </h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-slate max-w-none"
          >
            {children}
          </motion.div>
        </div>
      </section>
      <InquirySection />
    </div>
  );
}
