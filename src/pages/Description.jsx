import React from 'react'
import Productpage from '../components/Productpage/Productpage'
import Navbar from '../components/Navbar'
const Description = () => {

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div  className='max-w-7xl mx-auto p-8'>
        <Productpage></Productpage>
    </div>
    </div>
    
  )
}

export default Description