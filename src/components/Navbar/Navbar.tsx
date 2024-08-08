// components/Navbar.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, fetchProducts } from "@/redux/slice/productsSlice";
import { LinkDataNavbar } from "@/constant/links";
import { LogOut, SearchIcon, ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../../context/shop/ShoppingCartContext";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import UserOptions from "../user/UserOptions";

import { Spin as Hamburger } from "hamburger-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import { LogginButton } from "../auth/LogginButton";

export default function Navbar() {
  const dispatch: AppDispatch = useDispatch();
  const user = useCurrentUser();
  const { cartQuantity } = useShoppingCart();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const onClick = () => {
    signOut();
  };

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
              <UserOptions />
            </div>
          </div>
        </div>
      )}

      {/* navbar mobile */}

      {!isNavHidden && (
        <div className="w-full h-12 border-b-2 mb-2 block lg:hidden">
          <div className="flex items-center justify-between w-full absolute z-50 ">
            <div
              className={navIsOpen ? "text-white" : "relative"}
              onClick={() => setNavIsOpen((prev) => !prev)}
            >
              <Hamburger toggled={navIsOpen} />
            </div>
          </div>
          <div
            className={` fixed  z-30 transition-all duration-1000 bg-black/20 ${
              navIsOpen ? "w-full h-96 backdrop-blur-3xl" : " w-0 h-0"
            }`}
          >
            <div className="">
              <section
                onClick={() => setNavIsOpen(false)}
                className={`text-white font-semibold text-lg flex absolute transition-all duration-500
               flex-col mt-16 gap-5 px-2  w-full ${
                 navIsOpen ? "translate-x-0 z-50 absolute" : "-translate-x-32"
               }`}
              >
                {LinkDataNavbar.map((data, index) => (
                  <Link
                    key={index}
                    href={data.linkpath}
                    className="hover:underline transition-all duration-200 border-b w-full"
                  >
                    {data.title}
                  </Link>
                ))}
                <LogginButton>
                  <Link href={"/sign-up"}>Sign up</Link>
                </LogginButton>

                <p className="w-full border-b mt-8">User : {user?.name}</p>
                <p
                  onClick={onClick}
                  className="flex gap-2 cursor-pointer hover:underline w-full justify-end"
                >
                  <LogOut className="rotate-180" /> <p>Logout</p>
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
