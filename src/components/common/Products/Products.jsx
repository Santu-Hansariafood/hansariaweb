"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "@/components/common/Title/Title"; // ✅ Import Common Title Component

const Products = ({ data }) => {
  return (
    <div className="w-full bg-gray-100 p-6 md:p-12">
      {/* ✅ Title Component Instead of Hardcoded <h1> */}
      <div className="mb-6">
        <Title
          sentence={data.title}
          manualMode={false}
          blurAmount={5}
          borderColor="#4CAF50"
          glowColor="#4CAF50"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Short Description + Image */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-700 text-lg">{data.shortDescription}</p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={data.image}
            alt="Product Image"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      {/* Product Details */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Product Details</h2>
        <p className="text-gray-700 mt-2">{data.description}</p>

        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {data.additionalImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative w-full h-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Image src={img} alt={`Product ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Acceptance Quality Section */}
      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Acceptance Quality</h2>

        <div className="mt-4">
          <h3 className="text-xl font-medium text-gray-700">Quality Parameters</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {data.qualityParameters.map((param, index) => (
              <li key={index}>{param}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-medium text-gray-700">Ratio</h3>
          <p className="text-gray-600">{data.ratio}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-medium text-gray-700">Crop Policy</h3>
          <p className="text-gray-600">{data.cropPolicy}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
