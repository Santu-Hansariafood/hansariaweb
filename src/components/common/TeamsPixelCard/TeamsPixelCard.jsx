"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamsPixelCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-green-600 font-semibold mb-4">{member.role}</p>
        
        {member.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{member.description}</p>
        )}

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-4">
          <Link 
            href={member.whatsapp} 
            target="_blank"
            className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors duration-200"
          >
            <FaWhatsapp className="text-xl" />
          </Link>
          <Link 
            href={member.email}
            className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200"
          >
            <FaEnvelope className="text-xl" />
          </Link>
          {member.social?.linkedin && (
            <Link 
              href={member.social.linkedin}
              target="_blank"
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200"
            >
              <FaLinkedin className="text-xl" />
            </Link>
          )}
          {member.social?.facebook && (
            <Link 
              href={member.social.facebook}
              target="_blank"
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200"
            >
              <FaFacebook className="text-xl" />
            </Link>
          )}
          {member.social?.twitter && (
            <Link 
              href={member.social.twitter}
              target="_blank"
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200"
            >
              <FaTwitter className="text-xl" />
            </Link>
          )}
          {member.social?.instagram && (
            <Link 
              href={member.social.instagram}
              target="_blank"
              className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors duration-200"
            >
              <FaInstagram className="text-xl" />
            </Link>
          )}
        </div>

        {/* Experience */}
        {member.experience && (
          <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
        )}

        {/* Profile Button */}
        <Link
          href={`/teams/profile/${member.id}`}
          className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-xl text-center font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-[1.02]"
        >
          View Profile
        </Link>
      </div>

      {/* Hover Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TeamsPixelCard;
