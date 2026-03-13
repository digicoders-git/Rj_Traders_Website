import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsapp.replace('+', '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-shadow"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white text-[#25D366] text-[8px] font-bold items-center justify-center">1</span>
      </span>
    </motion.a>
  );
}
