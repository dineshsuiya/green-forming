import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Fresh Organic Produce",
      description: "Locally grown, pesticide-free vegetables and fruits",
      bgColor: "bg-green-500"
    },
    {
      title: "Sustainable Farming",
      description: "Eco-friendly practices for a better tomorrow",
      bgColor: "bg-green-600"
    },
    {
      title: "Farm to Table",
      description: "Direct from our farms to your kitchen",
      bgColor: "bg-green-700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`w-full h-full flex-shrink-0 flex items-center justify-center text-white ${slide.bgColor}`}
            >
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <Link 
                  to="/products" 
                  className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            Why Choose GreenFarm?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-gray-600">Chemical-free farming methods for healthier produce</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Fresh products delivered to your doorstep</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable practices that protect our planet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-800 mb-2">500+</div>
              <div className="text-green-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-800 mb-2">50+</div>
              <div className="text-green-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-800 mb-2">10+</div>
              <div className="text-green-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-800 mb-2">100%</div>
              <div className="text-green-600">Organic</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;