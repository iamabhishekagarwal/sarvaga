import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/hero/Hero';
import Products from '../components/Products/Products';
import Trending from '../components/TopProducts/Trending';
import Banner from '../components/Banner/Banner';
import Testimonial from '../components/Testimonial/Testimonial';
export default function Home({Authenticated}) {
  return (
    <div className='bg-gray-100'>
      
      <Navbar />
      <Hero />
      <Products />
      <Trending />
      <Banner />
      <Testimonial />
    </div>
  );
}
