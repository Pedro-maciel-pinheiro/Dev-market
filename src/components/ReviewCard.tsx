import { ProductsProps } from "@/constant";
import { StarIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { StaticImageData } from "next/image";

interface ReviewCardProps {
  productReview: ProductsProps;
}
interface AvatarProps {
  href: string;
}

const AvatarImages: AvatarProps[] = [
  {
    href: "https://i.pravatar.cc/150?img=1",
  },
  {
    href: "https://i.pravatar.cc/150?img=2",
  },
  {
    href: "https://i.pravatar.cc/150?img=3",
  },
];

export const ReviewCard = ({ productReview }: ReviewCardProps) => {
  return (
    <div>
      <div className="w-screen  h-full flex flex-col md:flex-row items-center justify-between gap-5 md:max-w-7xl px-4 md:px-0 mx-auto md:mx-0">
        {productReview.reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center
             h-56 border-2 shadow-md w-full gap-2 rounded-lg hover:translate-x-1 transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              {" "}
              {Array(5)
                .fill(0)
                .map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    fill={starIndex < productReview.rating ? "orange" : "none"}
                    color="orange"
                    size={16}
                  />
                ))}
              {review.comment}{" "}
            </div>
            <div className="flex">{review.data}</div>
            <div className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio, quia reprehenderit ipsa
            </div>
            <div className="flex"></div>

            <div className="flex justify-around items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={AvatarImages[index % AvatarImages.length].href}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {review.reviewerName}
            </div>
            <div className="flex">{review.reviewerEmail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
