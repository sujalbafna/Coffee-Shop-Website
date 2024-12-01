import React from 'react';
import { motion } from 'framer-motion';
import { coffees } from '../data/coffees';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="min-w-screen h-screen flex items-center space-x-8 px-8">
      {coffees.map((coffee) => (
        <motion.div
          key={coffee.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="min-w-[400px] bg-white rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src={coffee.image}
            alt={coffee.name}
            className="w-full h-48 object-cover"
          />
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
              <button className="px-4 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};