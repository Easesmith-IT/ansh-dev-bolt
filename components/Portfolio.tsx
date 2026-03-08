'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      name: 'Luxury Villa Residence',
      type: 'Residential',
      location: 'Gomti Nagar, Lucknow',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Corporate Office Complex',
      type: 'Commercial',
      location: 'Hazratganj, Lucknow',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Modern Apartment Tower',
      type: 'Residential',
      location: 'Indira Nagar, Lucknow',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Retail Shopping Center',
      type: 'Commercial',
      location: 'Alambagh, Lucknow',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Premium Housing Society',
      type: 'Residential',
      location: 'Aliganj, Lucknow',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Industrial Warehouse',
      type: 'Industrial',
      location: 'Chinhat, Lucknow',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#1F7A63] font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-4 mb-6">
            Featured Construction Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our diverse portfolio of successfully completed residential, commercial,
            and industrial construction projects across Lucknow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-xl bg-[#111111] cursor-pointer h-[400px]"
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-[#1F7A63]/95 via-[#1F7A63]/80 to-transparent flex items-center justify-center"
              >
                <div className="text-center px-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full bg-[#FFC107] flex items-center justify-center mx-auto mb-4"
                  >
                    <ArrowRight className="h-8 w-8 text-[#111111]" />
                  </motion.div>
                  <p className="text-white text-sm font-medium">View Project Details</p>
                </div>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-[#FFC107] text-[#111111] text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFC107] transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#111111] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1F7A63] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
