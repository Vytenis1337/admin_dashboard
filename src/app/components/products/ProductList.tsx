"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  image: string;
  id: number;
  title: string;
  // Add other properties you expect from the API response if necessary
}
const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <li>{product.title}</li>
            <Image
              src={product.image}
              alt={product.title}
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
