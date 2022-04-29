import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import check from "../../assets/check.svg";
import image_placeholder from "../../assets/image_placeholder.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const hideMobileMenu = () => {
    if (window.innerWidth >= 744) {
      setIsMobileMenuVisible(false);
    }
  };

  window.addEventListener("resize", hideMobileMenu);

  return (
    <section className={styles.hero_section} id="hero-section">
      <nav className={styles.hero_nav}>
        <div className={`${styles.mobile_menu} ${isMobileMenuVisible ? styles.show_mobile_menu : ""}`}>
          <ul>
            <li>
              <Link to="features-section" smooth="easeInOutQuart" duration={1000}>
                Features
              </Link>
            </li>
            <li>
              <Link to="faq-section" smooth="easeInOutQuart" duration={1000}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="team-section" smooth="easeInOutQuart" duration={1000}>
                Team
              </Link>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a className={styles.login_btn} href="/login">
                Log in
              </a>
            </li>
            <li>
              <a className={styles.signup_btn} href="/signup">
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <a href="/">
          <div className={styles.logo}>
            <img src={check} alt="logo" draggable="false" className={styles.logo_img} />
            <p>upTicket</p>
          </div>
        </a>
        <ul className={styles.nav_links_wrapper}>
          <li>
            <Link to="features-section" smooth="easeInOutQuart" duration={1000}>
              Features
            </Link>
          </li>
          <li>
            <Link to="faq-section" smooth="easeInOutQuart" duration={1000}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="team-section" smooth="easeInOutQuart" duration={1000}>
              Team
            </Link>
          </li>
          <li>
            <a href="/">Docs</a>
          </li>
          <div className={`${styles.nav_btn} ${styles.login_btn}`}>
            <a href="/login">Log in</a>
          </div>
          <div className={`${styles.nav_btn} ${styles.signup_btn}`}>
            <a href="/signup">Sign up</a>
          </div>
        </ul>
        {isMobileMenuVisible ? (
          <FontAwesomeIcon className={styles.hamburger_menu} icon={faXmark} onClick={() => setIsMobileMenuVisible(false)} />
        ) : (
          <FontAwesomeIcon className={styles.hamburger_menu} icon={faBars} onClick={() => setIsMobileMenuVisible(true)} />
        )}
      </nav>
      <div className={styles.text_and_img_wrapper}>
        <div className={styles.heading_text_and_cta_wrapper}>
          <h1>
            Make <span className={styles.yellow_text}>your tickets matter.</span>
          </h1>
          <p className={styles.hero_para}>
            upTicket helps IT professionals within small and dynamic teams resolve tickets efficiently and blazingly fast.
          </p>
          <a className={styles.cta_anchor} href="/signup">
            <div className={styles.cta_btn}>Get started - it's free!</div>
          </a>
        </div>
        <div className={styles.hero_img}>
          <img src={image_placeholder} alt="Overview of the dashboard" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
