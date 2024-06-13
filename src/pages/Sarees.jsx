import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards/Cards';

export default function Sarees() {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <div className='mt-14'>
        <Cards />
      </div>
    </div>
  );
}
