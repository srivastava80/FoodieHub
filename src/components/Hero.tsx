import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience Fine Dining
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Savor the taste of excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-orange-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors"
            >
              View Menu <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}