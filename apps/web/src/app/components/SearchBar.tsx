"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <form onSubmit={handleSearch} className="hidden md:flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded-l bg-gray-800 text-white border border-gray-700"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-blue-600 text-white rounded-r hover:bg-blue-700"
      >
        Go
      </button>
    </form>
  );
}