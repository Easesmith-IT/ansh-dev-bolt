'use client';

import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data/projects';
import Link from 'next/link';
import { ArrowRight, Maximize, MapPin } from 'lucide-react';

const FeaturedProjects = () => {
  // Select a few premium projects to feature
  const featured = projectsData.slice(0, 2);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
            Featured <span className="text-[#1F7A63]">Masterpieces</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A curated selection of our most prestigious and technically challenging construction projects that define our commitment to excellence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {featured.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-3/5"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-[#111111]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur px-6 py-3 rounded-lg shadow-lg">
                    <span className="text-[#FFC107] font-bold text-sm uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <span className="text-[#111111] font-bold text-xl">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-2/5"
              >
                <h3 className="text-4xl font-bold text-[#111111] mb-6">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-[#111111] font-medium">
                    <MapPin className="w-5 h-5 mr-3 text-[#1F7A63]" />
                    {project.location}
                  </div>
                  {/* <div className="flex items-center text-[#111111] font-medium">
                    <Maximize className="w-5 h-5 mr-3 text-[#1F7A63]" />
                    {project.totalArea}
                  </div> */}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center space-x-2 text-[#111111] font-bold hover:text-[#1F7A63] transition-colors group"
                >
                  <span className="border-b-2 border-[#FFC107] pb-1">Explore Project</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
