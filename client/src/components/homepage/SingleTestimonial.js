import React from "react";
import styles from "./SingleTestimonial.module.scss";

const SingleTestimonial = ({ text, name, role, photo, icon_class, icon }) => {
  return (
    <div className={styles.single_testimonial}>
      <img
        draggable="false"
        className={`${styles[icon_class]}`}
        src={icon}
        alt=""
      />
      <p className={styles.testimonial_text}>"{text}"</p>
      <hr />
      <div className={styles.underline_details}>
        <img
          draggable="false"
          className={styles.testimonial_photo}
          src={photo}
          alt=""
        />
        <div className={styles.name_and_role}>
          <p className={styles.testimonial_name}>{name}</p>
          <p className={styles.testimonial_role}>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
