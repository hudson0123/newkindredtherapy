import React from 'react';

export default function About() {
  return (
    <div id="about" className="h-[100dvh] grid bg-white p-4 sm:p-24">
      <div className="relative flex justify-center font-bold text-2xl mb-10">
        <h1 className='text-4xl z-10 text-[rgb(75,69,149)]'>What We&apos;re About</h1>
        <div className='absolute bg-[#eaebff] h-12 w-72 top-4 right-[36dvw] blur-md z-2'></div>
      </div>
      <div className="grid grid-rows-2 gap-20 p-2 sm:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className='flex justify-center'>
            <img src="/robinandheather.jpg" alt="heather and robin" className="h-[400px] rounded-2xl shadow-xl" />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p className='text-2xl mb-4'>
              Robin Schafer and Heather Hastie recently merged their thriving private practices to form Kindred Therapy.
            </p>
            <p className='text-2xl'>
              With over 50 years of combined experience, they share a deep commitment to fostering loving, joyful, and honest relationships between children and caregivers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
