import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import check from "../assets/check.svg";
import styles from "./SignUp.module.scss";

const SignUp = () => {
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
        errorMessageToShow: "Passwords must be matching.",
      });
    } else {
      setFormHasErrors(null);
    }
  }, [password, confirmPassword]);

  const registerUser = async (e) => {
    e.preventDefault();

    if (!formHasErrors) {
      const response = await fetch("https://upticket-server.herokuapp.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          email,
          password,
        }),
      });

      if (response.status === 200) {
        navigate("/login");
      } else {
        setFormHasErrors({
          hasAnError: true,
          errorMessageToShow: "This e-mail is already registered.",
        });
      }
    }
  };

  return (
    <main className={styles.main}>
      {formHasErrors ? (
        <div className={`${styles.error_message} ${styles.slide_message}`}>
          <p>{formHasErrors.errorMessageToShow}</p>
        </div>
      ) : (
        <div className={styles.error_message}>
          <p></p>
        </div>
      )}
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
          <h1 className={styles.h1}>You’re only a few clicks away from creating your upTicket account.</h1>
          <div className={styles.white_vertical_line}></div>
        </div>
        <div className={styles.right_side_container}>
          <h1 className={styles.h1}>Register</h1>
          <p className={styles.under_header_para}>Manage all your tickets efficiently</p>
          <p className={styles.under_para_para}>Let's get you all set up!</p>
          <form onSubmit={registerUser} className={styles.form}>
            <div className={styles.top_form_container}>
              <div className={styles.left_form_container}>
                <label htmlFor="companyName" className={styles.label}>
                  Company name
                </label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  minLength={2}
                  maxLength={128}
                  placeholder="Company name"
                />
                <label htmlFor="companyEmail" className={styles.label}>
                  Company email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="companyEmail"
                  id="companyEmail"
                  required
                  minLength={4}
                  maxLength={128}
                  placeholder="Company email"
                />
              </div>
              <div className={styles.right_form_container}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  required
                  minLength={8}
                  maxLength={128}
                  placeholder="Password"
                />
                <label htmlFor="repeatPassword" className={styles.label}>
                  Repeat password
                </label>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  name="repeatPassord"
                  id="repeatPassword"
                  required
                  minLength={8}
                  maxLength={128}
                  placeholder="Repeat password"
                />
              </div>
            </div>
            <div className={styles.bottom_form_container}>
              <button type="submit">Create account</button>
            </div>
          </form>
          <p className={styles.under_button_para}>
            Already have an account? <a href="/login">Log in</a>
          </p>
          <p className={styles.copyright_para}>©upTicket 2022</p>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
