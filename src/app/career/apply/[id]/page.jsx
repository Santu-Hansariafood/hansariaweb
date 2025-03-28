"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

const JobApply = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cv: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="w-full p-6 md:p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Apply for Job</h1>
      <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full border p-2 rounded-lg mb-4" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
