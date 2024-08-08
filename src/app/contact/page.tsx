import MaskButton from "@/components/MaskButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="h-screen md:h-[800px] flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="font-semibold text-2xl">Contact Page</h1>
      <div className="flex flex-col md:flex-row items-center w-full h-full gap-2 justify-center">
        <div className="w-80 md:w-72 h-96 flex flex-col items-center justify-center border-2 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center justify-start text-sm gap-3">
            <li className="font-semibold flex gap-2 items-center">
              <span className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                <Phone className="text-white" />
              </span>{" "}
              Call To Us
            </li>
            <li>We are available 24/7, 7 days a week.</li>
            <li>Phone: +55 61 99851-6239</li>
          </ul>
          <span className="w-64 h-[2px] rounded-xl flex items-center bg-black/30 mt-2 mb-2" />
          <ul className="flex flex-col items-center justify-start text-sm gap-3">
            <li className="font-semibold flex gap-2 items-center">
              <span className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                <Mail className="text-white" />
              </span>{" "}
              Write To US
            </li>
            <li className="text-center">
              Fill out our form and we will contact you within 24 hours.
            </li>
            <li>Emails: shionlk98@gmail.com</li>
            <li>Emails: joaopedrolk98@gmail.com</li>
          </ul>
        </div>

        <div className="flex flex-col shadow-md w-[700px] md:h-96 border-2 rounded-lg max-w-80 md:max-w-full mb-4 md:mb-0">
          <div
            className="flex flex-col md:flex-row items-start justify-around w-full 
           p-4 gap-2 mx-auto md:mx-0"
          >
            <Input type="text" placeholder="Name* " />
            <Input type="email" placeholder="Email* " />
            <Input type="phone" placeholder="Phone" />
          </div>
          <div className="flex items-center justify-center h-full p-4 ">
            <Input className="h-56" />
          </div>
          <div className="flex justify-end items-center mb-4 px-4">
            <MaskButton
              title={"Send Massage"}
              btnColor={"after:bg-red-500"}
              linkBasePath={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
