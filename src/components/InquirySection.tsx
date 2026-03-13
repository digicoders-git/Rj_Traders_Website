import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

export default function InquirySection() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-800 relative group max-w-6xl mx-auto"
                >
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-24 -mb-24 blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />

                    <div className="grid lg:grid-cols-2 items-stretch relative z-10 min-h-[500px] max-h-[650px]">
                        {/* Left Side: CTA Content */}
                        <div className="p-10 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800">
                            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6">
                                <span className="w-8 h-[2px] bg-primary rounded-full" />
                                <MessageCircle size={16} className="animate-pulse" />
                                Secure Consultation
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                                Need a <span className="text-primary text-glow">Custom</span> <br className="hidden lg:block" /> Solution?
                            </h2>

                            <p className="text-slate-400 mb-10 text-base md:text-lg leading-relaxed max-w-lg font-medium">
                                Our technical experts are ready to design the perfect water treatment system tailored specifically for your industrial or commercial facility. 
                            </p>

                            <div className="flex flex-wrap items-center gap-6 mt-auto">
                                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 shadow-inner group/phone hover:bg-slate-800 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 group-hover/phone:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Call Our Expert</div>
                                        <div className="text-white font-black text-xl md:text-2xl tracking-tight">07017079891</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Content */}
                        <div className="p-10 md:p-12 lg:p-16 bg-slate-950/40 backdrop-blur-sm flex flex-col justify-center">
                            <div className="max-w-xl mx-auto w-full">
                                <div className="mb-8 text-center lg:text-left">
                                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Quick Inquiry Form</h3>
                                    <p className="text-slate-500 text-sm">Fill the details below and we'll reach out within 2 hours.</p>
                                </div>
                                <div className="bg-transparent">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
