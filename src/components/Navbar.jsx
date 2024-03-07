import React from 'react';
import { Link } from 'react-router-dom';
import faviconImage from '../assets/fav.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full'>
        <img src={faviconImage} alt="React Logo" className='w-8 h-8 mr-2' />
        <span className='text-3xl font-bold text-[#00df9a]'>E-CaVe</span>
      </h1>
      <ul className='hidden md:flex space-x-4'>
        <Link to="/" activeClassName="active-link">Home</Link>
        <Link to="/company" activeClassName="active-link">Company</Link>
        <div>
          <button>  
          <Link to="/booking" activeClassName="active-link">Booking</Link>
          </button>
        </div>
        <Link to="/about" activeClassName="active-link">About</Link>
        <Link to="/contact" activeClassName="active-link">Contact</Link>
      </ul>
    </div>
    
  );
};

export default Navbar;
