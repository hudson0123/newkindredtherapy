
import React from 'react';

export default function Hero() {




  return (
    <div id="hero" className="min-h-screen bg-[rgb(204,206,234)] py-10 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="font-playfair text-[rgb(48,104,184)] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide">
            Kindred Therapy
          </h1>
          <p className="font-montserrat text-[rgb(75,69,149)] text-base sm:text-lg md:text-xl font-bold tracking-wider">
            NURTURING CONNECTION.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img src="/hero-image.png" alt="heart-image" className="w-2/3 sm:w-[45vh] md:w-[40dvh] object-cover" />
        </div>
      </div>
    </div>
  );
}
