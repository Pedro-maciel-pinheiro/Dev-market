import React from "react";
import Image from "next/image";
import Link from "next/link";

const GridCard = () => {
  return (
    <div
      className="w-full h-full grid grid-cols-1 lg:grid-cols-none
    lg:grid-rows-1 lg:grid-flow-col gap-2  "
    >
      <Link
        href={"/products"}
        className="w-full h-full lg:row-span-3 border bg-[#0D0D0D] rounded-lg relative"
      >
        <div
          className="text-white font-semibold absolute p-4
        flex flex-col items-start justify-end w-full h-full"
        >
          <h1 className="text-2xl">PlayStation 5</h1>
          <p className="text-[12px] text-gray-200 w-36 mt-2">
            Black and White version of the PS5 is on sale
          </p>
          <p className="underline mt-2">Shop Now</p>
        </div>
        <Image
          src={"/img/ps5.png"}
          alt=""
          width={500}
          height={400}
          className="object-contain mx-auto mt-2"
        />
      </Link>
      {/* Womans category */}
      <Link
        href={"/products"}
        className="flex justify-between w-full relative
       h-72 lg:col-span-2 border bg-[#0D0D0D] rounded-lg"
      >
        <div
          className="text-white font-semibold absolute p-4
        flex flex-col items-start justify-end w-full h-full"
        >
          <h1 className="text-2xl">Women{"’"}s Collections</h1>
          <p className="text-[12px] text-gray-200 w-36 mt-2">
            Featured woman collections that give you another vibe
          </p>
          <p className="underline mt-2">Shop Now</p>
        </div>
        <span />
        <Image
          src={"/img/black-woman.png"}
          className="object-contain mt-6 "
          alt=""
          width={400}
          height={400}
        />
      </Link>
      {/* sound category */}
      <Link
        href={"/products"}
        className="w-full h-full lg:row-span-2  border  rounded-lg
       bg-[#0D0D0D] flex items-center justify-center relative"
      >
        <div
          className="text-white font-semibold absolute p-4
        flex flex-col items-start justify-end w-full h-full"
        >
          <h1 className="text-2xl">Speakers</h1>
          <p className="text-[12px] text-gray-200 w-36 mt-2">
            Amazon wireless speakers
          </p>
          <p className="underline mt-2">Shop Now</p>
        </div>
        <Image
          src={"/img/sound.png"}
          className="object-contain mx-auto"
          alt=""
          width={200}
          height={400}
        />
      </Link>
      {/* perfume category */}
      <Link
        href={"/products"}
        className="w-full h-full lg:row-span-2 border rounded-lg
      bg-[#0D0D0D] flex items-center justify-center relative"
      >
        <div
          className="text-white font-semibold absolute p-4
        flex flex-col items-start justify-end w-full h-full"
        >
          <h1 className="text-2xl">Perfume</h1>
          <p className="text-[12px] text-gray-200 w-36 mt-2">
            GUCCI INTENSE OUD EDP
          </p>
          <p className="underline mt-2">Shop Now</p>
        </div>
        <Image
          src={"/img/perfume.png"}
          className="object-contain mx-auto"
          alt=""
          width={200}
          height={400}
        />
      </Link>
    </div>
  );
};

export default GridCard;
