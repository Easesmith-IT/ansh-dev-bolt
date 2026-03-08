'use client';

import { motion } from 'framer-motion';
import { MessageSquare, LayoutGrid as Layout, Hammer, CircleCheck as CheckCircle, Key } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Consultation',
      description: 'Initial meeting to understand your vision, requirements, and budget for the project.',
    },
    {
      icon: Layout,
      number: '02',
      title: 'Planning & Design',
      description: 'Detailed architectural planning, design approval, and necessary documentation.',
    },
    {
      icon: Hammer,
      number: '03',
      title: 'Construction Execution',
      description: 'Professional construction work with quality materials and skilled workforce.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Quality Inspection',
      description: 'Thorough inspection and quality checks ensuring everything meets standards.',
    },
    {
      icon: Key,
      number: '05',
      title: 'Project Handover',
      description: 'Final walkthrough, documentation, and keys handed over to the satisfied client.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC107] via-[#1F7A63] to-[#FFC107]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#1F7A63] font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-4 mb-6">
            How We Build Your Dream
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A systematic and transparent approach from initial consultation to final handover,
            ensuring quality at every stage.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFC107] to-[#1F7A63] transform -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:text-right">
                  {index % 2 === 0 && (
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-4 lg:flex-row-reverse">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#1F7A63] flex items-center justify-center"
                        >
                          <step.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="lg:text-right">
                          <h3 className="text-2xl font-bold text-[#111111] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFC107] to-[#1F7A63] flex items-center justify-center text-white text-2xl font-bold shadow-2xl"
                  >
                    {step.number}
                  </motion.div>
                </div>

                <div className="flex-1 lg:text-left">
                  {index % 2 !== 0 && (
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#1F7A63] flex items-center justify-center"
                        >
                          <step.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#111111] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
