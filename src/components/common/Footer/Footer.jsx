"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Products", href: "/products" },
      { name: "Blog", href: "/blog" },
    ],
    services: [
      { name: "Commodity Trading", href: "/services/commodity-trading" },
      { name: "Market Intelligence", href: "/services/market-intelligence" },
      { name: "Broking", href: "/services/broking" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, href: "https://twitter.com", color: "hover:bg-blue-400" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", color: "hover:bg-blue-700" },
    { icon: <FaInstagram />, href: "https://instagram.com", color: "hover:bg-pink-600" },
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: "+1 234 567 890", href: "tel:+1234567890" },
    { icon: <FaEnvelope />, text: "info@hansariafood.com", href: "mailto:info@hansariafood.com" },
    { icon: <FaMapMarkerAlt />, text: "123 Business Street, City, Country", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="block mb-6">
              <Image
                src="/logo/logo.png"
                alt="Hansaria Food Logo"
                width={120}
                height={120}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner in commodity trading and market intelligence solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <span className="text-yellow-400">{contact.icon}</span>
                  <a
                    href={contact.href}
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    {contact.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-400">
            © {currentYear} Hansaria Food. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;