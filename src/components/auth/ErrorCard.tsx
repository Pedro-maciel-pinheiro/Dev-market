import React from "react";

import { CardWrapper } from "./CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/"
      headerLabel="Oops! Something wend wrong!"
      backButtonLabel="Back to main Page"
     
    >
      <div className="w-full flex justify-center items-center">
         <ExclamationTriangleIcon className="text-destructive"/>
      </div>
    </CardWrapper>
  );
};
