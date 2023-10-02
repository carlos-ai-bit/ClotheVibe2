/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Socks = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const buyAndPay = () => {
    // Perform payment process here
    // You can add your own logic or integrate with a payment gateway
    alert("Thank you for your purchase!");
    setCart([]);
  };

  const shoesData = [
    {
      id: 1,
      price: 10,
      image:
        "https://images.unsplash.com/photo-1616531758364-731625b1f273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29ja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      price: 20,
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNvY2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      price: 40,
      image:
        "https://images.unsplash.com/photo-1640026199235-c24aa417b552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      price: 50,
      image:
        "https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div>
      <h1 className="mb-5">Socks Collections</h1>
      <div className="grid grid-cols-2 gap-4">
        {shoesData.map((shoe) => (
          <div key={shoe.id} className="border p-4">
            <img src={shoe.image} alt={shoe.name} className="mb-2" />
            <h2>{shoe.name}</h2>
            <p>Price: ${shoe.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart(shoe)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2>Cart:</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="inline-block w-8 h-8 mr-2"
              />
              {product.name} - ${product.price}
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={buyAndPay}
        >
          Buy and Pay
        </button>
      )}
    </div>
  );
};

export default Socks;
