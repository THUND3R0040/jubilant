import { Product } from "../types/Product";

export async function getProducts(search: string): Promise<Product[]> {
  const res = await fetch(
    `http://localhost:3000/api/products?search=${search}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
