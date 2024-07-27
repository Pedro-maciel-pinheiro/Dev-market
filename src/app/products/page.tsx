import React from "react";
import { getProductsData, ProductsProps } from "@/data";
import Image from "next/image";

export default async function Products() {
  const products: ProductsProps[] = await getProductsData();

  return (
    <div className="grid grid-cols-4 max-w-7xl mx-auto">
      {products.map((item,index) => (
        <div key={index} className="flex flex-col w-full h-full items-center justify-center border">
          <div> {item.title}</div>
          <div>{item.category}</div>
          <div>{item.tags[1]}</div>
          <div>{item.price}</div>
          <div> {item.rating}</div>

          <Image
            src={item.images[0]}
            alt={item.title}
            width={50}
            height={50}
            className="object-contain"
          />
    
        </div>
      ))}
    </div>
  );
}
