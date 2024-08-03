import PhoneWallpaper1 from "../assets/phone-wall-1.png";
import PhoneWallpaper2 from "../assets/phone-wall-2.png";
import PhoneWallpaper3 from "../assets/phone-wall-3.png";
import PhoneWallpaper4 from "../assets/phone-wall-4.png";

import { StaticImageData } from "next/image";

interface PhoneWallpaperProps {
  title: string;
  subtitle: string;
  backgroundImage: StaticImageData | string;
}

export const PhoneWallpaper: PhoneWallpaperProps[] = [
  {
    title: "Groceries",
    subtitle: "all types of food always fresh and at the best prices",
    backgroundImage: PhoneWallpaper1,
  },
  {
    title: "Electronics",
    subtitle: "all types of electronics at the best prices",
    backgroundImage: PhoneWallpaper2,
  },
  {
    title: "Women's Fashion",
    subtitle: "all types of women's fashion",
    backgroundImage: PhoneWallpaper3,
  },
  {
    title: "Women's Make-up",
    subtitle: "the best types of makeup from around the world",
    backgroundImage: PhoneWallpaper4,
  },
];
