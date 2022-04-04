import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import graph from "../../assets/graphic.svg";
import check_circle from "../../assets/check-circle.svg";
import { Link } from "react-scroll";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <section className={styles.hero_section}>
      {isHamburgerOpen && (
        <div className={styles.menu}>
          <ul>
            <li>
              <Link
                offset={-100}
                delay={200}
                to="features"
                smooth={true}
                duration={500}
                className={styles.nav_link}
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
                className={styles.nav_link}
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
                className={styles.nav_link}
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
                className={styles.nav_link}
                onClick={handleHamburgerClick}
              >
                Founder's Note
              </Link>
            </li>
            <li>
              <div className={`${styles.login_btn} ${styles.auth_btn}`}>
                <a href="/login">Log In</a>
              </div>
            </li>
            <li>
              <div className={`${styles.sign_up_btn} ${styles.auth_btn}`}>
                <a href="/signup">Sign Up</a>
              </div>
            </li>
          </ul>
        </div>
      )}
      <nav>
        <a className={styles.logo_link} href="/">
          <span className={styles.blue_text_span}>up</span>
          <span className={styles.off_white_text_span}>Ticket</span>
        </a>
        <ul>
          <li>
            <Link
              offset={-100}
              delay={200}
              to="features"
              smooth={true}
              duration={500}
              className={styles.nav_link}
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
              className={styles.nav_link}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              delay={200}
              to="faq"
              smooth={true}
              duration={500}
              className={styles.nav_link}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              offset={-100}
              delay={200}
              to="founders-note"
              smooth={true}
              duration={500}
              className={styles.nav_link}
            >
              Founder's Note
            </Link>
          </li>
        </ul>
        {isHamburgerOpen ? (
          <FontAwesomeIcon
            icon={faX}
            className={styles.hamburger_menu}
            onClick={handleHamburgerClick}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className={styles.hamburger_menu}
            onClick={handleHamburgerClick}
          />
        )}

        <div className={styles.auth_buttons}>
          <div className={`${styles.login_btn} ${styles.auth_btn}`}>
            <a href="/login">Log In</a>
          </div>
          <div className={`${styles.sign_up_btn} ${styles.auth_btn}`}>
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </nav>
      <img
        draggable="false"
        src={graph}
        alt=""
        className={styles.graph_image}
      />
      <img
        draggable="false"
        src={check_circle}
        alt="Checked circle graphics"
        className={styles.check_circle}
      />
      <div className={styles.text_wrapper}>
        <h1>
          Make <span className={styles.yellow_text_span}>your tickets</span>{" "}
          matter.
        </h1>
        <p>
          upTicket makes it easier and simpler to resolve tickets while saving
          time.
        </p>
        <div className={styles.cta_button}>
          <a href="/signup">Try upTicket for free</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
