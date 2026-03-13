import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center"
      >
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600 text-sm mb-6">Thank you for reaching out. Our team will contact you shortly.</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            required
            placeholder="+91 00000 00000"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
        <input
          type="email"
          required
          placeholder="john@example.com"
          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>
      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
        <input
          type="text"
          required
          placeholder="How can we help you?"
          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>
      <div className="mb-6">
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Message</label>
        <textarea
          required
          rows={3}
          placeholder="How can we help you?"
          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? 'Sending...' : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
