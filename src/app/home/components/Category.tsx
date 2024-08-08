"use client";
import React, { useRef } from "react";

import Link from "next/link";
import { categoryLinks } from "@/constant/categoryLinks";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export const Category = () => {
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
      <div className="h-full w-full  mx-auto  mt-6 px-2 max-w-7xl">
        <div
          className="flex items-center gap-2  
        w-full text-[#DB4444] text-lg font-semibold mt-1"
        >
          <span className="w-3 h-6 bg-[#DB4444] rounded-xl" />
          <p>Categories</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <h1 className="font-semibold mt-4 text-2xl">Browse By Category</h1>
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
        px-4 mt-6 overflow-hidden 
       items-center justify-start gap-2 
         mb-6"
      >
        {categoryLinks.map((category, index) => (
          <section className="w-full h-56 " key={index}>
            <ul
              className="flex flex-col items-center w-56 h-56 
              hover:bg-red-500 font-medium hover:text-white
             justify-center border-2 shadow-lg overflow-x-auto cursor-pointer
              rounded-sm hover:-translate-y-1 transition-all duration-300"
            >
              <li className="flex flex-col gap-2 items-center text-5xl">
                <category.icon />
                
                <span className="text-sm">{category.title}</span>
              </li>
            </ul>
          </section>
        ))}
      </div>
    </>
  );
};
