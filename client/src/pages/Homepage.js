import React from "react";
import Hero from "../components/homepage/Hero";
import Features from "../components/homepage/Features";
import Faq from "../components/homepage/Faq";
import Team from "../components/homepage/Team";
import Newsletter from "../components/homepage/Newsletter";
import Footer from "../components/homepage/NewFooter";


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
