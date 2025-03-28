"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Services = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle description on click
  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gray-100 p-6 md:p-12"
    >
      {/* ✅ Full-width Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-60 md:h-96 overflow-hidden"
      >
        <Image 
          src={data.image} 
          alt="Commodity Trading" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* ✅ Animated Titles */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl font-bold text-center text-gray-900 mt-8"
      >
        {data.mainTitle}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl font-semibold text-center text-gray-700 mt-4"
      >
        {data.subTitle}
      </motion.h2>

      {/* ✅ Collapsible Sections with Smooth Animations */}
      <div className="mt-6 max-w-3xl mx-auto">
        {data.sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border-b border-gray-300 py-4"
          >
            <button
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800 hover:text-green-500 transition duration-300"
              onClick={() => toggleDescription(index)}
            >
              {item.title}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 text-gray-600"
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
