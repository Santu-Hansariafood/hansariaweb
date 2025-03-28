"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const slides = useMemo(
    () => [
      {
        title: "Welcome to Our Platform",
        text: "Discover the power of innovation.\nExperience the future with us.",
        image: "/home/corn.jpg",
      },
      {
        title: "Your Success, Our Mission",
        text: "We help you achieve your dreams.\nJoin us on this journey.",
        image: "/home/paddy.jpg",
      },
      {
        title: "Quality and Excellence",
        text: "Our commitment is to provide the best services.\nQuality is our top priority.",
        image: "/home/soya.jpg",
      },
      {
        title: "Innovate. Create. Dominate.",
        text: "Pushing boundaries to create something new.\nYour vision, our expertise.",
        image: "/home/corn.jpg",
      },
      {
        title: "Join the Future Today",
        text: "Step into a world of endless possibilities.\nYour journey starts here.",
        image: "/home/paddy.jpg",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false); // Reset before changing slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black bg-opacity-80 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.img
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            onLoad={() => setImageLoaded(true)}
            initial={{ scale: 1.1 }}
            animate={{ scale: imageLoaded ? 1 : 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-2xl"
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: imageLoaded ? 1 : 0.9, y: imageLoaded ? 0 : -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ textShadow: "4px 4px 15px rgba(255, 215, 0, 1)" }}
          >
            <Typewriter
              words={[slides[currentSlide].title]}
              loop={false}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-3xl font-semibold max-w-3xl px-4 md:px-0 text-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {slides[currentSlide].text.split("\n")[0]}
          </motion.p>
          <motion.p
            className="mt-4 text-lg md:text-2xl italic max-w-3xl px-4 md:px-0 text-gray-300 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 10 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            {slides[currentSlide].text.split("\n")[1]}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
