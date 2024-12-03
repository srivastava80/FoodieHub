import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-orange-600">
            FoodieHub
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-orange-600">Menu</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
          </div>

          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-orange-600"
            >
              <ShoppingCart />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Menu</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}