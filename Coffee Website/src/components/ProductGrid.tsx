import React from 'react';
import { motion } from 'framer-motion';
import { coffees } from '../data/coffees';
import { ShoppingCart } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif text-amber-900 mb-12 text-center"
        >
          Our Premium Selection
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffees.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative group">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-amber-900 mb-2">{coffee.name}</h3>
                <p className="text-amber-700 mb-4">{coffee.origin}</p>
                <p className="text-gray-600 mb-4">{coffee.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {coffee.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-900">
                    ${coffee.price}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};