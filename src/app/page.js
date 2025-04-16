import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import dynamic from "next/dynamic";
import React from "react";

const About = dynamic(() => import("@/components/ui/About/About"));
const Client = dynamic(() => import("@/components/ui/Client/Client"));
const Contact = dynamic(() => import("@/components/ui/Contact/Contact"));
const ContactForm = dynamic(() =>
  import("@/components/ui/ContactForm/ContactForm")
);
const Home = dynamic(() => import("@/components/ui/Home/Home"));

const page = () => {
  return (
    <>
      <Home />
      <About />
      <Client />
      <Contact />
      <ContactForm />
      <ScrollToTop/>
    </>
  );
};

export default page;
