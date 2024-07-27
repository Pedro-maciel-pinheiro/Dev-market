"use client";
import toast, { Toaster } from "react-hot-toast";
import { useShoppingCart } from "../ShoppingCartContext";
import CartItem from "../CartItem";

export default function ShoppingCart() {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      <div
        className="grid grid-cols-3 gap-8 items-center
       justify-center text-center"
      >
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div>
        <div
          className="flex items-center justify-center 
        font-semibold text-xl mt-8"
        >
          Total
        </div>
        <button
          onClick={() => toast.success("Order Send")}
          className="mt-8"
          type="submit"
        >
          Send your order <Toaster position="top-center" />
        </button>
      </div>
    </>
  );
}
