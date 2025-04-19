export async function addProduct(
  name: string,
  description: string,
  price: number
) {
  await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      price,
    }),
  });
}
