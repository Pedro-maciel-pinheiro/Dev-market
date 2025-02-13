"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LogginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter()
  const onClick = () => {
    router.push("/auth/login")
  };

  if(mode === "modal") {
    return (
      <span>
        Todo:implement
      </span>
    )
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
