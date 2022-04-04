import React from "react";
import styles from "./SingUpAndLogin.module.scss";

const LogoutPage = () => {

  return (
    <main className={styles.signup_or_login}>
      <div className={styles.form_wrapper}>
        <div className={styles.logo_wrapper}>
          <a className={styles.logo_link} href="/">
            <span className={styles.blue_text}>up</span>
            <span className={styles.pink_text}>Ticket</span>
          </a>
        </div>
        <h3>
          All done!<span>Have a nice day</span>
        </h3>
        <p className={styles.login_again}>
          A bit more to do? <a href="/login">Log In!</a>
        </p>
      </div>
    </main>
  );
};

export default LogoutPage;
