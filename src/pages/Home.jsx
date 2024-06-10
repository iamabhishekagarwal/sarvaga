import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/hero/Hero';
import Products from '../components/Products/Products';
import Trending from '../components/TopProducts/Trending';
import Banner from '../components/Banner/Banner';
import Testimonial from '../components/Testimonial/Testimonial';

function navigate(url) {
  window.location.href = url;
}

async function auth() {
  try {
    const response = await fetch("http://localhost:5172/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include' // This will include cookies in the request
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    navigate(data.url);
  } catch (error) {
    console.error('Failed to fetch:', error.message);
  }
}

export default function Home() {
  return (
    <>
      <h1>Welcome to Sarvaga</h1>
      <button type='button' onClick={auth}>
        Google Sign In
      </button>
      <Navbar />
      <Hero />
      <Products />
      <Trending />
      <Banner />
      <Testimonial />
    </>
  );
}
