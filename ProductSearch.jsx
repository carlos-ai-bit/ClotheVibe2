/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: "$19.99",
      image: "tshirt.jpg",
    },
    {
      id: 2,
      name: "Jeans",
      price: "$39.99",
      image: "jeans.jpg",
    },
    // Add more fashion products here
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Product Search</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <div key={product.id} className="bg-white rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
