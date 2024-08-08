"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoCardOutline } from "react-icons/io5";
import Image from "next/image";
import React, { useState } from "react";

export const PaymentCard = () => {
  const [paymentChoose, setPaymentChoose] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-center justify-center 
        w-full h-full cursor-pointer overflow-hidden p-4"
      >
        <ul className="flex justify-between items-center w-full h-20">
          <li className="flex gap-1 items-center"
           onClick={() => setPaymentChoose((prev) => !prev)}>Card <IoCardOutline size={25}/></li>
          <li onClick={() => setPaymentChoose(false)}
          className="flex gap-1 items-center">Cash on delivery <Checkbox /></li>
        </ul>
        <div
          className={`transition-all duration-700   ${
            paymentChoose ? "w-full h-64 opacity-100" : "opacity-0 h-0"
          }`}
        >
          <div
            className={` flex-col justify-center gap-4 w-full h-full ${
              paymentChoose ? "flex" : "hidden"
            }`}
          >
            <h2>Card Information</h2>
            <div className="flex flex-col w-full relative">
              <Label>Card Number</Label>
              <Input placeholder="4242-4242-4242-4242" disabled={true} />
              <div
                className="absolute   flex items-center justify-end 
               w-full gap-1 mt-3 p-1"
              >
                <Image
                  src={"/img/visa-card.png"}
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  src={"/img/master-card.png"}
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  src={"/img/paypal-card.png"}
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  src={"/img/ame-card.png"}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1">
                <Label>Expiration Date</Label>
                <Input placeholder="MM/YY" disabled={true} />
              </div>
              <div className="flex flex-col gap-1">
                <Label>Security Code</Label>
                <Input placeholder="CVC" disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
