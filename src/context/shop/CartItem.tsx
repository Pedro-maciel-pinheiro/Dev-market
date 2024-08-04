import React, { useEffect, useState } from "react";
import { getProductsData, ProductsProps } from "@/constant";
import Image, { StaticImageData } from "next/image";
import { useShoppingCart } from "./ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { decreaseCartQuantity } = useShoppingCart();
  const [product, setProduct] = useState<ProductsProps | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading...</div>;
  if (!product) return null;

  return (
    <div className="flex w-full h-56">
      <Image
        src={product.images[0] as string | StaticImageData}
        alt={product.title}
        width={150}
        height={150}
      />
      {product.title} {quantity > 1 && <span>{quantity}x</span>}
      <div>
        <button type="submit" onClick={() => decreaseCartQuantity(product.id)}>
          remove
        </button>
      </div>
    </div>
  );
}
