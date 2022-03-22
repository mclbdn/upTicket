import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {

  return (
    <main className="signup">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <a className="logo-link" href="/">
            <span className="blue-text-span">up</span>
            <span className="pink-text-span">Ticket</span>
          </a>
        </div>
        <h3>
          All done!<span>Have a nice day</span>
        </h3>
        <p className="login-again">
          A bit more to do? <a href="/login">Log In!</a>
        </p>
      </div>
    </main>
  );
};

export default LogoutPage;
