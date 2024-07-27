import Hero from "@/app/home/page";
import { ShoppingCartProvider } from "@/context/shop/ShoppingCartContext";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full max-w-7xl mx-auto ">
      
        <Hero />
     
    </main>
  );
}
