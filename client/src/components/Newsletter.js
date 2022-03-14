import React from "react";
import mail_icon from "../assets/mail-icon.svg";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-wrapper">
        <h1>Sign up for our newsletter!</h1>
        <form action="">
          <input placeholder="Email" type="email" name="" id="" />
          <button>Subscribe</button>
        </form>
      </div>
      <hr className="divider" />
    </section>
  );
};

export default Newsletter;
