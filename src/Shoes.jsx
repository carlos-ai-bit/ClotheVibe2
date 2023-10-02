/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Shoes = () => {
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
      name: "Running Shoes",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Sneakers",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1662320774587-1ebd6ad4aea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnMlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "High Heels",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGlnaCUyMGhlZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Boots",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div>
      <h1>Shoes Shop</h1>
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

export default Shoes;
