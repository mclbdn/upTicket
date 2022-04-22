import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SingUpAndLogin.module.scss";

const LogInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5500/api/user/login", {
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
    console.log(data)
    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      alert("Login successfull");
      // navigate("/dashboard");
    } else {
      alert("Please check your e-mail/password");
    }
  }

  return (
    <main className={styles.signup_or_login}>
      <div className={styles.form_wrapper}>
        <div className={styles.logo_wrapper}>
          <a className={styles.logo_link} href="/">
            <span className={styles.blue_text}>up</span>
            <span className={styles.pink_text}>Ticket</span>
          </a>
        </div>
        <h3>Log In</h3>
        <p>
          Don't have an account yet? <a href="/signup">Sign Up!</a>
        </p>
        <form onSubmit={loginUser}>
          <div className={styles.label_and_input_container}>
            <label htmlFor="email">Company Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
          </div>
          <div className={styles.label_and_input_container}>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </main>
  );
};

export default LogInPage;
