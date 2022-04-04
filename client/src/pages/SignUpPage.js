import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SingUpAndLogin.module.scss";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formHasErrors, setFormHasErrors] = useState(null);

  useEffect(() => {
    if (password !== confirmPassword) {
      setFormHasErrors({
        hasAnError: true,
        errorMessageToShow: "Passwords must be matching",
      });
    } else {
      setFormHasErrors(null);
    }
  }, [confirmPassword, password]);

  async function registerUser(e) {
    e.preventDefault();

    if (!formHasErrors) {
      const response = await fetch(
        "https://upticket-server.herokuapp.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            companyName,
            email,
            password,
          }),
        }
      );

      if (response.status === 200) {
        navigate("/login");
      } else {
        setFormHasErrors({
          hasAnError: true,
          errorMessageToShow: "This e-mail is already registered.",
        });
      }
    }
  }

  return (
    <main className={styles.signup_or_login}>
      {formHasErrors ? (
        <div className={`${styles.error_message} ${styles.slide}`}>
          <p>{formHasErrors.errorMessageToShow}</p>
        </div>
      ) : (
        <div className={styles.error_message}>
          <p></p>
        </div>
      )}
      <div className={styles.form_wrapper}>
        <div className={styles.logo_wrapper}>
          <a className={styles.logo_link} href="/">
            <span className={styles.blue_text}>up</span>
            <span className={styles.pink_text}>Ticket</span>
          </a>
        </div>
        <h3>Create your upTicket account</h3>
        <p>
          Have an account? <a href="/login">Log In!</a>
        </p>
        <form onSubmit={registerUser}>
          <div className={styles.label_and_input_container}>
            <label htmlFor="company">Company Name</label>
            <input
              value={companyName}
              type="text"
              name="company"
              onChange={(e) => setCompanyName(e.target.value)}
              id="company"
              required
            />
          </div>
          <div className={styles.label_and_input_container}>
            <label htmlFor="email">Company Email</label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              required
            />
          </div>
          <div className={styles.label_and_input_container}>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              required
              minLength={8}
              maxLength={16}
            />
          </div>
          <div className={styles.label_and_input_container}>
            <label htmlFor="repeat-password">Repeat Password</label>
            <input
              type="password"
              name="repeat-password"
              id="repeat-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              maxLength={16}
            />
          </div>
          <button>Create Account</button>
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
