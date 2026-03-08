'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectCTA from '@/components/projects/ProjectCTA';
import { projectsData } from '@/lib/data/projects';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building, BuildingIcon, CircleCheck, ClipboardList, LayersIcon, MapPin, Maximize, RulerIcon, Target, Wrench, X } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-[#1F7A63] hover:underline font-bold">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Get 3 related projects (excluding current, ideally from same category, fallback to others)
  const relatedProjects = projectsData
    .filter(p => p.id !== id)
    .sort((a, b) => (a.category === project.category ? -1 : 1))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-[#FFC107] selection:text-[#111111]">
      {/* <div className="bg-[#111111]"> */}
      <Navbar />
      {/* </div> */}

      {/* 1. Project Hero Section */}
      <section className="relative sm:h-[70vh] md:h-[80vh] flex items-end pb-24 overflow-hidden pt-20">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/30" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            href="/projects"
            className="inline-flex items-center text-white/80 hover:text-[#FFC107] mb-8 font-medium transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-[#FFC107] text-[#111111] px-4 py-1 rounded-sm text-sm font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light border-l-4 border-[#1F7A63] pl-4 max-w-3xl">
              {project.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Left Column (Overview & Work Undertaken) */}
          <div className="lg:col-span-8 space-y-20">
            {/* 2. Project Overview Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-6 flex items-center">
                <span className="w-8 h-1 bg-[#FFC107] mr-4 block"></span>
                Project Overview
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                {project.description}
              </p>
            </motion.section>

            {/* 4. Work Undertaken Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-8 flex items-center">
                <span className="w-8 h-1 bg-[#1F7A63] mr-4 block"></span>
                Work Undertaken
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.workUndertaken.map((work, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#FFC107]/20 p-3 rounded-lg mr-4 mt-1">
                        <Wrench className="w-6 h-6 text-[#FFC107]" />
                      </div>
                      <div>
                        {/* <h4 className="text-lg font-bold text-[#111111] mb-2">
                          {work.title}
                        </h4> */}
                        <p className="text-gray-600 leading-relaxed">
                          {work.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 5. Project Gallery Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-8 flex items-center">
                <span className="w-8 h-1 bg-[#111111] mr-4 block"></span>
                Project Gallery
              </h2>

              <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-xl cursor-pointer break-inside-avoid shadow-sm"
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/40 transition-colors duration-300 z-10 flex items-center justify-center">
                      <Maximize className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10" />
                    </div>
                    <img
                      src={img}
                      alt={`${project.title} - Gallery ${idx + 1}`}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 6. Project Video Section (Optional) */}
            {project.videoUrl && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#111111] mb-8 flex items-center">
                  <span className="w-8 h-1 bg-[#FFC107] mr-4 block"></span>
                  Project Walkthrough Video
                </h2>

                <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-xl bg-gray-900 border-4 border-white">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={project.videoUrl}
                    title={`${project.title} Walkthrough`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.section>
            )}
          </div>

          {/* Right Sidebar Column (Project Info Box) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8">
            {/* 3. Project Information Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#FFC107]">
              <h3 className="text-2xl font-bold text-[#111111] mb-8">
                Project Information
              </h3>

              <div className="space-y-6">
               {project.client && <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Client / Owner
                  </span>
                  <div className="flex items-center text-[#111111] font-bold text-lg">
                    <Target className="w-5 h-5 text-[#1F7A63] mr-3" />{" "}
                    {project.client}
                  </div>
                </div>}

                <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Developer
                  </span>
                  <div className="flex items-center text-[#111111] font-bold text-lg">
                    <BuildingIcon className="w-5 h-5 text-[#1F7A63] mr-3" />{" "}
                    {project.developer}
                  </div>
                </div>

                <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Project Type
                  </span>
                  <div className="flex items-center text-[#111111] font-bold text-lg">
                    <LayersIcon className="w-5 h-5 text-[#1F7A63] mr-3" />{" "}
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Location
                  </span>
                  <div className="flex items-center text-[#111111] font-bold text-lg">
                    <MapPin className="w-5 h-5 text-[#1F7A63] mr-3" />{" "}
                    {project.location}
                  </div>
                </div>

                <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Project Scope
                  </span>
                  <div className="flex items-center text-[#111111] font-bold text-lg">
                    <ClipboardList className="w-5 h-5 text-[#1F7A63] mr-3 shrink-0" />{" "}
                    {project.scope}
                  </div>
                </div>
                {project.projectLength && (
                  <div className="flex flex-col border-b border-gray-100 pb-4">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Project Length
                    </span>
                    <div className="flex items-center text-[#111111] font-bold text-lg">
                      <RulerIcon className="w-5 h-5 text-[#1F7A63] mr-3 shrink-0" />{" "}
                      {project.projectLength}
                    </div>
                  </div>
                )}

                <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Status
                  </span>
                  <div className="flex items-center text-[#111111] font-bold text-lg">
                    <CircleCheck className="w-5 h-5 text-[#1F7A63] mr-3" />{" "}
                    {project.status}
                  </div>
                </div>

                {/* <div className="flex flex-col pt-2">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Services Provided
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesProvided.map((service, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f8f9fa] border border-gray-200 text-[#111111] px-3 py-1.5 rounded-md text-sm font-bold"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>

            {/* Materials Used Box */}
            <div className="bg-[#111111] p-8 rounded-2xl shadow-xl text-white">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-4 h-4 bg-[#FFC107] mr-3"></span>
                Project Highlights
              </h4>
              <ul className="space-y-3">
                {project.projectHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F7A63] mr-3"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Related Projects */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#111111] mb-4">
                Related Projects
              </h2>
              <p className="text-gray-600 text-lg">
                Explore similar construction masterpieces.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center text-[#1F7A63] font-bold hover:text-[#111111] transition-colors"
            >
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((rp, idx) => (
              <Link href={`/projects/${rp.id}`} key={rp.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden rounded-xl mb-4">
                    <div className="absolute inset-0 bg-[#111111]/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#1F7A63] transition-colors mb-1">
                    {rp.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 font-medium">
                    <MapPin className="w-4 h-4 mr-1 text-[#FFC107]" />{" "}
                    {rp.location}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center text-[#1F7A63] font-bold border border-[#1F7A63] px-6 py-3 rounded-md"
            >
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Call To Action */}
      <ProjectCTA />

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#FFC107] transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen Gallery"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
