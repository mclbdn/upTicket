import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero-section">
      <nav>
        <a className="logo-link" href="/">
          <span className="blue-text-span">up</span>
          <span className="off-white-text-span">Ticket</span>
        </a>
        <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
      </nav>
      <div className="text-wrapper">
      <h1>Make your tickets matter.</h1>
      <p>
        upTicket makes it easier and simpler to resolve tickets while saving
        time.
      </p>

      </div>
    </section>
  );
};

export default Hero;
