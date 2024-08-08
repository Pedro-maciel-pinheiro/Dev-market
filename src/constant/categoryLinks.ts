import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { IoIosCamera } from "react-icons/io";
import { useRef } from "react";

interface categoryLinksProps {
  icon: React.ComponentType;
  title: string;
  width: number;
  height: number;
}

export const categoryLinks: categoryLinksProps[] = [
  {
    icon: IoIosPhonePortrait,
    title: "Phones",
    width: 50,
    height: 50,
  },
  {
    icon: RiComputerLine,
    title: "Computers",
    width: 50,
    height: 50,
  },
  {
    icon: SiYoutubegaming,
    title: "Gaming",
    width: 50,
    height: 50,
  },
  {
    icon: FaHeadphones ,
    title: "HeadPhones",
    width: 50,
    height: 50,
  },
  {
    icon: FiWatch,
    title: "SmartWatch",
    width: 50,
    height: 50,
  },
  {
    icon: IoIosCamera,
    title: "Camera",
    width: 50,
    height: 50,
  },
];
