import React from "react";

import Image from "next/image";
import { BsShop, BsCoin } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import DeliverInfo from "../home/components/DeliverInfo";

export default function About() {
  return (
    <div
      className="min-h-screen w-full max-w-7xl
     mx-auto "
    >
      <div className="flex flex-col-reverse lg:flex-row  gap-1 justify-around items-center w-full h-full mt-8">
        <div className="flex flex-col items-start w-80 md:w-[500px] gap-3">
          <h1 className="text-5xl font-semibold mb-4">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <Image
          src={"/img/Side-Image-about.png"}
          alt="side img"
          width={600}
          height={700}
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-wrap items-center justify-around  w-full h-full md:h-[400px] mt-8 md:mt-0">
        <div className="w-40 h-40 md:w-56  md:h-56 border-2 rounded-lg shadow-lg ">
          <ul className="flex flex-col gap-2 items-center justify-center w-full h-full font-semibold">
            <li className="bg-black w-20 h-20 rounded-full flex items-center justify-center border-4 border-gray-300 ">
              <BsShop size={40} className="text-white" />
            </li>
            <li className="text-xl font-bold">10.5k</li>
            <li className="text-[10px] md:text-sm">Sallers active our site</li>
          </ul>
        </div>

        <div className="w-40 h-40 md:w-56  md:h-56 border-2 rounded-lg shadow-lg ">
          <ul className="flex flex-col gap-2 items-center justify-center w-full h-full font-semibold">
            <li className="bg-black w-20 h-20 rounded-full flex items-center justify-center border-4 border-gray-300 ">
              <BsCoin size={40} className="text-white" />
            </li>
            <li className="text-xl font-bold">33k</li>
            <li className="text-[10px] md:text-sm">Mopnthly Produduct Sale</li>
          </ul>
        </div>

        <div className="w-40 h-40 md:w-56  md:h-56 border-2 rounded-lg shadow-lg ">
          <ul className="flex flex-col gap-2 items-center justify-center w-full h-full font-semibold">
            <li className="bg-black w-20 h-20 rounded-full flex items-center justify-center border-4 border-gray-300 ">
              <AiOutlineShopping size={40} className="text-white" />
            </li>
            <li className="text-xl font-bold">45.5k</li>
            <li className="text-[10px] md:text-sm">Customer active in our site</li>
          </ul>
        </div>
        <div className="w-40 h-40 md:w-56  md:h-56 border-2 rounded-lg shadow-lg ">
          <ul className="flex flex-col gap-2 items-center justify-center w-full h-full font-semibold">
            <li className="bg-black w-20 h-20 rounded-full flex items-center justify-center border-4 border-gray-300 ">
              <BiCoinStack size={40} className="text-white" />
            </li>
            <li className="text-xl font-bold">25k</li>
            <li className="text-[10px] md:text-sm">Anual gross sale in our site</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-full md:h-[600px] flex flex-col md:flex-row items-center justify-around p-2">
        <div className="border rounded-lg shadow-lg p-4">
          <div className="overflow-hidden">
            <Image
              src={"/img/person-1.png"}
              alt={"ceo pic"}
              width={300}
              height={300}
              className="rounded-lg object-contain hover:scale-105 cursor-pointer transition-all duration-200"
            />
          </div>
          <ul className="font-semibold flex flex-col items-start p-2">
            <li className="text-xl">JHSON MARKS</li>
            <li className="font-medium">Founder & Chairman</li>
          </ul>
          <span className="flex gap-2 items-center cursor-pointer p-2">
            <CiTwitter size="25" /> <CiInstagram size="25" />{" "}
            <CiLinkedin size="25" />
          </span>
        </div>
        <div className="border rounded-lg shadow-lg p-4">
          <div className="overflow-hidden">
            <Image
              src={"/img/person-2.png"}
              alt={"ceo pic"}
              width={300}
              height={300}
              className="rounded-lg object-contain hover:scale-105 cursor-pointer transition-all duration-200"
            />
          </div>
          <ul className="font-semibold flex flex-col items-start p-2">
            <li className="text-xl">ANA LUIZA</li>
            <li className="font-medium">Managing Director</li>
          </ul>
          <span className="flex gap-2 items-center cursor-pointer p-2">
            <CiTwitter size="25" /> <CiInstagram size="25" />{" "}
            <CiLinkedin size="25" />
          </span>
        </div>
        <div className="border rounded-lg shadow-lg p-4">
          <div className="overflow-hidden">
            <Image
              src={"/img/person-3.png"}
              alt={"ceo pic"}
              width={300}
              height={300}
              className="rounded-lg object-contain hover:scale-105 cursor-pointer transition-all duration-200"
            />
          </div>
          <ul className="font-semibold flex flex-col items-start p-2">
            <li className="text-xl">JUNIOR SILVA</li>
            <li className="font-medium">Product Designer</li>
          </ul>
          <span className="flex gap-2 items-center cursor-pointer p-2">
            <CiTwitter size="25" /> <CiInstagram size="25" />{" "}
            <CiLinkedin size="25" />
          </span>
        </div>
      </div>
      <div className="w-full h-full  mx-auto ">
        <DeliverInfo />
      </div>
    </div>
  );
}
