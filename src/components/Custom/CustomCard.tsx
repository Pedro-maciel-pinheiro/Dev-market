"use client";
import { ProductsProps } from "@/constant";
import Image from "next/image";
import React, { useRef } from "react";

import { StarIcon } from "lucide-react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  subtitle: string;
  productslist: ProductsProps[];
}

const CustomCard = ({ title, subtitle, productslist }: CardProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="h-full w-full  mx-auto  mt-6 px-2 ">
        <div
          className="flex items-center gap-2  
        w-full text-[#DB4444] text-lg font-semibold mt-1"
        >
          <span className="w-3 h-6 bg-[#DB4444] rounded-xl" />
          <h1>{title}</h1>
        </div>

        <div className="flex w-full items-center justify-between">
          <h1 className="font-semibold mt-4 text-2xl">{subtitle}</h1>
          <div className=" flex justify-center gap-2 items-center relative w-[100px]">
            <button
              className="bg-slate-200 rounded-full active:-translate-x-1 transition-all"
              onClick={scrollLeft}
            >
              <IoIosArrowRoundBack className="" size={35} />
            </button>
            <button
              className="bg-slate-200 rounded-full active:translate-x-1 transition-all"
              onClick={scrollRight}
            >
              <IoIosArrowRoundForward size={35} className="" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full h-[350px] flex flex-row transition-all duration-300
        px-4 mt-6  overflow-hidden
       items-center justify-start gap-2 
         mb-6"
      >
        {productslist.map((product, index) => (
          <section key={index} className="w-full h-80 ">
            <ul
              className="flex flex-col items-center w-72 h-72 
             justify-center border-2 shadow-lg
              rounded-sm hover:-translate-y-1 transition-all duration-300"
            >
              <Link
                href={{ pathname: "singleproduct", query: { id: product.id } }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-cover"
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

      <div
        className="w-full h-full mb-8
      border-b-2 flex items-center justify-center"
      >
        <Link href={"/products"}>
          <Button className="bg-[#DB4444] w-56 mb-4">View All Products</Button>
        </Link>
      </div>
    </>
  );
};

export default CustomCard;
