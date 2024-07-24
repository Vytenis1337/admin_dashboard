import React, { Suspense } from "react";
import ProductList from "@/app/components/products/ProductList";

const Products = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList />
    </Suspense>
  );
};

export default Products;
