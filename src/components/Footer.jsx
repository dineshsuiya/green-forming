import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GreenFarm</h3>
            <p className="text-green-200">
              Sustainable farming practices for a healthier tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/products" className="hover:text-white">Our Products</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-green-200 space-y-2">
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@greenfarm.com</p>
              <p>📍 123 Farm Road, Countryside</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-300">
          <p>&copy; 2024 GreenFarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;