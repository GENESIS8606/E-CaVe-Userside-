import React from 'react';
import { Link } from 'react-router-dom';
import Tesla from '../assets/comap/Tesla_logo.png';
import Ford from '../assets/comap/Ford.jpg';
import Nissan from '../assets/comap/Nissan.png';
import Volkswagen from '../assets/comap/volkswagen.jpg';
import GM from '../assets/comap/GM.jpg';
import Rivian from '../assets/comap/Rivian.png';
import LucidMotors from '../assets/comap/LucidMotors.png';
import Daimler from '../assets/comap/DAI.DE.png';
import Nio from '../assets/comap/NIO.png';
import Navbar from '../components/Navbar';

const companiesData = [
  { id: 1, name: 'Tesla', logo: Tesla, path: '/one', description: 'Innovative electric vehicles by Tesla.' },
  { id: 2, name: 'Ford', logo: Ford, path: '/one', description: 'Explore a legacy of American automotive excellence with Ford.' },
  { id: 3, name: 'Nissan', logo: Nissan, path: '/one', description: 'Nissan - Driving the future of mobility.' },
  { id: 4, name: 'Volkswagen', logo: Volkswagen, path: '/one', description: 'Volkswagen - Shaping the future of mobility.' },
  { id: 5, name: 'GM', logo: GM, path: '/one', description: 'General Motors - Committed to creating a world with Zero Crashes.' },
  { id: 6, name: 'Rivian', logo: Rivian, path: '/one', description: 'Rivian - Adventure awaits with electric adventure vehicles.' },
  { id: 7, name: 'Daimler', logo: Daimler, path: '/one', description: 'Daimler - Pioneering future mobility.' },
  { id: 8, name: 'Lucid Motors', logo: LucidMotors, path: '/one', description: 'Lucid Motors - Luxury electric cars.' },
  { id: 9, name: 'NIO', logo: Nio, path: '/one', description: 'NIO - Empower your spirit of adventure.' }
];

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// ... (previous imports and code)

const Companys = () => {
  return (
    <>
      <Navbar/>
      <div>
        <h1 className="text-3xl font-bold mb-4">Explore Electric Vehicle Manufacturers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {companiesData.map((company) => (
            <Link key={company.id} to={company.path}>
              <div
                className={`p-4 rounded-md shadow-md transition duration-300 transform hover:scale-105`}
                style={{ background: getRandomColor() }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="w-full h-32 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-bold text-white">{company.name}</h2>
                <p className="text-sm text-white mb-4">{company.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Companys;

