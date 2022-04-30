import React from "react";
import check from "../assets/check.svg";
import text_404 from "../assets/404.svg";
import styles from "./NotFound404.module.scss";

const NotFound404 = () => {
  return (
    <main>
      <nav>
        <a href="/">
          <div className={styles.logo}>
            <img src={check} alt="logo" draggable="false" className={styles.logo_img} />
            <p>upTicket</p>
          </div>
        </a>
      </nav>
      <div className={styles.container_404}>
        <img src={text_404} alt="404 decorative text"  />
      </div>
      <div className={styles.h1_and_button}>
        <h1>
          Oh, no! This page
          <br /> does not exist.
        </h1>
        <a className={styles.cta_anchor} href="/">
          <div className={styles.cta_btn}>Go to main page</div>
        </a>
      </div>
      <div className={styles.main_content_wrapper}></div>
    </main>
  );
};

export default NotFound404;
