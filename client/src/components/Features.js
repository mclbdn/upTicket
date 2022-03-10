import React from "react";

const Features = () => {
  return (
    <section className="features-section">
      <div className="single-feature">
        <h2>
          upTicket feels incredibly
          <span className="light-blue-text-span"> simple</span>
        </h2>
        <p>
          We believe that online tools should be powerful yet simple. That's why
          we worked hard to make upTicket as simple as possible.
        </p>
        <div className="feature-img feature-img-simple"></div>
      </div>
      <div className="single-feature">
        <h2>
          Resolve all your tickets for
          <span className="pink-text-span"> free</span>
        </h2>
        <p>
          Fancy saving your operational costs? upTicket is completely free for
          teams up to 3 team members.
        </p>
        <div className="feature-img feature-img-free"></div>
      </div>
      <div className="single-feature">
        <h2>
          <span className="blue-text-span">Speed up </span>your workflow
        </h2>
        <p>
          No one likes to waste their time. With upTicket, your team's workflow
          speed increases dramatically.
        </p>
        <div className="feature-img feature-img-speed"></div>
      </div>
    </section>
  );
};

export default Features;
