import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Products from '../components/Products';
import StatsSection from '../components/StatsSection';
import IndustriesSection from '../components/IndustriesSection';
import ClientsSection from '../components/ClientsSection';
import MissionVisionSection from '../components/MissionVisionSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      
      <AboutSection />
      
      <Products />
      
      <StatsSection />
      
      <IndustriesSection />
      
      <ClientsSection />
      
      <MissionVisionSection />
      
      <CTASection />
    </motion.div>
  );
}
