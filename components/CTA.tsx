'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-[#111111] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1F7A63]/20 to-[#FFC107]/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FFC107] font-semibold text-sm uppercase tracking-wider">
              Start Your Project
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Planning Your Next
              <br />
              <span className="text-[#FFC107]">Construction Project?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Let Ansh Developers turn your vision into a strong and reliable structure.
              Get a free consultation and detailed project estimate today.
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-white"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFC107] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#111111]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us Anytime</p>
                  <p className="text-xl font-semibold">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-white"
              >
                <div className="w-12 h-12 rounded-full bg-[#1F7A63] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-xl font-semibold">info@anshdevelopers.com</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFC107] text-[#111111] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#ffb300] transition-all duration-300 shadow-2xl hover:shadow-[#FFC107]/50 inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#111111] mb-6">
              Request a Quote
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC107] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC107] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC107] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC107] focus:border-transparent outline-none transition-all">
                  <option>Select project type</option>
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Renovation & Remodeling</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC107] focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your project"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#1F7A63] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#186d57] transition-all duration-300 shadow-lg"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
