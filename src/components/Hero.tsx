import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, PhoneCall, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden py-0">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://picsum.photos/seed/water-plant-hero/1920/1080"
          alt="Water Treatment Plant"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Modern Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-bold tracking-[0.15em] uppercase text-xs mb-3">
              Unlocking Water's Potential
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Your Trusted <br />
              <span className="text-primary">Water Treatment</span> <br />
              Partner
            </h1>
            <p className="text-base text-slate-300 mb-8 max-w-lg leading-relaxed">
              We provide cutting-edge industrial water solutions that ensure sustainability, efficiency, and superior quality for your operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Send Inquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white border border-white/20 rounded-lg hover:bg-white hover:text-slate-900 transition-all active:scale-95">
                <PhoneCall size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
