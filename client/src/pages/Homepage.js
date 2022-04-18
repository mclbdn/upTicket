import React from "react";
import Faq from "../components/homepage/Faq";
import Features from "../components/homepage/Features";
import FoundersNote from "../components/homepage/FoundersNote";
import NewFaq from "../components/homepage/NewFaq";
import NewFeatures from "../components/homepage/NewFeatures";
import Footer from "../components/homepage/NewFooter";
import NewHero from "../components/homepage/NewHero";
import NewNewsletter from "../components/homepage/NewNewsletter";
import Newsletter from "../components/homepage/Newsletter";
import Team from "../components/homepage/Team";
import Testimonials from "../components/homepage/Testimonials";


function Homepage() {
  return (
    <>
    <NewHero />
    <NewFeatures />
    <NewFaq />
    <Team />
    <NewNewsletter />
    <Footer />
      {/* <Hero />
      <Features />
      <hr className="divider" />
      <Testimonials />
      <hr className="divider" />
      <Faq />
      <hr className="divider" />
      <Newsletter />
      <hr className="divider" />
      <FoundersNote />
      <Footer /> */}
    </>
  );
}

export default Homepage;
