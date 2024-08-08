import React from "react";
import { getProductsData, ProductsProps } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import CustomCardGrid from "@/components/Custom/CustomCardGrid";

export default async function Products() {
  const products: ProductsProps[] = await getProductsData();

  return (
    <div className="max-w-7xl mx-auto">
     <CustomCardGrid 
     title={"Out Store"} 
     overFlow={""}
     subtitle={"Check all offers !"} 
     productslist={products}/>
    </div>
  );
}
