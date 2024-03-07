import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Price Veriactions</h2>
              <p className='text-center text-4xl font-bold'>$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Click Bellow to Know Diffrent Price</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>click</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Book for test Drive</h2>
              <p className='text-center text-4xl font-bold'>$$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Booking is avilable</p>
                  <p className='py-2 border-b mx-8'>Click Below</p>
             </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Click</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Know More Featued Vechicles</h2>
              <p className='text-center text-4xl font-bold'>$$$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>To Know about more vechicle avilable to you </p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Click</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
