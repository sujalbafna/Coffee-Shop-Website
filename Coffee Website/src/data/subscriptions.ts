import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Explorer',
    price: 24.99,
    description: 'Perfect for coffee enthusiasts who love variety',
    features: [
      '250g of premium coffee monthly',
      'Rotating selection of origins',
      'Brew guide included',
      'Free shipping'
    ]
  },
  {
    id: 'weekly',
    name: 'Weekly Connoisseur',
    price: 89.99,
    description: 'For true coffee lovers who need their daily fix',
    features: [
      '250g of premium coffee weekly',
      'Priority access to new releases',
      'Exclusive tasting notes',
      'Free shipping'
    ],
    popular: true
  }
];