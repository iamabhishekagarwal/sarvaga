import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Cards/Card'; // Update with the correct path to your Card component

export default function Sarees() {
  const [sarees, setSarees] = useState([]);

  useEffect(() => {
    fetchSarees();
  }, []);

  async function fetchSarees() {
    try {
      const response = await fetch("http://localhost:5172/user/products/getsarees");
      if (!response.ok) {
        throw new Error('Failed to fetch sarees');
      }
      const data = await response.json();
      setSarees(data);
    } catch (error) {
      console.error('Error fetching sarees:', error);
    }
  }

  return (
    <div className='bg-gray-50'>
      <Navbar />
      <div className='container mx-auto px-4 mt-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {sarees.map((saree) => (
            <Card key={saree.productCode} product={saree} />
          ))}
        </div>
      </div>
    </div>
  );
}
