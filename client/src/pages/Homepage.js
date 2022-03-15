import React from "react";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FoundersNote from "../components/FoundersNote";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";

function Homepage() {
  return (
    <>
      <Hero />
      <Features />
      <hr className="divider" />
      <Testimonials />
      <hr className="divider" />
      <Faq />
      <hr className="divider" />
      <Newsletter />
      <hr className="divider" />
      <FoundersNote />
      <Footer />
    </>
  );
}

export default Homepage;
