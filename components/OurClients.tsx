'use client';

import { motion } from 'framer-motion';
import { 
  Building2, Briefcase, Globe, Shield, Activity, 
  Anchor, Compass, Hexagon, Component, Blocks 
} from 'lucide-react';

const clients = [
  { name: 'InnovateCorp Ltd', icon: Globe },
  { name: 'Heritage Trust', icon: Shield },
  { name: 'Zenith Hospitality', icon: Building2 },
  { name: 'Aura Real Estate', icon: Compass },
  { name: 'Prime Manufacturing', icon: Anchor },
  { name: 'Nexus Technologies', icon: Activity },
  { name: 'Apex Retail Group', icon: Briefcase },
  { name: 'Urban Developers', icon: Blocks },
  { name: 'Skyline Associates', icon: Hexagon },
  { name: 'Crest Investments', icon: Component },
];

const OurClients = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#1F7A63] font-semibold text-sm uppercase tracking-wider block mb-4">
            Our Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            Trusted by Leading <span className="text-[#FFC107]">Clients</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are proud to work with homeowners, businesses, and organizations across Lucknow, delivering construction excellence on every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-[#f8f9fa] border border-gray-100 p-8 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#111111] hover:border-[#111111] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <Icon className="w-10 h-10 text-[#1F7A63] group-hover:text-[#FFC107] mb-4 transition-colors duration-300" />
                <span className="font-bold text-[#111111] group-hover:text-white transition-colors duration-300 text-sm tracking-wide">
                  {client.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
