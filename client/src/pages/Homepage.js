import React from "react";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

function Homepage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />
    </>
  );
}

export default Homepage;
