import React, { useState, useEffect } from 'react';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Simulate API call
    const fetchTeamMembers = () => {
      const members = [
        { id: 1, name: 'John Farmer', role: 'Founder & CEO', experience: '15 years' },
        { id: 2, name: 'Sarah Grower', role: 'Head of Operations', experience: '12 years' },
        { id: 3, name: 'Mike Agriculturist', role: 'Farm Manager', experience: '10 years' }
      ];
      setTeamMembers(members);
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">About GreenFarm</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over a decade, GreenFarm has been committed to sustainable agriculture 
            and providing fresh, organic produce to our community.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To revolutionize farming through sustainable practices that nourish both people 
              and the planet, while providing the freshest organic produce to our customers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              A world where everyone has access to healthy, locally-grown food while 
              preserving our environment for future generations.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-800 text-lg font-semibold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.role}</p>
                <p className="text-gray-500">Experience: {member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mr-4">
                2010
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Founded GreenFarm</h3>
                <p className="text-gray-600">Started with a small 5-acre farm and a vision for sustainable agriculture</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mr-4">
                2015
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Organic Certification</h3>
                <p className="text-gray-600">Received official organic certification for all our farming practices</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mr-4">
                2020
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expanded Operations</h3>
                <p className="text-gray-600">Grew to 50+ acres and launched our online store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;