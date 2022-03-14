import React from "react";
import michal_photo from "../assets/michal-photo.svg"

const FoundersNote = () => {
  return (
    <section className="founders-note-section">
      <h1>Founder’s Note</h1>
      <div className="founders-note-wrapper">
        <p>
          Like you, I like exploring and learning new things. <br />
          <br />
          That's exactly why I decided to found upTicket - to improve my design,
          programming, and writing skills. And don't get me wrong - they are far
          from perfect and the majority of things you've read above are
          completely made up. <br />
          <br /> The point I wanted to make is to prove that EVERYBODY is able
          to build and create things that can be not only very educating but
          also fun. <br /> <br /> upTicket is not a SaaS business, because it's
          not profitable at all. Nevertheless, it's my biggest programming
          project so far and you can check out the complete code{" "}
          <a target="_blank" href="https://github.com/mclbdn/upTicket">
            here
          </a>
          . <br />
          <br /> If you would like to cooperate, feel free to make a pull
          request.
          <br />
          <br /> All the best,
          <br />
          <br /> Michal Bednar
        </p>
        <hr />
        <div className="underline-details">
          <img draggable="false" className="testimonial-photo" src={michal_photo} alt="" />
          <div className="name-and-role">
            <p className="testimonial-name">Michal Bednar</p>
            <p className="testimonial-role">CEO at upTicket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
