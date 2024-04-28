import React from 'react'
import Navbar from './components/Navbar'

import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Hero from './components/hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css"
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease in sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      {/* <Signin></Signin>
      <Signup></Signup> */}
      
      
     
      

    </div>
  )
}

export default App