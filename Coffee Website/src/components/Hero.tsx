import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-serif mb-6"
        >
          Brewed with Passion,<br />Delivered with Love
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Experience the world's finest single-origin coffees, 
          carefully selected and roasted to perfection.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-700 transition-colors">
            Shop Now
          </button>
          <button className="px-8 py-3 bg-white text-amber-900 rounded-lg hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};