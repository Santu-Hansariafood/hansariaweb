"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("/api/careers")
      .then((response) => response.json())
      .then((jobsData) => {
        const selectedJob = jobsData.find((job) => job.id === id);
        setJob(selectedJob);
      })
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  if (!job) return <p className="text-center text-gray-700">Loading...</p>;

  return (
    <div className="w-full p-6 md:p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">{job.title}</h1>
      <p className="text-lg text-gray-600">{job.location}</p>
      <p className="mt-4 text-gray-700">{job.fullDescription}</p>

      <Link href={job.applyLink} className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetails;
