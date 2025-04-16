"use client";

import React from "react";
import Title from "@/components/common/Title/Title";
import { motion } from "framer-motion";

// Sample client data with variable-length names
const clientData = [
  { id: 1, name: "PREMIUM CHICK FEEDS PVT LTD" },
  { id: 2, name: "SUGUNA FOODS PRIVATE LIMITED" },
  { id: 3, name: "SHALIMAR PELLET FEEDS LTD" },
  { id: 4, name: "SONAVETS PVT LTD" },
  { id: 5, name: "GODREJ AGROVET LTD" },
  { id: 6, name: "JAPFA COMFEED INDIA PVT LTD" },
  { id: 7, name: "ITC Limited" },
  { id: 8, name: "ALLANA GROUP" },
  { id: 9, name: "Reliance Retail Ltd" },
  { id: 10, name: "GUJARAT AMBUJA EXPORTS LTD" },
  { id: 11, name: "ABIS EXPORTS INDIA PVT LTD" },
  { id: 12, name: "SNEHA FARMS PRIVATE LIMITED" },
  { id: 13, name: "VENKY'S (INDIA) LIMITED" },
  { id: 14, name: "NUTRIKRAFT INDIA PVT LTD" },
  { id: 15, name: "SKYLARK HATCHERIES PRIVATE LIMITED" },
  { id: 16, name: "MAHARASHTRA FEEDS PRIVATE LIMITED" },
  { id: 17, name: "ANMOL FEEDS PVT LTD" },
  { id: 18, name: "ROQUETTE RIDDHI SIDDHI PVT LTD" },
  { id: 19, name: "SUKHJIT STARCH & CHEMICALS LTD" },
  { id: 20, name: "BLUECRAFT AGRO PVT LTD" },
  { id: 21, name: "BLUE OCEAN BIOTECH PVT LTD" },
  {id: 22, name: "Ramco Industries Ltd"},
  {id:23, name:"Globus Spirits Ltd"},
  {id: 24, name:"IFB Agro Industries Ltd"},
  {id:25, name:"Radico Khaitan"},
  
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Client = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 p-6 md:p-12">
      <div className="mb-10 w-full flex justify-center">
        <Title
          sentence="Our Top Clients"
          manualMode={false}
          blurAmount={5}
          borderColor="#4CAF50"
          glowColor="#4CAF50"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Grid container with auto row height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
        {clientData.map((client, index) => (
          <motion.div
            key={client.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white border border-yellow-300 rounded-2xl p-6 shadow-xl text-green-700 font-semibold text-lg leading-snug hover:scale-[1.03] hover:shadow-yellow-500/30 transition-all duration-300"
          >
            {client.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;
