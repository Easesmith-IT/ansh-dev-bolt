'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data/projects';
import { Quote, Star } from 'lucide-react';

const ClientTestimonials = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
            Client <span className="text-[#FFC107]">Testimonials</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Hear directly from our clients about their experience partnering with Ansh Developers for their construction projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1F7A63] relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#FFC107]/20" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic relative z-10 leading-relaxed min-h-[120px]">
                "{testimonial.text}"
              </p>
              
              <div>
                <h4 className="font-bold text-[#111111] text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm font-medium text-[#1F7A63]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
