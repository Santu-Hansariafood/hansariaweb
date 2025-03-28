"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegCopy, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import Head from "next/head";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const headOfficeAddress = "123, Business Street, Kolkata, India";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(headOfficeAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    { icon: <FaPhone />, title: "Phone", value: "+91 123 456 7890", href: "tel:+911234567890", color: "bg-blue-100 text-blue-600" },
    { icon: <FaEnvelope />, title: "Email", value: "info@hansariafood.com", href: "mailto:info@hansariafood.com", color: "bg-red-100 text-red-600" },
    { icon: <FaWhatsapp />, title: "WhatsApp", value: "+91 987 654 3210", href: "https://wa.me/919876543210", color: "bg-green-100 text-green-600" },
    { icon: <FaClock />, title: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM", color: "bg-purple-100 text-purple-600" },
  ];

  const branchOffices = [
    { city: "Delhi", address: "45, Connaught Place, New Delhi", map: "https://maps.google.com/maps?q=Connaught+Place+Delhi" },
    { city: "Mumbai", address: "87, Nariman Point, Mumbai", map: "https://maps.google.com/maps?q=Nariman+Point+Mumbai" },
    { city: "Bangalore", address: "23, MG Road, Bangalore", map: "https://maps.google.com/maps?q=MG+Road+Bangalore" },
    { city: "Chennai", address: "67, Anna Salai, Chennai", map: "https://maps.google.com/maps?q=Anna+Salai+Chennai" },
    { city: "Hyderabad", address: "12, Banjara Hills, Hyderabad", map: "https://maps.google.com/maps?q=Banjara+Hills+Hyderabad" },
    { city: "Pune", address: "78, Koregaon Park, Pune", map: "https://maps.google.com/maps?q=Koregaon+Park+Pune" },
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Hansaria Food - Get in Touch</title>
        <meta name="description" content="Contact Hansaria Food for commodity trading, market intelligence, and broking services. Find our office locations across India." />
        <meta name="keywords" content="contact hansaria food, commodity trading contact, market intelligence contact, broking services contact, hansaria food offices, hansaria food locations" />
        <meta property="og:title" content="Contact Us | Hansaria Food - Get in Touch" />
        <meta property="og:description" content="Contact Hansaria Food for commodity trading, market intelligence, and broking services. Find our office locations across India." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl -z-10"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h2>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                    aria-label={`${info.title}: ${info.value}`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="h-96">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.5154307585!2d88.27731147392642!3d22.53556440939411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774ff7e6d5ed%3A0x1a73390a2a50a4b9!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="Hansaria Food Head Office Location"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Head Office</h2>
                <p className="text-gray-600 mb-4">{headOfficeAddress}</p>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-300"
                  aria-label="Copy address to clipboard"
                >
                  {copied ? (
                    <>
                      <FaCheckCircle className="text-xl" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaRegCopy className="text-xl" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Branch Offices */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Branch Offices</h2>
              <div className="space-y-4">
                {branchOffices.map((branch, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-lg">
                        <FaMapMarkerAlt className="text-red-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{branch.city}</h3>
                        <p className="text-gray-600 mb-4">{branch.address}</p>
                        <a
                          href={branch.map}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-300"
                          aria-label={`View ${branch.city} office location on map`}
                        >
                          View on Map
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
