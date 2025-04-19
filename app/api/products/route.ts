import { JsonProduct } from "@/app/types/JsonProduct";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "data", "products.json");
  console.log("File path:", filePath);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const productWithId = products["items"].map((product: JsonProduct) => {
    return { id: uuidv4(), ...product };
  });

  return new Response(JSON.stringify(productWithId), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
