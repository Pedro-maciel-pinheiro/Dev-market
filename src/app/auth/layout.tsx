import Image from "next/image";
import Link from "next/link";
import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className=" w-full min-h-screen flex flex-col items-center 
        justify-center gap-2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-sky-400 to to-blue-800 "
      >
        <Link href={"/"} className="absolute top-0 mt-4">
          <Image
            src={"/icon/logo-black.png"}
            alt="logo"
            width={250}
            height={250}
            className="mx-auto"
          />
        </Link>

        {children}
      </div>
    </>
  );
};

export default Authlayout;
