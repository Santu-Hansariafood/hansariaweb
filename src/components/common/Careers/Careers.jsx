"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/careers")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="w-full p-6 md:p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Current Job Openings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.location}</p>
            <p className="mt-2 text-gray-700">{job.shortDescription}</p>
            <Link href={`/careers/jobs/${job.id}`} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
