'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { statistics } from '@/lib/data/projects';
import { useEffect, useRef, useState } from 'react';

// Animated Counter Component
const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Create a spring to smoothly transition from 0 to value
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });
  
  // Transform the spring value to a rounded number
  const displayValue = useTransform(springValue, (current) => Math.round(current));
  
  // Start the animation when in view
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  // Read the animated transform value and render
  const [currentDisplay, setCurrentDisplay] = useState(0);
  useEffect(() => {
    return displayValue.on("change", (v) => setCurrentDisplay(v));
  }, [displayValue]);

  return <span ref={ref}>{currentDisplay}</span>;
};

const ConstructionExpertise = () => {
  return (
    <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none text-white">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 L100,0 L100,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 rounded-full bg-[#1F7A63]/20 text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-[#111111] transition-colors duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  <Counter value={stat.value} />
                  <span className="text-[#FFC107]">{stat.suffix}</span>
                </h3>
                
                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mt-2">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConstructionExpertise;
