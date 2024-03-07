import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
        Ecave is an online platform specializing in electric vehicle (EV) bookings.
         It simplifies the process of reserving EVs for commuting, events, or leisure.
          With a user-friendly interface, transparent pricing, and essential vehicle details,
           Ecave promotes eco-friendly transportation, making electric mobility accessible and convenient for a sustainable future.
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          We Grow With Your Support And Satisfation
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast & Easy for you
          </p>
          <br></br>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['to Look', 'to Book', 'And to Explore']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>"ECAVE: Empowering Journeys, Sparking Change. Drive the Future, Sustainably Yours."</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
