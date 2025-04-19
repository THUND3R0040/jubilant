import { JsonProduct } from "@/app/types/JsonProduct";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest } from "next";

const filePath = path.join(process.cwd(), "app", "data", "products.json");
export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url || "");
  const search = searchParams.get("search");
  console.log("File path:", filePath);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const productWithId = products["items"].map((product: JsonProduct) => {
    return { id: uuidv4(), ...product };
  });

  if (search) {
    const filteredProducts = productWithId.filter((product: JsonProduct) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    return new Response(JSON.stringify(filteredProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(productWithId), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST(req: NextApiRequest) {
  const data = await req.json();
  const file = await fs.readFile(filePath, "utf-8");
  const products = JSON.parse(file);

  const newProduct = {
    id: uuidv4(), // or use uuid
    ...data,
  };

  products["items"].push(newProduct);
  await fs.writeFile(filePath, JSON.stringify(products, null, 2));
  return Response.json(newProduct, { status: 201 });
}
