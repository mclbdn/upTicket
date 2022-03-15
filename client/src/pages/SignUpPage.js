import React from "react";

const SignUpPage = () => {
  return (
    <main className="signup">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <a className="logo-link" href="/">
            <span className="blue-text-span">up</span>
            <span className="pink-text-span">Ticket</span>
          </a>
        </div>
        <h3>Create your upTicket account</h3>
        <form action="">
          <div className="label-and-input-container">
            <label htmlFor="company">Company Name</label>
            <input type="text" name="company" id="company" />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="email">Company Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="password">Repeat Password</label>
            <input
              type="password"
              name="repeat-password"
              id="repeat-password"
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
