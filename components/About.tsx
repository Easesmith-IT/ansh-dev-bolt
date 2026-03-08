'use client';

import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle2, Shield, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use only premium materials and follow strict quality standards',
    },
    {
      icon: Target,
      title: 'On-Time Delivery',
      description: 'Every project is completed within the agreed timeline',
    },
    {
      icon: TrendingUp,
      title: 'Modern Techniques',
      description: 'Latest construction methods and engineering practices',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#FFC107]/20 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#1F7A63]/20 rounded-lg" />
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction Team"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-[#1F7A63] font-semibold text-sm uppercase tracking-wider">
                About Ansh Developers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 leading-tight">
              Building Excellence Since 2008
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Ansh Developers is a professional construction company based in Lucknow
              specializing in residential, commercial, and turnkey construction projects.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our team combines engineering expertise, modern construction techniques, and
              strong project management to deliver reliable structures that stand the test
              of time. We take pride in our commitment to quality, transparency, and
              customer satisfaction.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FFC107]/10 flex items-center justify-center group-hover:bg-[#FFC107] transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-[#1F7A63] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111111] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1F7A63] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#186d57] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
