import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="p-4 rounded-md shadow-md mb-4">
      <img
        src={car.image}
        alt={`${car.name} Image`}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold text-black">{car.name}</h2>
      <p className="text-sm text-gray-700 mb-2">{car.description}</p>
      <p className="text-sm text-gray-700">Price: ${car.price}</p>
    </div>
  );
};

export default CarCard;
