/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "product1.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://images.unsplash.com/photo-1571267434388-6a1df2649dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb3RiYWxsJTIwYm9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: "product3.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 14.99,
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    setCart([...cart, selectedProduct]);
  };

  const handleRemoveFromCart = () => {
    const updatedCart = cart.filter((item) => item.id !== selectedProduct.id);
    setCart(updatedCart);
  };

  const handleBuy = () => {
    // Handle the buy action, such as redirecting to a payment page
    console.log("Buy clicked!");
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`cursor-pointer p-4 border ${
              selectedProduct?.id === product.id ? "border-blue-500" : ""
            }`}
            onClick={() => handleProductClick(product)}
          >
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-2"
            />
          </div>
        ))}
      </div>
      <div className="w-3/4">
        {selectedProduct ? (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              {selectedProduct.name} Details
            </h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-auto mb-2"
            />
            <p>{selectedProduct.details}</p>
            <p>Price: ${selectedProduct.price}</p>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleRemoveFromCart}
              >
                Remove from Cart
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleBuy}
              >
                Buy
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <p>No product selected</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
