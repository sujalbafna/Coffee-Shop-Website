import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingCart, User, Menu, X } from 'lucide-react';

interface NavigationProps {
  onLoginClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Coffee className={`h-8 w-8 ${isScrolled ? 'text-amber-800' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-serif ${isScrolled ? 'text-amber-900' : 'text-white'}`}>
              Artisan Roasts
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#products" isScrolled={isScrolled}>Products</NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#subscribe" isScrolled={isScrolled}>Subscribe</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-amber-50 text-amber-800' : 'hover:bg-white/10 text-white'
            }`}>
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              onClick={onLoginClick}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-amber-50 text-amber-800' : 'hover:bg-white/10 text-white'
              }`}
            >
              <User className="h-6 w-6" />
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-amber-800' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-amber-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#products">Products</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#subscribe">Subscribe</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; isScrolled: boolean }> = ({
  href,
  children,
  isScrolled
}) => (
  <a
    href={href}
    className={`text-sm font-medium transition-colors ${
      isScrolled ? 'text-gray-600 hover:text-amber-800' : 'text-white hover:text-amber-200'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children
}) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-800 hover:bg-amber-50 rounded-md"
  >
    {children}
  </a>
);