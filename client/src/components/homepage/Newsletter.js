import React from "react";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <section className={styles.newsletter_section}>
      <div className={styles.cubes_container}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <h2>Get the latest updates!</h2>
      <p className={styles.under_header_para}>We'll only inform you about the newest features. Changelog included.</p>
      <form>
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" id="email" required minLength={4} maxLength={128} placeholder="Email address" />
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
