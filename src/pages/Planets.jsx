import React from 'react';
import Navbar from '../components/navbar';
import { planetsData } from '../components/planetsData'; 
import PlanetCard from '../components/PlanetCard';

const Planets = () => {
  return (
    <section className='container mx-auto min-h-screen'>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-wrap justify-center font-mono">
        {planetsData.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} /> 
        ))}
      </div>
    </section>
  );
};

export default Planets;