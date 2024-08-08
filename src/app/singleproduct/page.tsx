import AddToCart from "@/context/shop/AddToCart";
import { getSingleProduct, ProductsProps } from "@/constant";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/ReviewCard";

type Props = {
  searchParams: {
    [key: string]: ProductsProps[];
  };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);
  const product = await getSingleProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className=" h-full max-w-7xl mx-auto ">
        <div
          className="flex flex-col md:flex-row items-center justify-around  w-full
        h-full md:h-[700px] max-w-7xl mx-auto border mt-6 rounded-xl shadow-lg mb-16 md:mb-8 px-4"
        >
          <div className="border p-8 rounded-md bg-slate-50 mt-4 mb-4 md:mt-0 md:mb-0 overflow-hidden">
            <Image
              src={product?.images[0] as string | StaticImport}
              alt={product?.title as string}
              width={500}
              height={500}
              className="max-w-[450px] max-h-[400px] object-contain hover:scale-105 transition-all duration-200"
            />
          </div>

          {/* Product information  */}
          <div className="max-w-[100%] ">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-2xl">{product.title}</h1>
              <div className="flex items-center ">
                {Array(5)
                  .fill(0)
                  .map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      fill={starIndex < product.rating ? "orange" : "none"}
                      color="orange"
                      size={16}
                    />
                  ))}
                <div className="flex gap-2">
                  <div className="text-gray-500 ">
                    {" "}
                    {"("}
                    {product.stock * 2} Reviews{")"}
                  </div>
                  <span className="border-r-2 w-1 h-6 border-black/50" />
                  <div className="text-green-500">
                    in Stock {"("}
                    {product.stock}
                    {")"}
                  </div>
                </div>
              </div>
              <div className="w-96 max-w-[100%]">
                <p className="font-semibold text-xl mt-2">${product.price}</p>
                <p className="text-gray-600 mt-2 ">{product.description}</p>
              </div>
              <span className="border-b-2 w-96 h-1 border-black/40 mt-4 mb-4 max-w-[98%]" />
              <div className="font-medium flex gap-2">
                <p>Brand:</p> <p>{product.brand}</p>
              </div>
              <div
                className="flex w-full items-center bg-red-500 shadow-md
          justify-center border-2 mt-4 h-10  max-w-96 mx-auto
          rounded-md hover:bg-red-600 transition-colors duration-200"
              >
                <AddToCart product_id={product.id} />
              </div>

              <div className="mt-4 flex flex-col w-full mx-auto h-56 md:h-40 ">
                <div
                  className="flex items-center shadow-md
            justify-between text-sm w-96 max-w-[100%]
              mx-auto mt-2 border-2 rounded-md p-4"
                >
                  <Image
                    src={"/icon/icon-delivery-black.png"}
                    alt={"delivery icon"}
                    width={40}
                    height={40}
                  />
                  <ul className="flex flex-col gap-2">
                    <li className="font-semibold">Free Delivery</li>
                    <li>Enter your postal code for Delivery Availability</li>
                  </ul>
                </div>
                <div
                  className="flex items-center shadow-md
             text-sm w-96 gap-7 max-w-[100%]
              mx-auto mt-2 border-2 rounded-md p-4"
                >
                  <Image
                    src={"/icon/Icon-return.png"}
                    alt={"delivery icon"}
                    width={40}
                    height={40}
                  />
                  <ul className="flex flex-col gap-2 w-full">
                    <li className="font-semibold">Return Delivery</li>
                    <li>{product.returnPolicy}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 mb-8 w-full h-full ">
        <ReviewCard productReview={product} />
      </div>
    </>
  );
};

export default SingleProduct;
