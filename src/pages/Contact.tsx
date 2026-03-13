import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Shield, Zap, Headphones } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: COMPANY_DETAILS.phones || [COMPANY_DETAILS.phone],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [COMPANY_DETAILS.email],
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      details: [COMPANY_DETAILS.address],
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Quick Response',
      desc: 'We value your time and ensure a swift turnaround for all inquiries.',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      desc: 'Our technical team is available to provide professional guidance.',
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      desc: 'Count on us for consistent quality and long-term maintenance support.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=2000"
            alt="Water Treatment Plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center group transition-all"
              >
                <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <info.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-600 font-medium">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Send Us a Message</h2>
                <p className="text-slate-600">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <iframe
                title="Office Location"
                src="https://maps.google.com/maps?q=IIIrd%20Floor,%20Office%20No.%20303%20A-14,%20Devika%20Chamber%20RDC,%20Raj%20Nagar%20Ghaziabad,%20UP%20201002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Contact Our Team</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our dedicated team of water treatment experts is ready to assist you with customized solutions for your industrial or commercial needs. Reach out today for professional guidance.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
