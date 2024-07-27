"use client"
import { LinkDataNavbar } from "@/data/links";
import {  ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/shop/ShoppingCartContext";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const { cartQuantity } = useShoppingCart();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className=" w-full h-12 text-black
     flex items-center border-b-2"
    >
      <div className="flex gap-4 max-w-7xl mx-auto">
        <h1 className="font-semibold">Dev Market</h1>
        <ul>
          <li className="flex gap-5">
            {LinkDataNavbar.map((data, index) => (
              <Link key={index} href={data.linkpath}>
                {data.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>
      <div className="flex gap-5 mx-4">
        <input
          type="text"
          className="border-2 rounded-sm w-64 text-center bg-gray-100"
          placeholder="What are you looking for ?"
        />
        <div className="flex gap-4 ">
          <Link href={"payment"}>
            <Button className="relative">
              <ShoppingCart
                className="hover:scale-105 transition-all"
                size={25}
              />
            </Button>
          </Link>
          {cartQuantity > 0 && (
            <div
              className="absolute text-white mt-0 mx-10
           flex items-center justify-center text-[11px]
            bg-red-500 rounded-full w-4 h-4 "
            >
              {cartQuantity}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
