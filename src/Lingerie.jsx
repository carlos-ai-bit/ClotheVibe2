/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Lingerie = () => {
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
      price: 150,
      image:
        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw20914ece/images/BOD25062127-M.jpg?sw=400&sfrm=jpeg",
    },
    {
      id: 2,
      price: 100,
      image:
        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwaf59af19/images/RGC25062127-M.jpg?sw=400&sfrm=jpeg",
    },
    {
      id: 3,
      price: 120,
      image:
        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwd9bf5e52/images/BOD2506019-M.jpg?sw=400&sfrm=jpeg",
    },
    {
      id: 4,
      price: 150,
      image:
        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw7640cfaa/images/LBD2512334J-M.jpg?sw=400&sfrm=jpeg",
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

export default Lingerie;
