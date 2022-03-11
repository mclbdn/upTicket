import React from "react";
import unresolved_tickets from "../assets/unresolved-tickets.svg";
import assigned_tickets from "../assets/assigned-tickets.svg";
import overall_statistics from "../assets/overall-statistics.svg";

const Features = () => {
  return (
    <section className="features-section">
      <div className="single-feature">
        <div className="feature-texts">
          <h2>
            upTicket feels incredibly
            <span className="light-blue-text-span"> simple</span>
          </h2>
          <p>
            We believe that online tools should be powerful yet simple. That's
            why we worked hard to make upTicket as simple as possible.
          </p>
        </div>
        <div className="feature-img feature-img-simple">
          <img src={assigned_tickets} alt="" />
        </div>
      </div>
      <div className="single-feature feature-reversed">
        <div className="feature-texts">
          <h2>
            Resolve all your tickets for
            <span className="pink-text-span"> free</span>
          </h2>
          <p>
            Fancy saving your operational costs? upTicket is completely free for
            teams up to 3 team members.
          </p>
        </div>
        <div className="feature-img feature-img-free">
          <img src={unresolved_tickets} alt="" />
        </div>
      </div>
      <div className="single-feature">
        <div className="feature-texts">
          <h2>
            <span className="blue-text-span">Speed up </span>your workflow
          </h2>
          <p>
            No one likes to waste their time. With upTicket, your team's
            workflow speed increases dramatically.
          </p>
        </div>
        <div className="feature-img feature-img-speed">
          <img src={overall_statistics} alt="" />
        </div>
      </div>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis nesciunt reiciendis voluptatum nihil fugit velit architecto, alias suscipit eius nulla deserunt error impedit placeat eaque porro voluptatibus inventore autem consectetur. Illum, eos. Vero enim vitae expedita tempora temporibus illum, odit maiores excepturi optio, sunt debitis architecto amet aperiam. Nobis, nemo facilis. Id error vero voluptatibus modi reiciendis ipsa mollitia, assumenda magni harum aliquam ratione odit, praesentium, voluptatum dignissimos obcaecati saepe repudiandae ipsum voluptatem? Vero laborum quidem quasi accusantium rerum quas veritatis, enim ab adipisci excepturi molestiae reprehenderit minima. Voluptatum ad autem vitae ducimus maxime! Amet, numquam nobis? Consectetur, necessitatibus?</p>
    </section>
  );
};

export default Features;
