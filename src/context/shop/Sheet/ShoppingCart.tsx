"use client";

import { useShoppingCart } from "../ShoppingCartContext";
import CartItem from "../CartItem";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { formatCurrency } from "@/utils/formatCurrency";
import { getProductsData, ProductsProps } from "@/constant";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import MaskButton from "@/components/MaskButton";

export default function ShoppingCart() {
  const { cartItems } = useShoppingCart();

  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(0.1); // 10% discount
  const taxRate = 0.08; // 8% tax rate
  const shipCost = 45; // Flat store pickup fee

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const productsList = await getProductsData();
        setProducts(productsList);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="w-full h-full hidden">loading..</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center  w-full h-[400px] max-w-7xl mx-auto ">
        <h1 className="text-3xl">Shopping Cart</h1>
        <div className="mt-8 text-center font-medium">
             <p>Your cart is empty{"."}</p>
             <Link href={"/"} className="underline">Back to shopping!</Link>
        </div>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = products.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const discountAmount = totalPrice * discount;
  const subtotalAfterDiscount = totalPrice - discountAmount;
  const taxAmount = subtotalAfterDiscount * taxRate;
  const finalPrice = subtotalAfterDiscount + taxAmount + shipCost;

  return (
    <>
      <div
        className="flex flex-col justify-center mt-16
       items-center w-full h-full max-w-7xl mx-auto px-4 md:px-0"
      >
        <h1 className="text-start w-full mb-8 text-xl md:text-2xl font-semibold">
          Shopping Cart
        </h1>
        <div
          className="flex flex-col items-center  
         md:flex-row md:items-start justify-between w-full"
        >
          <div
            className="w-full max-w-[850px] flex flex-col 
           gap-4 h-[700px] overflow-y-auto"
          >
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <span className="border-t-2 w-full mt-8 block md:hidden" />
          <div
            className="border-2 rounded-lg w-full md:w-80 h-80 flex gap-2
          flex-col items-center  shadow-md px-8 mt-8 mb-16 md:mt-0 md:mb-0"
          >
            <h2 className="font-bold w-full text-xl mt-1">Order summary</h2>
            <ul className="flex items-center justify-between w-full ">
              <li className="text-gray-500">Original Price</li>
              <li className="font-medium">{formatCurrency(totalPrice)}</li>
            </ul>
            <ul className="flex items-center justify-between w-full ">
              <li className="text-gray-500">Savings 10%</li>
              <li className="font-medium text-green-500">
                -{formatCurrency(discountAmount)}
              </li>
            </ul>
            <ul className="flex items-center justify-between w-full ">
              <li className="text-gray-500">Shipping price</li>
              <li className="font-medium">{formatCurrency(shipCost)}</li>
            </ul>
            <ul className="flex items-center justify-between w-full ">
              <li className="text-gray-500">Tax</li>
              <li className="font-medium text-red-500">
                {formatCurrency(taxAmount)}
              </li>
            </ul>
            <span className="border-t-2 w-full " />
            <div className="flex justify-between gap-2 font-semibold items-center w-full">
              <div>Total</div>
              <div>{formatCurrency(finalPrice)}</div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <MaskButton
                title={"Proceed to Checkout"}
                btnColor={"after:bg-blue-700 item-center w-60"}
                linkBasePath={""}
              />
              <div className="flex gap-2 text-sm">
                or{" "}
                <Link href={"/"} className="underline text-blue-400">
                  Continue Shopping
                </Link>
              </div>
              <div className="text-[12px] text-gray-500">
                <p>Ships in 3-5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
