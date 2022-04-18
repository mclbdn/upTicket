import React from "react";
import Faq from "../components/homepage/Faq";
import Features from "../components/homepage/Features";
import Footer from "../components/homepage/NewFooter";
import Hero from "../components/homepage/Hero";
import Newsletter from "../components/homepage/Newsletter";
import Team from "../components/homepage/Team";


function Homepage() {
  return (
    <>
    <Hero />
    <Features />
    <Faq />
    <Team />
    <Newsletter />
    <Footer />
    </>
  );
}

export default Homepage;
