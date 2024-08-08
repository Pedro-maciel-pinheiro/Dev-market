// components/Navbar.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, fetchProducts } from "@/redux/slice/productsSlice";
import { LinkDataNavbar } from "@/constant/links";
import { SearchIcon, ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../../context/shop/ShoppingCartContext";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import UserOptions from "../user/UserOptions";

import { LogginButton } from "../auth/LogginButton";

import { useCurrentUser } from "@/hooks/use-current-user";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Navbar() {
  const dispatch: AppDispatch = useDispatch();
  const user = useCurrentUser();
  const { cartQuantity } = useShoppingCart();
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!isClient) return null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      dispatch(setSearch(searchQuery));
      router.push("/result");
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchSubmit();
    }
  };

  const isNavHidden =
    pathname === "/settings" ||
    pathname === "/auth/error" ||
    pathname === "/auth/login" ||
    pathname === "/auth/register";

  return (
    <>
      {!isNavHidden && (
        <div
          className="w-full h-12 text-black lg:flex max-w-7xl mx-auto
     items-center justify-between border-b-2 relative hidden "
        >
          <div className="flex gap-4 ">
            <Image
              src={"/icon/logo-black.png"}
              alt="logo"
              width={150}
              height={150}
            />
            <ul>
              <li className="flex gap-5 absolute ">
                {LinkDataNavbar.map((data, index) => (
                  <Link
                    key={index}
                    href={data.linkpath}
                    className="hover:underline transition-all duration-200"
                  >
                    {data.title}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          <div className="flex items-center ">
            <div className="flex items-center justify-center gap-1 ">
              <input
                type="text"
                className="border-2 rounded-sm w-72 h-9 text-center bg-gray-100"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
              />
              <Button
                onClick={handleSearchSubmit}
                className="bg-transparent text-black hover:bg-transparent shadow-none"
              >
                <SearchIcon size={25} className="mx-auto" />
              </Button>
            </div>

            <div className="flex items-center">
              {cartQuantity > 0 && (
                <>
                  <Link href={"cart"}>
                    <Button
                      className="relative bg-transparent hover:bg-transparent hover:scale-105
                 shadow-transparent text-black transition-all"
                    >
                      <ShoppingCart
                        className="hover:scale-105 transition-all"
                        size={25}
                      />
                    </Button>
                  </Link>
                  <div
                    className="absolute text-white mb-4 -translate-x-1 mx-10 
             flex items-center justify-center
              text-[11px] bg-red-500 rounded-full w-4 h-4"
                  >
                    {cartQuantity}
                  </div>
                </>
              )}
             <UserOptions/>
            </div>
          </div>
        </div>
      )}

      {/* navbar mobile */}
    </>
  );
}
