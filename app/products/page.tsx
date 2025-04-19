import React from "react";
import { getProducts } from "../Service/GetProducts";
import { Product } from "../types/Product";

export default async function Page() {
  // This is a server component

  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
