'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Award, Building2, Users, Briefcase } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: Building2,
      value: 50,
      label: 'Projects Completed',
      suffix: '+',
    },
    {
      icon: Award,
      value: 10,
      label: 'Years of Experience',
      suffix: '+',
    },
    {
      icon: Users,
      value: 100,
      label: 'Happy Clients',
      suffix: '+',
    },
    {
      icon: Briefcase,
      value: 150,
      label: 'Construction Experts',
      suffix: '+',
    },
  ];

  const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #FFC107 0px, #FFC107 1px, transparent 1px, transparent 40px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#FFC107] to-[#1F7A63] group-hover:shadow-2xl transition-all duration-300"
              >
                <stat.icon className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-5xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
