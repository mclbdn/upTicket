import React from "react";

const LogInPage = () => {
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
        <form action="">
          <div className="label-and-input-container">
            <label htmlFor="email">Company Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </main>
  );
};

export default LogInPage;
