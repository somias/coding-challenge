import { API_URLS } from "@/config/api-config";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: string;
  image: string;
}

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(API_URLS.PRODUCTS);
  if (!response.ok) {
    throw new Error("Error while fetching products");
  }

  return response.json();
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
