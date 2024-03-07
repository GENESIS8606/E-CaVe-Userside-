import React from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../components/Navbar';
import image from '../assets/baack.png';
import car1 from '../assets/car1.png';

const About = () => {
  const carAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  // Replace the following sample data with your actual data
  const eCaveInfo = {
    companyName: 'E-Cave',
    tagline: 'Exploring the Future of E-Vehicles',
    location: '456 Electric Avenue, Tech City',
    description: 'At E-Cave, we are passionate about bringing you the latest and greatest in electric vehicles. Our showroom is a haven for innovation, sustainability, and cutting-edge technology. Join us on the journey towards a greener and cleaner future!',
    teamMembers: [
      { id: 1, name: 'Lenac Liju', role: 'Founder & CEO' },
      { id: 2, name: 'Maxin', role: 'Head of Operations' },
      { id: 3, name: 'Akshal', role: 'Lead Engineer' },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-8 p-4" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-white">{eCaveInfo.companyName}</h1>
          <p className="text-lg italic text-gray-600">{eCaveInfo.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <animated.div style={carAnimation}>
            <img
              src={car1}
              alt="Car"
              className="w-full h-auto rounded-md shadow-md"
            />
          </animated.div>

          <div>
            <p className="text-lg text-white">{eCaveInfo.description}</p>

            <h2 className="text-xl font-bold mt-4 mb-2 text-white">Location:</h2>
            <p className="text-gray-700">{eCaveInfo.location}</p>

            <h2 className="text-xl font-bold mt-4 mb-2 text-white">Our Team:</h2>
            <ul className="list-disc pl-4">
              {eCaveInfo.teamMembers.map((member) => (
                <li key={member.id} className="text-white">{`${member.name} - ${member.role}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h1>
            hello to all
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
