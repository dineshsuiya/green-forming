import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Organic Farming",
      description: "Sustainable organic farming practices that protect the environment",
      features: ["No pesticides", "Crop rotation", "Natural fertilizers", "Soil conservation"]
    },
    {
      title: "Farm Consulting",
      description: "Expert advice for starting and maintaining successful farms",
      features: ["Business planning", "Crop selection", "Market analysis", "Sustainability practices"]
    },
    {
      title: "Farm Tours",
      description: "Educational tours of our sustainable farming operations",
      features: ["Guided tours", "Educational workshops", "Hands-on activities", "Group packages"]
    },
    {
      title: "CSA Program",
      description: "Community Supported Agriculture program for fresh weekly produce",
      features: ["Weekly deliveries", "Seasonal selections", "Customizable boxes", "Home delivery"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We offer a range of services to support sustainable agriculture and connect 
          our community with fresh, local produce.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                activeTab === index
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            {services[activeTab].title}
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            {services[activeTab].description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services[activeTab].features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600">✓</span>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Interested in Our Services?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to learn more about how we can help you
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;