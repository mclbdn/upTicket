import React from "react";
import check from "../assets/check.svg";
import styles from "./Logout.module.scss";

const Logout = () => {
  return (
    <main className={styles.main}>
      <nav>
        <a href="/">
          <div className={styles.logo}>
            <img src={check} alt="logo" draggable="false" className={styles.logo_img} />
            <p>upTicket</p>
          </div>
        </a>
      </nav>
      <div className={styles.left_and_right_containers}>
        <div className={styles.left_side_container}>
          <h1 className={styles.h1}>
            Need a break?
            <br />
            Don’t worry - See you soon! :)
          </h1>
          <div className={styles.white_vertical_line}></div>
        </div>
        <div className={styles.right_side_container}>
          <h1 className={styles.h1}>Logout</h1>
          <p className={styles.under_header_para}>You’re now logged out</p>
          <p className={styles.under_button_para}>
            Got more work to do? <a href="/login">Log in</a>
          </p>
          <p className={styles.copyright_para}>©upTicket 2022</p>
        </div>
      </div>
    </main>
  );
};

export default Logout;
