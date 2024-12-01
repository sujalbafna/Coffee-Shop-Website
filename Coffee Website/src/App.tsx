import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { About } from './components/About';
import { Subscriptions } from './components/Subscriptions';
import { Contact } from './components/Contact';
import { LoginModal } from './components/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navigation onLoginClick={() => setIsLoginOpen(true)} />
      <main>
        <Hero />
        <ProductGrid />
        <About />
        <Subscriptions />
        <Contact />
      </main>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;