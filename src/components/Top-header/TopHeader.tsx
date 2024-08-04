"use client";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const TopHeader = () => {
  const pathname = usePathname();

  const isHeaderHidden =
    pathname === "/auth/login" || pathname === "/auth/register";
  return (
    <>
      {!isHeaderHidden && (
        <div
          className="bg-black w-full text-sm relative hidden
      h-12 text-white lg:flex items-center justify-center gap-8"
        >
          <h1 className=" w-full flex items-center justify-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            ShopNow{" "}
          </h1>
          <div className="flex w-full h-12 items-center justify-end gap-2 absolute">
            English{" "}
            <ChevronDown className="active:translate-y-1 transition-all" />
          </div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
