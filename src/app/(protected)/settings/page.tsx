"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import Link from "next/link";


export default function SettingsPage() {
  const user = useCurrentUser();
  console.log({usario:user })

  const onClick = () =>{
    signOut()
  }

  return (
    <div
      className="h-screen text-2xl flex  items-center 
    justify-center max-w-7xl mx-auto"
    >
       <button>
        <Link href={"/"}>back to home</Link>
       </button>
        <div>{user?.name}</div>
         <div>{user?.address}</div>
        <button onClick={onClick} type="submit">Sign out</button>
      
    </div>
  );
}
