import React, { useEffect, useState } from "react";
import { getProductsData, ProductsProps } from "@/constant";
import Image, { StaticImageData } from "next/image";
import { useShoppingCart } from "./ShoppingCartContext";
import { Divide, Heart, Minus, Plus, X } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import PacmanLoader from "react-spinners/PacmanLoader";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const [product, setProduct] = useState<ProductsProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [addToFavorite, setAddToFavorite] = useState(false);


  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const productslist: ProductsProps[] = await getProductsData();
      const foundProduct = productslist.find((product) => product.id === id);
      setProduct(foundProduct || null);
      setLoading(false);
    }

    fetchProduct();
  }, [id]);


  const handleRemoveFromCart = (id:number) =>{
    removeFromCart(id)
    toast.success("Item Removed")
  }




  if (loading)
    return (
      <div
        className="w-full h-full flex 
  absolute z-50  bg-white"
      >
        <PacmanLoader color="#ffde00" />
      </div>
    );
  if (!product) return <div>Cart is Empty 
    <Link href={"/"}>Back to shopping!</Link>
  </div>;
  
  const totalPrice = product.price * quantity

  return (
    <div className="grid grid-rows-1 grid-flow-col  items-center  w-full h-40 border-2 rounded-lg shadow-md ">
      <div className="w-full">
        <Image
          src={product.images[0] as string | StaticImageData}
          alt={product.title}
          width={150}
          height={150}
        />
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-5 ">
        <div className="uppercase">{product.category}</div>
        <div>{product.title}</div>
        <div className="flex gap-4 ">
          <div
            className="flex items-center gap-2 
            cursor-pointer "
            onClick={() => setAddToFavorite((prev) => !prev)}
          >
            {addToFavorite ? (
              <div>
                <FaHeart
                  size={25}
                  className="text-red-500 active:-translate-y-1 transition-all "
                />
              </div>
            ) : (
              <div>
                <Heart
                  size={25}
                  className="active:-translate-y-1 transition-all "
                />
              </div>
            )}
            Add to Favorites
          </div>
          <button
            type="submit"
            onClick={() => handleRemoveFromCart(product.id)}
            className="flex text-destructive "
          >
            <X  className="text-destructive " />
            <Toaster position="top-center" reverseOrder={false} />
            Remove
          </button>
        </div>
      </div>
      <div className="flex w-20 justify-end items-center gap-2 font-semibold">
        <button
          className="bg-slate-200  w-5 h-5 flex items-center justify-center rounded-sm active:-translate-x-1 transition-all"
          onClick={() => decreaseCartQuantity(product.id)}
          disabled={quantity <= 1}
        >
          
          <Minus size={15} />
        </button>
        <span> {quantity}</span>
        <button
          className="bg-slate-200  w-5 h-5 flex items-center justify-center rounded-sm active:translate-x-1 transition-all"
          onClick={() => increaseCartQuantity(product.id)}
        >
          <Plus size={15} />
        </button>
      </div>
      <div className="w-20 flex justify-end items-center mx-3 font-semibold">
        ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
