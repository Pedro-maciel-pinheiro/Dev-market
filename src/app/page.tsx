import { getProductsData, ProductsProps } from "@/data";
import Image from "next/image";

export default async function Home() {
  const products: ProductsProps[] = await getProductsData();
  const limitedProducts = products.slice(0, 1);
  console.log(products)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {limitedProducts.map((item) => (
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div> {item.title}</div>
          <div>{item.category}</div>
          <div>{item.tags[1]}</div>
          <div>{item.price}</div>
          <div> {item.rating}</div>
          <Image
            src={item.images[0]}
            alt={item.title}
            width={200}
            height={200}
          />
          {item.images.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${item.title} image ${index + 1}`}
            />
          ))}
        </div>
      ))}
    </main>
  );
}
