"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProfilePage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/teams")
      .then((response) => response.json())
      .then((teamData) => {
        const allMembers = [...teamData.accounts, ...teamData.marketing, ...teamData.backoffice, ...teamData.leaders];
        const member = allMembers.find((person) => person.id === id);
        setData(member);
      })
      .catch((error) => console.error("Error loading team data:", error));
  }, [id]);

  if (!data) return <p className="text-center text-gray-700">Loading...</p>;

  return (
    <div className="w-full p-6 md:p-12 flex flex-col items-center bg-gray-100">
      <Image src={data.image} alt={data.name} width={300} height={300} className="rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold mt-4">{data.name}</h1>
      <h2 className="text-xl text-gray-600 mt-2">{data.role}</h2>
      <p className="text-gray-700 mt-4">{data.description}</p>
    </div>
  );
};

export default ProfilePage;
