import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 leading-tight">
              Need Immediate Assistance or <br /> Have an <span className="text-primary">Urgent Request?</span>
            </h2>
            <p className="text-sm text-slate-400 mb-8 max-w-xl mx-auto">
              Our technical experts are available 24/7 to help you with any water treatment emergencies or urgent project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`tel:${COMPANY_DETAILS.phone}`} 
                className="btn-primary flex items-center gap-2"
              >
                <PhoneCall size={18} />
                Call Now
              </a>
              <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white border border-white/20 rounded-lg hover:bg-white hover:text-slate-900 transition-all active:scale-95 group">
                Send Inquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
