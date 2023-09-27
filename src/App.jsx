/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import Login from "./Login ";
import SignUp from "./SignUp ";
import PaymentGateway from "./PaymentGateway";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const clothesData = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Jeans",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Shorts",
    price: "20",
    image:
      "https://images.unsplash.com/photo-1612913334025-bedf136f8715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNob3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Nike",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Heels",
    price: "50",
    image:
      "https://images.unsplash.com/photo-1590099033615-be195f8d575c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "UnderGarments",
    price: "100",
    image:
      "https://plus.unsplash.com/premium_photo-1683120861720-e5babc80c6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFVuZGVyR2FybWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Lingerie",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1625023489823-c9c1e36d6f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpbmdlcmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Cap",
    price: "50",
    image:
      "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    name: "Gym Wear Women",
    price: "150",
    image:
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3ltJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    name: "Gym Wear Men",
    price: "150",
    image:
      "https://images.unsplash.com/photo-1604480133435-25b86862d276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEd5bSUyMHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    name: "Phantoms",
    price: "200",
    image:
      "https://images.unsplash.com/photo-1612387604874-e75a5820637a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEZvb3RiYWxsJTIwYm9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    name: "Jersey",
    price: "50",
    image:
      "https://images.unsplash.com/photo-1577212017184-80cc0da11082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwamVyc2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    name: "Socks",
    price: "8",
    image:
      "https://images.unsplash.com/photo-1613151848917-80e67f421fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Polo",
    price: "50",
    image:
      "https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9sbyUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Scarf",
    price: "10",
    image:
      "https://images.unsplash.com/photo-1613837770636-cae46b162c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjYXJmfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  // Add more clothes data here
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (clothes) => {
    setCart([...cart, clothes]);
  };

  const removeFromCart = (clothes) => {
    const updatedCart = cart.filter((item) => item.id !== clothes.id);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Clothes Store</h1>
      <div className="grid grid-cols-3 gap-4">
        {clothesData.map((clothes) => (
          <div key={clothes.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={clothes.image}
              alt={clothes.name}
              className="w-full h-50 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{clothes.name}</h2>
            <p className="text-gray-600">${clothes.price}</p>
            <button
              onClick={() => addToCart(clothes)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {cart.map((clothes) => (
            <li key={clothes.id} className="flex items-center">
              <img
                src={clothes.image}
                alt={clothes.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{clothes.name}</h3>
                <p className="text-gray-600">${clothes.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(clothes)}
                className="ml-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PaymentGateway" element={<PaymentGateway />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductSearch" element={<ProductSearch />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
