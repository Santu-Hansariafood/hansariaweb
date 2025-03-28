"use client";
import { useParams } from "next/navigation";
import Teams from "@/components/common/Teams/Teams";

const TeamCategoryPage = () => {
  const { category } = useParams();
  return (
    <main>
      <Teams category={category} />
    </main>
  );
};

export default TeamCategoryPage;
