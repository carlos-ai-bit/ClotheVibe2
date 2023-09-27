/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ProductSearch = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "T-Shirt", price: 25 },
    { id: 2, name: "Jeans", price: 50 },
    { id: 3, name: "Shoes", price: 75 },
    // Add more products as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setCartItems([...cartItems, productToAdd]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a product..."
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      />

      {filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <li key={product.id} className="border border-gray-300 rounded p-4">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              {cartItems.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Add to Cart
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}

      <h2 className="text-xl font-bold mt-8">Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <span>{item.name}</span>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-600 font-bold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ProductSearch;
