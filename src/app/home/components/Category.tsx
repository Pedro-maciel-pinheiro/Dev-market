import { LinkDataHeader } from "@/constant/links";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div>
        <div className="flex gap-8 items-center justify-around w-full">
          <div className="w-40 h-40 rounded-xl flex flex-col items-center justify-center gap-2 border">
            <PawPrint />
            <p>Pets</p>
          </div>
          <div className="w-40 h-40 rounded-xl flex flex-col items-center justify-center gap-2 border">
            <PawPrint />
            <p>Pets</p>
          </div>
          <div className="w-40 h-40 rounded-xl flex flex-col items-center justify-center gap-2 border">
            <PawPrint />
            <p>Pets</p>
          </div>
          <div className="w-40 h-40 rounded-xl flex flex-col items-center justify-center gap-2 border">
            <PawPrint />
            <p>Pets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
