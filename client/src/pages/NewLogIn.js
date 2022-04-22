import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import check from "../assets/check.svg";
import styles from "./SignUp.module.scss";

const NewLogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("https://upticket-server-ts.herokuapp.com/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "DELETE, POST, GET, OPTIONS",
        "ccess-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      alert("Login successful.");
      navigate("/dashboard");
    } else {
      alert("Please check your email/password.");
    }
  };

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
            Hello again.
            <br />
            You’ve been greatly missed!
          </h1>
          <div className={styles.white_vertical_line}></div>
        </div>
        <div className={styles.right_side_container}>
          <h1 className={styles.h1}>Log in</h1>
          <p className={styles.under_header_para}>Manage all your tickets efficiently</p>
          <p className={styles.under_para_para}>Let's get back to work!</p>
          <form onSubmit={loginUser} className={styles.form}>
            <div className={styles.top_form_container}>
              <div className={styles.left_form_container}>
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
              </div>
            </div>
            <div className={styles.bottom_form_container}>
              <button type="submit">Log in</button>
            </div>
          </form>
          <p className={styles.under_button_para}>
            Don't have an account? <a href="/signup">Register</a>
          </p>
          <p className={styles.copyright_para}>©upTicket 2022</p>
        </div>
      </div>
    </main>
  );
};

export default NewLogIn;
