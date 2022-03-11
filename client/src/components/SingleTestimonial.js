import React from "react";

const SingleTestimonial = ({ text, name, role, photo, icon_class, icon }) => {
  return (
    <div className="single-testimonial">
      <img draggable="false" className={`testimonial-icon ${icon_class}`} src={icon} alt="" />
      <p className="testimonial-text">"{text}"</p>
      <hr />
      <div className="underline-details">
        <img draggable="false" className="testimonial-photo" src={photo} alt="" />
        <div className="name-and-role">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
