import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';

export default function FloatingContactActions() {
  const whatsappUrl = "https://wa.me/917017079891";
  const callUrl = "tel:+917017079891";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow relative group"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#25D366] text-[10px] font-black items-center justify-center shadow-sm">1</span>
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={callUrl}
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/40 transition-shadow relative group"
        title="Call Experts"
      >
        <Phone size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Experts
        </span>
      </motion.a>
    </div>
  );
}
