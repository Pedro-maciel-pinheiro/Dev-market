"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCurrentUser } from "@/hooks/use-current-user";
import { formatCurrency } from "@/utils/formatCurrency";
import Image, { StaticImageData } from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { PaymentCard } from "./components/payment-card";

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: StaticImageData | string;
}

export default function Checkout() {
  const user = useCurrentUser();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productIds = searchParams.getAll("id");
    const productNames = searchParams.getAll("name");
    const quantities = searchParams.getAll("quantity");
    const prices = searchParams.getAll("price");
    const image = searchParams.getAll("image");

    const fetchedProducts = productIds.map((id, index) => ({
      id,
      name: productNames[index],
      quantity: Number(quantities[index]),
      price: Number(prices[index]),
      image: String(image[index]),
    }));
    setProducts(fetchedProducts);
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div>
        <PacmanLoader />
      </div>
    );
  }

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="flex  min-h-screen w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-around items-center w-full h-full">
        <div className="flex flex-col gap-2 items-start justify-start w-96">
          <h1 className="font-semibold text-3xl mb-4">Billing Details</h1>
          <Label>First Name</Label>
          <Input value={user?.name || ""} disabled={true} />
          <Label>Email</Label>
          <Input value={user?.email || ""} disabled={true} />
          <Label>Adress</Label>
          <Input value={user?.address || ""} disabled={true} />
          <Label>Phone</Label>
          <Input value={user?.phone || ""} disabled={true} type="phone" />
          <Label>Additional information</Label>
          <Input placeholder="Add information" />
        </div>
        <div
          className="flex flex-col w-full max-w-[400px] 
         h-[500px]  mt-4 justify-center  "
        >
          <h2 className="p-4 text-xl font-semibold z-10">Order Summary</h2>
          <div className="overflow-y-auto ">
            {products.map((item) => (
              <section key={item.id} className="flex items-center text-[12px] ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <div className="font-medium">
                  {item.name} x {item.quantity} - {formatCurrency(item.price)}
                </div>
              </section>
            ))}
          </div>
          <div className=" flex flex-col border-2 rounded-lg w-full  mt-2 p-4 font-medium">
            <div className="flex justify-between">
              <p> Total: Tax + Shipping</p> {formatCurrency(totalPrice)}
            </div>
            <div className="w-full h-full">
              <PaymentCard />
            </div>
            <Button
              className="hover:bg-blue-500 transition-all
             duration-300 hover:ring-4 ring-black/10"
            >
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
