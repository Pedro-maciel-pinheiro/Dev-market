"use client";

import { useState } from "react";
import { Button, Input, Label } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  title: string;
  description: string;
  signUpButton: ButtonProps;
  signUpWithGoogleButton: ButtonProps;
  image: ImageProps;
  logInText: string;
  logInLink: {
    text: string;
    url: string;
  };
  footerText: string;
};

export type Signup7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const Signup7 = (props: Signup7Props) => {
  const {
    logo,
    title,
    description,
    signUpButton,
    signUpWithGoogleButton,
    image,
    logInText,
    logInLink,
    footerText,
  } = {
    ...Signup7Defaults,
    ...props,
  } as Props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section>
      <div className="relative grid min-h-screen grid-cols-1 items-stretch justify-center overflow-auto lg:grid-cols-2">
        <div className="hidden bg-background-secondary lg:block">
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute bottom-auto left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-center px-[5%] md:h-18 lg:justify-between">
          <Link
            href={logo.url as string}
            className="focus-visible:outline-none mx-auto"
          >
            <Image
              src={logo.src as string | StaticImageData}
              alt={logo.alt as string}
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="relative mx-[5vw] flex items-center justify-center pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="container max-w-sm">
            <div className="container mb-6 max-w-lg text-center md:mb-8">
              <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <div className="grid w-full items-center">
                <Label htmlFor="name" className="mb-2">
                  Name*
                </Label>
                <Input
                  type="text"
                  id="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email*
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="password" className="mb-2">
                  Password*
                </Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid-col-1 grid gap-4">
                <Button
                  variant={signUpButton.variant}
                  size={signUpButton.size}
                  iconLeft={signUpButton.iconLeft}
                  iconRight={signUpButton.iconRight}
                >
                  <Link href={"#"}> {signUpButton.title}</Link>
                </Button>
                <Button
                  variant={signUpWithGoogleButton.variant}
                  size={signUpWithGoogleButton.size}
                  iconLeft={signUpWithGoogleButton.iconLeft}
                  iconRight={signUpWithGoogleButton.iconRight}
                  className="gap-x-3"
                >
                  <Link href={"#"}> {signUpWithGoogleButton.title}</Link>
                </Button>
              </div>
            </form>
            <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
              <p>{logInText}</p>
              <a
                href={logInLink.url}
                className="underline focus-visible:outline-none"
              >
                {logInLink.text}
              </a>
            </div>
          </div>
        </div>

        <footer className="absolute bottom-0 left-0 right-0 top-auto flex h-16 w-full items-center justify-center pr-[5%] md:h-18 lg:justify-start lg:px-[5%]">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export default Signup7;

export const Signup7Defaults: Signup7Props = {
  logo: {
    url: "/",
    src: "/icon/logo-colorful.png",
    alt: "Logo text",
  },
  title: "Sign up",
  description: "Enter your details below",
  signUpButton: {
    title: "Sign up",
  },
  signUpWithGoogleButton: {
    variant: "secondary",
    title: "Sign up with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  image: {
    src: "/img/Side-Image.png",
    alt: "Placeholder image",
  },
  logInText: "Already have an account?",
  logInLink: {
    text: "Log in",
    url: "/",
  },
  footerText: "© Pedro maciel pinheiro",
};

Signup7.displayName = "Sign-up";
