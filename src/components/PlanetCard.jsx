import React from 'react';
import { Link } from 'react-router-dom';

const PlanetCard = ({ planet }) => {
  return (
    <div key={planet.name} className="w-full sm:w-1/2 lg:w-1/4 p-4">
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg h-auto">
        <div className='flex items-center justify-center px-2 mt-2'>
          <img
            src={planet.image}
            alt={planet.name}
            className="max-h-[200px] py-5 object-cover rounded-lg"
          />
        </div>
        <div className="px-4">
          <h2 className="text-xl font-semibold text-white text-center">{planet.name}</h2>
          <h2 className="text-sm text-white text-center mt-4 ">{planet.bio}</h2>
          <div className="mt-5 flex justify-center">
            <Link to={`/planet/${planet.name}`} className="bg-yellow-300 hover:bg-white font-semibold py-2 px-4 rounded-full mb-6">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;