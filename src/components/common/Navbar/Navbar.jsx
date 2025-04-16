"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaHome, FaInfoCircle, FaCogs, FaBox, FaUsers, FaUserTie } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) => setDropdown(dropdown === menu ? null : menu);

  const isActive = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome className="mr-2" /> },
    { name: "About", href: "/about", icon: <FaInfoCircle className="mr-2" /> },
    {
      name: "Services",
      icon: <FaCogs className="mr-2" />,
      dropdown: [
        { name: "Commodity Trading", href: "/services/commodity-trading" },
        { name: "Market Intelligence", href: "/services/market-intelligence" },
        { name: "Broking", href: "/services/broking" },
      ],
    },
    {
      name: "Products",
      icon: <FaBox className="mr-2" />,
      dropdown: [
        { name: "Maize", href: "/products/maize" },
        { name: "Soya", href: "/products/soya" },
        { name: "Broken Rice", href: "/products/brokenrice" },
      ],
    },
    {
      name: "Teams",
      icon: <FaUsers className="mr-2" />,
      dropdown: [
        { name: "Marketing", href: "/teams/category/marketing" },
        { name: "Accounts", href: "/teams/category/accounts" },
        { name: "Back Office", href: "/teams/category/backoffice" },
        { name: "Leaders", href: "/teams/category/leaders" },
      ],
    },
    { name: "Client", href: "/client", icon: <FaUserTie className="mr-2" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src={"/logo/logo.png"} 
              height={60} 
              width={120} 
              alt="Hansaria Food Logo"
              className="hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center hover:text-yellow-400 transition-colors duration-300 ${
                        isActive(item.href) ? "text-yellow-400" : "text-white"
                      }`}
                      aria-expanded={dropdown === item.name}
                    >
                      {item.icon}
                      {item.name}
                      <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${
                        dropdown === item.name ? "rotate-180" : ""
                      }`} />
                    </button>
                    <div className={`absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-sm text-white rounded-lg shadow-xl border border-gray-700 transition-all duration-300 ${
                      dropdown === item.name ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}>
                      <ul>
                        {item.dropdown.map((subItem, index) => (
                          <li key={index}>
                            <Link
                              href={subItem.href}
                              className={`block px-4 py-3 hover:bg-yellow-400 hover:text-black transition-colors duration-300 ${
                                isActive(subItem.href) ? "bg-yellow-400 text-black" : ""
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link href={item.href}>
                    <span
                      className={`flex items-center hover:text-yellow-400 transition-colors duration-300 ${
                        isActive(item.href) ? "text-yellow-400" : "text-white"
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black/95 backdrop-blur-sm`}
        aria-hidden={!isOpen}
      >
        <ul className="py-4">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-gray-700">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-white hover:text-yellow-400 transition-colors duration-300 ${
                      isActive(item.href) ? "text-yellow-400" : ""
                    }`}
                    aria-expanded={dropdown === item.name}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      {item.name}
                    </div>
                    <FaChevronDown className={`transform transition-transform duration-300 ${
                      dropdown === item.name ? "rotate-180" : ""
                    }`} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      dropdown === item.name ? "max-h-screen" : "max-h-0"
                    }`}
                    aria-hidden={dropdown !== item.name}
                  >
                    <ul className="bg-gray-900/50">
                      {item.dropdown.map((subItem, index) => (
                        <li key={index}>
                          <Link
                            href={subItem.href}
                            className={`block px-8 py-2 text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300 ${
                              isActive(subItem.href) ? "bg-yellow-400 text-black" : ""
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link href={item.href}>
                  <span
                    className={`flex items-center px-4 py-3 text-white hover:text-yellow-400 transition-colors duration-300 ${
                      isActive(item.href) ? "text-yellow-400" : ""
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
