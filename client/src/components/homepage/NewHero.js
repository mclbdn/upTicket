import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NewHero.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import check from "../../assets/check.svg";
import image_placeholder from "../../assets/image_placeholder.png";

const NewHero = () => {
  return (
    <section className={styles.hero_section}>
      <nav className={styles.hero_nav}>
        <div className={styles.logo}>
          <img src={check} alt="logo" draggable="false" className={styles.logo_img} />
          <p>upTicket</p>
        </div>
        <ul className={styles.nav_links_wrapper}>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Team</a>
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
        <FontAwesomeIcon className={styles.hamburger_menu} icon={faBars} />
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

export default NewHero;