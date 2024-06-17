import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Card from '../components/Cards/Card';

function AdminInventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5172/admin/products/all",
          {
            headers: {
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Methods": "*",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-8 pt-16">
        <h1 className="text-2xl font-bold mb-4">Admin Inventory</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminInventory;
