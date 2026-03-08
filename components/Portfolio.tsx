'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/lib/data/projects';

const Portfolio = () => {
  // Use real data from our projects.ts file, limiting to first 6 items
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-[#f8f9fa]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-md bg-white hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="bg-[#FFC107] text-[#111111] px-6 py-3 rounded-md font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View full case study
                    </span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#1F7A63]">
                    {project.category.replace(' Projects', '')}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#111111] mb-2 group-hover:text-[#1F7A63] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600 font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-[#FFC107]" />
                      {project.location}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#FFC107] transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#111111] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1F7A63] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
