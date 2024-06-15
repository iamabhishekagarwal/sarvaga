import React from 'react';
import Productpage from '../components/Productpage/Productpage';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const Description = () => {
  const { productId } = useParams();

  // Use productId as needed, such as fetching product details based on this ID
  
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto p-8'>
        <Productpage productId={productId} />
      </div>
    </div>
  );
};

export default Description;
