"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

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
        className="max-w-[1100px]"
      >
        <SwiperSlide className="overflow-hidden rounded-xl  w-[1100px] h-full]">
            <Image
             src={"/img/test.png"} alt={"bg"} width={1100} height={1000}
              className="rounded-xl hover:scale-105 transition-all 
              duration-300 object-contain "/>
        </SwiperSlide> 
      </Swiper>
    </>
  );
};

export default SlideSwiper;
