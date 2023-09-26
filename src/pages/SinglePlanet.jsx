import React from 'react';
import { useParams } from 'react-router-dom';
import { planetsData } from '../components/planetsData';
import Navbar from '../components/navbar';
import ImageCard from '../components/ImageCard';

const SinglePlanet = () => {
  const { name } = useParams();


  const planet = planetsData.find((planet) => planet.name === name);

  return (
    <section className='min-h-screen bg-black mx-auto px-4 lg:px-0 container text-white font-mono'>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row gap-x-2 lg:mt-20 lg:py-10 lg:mr-20 border-2 rounded-lg\'">
        <div className=" bg-black p-4 rounded-lg mb-2 lg:flex-1">
          <ImageCard
            title={planet.name}
            info={planet.info}
            image={planet.image} />
        </div>
      </div>
    </section>
  );
};

export default SinglePlanet;





