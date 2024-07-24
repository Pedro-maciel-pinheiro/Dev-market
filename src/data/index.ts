export interface ProductsProps {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      [key: string]: any;
    };
    images: string[];
    thumbnail: string;
  }

export const getProductsData = async (): Promise<ProductsProps[]> => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.products; // Access the products array
};
