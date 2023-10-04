// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";

// const Jersey = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((product) => product.id !== productId);
//     setCart(updatedCart);
//   };

//   const buyAndPay = () => {
//     // Perform payment process here
//     // You can add your own logic or integrate with a payment gateway
//     alert("Thank you for your purchase!");
//     setCart([]);
//   };
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const shoesData = [
//     {
//       id: 1,
//       price: 50,
//       image:
//         "https://images.unsplash.com/photo-1577212017308-55c4d60d2609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 2,
//       price: 80,
//       image:
//         "https://images.unsplash.com/photo-1552066379-e7bfd22155c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JTIzamVyc2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 3,
//       price: 70,
//       image:
//         "https://images.unsplash.com/photo-1551854386-b42759a60dd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 4,
//       price: 60,
//       image:
//         "https://images.unsplash.com/photo-1612387050703-685c779375d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//   ];
//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };
//   return (
//     <div className="">
//       <h1 className="mb-5">Jersey Collections</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {shoesData.map((shoe) => (
//           <div key={shoe.id} className="border p-4">
//             <img src={shoe.image} alt={shoe.name} className="mb-2" />
//             <h2>{shoe.name}</h2>
//             <p>Price: ${shoe.price}</p>
//           </div>
//         ))}
//       </div>
//       <h2>Cart:</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((product) => (
//             <li key={product.id}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="inline-block w-8 h-8 mr-2"
//               />
//               {product.name} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div className="flex">
//         <div className="grid grid-cols-2 gap-4">
//           {shoesData.map((product) => (
//             <div
//               key={product.id}
//               className={`cursor-pointer p-4 border ${
//                 selectedProduct?.id === product.id ? "border-blue-500" : ""
//               }`}
//               onClick={() => handleProductClick(product)}
//             >
//               <h2 className="text-xl font-bold mb-2">{product.name}</h2>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-auto mb-2"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="w-3/4">
//           {selectedProduct ? (
//             <div className="p-4">
//               <h2 className="text-xl font-bold mb-2">
//                 {selectedProduct.name} Details
//               </h2>
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="w-full h-auto mb-2"
//               />
//               <button>helllll</button>
//               <p>{selectedProduct.details}</p>
//             </div>
//           ) : (
//             <div className="p-4">
//               <p>No product selected</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jersey;
