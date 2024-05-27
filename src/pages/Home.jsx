import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Products from '../components/Products/Products'
import Trending from '../components/TopProducts/Trending'
import Banner from '../components/Banner/Banner'
import Testimonial from '../components/Testimonial/Testimonial'
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Products></Products>
    <Trending></Trending>
    <Banner></Banner>
    <Testimonial></Testimonial>   
    </>
  )
}
