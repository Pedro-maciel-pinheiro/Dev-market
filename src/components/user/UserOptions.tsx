"use client";
import { CircleX, LogOut, ShoppingBag, Star, User } from "lucide-react";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

interface UserOptionsProps {
  navIsOpen?: boolean;
}

const UserOptions = ({ navIsOpen }: UserOptionsProps) => {
  const [handleUserClick, setHandleUserClick] = useState(false);
  return (
    <>
      <div
        onClick={() => setHandleUserClick((prev) => !prev)}
        className="w-9 h-9 rounded-full cursor-pointer border
     bg-black md:flex items-center justify-center text-white hidden "
      >
        <User className="hover:scale-105 transition-all " />
      </div>

      <div
        className={`absolute text-white font-semibold transition-all
            duration-500
         backdrop-blur-3xl bg-black/40 border rounded-md right-2 ${
           handleUserClick
             ? "w-48 h-40 opacity-100 z-50 "
             : "w-48 h-40 opacity-0 -z-50"
         }`}
      >
        <ul
          onClick={() => setHandleUserClick(false)}
          className="flex flex-col items-start px-2 justify-center gap-1 mt-2"
        >
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <User /> <p>Manage My Account</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <ShoppingBag /> <p>My Order</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <CircleX /> <p>My Cancellations</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <Star /> <p>My Reviews</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <LogOut className="rotate-180" /> <p>Logout</p>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={` text-white font-semibold transition-all
         duration-200  absolute 
         backdrop-blur-3xl  rounded-md mt-4 
         ${
           navIsOpen
             ? "w-full h-56 translate-x-0 z-50 "
             : "w-full h-56 -translate-x-56 -z-50 "
         }`}
      >
        <ul
          onClick={() => setHandleUserClick(false)}
          className="flex flex-col items-start px-2 justify-center gap-3 mt-2"
        >
          <li>Hello User Pedro </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <User /> <p>Manage My Account</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <ShoppingBag /> <p>My Order</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <CircleX /> <p>My Cancellations</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <Star /> <p>My Reviews</p>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-2 text-sm  hover:underline"
            >
              <LogOut className="rotate-180" /> <p>Logout</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserOptions;
