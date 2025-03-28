"use client";
import { useEffect, useState } from "react";
import PixelCard from "@/components/common/TeamsPixelCard/TeamsPixelCard";
import { motion } from "framer-motion";

const Teams = ({ category }) => {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/teams")
      .then((response) => response.json())
      .then((data) => {
        if (data[category]) {
          setTeam(data[category]);
        }
      })
      .catch((error) => console.error("Error fetching team data:", error))
      .finally(() => setIsLoading(false));
  }, [category]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          variants={titleVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {category.charAt(0).toUpperCase() + category.slice(1)} Team
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          /* Team Grid */
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {team.length > 0 ? (
              team.map((member) => (
                <motion.div
                  key={member.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <PixelCard member={member} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                <p className="text-xl text-gray-500">No team members found.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Teams;
