import React from 'react';
import { motion } from 'framer-motion';
import { subscriptionPlans } from '../data/subscriptions';
import { Check } from 'lucide-react';

export const Subscriptions: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif text-amber-900 mb-4">
            Subscribe to Your Daily Brew
          </h2>
          <p className="text-xl text-gray-600">
            Choose a plan that works for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-xl shadow-xl ${
                plan.popular ? 'border-2 border-amber-600' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-serif text-amber-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-amber-900 mb-6">
                ${plan.price}
                <span className="text-base font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg transition-colors ${
                plan.popular
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};