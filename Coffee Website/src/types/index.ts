export interface Coffee {
  id: string;
  name: string;
  origin: string;
  description: string;
  flavorNotes: string[];
  price: number;
  image: string;
}

export interface BrewGuide {
  id: string;
  title: string;
  steps: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}