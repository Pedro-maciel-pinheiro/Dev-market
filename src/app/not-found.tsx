import MaskButton from "@/components/MaskButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col items-center justify-center text-xl gap-5 ">
      <p className="font-semibold">Your page is not found</p>
      <Link href={"/"}>
        <Button className="hover:bg-green-500  transition-all duration-200 active:translate-y-1">
          back to home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
