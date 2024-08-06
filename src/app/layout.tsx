import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TopHeader from "@/components/Top-header/TopHeader";
import { ShoppingCartProvider } from "@/context/shop/ShoppingCartContext";
import ReduxProvider from "@/redux/provider";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Dev Market",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <ShoppingCartProvider>
        <html lang="en">
          <body className={roboto.className}>
            <ReduxProvider>
              <TopHeader />
              <Navbar />
              {children}
              <Footer />
            </ReduxProvider>
          </body>
        </html>
      </ShoppingCartProvider>
    </SessionProvider>
  );
}
