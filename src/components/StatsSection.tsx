import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { STATS } from '../constants';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
              <img
                src="https://picsum.photos/seed/stats-water/1000/800"
                alt="Innovation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary p-4 rounded-xl shadow-xl">
              <p className="text-2xl font-black">8+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">Years of Trust</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Our Impact</span>
            <h2 className="text-2xl lg:text-3xl font-black mb-6 leading-tight">
              Innovating Water: <br /> 
              <span className="text-primary">ETP, STP, RO</span> and More
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <p className="text-2xl lg:text-3xl font-black text-primary mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
