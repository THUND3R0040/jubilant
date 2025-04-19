"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Form() {
  const router = useRouter();
  const [search, setSearch] = React.useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (search.trim() !== "") {
      router.push(`?search=${encodeURIComponent(search)}`);
    } else {
      router.push("?");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 p-4"
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Search
      </button>
    </form>
  );
}
