import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import graph from "../assets/graphic.svg";
import check_circle from "../assets/check-circle.svg"

const Hero = () => {
  return (
    <section className="hero-section">
      <nav>
        <a className="logo-link" href="/">
          <span className="blue-text-span">up</span>
          <span className="off-white-text-span">Ticket</span>
        </a>
        <ul>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Founder's Note</a>
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
        <div className="auth-buttons">
          <div className="login-btn auth-btn">
            <a href="">Log In</a>
          </div>
          <div className="sign-up-btn auth-btn">
            <a href="">Sign Up</a>
          </div>
        </div>
      </nav>
      <img draggable="false" src={graph} alt="" className="graph-image" />
      <img draggable="false" src={check_circle} alt="" className="check-circle" />
      <div className="text-wrapper">
        <h1>
          Make <span className="yellow-text-span">your tickets</span> matter.
        </h1>
        <p>
          upTicket makes it easier and simpler to resolve tickets while saving
          time.
        </p>
        <div className="cta-button-hero">
          <a href="">Try upTicket for free</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
