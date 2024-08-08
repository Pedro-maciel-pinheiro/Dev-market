"use client";
import React from "react";
import { useShoppingCart } from "./ShoppingCartContext";

type AddToCartProps = {
  product_id: number;
};

const AddToCart = ({ product_id }: AddToCartProps) => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <div className="w-full">
      <button onClick={() => increaseCartQuantity(product_id)} className="w-full text-white font-medium">
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
