/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    // Update state using setProducts
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
