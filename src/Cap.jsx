/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Cap = () => {
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
      price: 50,
      image:
        "https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      price: 80,
      image:
        "https://plus.unsplash.com/premium_photo-1673757121159-d380255e6284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      price: 70,
      image:
        "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      price: 40,
      image:
        "https://images.unsplash.com/photo-1568246621541-5704b4f0bbf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div>
      <h1 className="mb-5">Cap Collections</h1>
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

export default Cap;
