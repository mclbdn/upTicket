import React from "react";
import SingleTestimonial from "./SingleTestimonial";
import adriana_photo from "../../assets/adriana-photo.svg";
import josh_photo from "../../assets/josh-photo.svg";
import kate_photo from "../../assets/kate-photo.svg";
import heart_icon from "../../assets/heart-icon.svg";
import star_icon from "../../assets/star-icon.svg";
import plus_one_icon from "../../assets/plus-one-icon.svg";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Stumbled across upTicket while looking for a simple and easy ticketing system. Although there are many ticketing systems, often they are very bloated and too complicated. I found out that upTicket fits our needs the best.",
      name: "Adriana Gupta",
      role: "CEO at PayMasters",
      photo: adriana_photo,
      icon_class: "heart",
      icon: heart_icon,
    },
    {
      text: "I am deeply impressed how well upTicket works. Over a period of 6 months, while using their service, our income more than doubled and our customers have never been happier.",
      name: "Josh Jagger",
      role: "CTO at Craftly",
      photo: josh_photo,
      icon_class: "star",
      icon: star_icon,
    },
    {
      text: "upTicket makes life at our startup so much easier and organized. It's simple, intuitive, and easy to use. Make yourself a favor and sign up for their services now. I wish I knew about them earlier.",
      name: "Kate Podolsky",
      role: "CEO at Digitio",
      photo: kate_photo,
      icon_class: "plus_one",
      icon: plus_one_icon,
    },
  ];

  return (
    <section className={styles.testimonials_section} id="testimonials">
      <h2>
        Our goal is to make work within{" "}
        <span className={styles.red_text}>small startups</span> simpler
      </h2>
      <p className={styles.testimonial_para}>
        Just read what our customers say about us 🔥
      </p>
      <div className={styles.testimonials_container}>
        {testimonials.map((testimonial) => {
          return (
            <SingleTestimonial
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              photo={testimonial.photo}
              icon={testimonial.icon}
              icon_class={testimonial.icon_class}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
