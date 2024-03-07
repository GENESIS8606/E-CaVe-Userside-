import React from 'react';
import { Link } from 'react-router-dom';
import Car from '../assets/images/x3.png';
import Car1 from '../assets/foad/hybrid.png';
import Car2 from '../assets/GM/Chevrolet Bolt EV.png';

const ProductCard = ({ image, title, description }) => (
  <div className='flex flex-col items-center mb-8'>
    <img className='w-[500px] my-4' src={image} alt={title} />
    <p className='text-[#00df9a] font-bold'>Featured</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{title}</h1>
    <p>{description}</p>
    <div className='flex gap-6'>
      <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>
        Know More
      </button>
      <Link to='/booking'>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>
          Book Now
        </button>
      </Link>
    </div>
  </div>
);
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <ProductCard
          image={Car}
          title='Tesla X3'
          description='Prepare to witness a paradigm shift in the world of electric vehicles with the introduction of the Tesla X3.
           This mid-sized automotive masterpiece represents a groundbreaking addition that transcends the boundaries of conventional transportation.
           Teslas unwavering commitment to innovation takes center stage as the X3 seamlessly integrates cutting-edge technology with an avant-garde design,
           reshaping the very essence of the automotive landscape.Step into a realm where the Tesla X3 is not merely a vehicle but an embodiment of a sustainable and electrifying future.
           This marvel of engineering redefines what is possible, combining state-of-the-art features with an aesthetic finesse that elevates it to a class of its own.
           From its impressive performance metrics to the eco-conscious design philosophy, the Tesla X3 stands tall as a symbol of progress, blending form and function in perfect harmony.
           As you embark on a journey behind the wheel of the Tesla X3, you are not just driving; you are embracing a revolution. This mid-sized marvel beckons you to experience the fusion of cutting-edge technology and sleek design,
           setting new benchmarks for electric vehicles.
           Join us in redefining the automotive narrative – where the future is not a concept but a reality, embodied in every aspect of the Tesla X3.'/>
        <ProductCard
          image={Car1}
          title='ESCAPE PLUG-IN HYBRID'
          description='The Escape Plug-In Hybrid stands as a testament to the harmonious marriage of advanced technology and environmental responsibility. 
          It redefines the traditional driving experience by effortlessly combining the convenience of a plug-in hybrid with the versatility of an SUV.
          Experience the perfect fusion of dynamic performance and environmental responsibility. The Escape Plug-In Hybrid adapts to your driving needs,
           seamlessly transitioning between electric-only propulsion for short trips and the adaptability of a hybrid for longer journeys, ensuring efficiency without compromising on excitement.'/>
        <ProductCard
          image={Car2}
          title='Chevrolet Bolt EV'
          description='Introducing the Chevrolet Bolt EV, a groundbreaking electric vehicle that seamlessly combines innovation, efficiency, and style. Designed to redefine your driving experience, the Bolt EV stands out in the world of electric cars with its cutting-edge technology and impressive features.
          The Bolt EV offers an extended all-electric range, alleviating range anxiety and providing the freedom to cover more miles on a single charge. Its efficient performance ensures a responsive acceleration and a smooth, quiet ride, making every journey enjoyable.
          With a modern and aerodynamic design, both inside and out, the Bolt EV doesnt compromise on style or space. The compact yet thoughtfully designed interior offers comfort for both the driver and passengers, creating a stylish and functional environment.
          Stay connected and informed with Chevrolets latest technology features.'/>
      </div>
    </div>
  );
};

export default Analytics;

