import React from "react";
import { Product } from "../types/Product";

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <li
      key={product.id}
      className="border rounded-xl p-4 shadow-md hover:shadow-lg transition duration-200"
    >
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-blue-600 font-bold">{`${product.price} $`}</p>
    </li>
  );
}
