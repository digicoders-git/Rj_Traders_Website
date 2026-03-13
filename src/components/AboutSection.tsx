import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import logo from '../assets/images/wttreet.jpg';

const features = [
  'Expertise',
  'Innovation',
  'Customization',
  'Sustainability',
  'Reliability',
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Who We Are</span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
              We Have 8+ Years of <br /> <span className="text-primary">Experience</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              RJ Traders is a leading name in the water treatment industry, dedicated to providing high-quality, innovative solutions for industrial and commercial needs. Our journey of 8+ years is marked by excellence, trust, and a commitment to environmental sustainability.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              We specialize in the design, installation, and maintenance of advanced water treatment plants, ensuring that every drop of water is treated with precision and care.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image with Frame Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto lg:ml-auto"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={logo}
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Modern Frame Effect */}
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-primary rounded-2xl -z-0 translate-x-2 translate-y-2" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
