import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-amber-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bean to cup, we're dedicated to crafting the perfect coffee experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-serif text-amber-900 mb-6">Our Heritage</h3>
            <p className="text-gray-600 mb-6">
              Founded in 1985, Artisan Roasts began with a simple mission: to source and roast the world's finest coffee beans. 
              Our journey has taken us from the misty highlands of Ethiopia to the volcanic slopes of Guatemala, 
              always in pursuit of exceptional coffee and sustainable partnerships.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="Coffee Making Process"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Coffee className="w-8 h-8 text-amber-600 mb-4" />
              <h4 className="text-xl font-serif text-amber-900 mb-2">Artisanal Roasting</h4>
              <p className="text-gray-600">
                Each batch is carefully roasted to bring out the unique characteristics of every origin.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Leaf className="w-8 h-8 text-amber-600 mb-4" />
              <h4 className="text-xl font-serif text-amber-900 mb-2">Sustainable Sourcing</h4>
              <p className="text-gray-600">
                Direct trade relationships with farmers ensure fair prices and environmental stewardship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="w-8 h-8 text-amber-600 mb-4" />
              <h4 className="text-xl font-serif text-amber-900 mb-2">Community Impact</h4>
              <p className="text-gray-600">
                Supporting coffee-growing communities through education and infrastructure projects.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-3xl font-serif text-amber-900 mb-8 text-center">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-amber-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    quote: "The best coffee I've ever tasted. Their Ethiopian Yirgacheffe is simply outstanding!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    quote: "Their subscription service has transformed my morning routine. Exceptional quality!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Emma Rodriguez",
    location: "Chicago, IL",
    quote: "Not just great coffee, but a company that truly cares about sustainability.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];