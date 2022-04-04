import React from "react";
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={styles.logo_wrapper}>
        <a className={styles.logo_link} href="/">
          <span className={styles.blue_text}>up</span>
          <span className={styles.off_white_text}>Ticket</span>
        </a>
      </div>
      <hr />
      <p>©Copyright 2022 upTicket Inc. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
