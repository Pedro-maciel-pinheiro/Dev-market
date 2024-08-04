
import AddToCart from "@/context/shop/AddToCart";
import { getSingleProduct, ProductsProps } from "@/constant";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: {
    [key: string]:ProductsProps[]
  };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);
  const product = await getSingleProduct(id);

  if (!product) {
    return <div>Product not found</div>; 
  }
  
  return (
    <div  className="flex items-center h-screen">
      <Image
        src={product?.images[0] as string | StaticImport}
        alt={product?.title  as string }
        width={300}
        height={300}
      />
     <AddToCart product_id={product.id}/>
    </div>
  );
};

export default SingleProduct;


   