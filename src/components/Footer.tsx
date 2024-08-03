
import {
  BiLogoGithub,
  BiLogoWhatsapp,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const Footer = (props: Footer4Props) => {
  const { logo, footerText,  footerLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-5 md:py-8 lg:py-14 bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <Link href={logo.url as string} className="lg:justify-self-start">
            <Image src={logo.src} alt="logo" width={150} height={60}
              className="inline-block
             font-bold uppercase font-serif"
            >
             
            </Image>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/jpmp1998/"}
            className="flex flex-col font-semibold text-sm md:text-lg"
          >
            <span className="text-center">Pedro maciel pinheiro</span>
            <span
              className="bg-gradient-to-r hover:bg-gradient-to-l
            transition-all duration-300
             from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Front-end developer & Web designer
            </span>
          </Link>
          <div
            className="flex items-start justify-start 
          justify-items-center gap-x-3 lg:justify-self-end"
          >
            {socialMediaLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="focus-visible:outline-none"
                target="blank"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li
                key={index}
                className="underline decoration-white underline-offset-1 "
              >
                <Link href={link.url} className="focus-visible:outline-none">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const Footer4Defaults: Footer4Props = {
  logo: {
    url: "/",
    src: "/icon/logo-colorful.png",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "Link One", url: "#" },
        { title: "Link Two", url: "#" },
        { title: "Link Three", url: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    {
      url: "https://github.com/Pedro-maciel-pinheiro",
      icon: <BiLogoGithub className="size-7 hover:text-purple-500" />,
    },
    {
      url: "https://web.whatsapp.com/send?phone=5561998516239",
      icon: <BiLogoWhatsapp className="size-7 hover:text-green-500" />,
    },
    {
      url: "https://www.linkedin.com/in/jpmp1998/",
      icon: <BiLogoLinkedinSquare className="size-7 hover:text-blue-500" />,
    },
  ],
  footerText: "© 2024 Dev-Market. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};

Footer.displayName = "Footer";
