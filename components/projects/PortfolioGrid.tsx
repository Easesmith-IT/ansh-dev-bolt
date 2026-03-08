'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ProjectCategory, projectsData } from '@/lib/data/projects';
import { MapPin, Calendar, Building } from 'lucide-react';

const categories: ProjectCategory[] = [
  'All Projects',
  'Residential Projects',
  'Commercial Projects',
  'Renovation Projects',
  'Ongoing Projects'
];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');

  const filteredProjects = projectsData.filter((project) => 
    activeCategory === 'All Projects' ? true : project.category === activeCategory
  );

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#111111] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-[#FFC107] hover:text-[#111111]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-md bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <Link href={`/projects/${project.id}`} className="bg-[#FFC107] text-[#111111] px-6 py-3 rounded-md font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </Link>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#1F7A63]">
                    {project.category.replace(' Projects', '')}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#1F7A63] transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-[#FFC107]" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Building className="w-4 h-4 mr-2 text-[#FFC107]" />
                      {project.category}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-[#FFC107]" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
