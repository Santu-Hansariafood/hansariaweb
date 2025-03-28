"use client";
import { useEffect, useState } from "react";
import CommodityTrading from "@/components/common/Services/Services";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/commodityData")
      .then((response) => response.json())
      .then((jsonData) => {
        const selectedSection = jsonData.sections.find(
          (section) => section.category === "Market Intelligence"
        );
        if (selectedSection) {
          setData({
            image: jsonData.image,
            mainTitle: jsonData.mainTitle,
            subTitle: selectedSection.category,
            sections: selectedSection.items
          });
        }
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <main>
      {data ? <CommodityTrading data={data} /> : <p className="text-center text-gray-700">Loading...</p>}
    </main>
  );
};

export default Page;
