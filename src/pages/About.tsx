import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  CheckCircle2, 
  Award, 
  Users, 
  Target, 
  Droplets, 
  ShieldCheck, 
  Wrench, 
  Settings, 
  ArrowRight,
  Pill,
  Utensils,
  Beaker,
  Building,
  Fuel,
  Sprout
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const industries = [
  { name: 'Pharmaceutical', icon: Pill, desc: 'High-purity water systems for drug manufacturing and laboratory use.' },
  { name: 'Food & Beverage', icon: Utensils, desc: 'Hygienic water solutions for processing, cleaning, and ingredient use.' },
  { name: 'Chemical Industry', icon: Beaker, desc: 'Robust treatment systems for handling complex chemical effluents.' },
  { name: 'Municipal Water', icon: Building, desc: 'Large-scale purification for community drinking water and sewage.' },
  { name: 'Oil & Gas', icon: Fuel, desc: 'Specialized treatment for produced water and industrial process needs.' },
  { name: 'Agriculture', icon: Sprout, desc: 'Efficient irrigation and wastewater recycling for sustainable farming.' },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=1920"
            alt="Water Treatment Plant"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              About RJ Traders
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Delivering Innovative Water Treatment Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Company Background</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              A Legacy of Excellence in Water Engineering
            </h2>
            <div className="space-y-6 text-slate-600 text-sm leading-relaxed text-justify">
              <p>
                Founded with a vision to revolutionize the water treatment industry, RJ Traders has established itself as a premier provider of industrial and residential water solutions. With over a decade of hands-on experience, we have navigated the complexities of water purification, evolving from a local service provider into a nationally recognized engineering firm. Our journey is defined by a relentless pursuit of technical perfection and a deep-seated commitment to environmental stewardship.
              </p>
              <p>
                At RJ Traders, we understand that water is the lifeblood of industry. Whether it's the high-purity requirements of a pharmaceutical lab or the heavy-duty filtration needed for a municipal sewage plant, our engineering expertise allows us to design systems that are both robust and efficient. We specialize in a wide array of technologies, including Reverse Osmosis (RO), Ultra-Filtration (UF), and advanced biological treatment systems like Bio STP and ETP plants.
              </p>
              <p>
                Our commitment to quality is unwavering. Every project we undertake is governed by strict quality control parameters and international standards. We don't just build plants; we build long-term partnerships based on trust and reliability. Our engineering team works closely with clients to understand their unique challenges, delivering customized solutions that optimize performance while minimizing environmental impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl md:text-6xl font-black text-primary mb-2">
                <CountUp end={150} />+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Employees</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-5xl md:text-6xl font-black text-primary mb-2">
                <CountUp end={20} />+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Products</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-5xl md:text-6xl font-black text-primary mb-2">
                <CountUp end={500} />+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Projects Delivered</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Our Team</h2>
            <div className="space-y-6 text-slate-600 text-sm leading-relaxed text-justify">
              <p>
                The backbone of RJ Traders is our multi-disciplinary team of experts. Our Research and Development (R&D) wing is constantly exploring new frontiers in membrane technology and biological filtration, ensuring that we stay ahead of the curve in an ever-changing technological landscape. This focus on innovation allows us to offer cutting-edge solutions that are more energy-efficient and cost-effective than traditional methods.
              </p>
              <p>
                Our engineering experts bring decades of collective experience to the table, overseeing every phase of a project from conceptual design to final commissioning. They are supported by a dedicated customer support team that provides 24/7 assistance, ensuring that our clients' systems operate at peak performance throughout their lifecycle. We believe that our people are our greatest asset, and their dedication to excellence is what sets us apart.
              </p>
              <p>
                Innovation is not just a buzzword at RJ Traders; it is a core value. We foster a culture of continuous learning and improvement, encouraging our team to challenge the status quo and find better ways to solve complex water problems. This commitment to innovation ensures that we deliver not just a product, but a sustainable solution that adds value to our clients' operations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Our Strengths</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Why Choose RJ Traders</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Choosing a water treatment partner is a critical decision. At RJ Traders, we offer a unique combination of technical expertise, customized solutions, and a proven track record of success. We don't believe in one-size-fits-all; instead, we take the time to understand your specific needs and engineer a system that delivers results.
              </p>
              <div className="space-y-4">
                {[
                  'Advanced water treatment technologies',
                  'Customized industrial solutions',
                  'Environment friendly treatment systems',
                  'Reliable engineering support',
                  'Turn-key project execution'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
                alt="Engineering Excellence"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900">ISO Certified</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Quality Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Our Reach</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Industries We Serve</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <industry.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Looking for Reliable <br /> <span className="text-primary">Water Treatment Solutions?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Our team of experts is ready to help you design and implement the perfect water treatment system for your specific needs.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-lg"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
