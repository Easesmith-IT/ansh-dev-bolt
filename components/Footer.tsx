'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Construction',
    'Turnkey Projects',
    'Renovation & Remodeling',
    'Construction Contracting',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-8 w-8 text-[#FFC107]" />
              <span className="text-2xl font-bold">Ansh Developers</span>

            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building excellence since 2008. Your trusted construction partner
              in Lucknow for residential, commercial, and turnkey projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC107] transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#FFC107] transition-colors hover:translate-x-2 inline-block transform duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-[#FFC107] transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#FFC107] flex-shrink-0 mt-1" />
                <span>
                  {/* Gomti Nagar, Lucknow,
                  <br />
                  Uttar Pradesh, India */}
                  3/40 vibhav khand gomtinagar
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-[#FFC107] transition-colors">
                <Phone className="h-5 w-5 text-[#FFC107] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919580171654">9580171654</a>
                  <a href="tel:+917838035916">7838035916</a>
                  {/* <a href="tel:+919876543210">+91 98765 43210</a> */}
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-[#FFC107] transition-colors">
                <Mail className="h-5 w-5 text-[#FFC107] flex-shrink-0" />
                <a href="mailto:anilpandey293@gmail.com">
                  {/* info@anshdevelopers.com */}
                  anilpandey293@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ansh Developers. All rights
            reserved. |{" "}
            <span className="text-[#FFC107]">
              Building Dreams, Creating Realities
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
