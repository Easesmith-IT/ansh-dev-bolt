'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { 
  Building2, Briefcase, Globe, Shield, Activity, 
  Anchor, Compass, Hexagon, Component, Blocks 
} from 'lucide-react';
import Image from 'next/image';

const clients = [
  { name: "InnovateCorp Ltd", icon: "/clients/1.png" },
  { name: "Heritage Trust", icon: "/clients/ups2.png" },
  { name: "Zenith Hospitality", icon: "/clients/ups.png" },
  { name: "Aura Real Estate", icon: "/clients/4.png" },
  { name: "Prime Manufacturing", icon: "/clients/5.webp" },
  { name: "Nexus Technologies", icon: "/clients/6.png" },
  { name: "Apex Retail Group", icon: "/clients/7.png" },
  { name: "Urban Developers", icon: "/clients/8.svg" },
];

const OurClients = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-[#6aa64937] border border-gray-100 p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#111111] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* <Icon className="w-10 h-10 text-[#1F7A63] group-hover:text-[#FFC107] mb-4 transition-colors duration-300" /> */}
                <Image
                  src={client.icon}
                  alt={client.name}
                  width={200}
                  height={200}
                  className={cn("w-28 h-28 object-contain")}
                />
                {/* <span className="font-bold text-[#111111] group-hover:text-white transition-colors duration-300 text-sm tracking-wide">
                  {client.name}
                </span> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
