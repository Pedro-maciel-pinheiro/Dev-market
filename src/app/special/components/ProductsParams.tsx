"use client";

import Image, { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";


const ProductsParams = () => {
  const searchParams = useSearchParams();

  if (!searchParams) return null;

  const price = searchParams.get("price");
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const image = searchParams.get("image");

  if (!image) return null;
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {price} {category} {brand}
        <Image
          src={image as string | StaticImageData}
          alt={brand as string}
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default ProductsParams;
