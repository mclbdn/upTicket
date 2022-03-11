import React from "react";
import SingleTestimonial from "./SingleTestimonial";
import adriana_sm from "../assets/adriana-sm.svg";
import josh_sm from "../assets/josh-sm.svg";
import kate_sm from "../assets/kate-sm.svg";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Stumbled across upTicket while looking for a simple and easy ticketing system. Although there are many ticketing systems, often they are very bloated and too complicated. I found out that upTicket fits our needs the best.",
      name: "Adriana Gupta",
      role: "CEO at PayMasters",
      photo: adriana_sm,
    },
    {
      text: "I am deeply impressed how well upTicket works. Over a period of 6 months, while using their service, our income more than doubled and our customers have never been happier.",
      name: "Josh Jagger",
      role: "CTO at Craftly",
      photo: josh_sm,
    },
    {
      text: "upTicket makes life at our startup so much easier and organized. It's simple, intuitive, and easy to use. Make yourself a favor and sign up for their services now. I wish I knew about them earlier.",
      name: "Kate Podolsky",
      role: "CEO at Digitio",
      photo: kate_sm,
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>
        Our goal is to make work within{" "}
        <span className="red-text-span">small startups</span> simpler
      </h2>
      <p className="testimonial-para">Just read what our customers say about us 🔥</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial)=>{
          return <SingleTestimonial text={testimonial.text} name={testimonial.name} role={testimonial.role} photo={testimonial.photo} />
        })}
      </div>
    </section>
  );
};

export default Testimonials;
