import SlideSwiper from "@/components/SlideSwiper/SlideSwiper";
import { Button } from "@/components/ui/button";
import { getProductsData, ProductsProps } from "@/data";
import { LinkDataHeader } from "@/data/links";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Category from "./components/Category";
import CustomCard from "../../components/Custom/CustomCard";
import CustomCardGrid from "../../components/Custom/CustomCardGrid";
import GridCard from "../../components/Custom/GridCard";

export default async function Hero() {
  const productsList: ProductsProps[] = await getProductsData();
  const productsLimit = productsList.slice(0, 5);
  const bestSalesProducts = productsList.slice(9, 14);
  const OurProductsList = productsList.slice(15, 23);
  return (
    <>
      <div
        className="flex justify-between w-full h-full 
       text-black max-w-7xl mx-auto"
      >
        <section
          className="flex flex-col gap-1 font-medium 
         items-end justify-start px-2
          h-96 border-r-2 mt-1"
        >
          {LinkDataHeader.map((data, index) => (
            <Link
              href={data.linkpath}
              key={index}
              className="w-36 mt-1 hover:translate-x-1 transition-all"
            >
              {data.title}
            </Link>
          ))}
        </section>
        <section className="w-full h-full mt-1 mx-4">
          <SlideSwiper />
        </section>
      </div>
      {/* Flash Sales */}
      <div className="max-w-7xl">
        <CustomCard
          title={"Today's"}
          subtitle={"Flash Sales"}
          productslist={productsLimit}
        />
      </div>

      {/* Categorys */}
      {/* <div className="w-full h-full max-w-7xl mx-auto">
        <div
          className="flex items-center gap-2  
        w-full text-[#DB4444] text-lg font-semibold mt-1"
        >
          <span className="w-3 h-6 bg-[#DB4444] rounded-xl" />
          <h1>Categories</h1>
        </div>

        <h1 className="font-semibold mt-4 text-2xl"> Browse By Category</h1>
        <Category />
      </div> */}

      <div className="max-w-7xl">
        <CustomCard
          title={"This Month"}
          subtitle={"Best Selling Products"}
          productslist={bestSalesProducts}
        />
      </div>

      <div
        className="flex items-center mb-8 
       justify-center relative mx-auto max-w-7xl"
      >
        <div
          className="bg-[#0D0D0D] flex items-center relative
        justify-between w-full lg:w-[1300px] h-full max-w-7xl rounded-sm"
        >
          <div className="w-96 h-96 text-white  mx-8 md:w-[400px] absolute md:relative">
            <p className="text-sm md:text-xl font-semibold text-green-500">
              Categories
            </p>
            <h1 className="text-3xl  lg:text-5xl">
              Enhance Your Music Experience
            </h1>
            <ul
              className="flex flex-col md:flex-row gap-4  text-black w-full px-8 md:px-0
             h-36 items-end md:items-center  justify-end md:justify-center mt-16 md:mt-0"
            >
              <li
                className=" w-16 h-16 text-[12px] font-semibold  flex flex-col
                items-center justify-center bg-white rounded-full"
              >
                <p>23</p>Hours
              </li>
              <li
                className=" w-16 h-16 text-[12px] font-semibold  flex flex-col
                items-center justify-center bg-white rounded-full"
              >
                <p>05</p> Days
              </li>
              <li
                className=" w-16 h-16 text-[12px] font-semibold  flex flex-col
                items-center justify-center bg-white rounded-full"
              >
                <p>59</p> minutes
              </li>
              <li
                className=" w-16 h-16 text-[12px] font-semibold  flex flex-col
                items-center justify-center bg-white rounded-full"
              >
                <p>35</p> seconds
              </li>
            </ul>
            <div className="flex items-center justify-start">
              <Link
                href={{
                  pathname: "/special",
                  query: {
                    id: "00031",
                    price: "120",
                    category: "Speakers",
                    image: "/img/jbl.png",
                    brand: "JBL",
                  },
                }}
              >
              <Button
                className="bg-green-500 text-white w-40 h-12 transition-all duration-300
               hover:bg-slate-100 hover:text-black hover:translate-x-1"
              >
                Buy Now{" "}
              </Button>
              </Link>
            </div>
          </div>
          <Link
            href={{
              pathname: "/special",
              query: {
                id: "00031",
                price: "120",
                category: "Speakers",
                image: "/img/jbl.png",
                brand: "JBL",
              },
            }}
            className="flex items-center justify-center
           w-[400px] md:w-full h-96 md:h-full "
          >
            <Image
              className="object-cover w-[250px]  
              md:w-[400px] lg:w-[650px] mx-auto"
              src={"/img/jbl.png"}
              alt="jbl"
              width={750}
              height={750}
            />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl ">
        <CustomCardGrid
          title={"This Month"}
          subtitle={"Best Selling Products"}
          productslist={OurProductsList}
        />
      </div>

      <div className="max-w-7xl ">
        <GridCard />
      </div>

      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="mt-36 mb-16">
          <Image
            src={"/img/drive.png"}
            className="mx-auto"
            alt="drive"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div>
        <section></section>
      </div>
    </>
  );
}