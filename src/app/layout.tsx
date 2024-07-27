import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TopHeader from "@/components/Top-header/TopHeader";
import { ShoppingCartProvider } from "@/context/shop/ShoppingCartContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Dev Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShoppingCartProvider>
      <html lang="en">
        <body className={roboto.className}>
          <TopHeader />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ShoppingCartProvider>
  );
}
