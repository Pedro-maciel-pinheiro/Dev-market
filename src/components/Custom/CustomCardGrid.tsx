import { ProductsProps } from "@/constant";
import Image from "next/image";
import React from "react";

import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  subtitle: string;
  productslist: ProductsProps[];
  overFlow: string;
}

const CustomCardGrid = ({
  title,
  subtitle,
  productslist,
  overFlow,
}: CardProps) => {
  return (
    <>
      <div className="h-full w-full  mx-auto border-t mt-6 px-2 ">
        <div
          className="flex items-center gap-2  
        w-full text-[#DB4444] text-lg font-semibold mt-1"
        >
          <span className="w-3 h-6 bg-[#DB4444] rounded-xl" />
          <h1>{title}</h1>
        </div>
        <h1 className="font-semibold mt-4 text-2xl">{subtitle}</h1>
      </div>

      <div
        className={`w-80  md:w-full  grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 justify-center
        ${overFlow} mt-6  mb-6 `}
      >
        {productslist.map((product, index) => (
          <section key={index} className="w-full h-full ">
            <ul
              className="flex flex-col items-center  h-80
             justify-center border-2 shadow-lg 
              rounded-sm hover:translate-y-1 transition-all duration-300"
            >
              <Link
                href={{ pathname: "singleproduct", query: { id: product.id } }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain max-w-[200px] max-h-[200px]"
                />
              </Link>
              <li>{product.title}</li>
              <li>${product.price}</li>
              <li className="flex items-center gap-[2px]">
                {Array(5)
                  .fill(0)
                  .map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      fill={starIndex < product.rating ? "orange" : "none"}
                      color="orange"
                      size={16}
                    />
                  ))}
                {"("}
                {product.stock}
                {")"}
              </li>
            </ul>
          </section>
        ))}
      </div>
    </>
  );
};

export default CustomCardGrid;
