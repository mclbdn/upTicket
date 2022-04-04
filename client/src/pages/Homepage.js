import React from "react";
import Faq from "../components/homepage/Faq";
import Features from "../components/homepage/Features";
import Footer from "../components/homepage/Footer";
import FoundersNote from "../components/homepage/FoundersNote";
import Hero from "../components/homepage/Hero";
import Newsletter from "../components/homepage/Newsletter";
import Testimonials from "../components/homepage/Testimonials";


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
