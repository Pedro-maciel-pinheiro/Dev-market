"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Home, LogOut, ShoppingCart } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SettingsPage() {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  return (
    <>
      <div
        className="min-h-screen md:h-[900px] 
         mx-auto border flex flex-col items-center
     justify-center  md:rounded-xl
     bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-sky-400 to to-purple-800
     "
      >
        <Link href={"/"} className="mb-2">
          <Image
            src={"/icon/logo-white.png"}
            alt="logo"
            width={250}
            height={250}
          />
        </Link>
        <div
          className="w-full max-w-[85%] md:max-w-[500px]  h-[600px] flex flex-col items-center
       justify-center gap-2 border-2 shadow-lg rounded-lg mx-auto bg-white "
        >
          <div className="w-full max-w-[85%]  flex items-center justify-center">
            <Link
              href="/"
              className="flex flex-col font-semibold items-center  mb-8 underline text-blue-500"
            >
              <ShoppingCart
                size={60}
                className="hover:-translate-y-1 transition-all duration-200 text-black"
              />
              Back to Shopping page
            </Link>
          </div>
          <h1 className="font-semibold text-xl">User information</h1>
          <ul
            className="flex items-center justify-between w-full max-w-[85%] border
        p-2 rounded-md bg-slate-100 text-sm md:text-lg"
          >
            <li>ID</li>
            <li>{user?.id}</li>
          </ul>
          <ul
            className="flex items-center justify-between w-full max-w-[85%] border
        p-2 rounded-md bg-slate-100 text-sm md:text-lg"
          >
            <li>Name</li>
            <li>{user?.name}</li>
          </ul>
          <ul
            className="flex items-center justify-between w-full max-w-[85%] border
        p-2 rounded-md bg-slate-100 text-sm md:text-lg"
          >
            <li>Email</li>
            <li>{user?.email}</li>
          </ul>
          <ul
            className="flex items-center justify-between w-full max-w-[85%] border
        p-2 rounded-md bg-slate-100 text-sm md:text-lg"
          >
            <li>Phone</li>
            <li>{user?.phone}</li>
          </ul>
          <ul
            className="flex items-center justify-between w-full max-w-[85%] border
        p-2 rounded-md bg-slate-100 text-sm md:text-lg"
          >
            <li>Address</li>
            <li>{user?.address}</li>
          </ul>

          <Button
            onClick={onClick}
            type="submit"
            className="w-full max-w-[85%] mt-16 hover:bg-red-500"
          >
            <LogOut className="rotate-180" />
            Sign out
          </Button>
        </div>
      </div>
    </>
  );
}
