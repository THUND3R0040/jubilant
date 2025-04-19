import React from "react";
import { getProducts } from "../Service/GetProducts";
import { Product } from "../types/Product";
import ProductItem from "./ProductItem";
import Form from "./Form";
type Props = {
  searchParams: { search?: string };
};
export default async function Page({ searchParams }: Props) {
  // This is a server component
  const search = searchParams.search || "";

  const products = await getProducts(search);

  return (
    <div>
      <Form />
      <h1>Products</h1>
      <ul>
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
