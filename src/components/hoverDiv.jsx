import React, { useState } from 'react';

const HoverDiv = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative text-white bg-hero border-2 to-blue-800 transition-all duration-500 p-4 rounded-lg mb-2 lg:flex-1 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      
      {isHovered && (
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          View Earth
        </button>
      )}
    </div>
  );
};

export default HoverDiv;