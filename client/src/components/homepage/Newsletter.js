import React from "react";
import mail_icon from "../../assets/mail-icon.svg"
import styles from "./Newsletter.module.scss"

const Newsletter = () => {
  return (
    <section className={styles.newsletter_section}>
      <div className={styles.newsletter_wrapper}>
        <img src={mail_icon} className={styles.mail_icon} alt="Mail icon"></img>
        <h1>Sign up for our newsletter!</h1>
        <form action="">
          <input placeholder="Email" type="email" name="" id="" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
