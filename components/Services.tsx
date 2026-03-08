'use client';

import { motion } from 'framer-motion';
import { Chrome as Home, Building, Package, Wrench, ClipboardCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, villas, and residential complexes built with precision and care for your family.',
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes designed for business success.',
    },
    {
      icon: Package,
      title: 'Turnkey Construction Projects',
      description: 'Complete end-to-end construction solutions from planning to final handover.',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with modern designs and quality renovation work.',
    },
    {
      icon: ClipboardCheck,
      title: 'Construction Contracting',
      description: 'Professional contracting services ensuring quality execution and timely delivery.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F7A63]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#1F7A63] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-4 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From residential homes to commercial complexes, we provide complete construction
            services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFC107]"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#FFC107] to-[#1F7A63] flex items-center justify-center mb-6 group-hover:shadow-xl"
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#111111] mb-4 group-hover:text-[#1F7A63] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="h-1 bg-gradient-to-r from-[#FFC107] to-[#1F7A63] rounded-full mt-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
