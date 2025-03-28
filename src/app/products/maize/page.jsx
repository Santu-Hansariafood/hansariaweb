"use client";
import { useEffect, useState } from "react";
import Products from "@/components/common/Products/Products";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/products") // ✅ Fetch all product data
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.maize)) // ✅ Extract Maize Data
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <main>
      {data ? <Products data={data} /> : <p className="text-center text-gray-700">Loading...</p>}
    </main>
  );
};

export default Page;
