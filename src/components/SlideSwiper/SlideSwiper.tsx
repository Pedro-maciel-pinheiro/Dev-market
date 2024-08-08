"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { PhoneWallpaper } from "@/constant/phoneimgs";
import Link from "next/link";

const SlideSwiper = () => {
  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="w-[600px] md:w-full  max-w-[1100px] h-[300px]  md:h-[400px] 
        shadow-xl shadow-black/15 rounded-xl "
      >
        {PhoneWallpaper.map((img, index) => (
          <SwiperSlide
            key={index}
            className=" rounded-xl w-full h-full 
          relative
           "
          >
            <Link href={"/products"}  className="w-full h-full absolute z-10  text-white font-semibold ">
              <div className="w-full h-full flex flex-col justify-end text-sm bg-black/20 p-4 lg:p-8">
                <h1 className="px-2 text-lg lg:text-5xl ">{img.title}</h1>
                <span className="px-3  ">{img.subtitle}</span>
              </div>
            </Link>
            <Image
              src={img.backgroundImage}
              alt={img.title}
              width={1200}
              height={1200}
              className="object-contain rounded-xl "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideSwiper;
