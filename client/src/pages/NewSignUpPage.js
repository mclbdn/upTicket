import React from "react";
import check from "../assets/check.svg";
import styles from "./NewSignUpPage.module.scss";

const NewSignUpPage = () => {
  return (
    <main className={styles.main}>
      <nav>
        <div className={styles.logo}>
          <img src={check} alt="logo" draggable="false" className={styles.logo_img} />
          <p>upTicket</p>
        </div>
      </nav>
    </main>
  );
};

export default NewSignUpPage;
