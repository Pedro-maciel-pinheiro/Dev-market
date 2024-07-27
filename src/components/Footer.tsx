import Link from "next/link";
import React from "react";
import { Github, LinkedinIcon, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-5
     text-base-content rounded p-10 bg-black
      text-white"
    >
      <nav className="grid grid-flow-col gap-4 font-semibold text-sm">
        <Link className="link link-hover" href={"/"}>
          Home
        </Link>
        <Link className="link link-hover" href={"/"}>
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            className="transition-all duration-300 hover:scale-110 hover:text-blue-500"
            href="https://www.linkedin.com/in/jpmp1998/"
            target="_blank"
          >
            <LinkedinIcon size={28} />
          </Link>
          <Link
            className="transition-all duration-300 hover:scale-110 hover:text-purple-500"
            href="https://github.com/Pedro-maciel-pinheiro"
            target="_blank"
          >
            <Github size={28} />
          </Link>
          <Link
            className="transition-all duration-300 hover:scale-110 hover:text-green-500"
            href="https://web.whatsapp.com/send?phone=5561998516239"
            target="_blank"
          >
            <PhoneCall size={28} />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="font-semibold">
          Maciel Pinheiro Front-end Developer since 2022
        </p>
      </aside>
    </footer>
  );
}
