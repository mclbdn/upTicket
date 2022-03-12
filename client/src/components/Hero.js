import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import graph from "../assets/graphic.svg";
import check_circle from "../assets/check-circle.svg";
import { Link } from "react-scroll";

const Hero = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <section className="hero-section">
      {isHamburgerOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link
                offset={-100}
                delay={200}
                to="features"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleHamburgerClick}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                offset={-100}
                delay={200}
                to="testimonials"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleHamburgerClick}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                offset={50}
                delay={200}
                to="faq"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleHamburgerClick}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                offset={-100}
                delay={200}
                to="testimonials"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleHamburgerClick}
              >
                Founder's Note
              </Link>
            </li>
            <li>
              <div className="login-btn auth-btn">
                <a href="">Log In</a>
              </div>
            </li>
            <li>
              <div className="sign-up-btn auth-btn">
                <a href="">Sign Up</a>
              </div>
            </li>
          </ul>
        </div>
      )}
      <nav>
        <a className="logo-link" href="/">
          <span className="blue-text-span">up</span>
          <span className="off-white-text-span">Ticket</span>
        </a>
        <ul>
          <li>
            <Link
              offset={-100}
              delay={200}
              to="features"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              offset={-100}
              delay={200}
              to="testimonials"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              offset={50}
              delay={200}
              to="faq"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              offset={-100}
              delay={200}
              to="testimonials"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Founder's Note
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger-menu"
          onClick={handleHamburgerClick}
        />
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
      <img
        draggable="false"
        src={check_circle}
        alt=""
        className="check-circle"
      />
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
