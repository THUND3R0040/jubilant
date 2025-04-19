import React from "react";
import { Product } from "../types/Product";

type ProductItemProps = {
  product: Product;
};
export default function ProductItem({ product }: ProductItemProps) {
  return (
    <li key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{`${product.price}`}</p>
    </li>
  );
}
