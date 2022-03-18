import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      alert("Login successfull");
      navigate("/");
    } else {
      alert("Please check your e-mail/password");
    }
  }

  return (
    <main className="signup">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <a className="logo-link" href="/">
            <span className="blue-text-span">up</span>
            <span className="pink-text-span">Ticket</span>
          </a>
        </div>
        <h3>Log In</h3>
        <p>
          Don't have an account yet? <a href="/signup">Sign Up!</a>
        </p>
        <form onSubmit={loginUser}>
          <div className="label-and-input-container">
            <label htmlFor="email">Company Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </main>
  );
};

export default LogInPage;
