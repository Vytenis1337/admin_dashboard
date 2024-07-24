import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
}

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductList() {
  const data: Product[] = await getData();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center border p-4 rounded-lg"
          >
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
