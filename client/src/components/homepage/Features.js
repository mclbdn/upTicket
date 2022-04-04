import React from "react";
import unresolved_tickets from "../../assets/unresolved-tickets.svg";
import assigned_tickets from "../../assets/assigned-tickets.svg";
import overall_statistics from "../../assets/overall-statistics.svg";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features_section} id="features">
      <div className={styles.single_feature}>
        <div className={styles.feature_texts}>
          <h2>
            upTicket feels incredibly
            <span className={styles.light_blue}> simple</span>
          </h2>
          <p>
            We believe that online tools should be powerful yet simple. That's
            why we worked hard to make upTicket as simple as possible.
          </p>
        </div>
        <div className={`${styles.feature_img} ${styles.feature_img_simple}`}>
          <img draggable="false" src={assigned_tickets} alt="" />
        </div>
      </div>
      <div className={`${styles.single_feature} ${styles.feature_reversed}`}>
        <div className={styles.feature_texts}>
          <h2>
            Resolve all your tickets for
            <span className={styles.pink_text}> free</span>
          </h2>
          <p>
            Fancy saving your operational costs? upTicket is completely free for
            teams up to 3 team members.
          </p>
        </div>
        <div className={`${styles.feature_img} ${styles.feature_img_free}`}>
          <img draggable="false" src={unresolved_tickets} alt="" />
        </div>
      </div>
      <div className={styles.single_feature}>
        <div className={styles.feature_texts}>
          <h2>
            <span className={styles.blue_text}>Speed up </span>your workflow
          </h2>
          <p>
            No one likes to waste their time. With upTicket, your team's
            workflow speed increases dramatically.
          </p>
        </div>
        <div className={`${styles.feature_img} ${styles.feature_img_speed}`}>
          <img draggable="false" src={overall_statistics} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Features;
