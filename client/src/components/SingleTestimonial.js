import React from "react";

const SingleTestimonial = ({ text, name, role, photo }) => {
  return (
    <div className="single-testimonial">
      <p className="testimonial-text">"{text}"</p>
      <hr />
      <div className="underline-details">
        <img className="testimonial-photo" src={photo} alt="" />
        <div className="name-and-role">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
