import Image from "next/image";
import React from "react";

const DeliverInfo = () => {
  return (
    <div className="max-w-7xl mx-auto flex  h-72">
      <div className="w-full h-full flex items-center justify-around">
        <div className="flex flex-col items-center justify-center gap-3">
          <div
            className="w-20 h-20 bg-gray-300 flex
       items-center justify-center rounded-full 
       hover:translate-x-1 transition-all duration-200"
          >
            <span
              className="w-14 h-14 bg-black flex
       items-center justify-center rounded-full"
            >
              <Image
                src={"/icon/icon-delivery.png"}
                alt="delivery icon"
                width={35}
                height={35}
              />
            </span>
          </div>
          <span className="text-center">
            <h6 className="font-semibold">FREE AND FAST DELIVERY</h6>
            <p> Free delivery for all orders over $140</p>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div
            className="w-20 h-20 bg-gray-300 flex
       items-center justify-center rounded-full 
       hover:translate-x-1 transition-all duration-200"
          >
            <span
              className="w-14 h-14 bg-black flex
       items-center justify-center rounded-full"
            >
              <Image
                src={"/icon/Icon-Customer.png"}
                alt="delivery icon"
                width={35}
                height={35}
              />
            </span>
          </div>
          <span className="text-center">
            <h6 className="font-semibold">24/7 CUSTOMER SERVICE</h6>
            <p>Friendly 24/7 customer support</p>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div
            className="w-20 h-20 bg-gray-300 flex
       items-center justify-center rounded-full 
       hover:translate-x-1 transition-all duration-200"
          >
            <span
              className="w-14 h-14 bg-black flex
       items-center justify-center rounded-full"
            >
              <Image
                src={"/icon/shield-tick.png"}
                alt="delivery icon"
                width={35}
                height={35}
              />
            </span>
          </div>
          <span className="text-center">
            <h6 className="font-semibold">MONEY BACK GUARANTEE</h6>
            <p>We reurn money within 30 days</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeliverInfo;