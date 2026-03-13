import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS } from '../constants';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0f2a44] text-[#cbd5e1] py-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="relative w-24 h-24 mb-8">
              {/* Rotating Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary/60"
              />
              
              {/* Inner White Circle Logo */}
              <Link 
                to="/" 
                className="absolute inset-2 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden p-3"
              >
                <img
                  src={logo}
                  alt="RJ Traders Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Leading the industry with innovative water treatment solutions. We combine expertise and technology to deliver excellence in every project.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all text-slate-400">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Products', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-red-500 transition-colors flex items-center gap-2 text-sm group">
                    <div className="w-1 h-1 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products List */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-8">Our Products</h4>
            <ul className="space-y-4">
              {PRODUCTS.slice(0, 5).map((product) => (
                <li key={product.id}>
                  <Link to="/products" className="hover:text-red-500 transition-colors flex items-center gap-2 text-sm group">
                    <div className="w-1 h-1 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-8">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="text-red-500 shrink-0" size={18} />
                <span className="text-sm leading-relaxed text-[#cbd5e1]">{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-red-500 shrink-0" size={18} />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-sm hover:text-red-500 transition-colors text-[#cbd5e1]">
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-red-500 shrink-0" size={18} />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-sm hover:text-red-500 transition-colors text-[#cbd5e1]">
                  {COMPANY_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-8 text-slate-500 text-xs text-center">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline text-slate-800">|</span>
            <Link to="/return-policy" className="hover:text-red-500 transition-colors">Return Policy</Link>
            <span className="hidden md:inline text-slate-800">|</span>
            <Link to="/shipping-policy" className="hover:text-red-500 transition-colors">Shipping</Link>
            <span className="hidden md:inline text-slate-800">|</span>
            <Link to="/cancellation-refund-policy" className="hover:text-red-500 transition-colors">Cancellation & Refund Policy</Link>
            <span className="hidden md:inline text-slate-800">|</span>
            <Link to="/third-party-policy" className="hover:text-red-500 transition-colors">Third Party Policy</Link>
            <span className="hidden md:inline text-slate-800">|</span>
            <Link to="/terms-and-conditions" className="hover:text-red-500 transition-colors">Terms & Conditions</Link>
          </div>
          <p className="text-slate-600">© 2026 {COMPANY_DETAILS.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
