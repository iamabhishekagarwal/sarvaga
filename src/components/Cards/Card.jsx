// src/Card.js
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={product.img} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 text-base">Rating: {product.rating}</p>
        <p className="text-gray-700 text-base">Author: {product.author}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
