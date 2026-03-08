'use client';

import { motion } from 'framer-motion';
import { Users, Trophy, Clock, MessageCircle, ChartLine as LineChart, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Construction Team',
      description: 'Skilled engineers, architects, and construction professionals with 15+ years of expertise.',
    },
    {
      icon: Trophy,
      title: 'High Quality Materials',
      description: 'We use only premium grade materials from trusted suppliers ensuring durability.',
    },
    {
      icon: Clock,
      title: 'On-Time Project Delivery',
      description: 'Strict adherence to timelines with efficient project management and execution.',
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      description: 'Regular updates and clear communication throughout the project lifecycle.',
    },
    {
      icon: LineChart,
      title: 'Professional Project Management',
      description: 'Systematic approach with modern tools for efficient project tracking and delivery.',
    },
    {
      icon: Shield,
      title: 'Quality & Safety Standards',
      description: 'Compliance with all safety regulations and quality assurance at every stage.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#111111] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFC107] font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            With over 15 years of excellence in construction, we bring unmatched expertise,
            quality, and commitment to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/20 to-[#1F7A63]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#1F7A63] flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-[#FFC107]/50"
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC107] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
