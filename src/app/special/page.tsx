import React, { Suspense } from "react";
import ProductsParams from "./components/ProductsParams";

export default function SpecialPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsParams />
    </Suspense>
  );
}
