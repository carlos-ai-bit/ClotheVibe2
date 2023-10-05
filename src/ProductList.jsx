/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
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
    name: "Football boots",
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
    id: 14,
    name: "Hijabs",
    price: "50",
    image:
      "https://plus.unsplash.com/premium_photo-1683133405779-081b5e4311e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhpamFic3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 15,
    name: "Scarf",
    price: "10",
    image:
      "https://images.unsplash.com/photo-1613837770636-cae46b162c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjYXJmfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  // Add more clothes data here
];
const ProductList = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (clothes) => {
    setCart([...cart, clothes]);
  };

  const removeFromCart = (clothes) => {
    const updatedCart = cart.filter((item) => item.id !== clothes.id);
    setCart(updatedCart);
  };
  function navigateShoes() {
    navigate("/Shoes");
  }
  function navigateSignUp() {
    navigate("/SignUp");
  }
  function navigateLogin() {
    navigate("/Login");
  }
  function navigateProductSearch() {
    navigate("/ProductSearch");
  }
  function navigateTShirt() {
    navigate("/TShirt");
  }
  function navigateJeans() {
    navigate("/Jeans");
  }
  function navigateJersey() {
    navigate("/Jersey");
  }
  function navigateLingerie() {
    navigate("/Lingerie");
  }
  function navigateShorts() {
    navigate("/Shorts");
  }
  function navigateSocks() {
    navigate("/Socks");
  }
  function navigateUnderGarments() {
    navigate("/UnderGarments");
  }
  function navigateCap() {
    navigate("/Cap");
  }
  function navigateFootballBoots() {
    navigate("/FootballBoots");
  }
  function navigateGymWearMen() {
    navigate("/GymWearMen");
  }
  function navigateGymWearWomen() {
    navigate("/GymWearWomen");
  }
  function navigateHijabs() {
    navigate("/Hijabs ");
  }
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  const handlePrivacyClick = () => {
    setShowPrivacy(!showPrivacy);
  };

  const handleTermsClick = () => {
    setShowTerms(!showTerms);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="absolute top-0 right-0 mt-9 mr-6">
        <select className="bg-blue-400 border  border-blue-500 rounded px-4 py-2 outline-none">
          <option className="" value="" onClick={navigateSignUp}>
            SignUp
          </option>
          <option className="" value="" onClick={navigateShoes}>
            Shoes
          </option>
          <option className="" value="" onClick={navigateLogin}>
            Login
          </option>
          <option className="" value="" onClick={navigateProductSearch}>
            ProductSearch
          </option>
          <option className="" value="" onClick={navigateTShirt}>
            T-Shirt
          </option>
          <option className="" value="" onClick={navigateJeans}>
            Jeans
          </option>{" "}
          <option className="" value="" onClick={navigateJersey}>
            Jersey
          </option>{" "}
          <option className="" value="" onClick={navigateLingerie}>
            Lingerie
          </option>{" "}
          <option className="" value="" onClick={navigateShorts}>
            Shorts
          </option>{" "}
          <option className="" value="" onClick={navigateSocks}>
            Socks
          </option>{" "}
          <option className="" value="" onClick={navigateUnderGarments}>
            UnderGarments
          </option>{" "}
          <option className="" value="" onClick={navigateCap}>
            Cap
          </option>{" "}
          <option className="" value="" onClick={navigateFootballBoots}>
            FootballBoots
          </option>{" "}
          <option className="" value="" onClick={navigateGymWearMen}>
            GymWearMen
          </option>{" "}
          <option className="" value="" onClick={navigateGymWearWomen}>
            GymWearWomen
          </option>
          <option className="" value="" onClick={navigateHijabs}>
            Islam Wear
          </option>
        </select>
      </div>
      <h1 className="text-3xl font-bold mb-4">Clothes Store</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((clothes) => (
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
            {/* <button
              onClick={navigateShoes}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-44"
            >
              View More
            </button> */}
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
      <div className="mt-9">
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={handleAboutClick}
          >
            About Us
          </button>
          {showAbout && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h2 className="text-lg font-bold mb-2 ">About Us</h2>
              <p>
                Welcome to our Clothes App! We are a fashion-forward mobile
                application designed to provide an exceptional shopping
                experience for clothing enthusiasts. Our app offers a wide range
                of trendy and high-quality clothing items for all ages and
                genders. With a user-friendly interface and convenient features,
                we aim to make your shopping journey seamless and enjoyable.
              </p>
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-2"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
          {showContact && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h2 className="text-lg font-bold mb-2">Contact Us</h2>
              <p></p>
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-2"
            onClick={handlePrivacyClick}
          >
            Privacy Policy
          </button>
          {showPrivacy && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h2 className="text-lg font-bold mb-2">Privacy Policy</h2>
              <p></p>
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-2"
            onClick={handleTermsClick}
          >
            Terms of Service
          </button>
          {showTerms && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h2 className="text-lg font-bold mb-2">Terms of Service</h2>
              <p></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
