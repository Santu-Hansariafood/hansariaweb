"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Title from "@/components/common/Title/Title";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 md:p-12 flex flex-col items-center">
      <div className="mb-8 w-full flex justify-center">
        <Title
          sentence="Hansaria Food Private Limited"
          manualMode={false}
          blurAmount={5}
          borderColor="#4CAF50"
          glowColor="#4CAF50"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/about/hansariafood.png"
            alt="Hansaria Food Pvt Ltd"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto max-w-lg"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-gray-800 mt-8 md:mt-0 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="mt-4 text-lg leading-relaxed">
            Established in the heart of Kolkata,{" "}
            <span className="text-green-500">Hansaria Food Pvt Ltd</span> has
            been a
            <span className="text-green-500">
              {" "}
              pioneer in the brokerage industry
            </span>
            , bridging the gap between
            <span className="text-green-500"> farmers and factories</span> with
            integrity and innovation. Rooted in tradition yet driven by modern
            technology, we specialize in
            <span className="text-green-500">
              {" "}
              premium-quality Maize, Soya, Broken Rice, and Paddy
            </span>
            , ensuring excellence in every transaction.
          </p>

          <p className="mt-4 text-lg leading-relaxed italic font-semibold text-green-600">
            “Farm to Factory”
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            With over{" "}
            <span className="text-green-500">five decades of expertise</span>,
            we have built a
            <span className="text-green-500"> trusted network</span> that
            empowers{" "}
            <span className="text-green-500">
              farmers, traders, and businesses
            </span>{" "}
            alike. Our mission,{" "}
            <span className="font-semibold">“Farm to Factory”</span>, is a
            commitment to
            <span className="text-green-500">
              {" "}
              seamless, transparent, and efficient trade solutions
            </span>
            , ensuring that every farmer gets the
            <span className="text-green-500"> best value</span> for their
            produce.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            At Hansaria Food, we are more than just brokers; we are
            <span className="text-green-500"> partners in progress</span>.
            Explore our journey, discover our
            <span className="text-green-500"> range of services</span>, and join
            us in
            <span className="text-green-500">
              {" "}
              shaping the future of agribusiness
            </span>
            —one successful trade at a time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
