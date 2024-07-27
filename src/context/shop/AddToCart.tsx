"use client";
import React from "react";
import { useShoppingCart } from "./ShoppingCartContext";

type AddToCartProps = {
  product_id: number;
};

const AddToCart = ({ product_id }: AddToCartProps) => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <div>
      <button onClick={() => increaseCartQuantity(product_id)}>
        AddToCart
      </button>
    </div>
  );
};

export default AddToCart;
