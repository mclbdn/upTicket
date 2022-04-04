import React from "react";
import michal_photo from "../assets/michal-photo.png";
import styles from "./FoundersNote.module.scss";

const FoundersNote = () => {
  return (
    <section className={styles.founders_note_section} id="founders-note">
      <h1>Founder's Note</h1>
      <div className={styles.founders_note_wrapper}>
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
          <a
            target="_blank"
            href="https://github.com/mclbdn/upTicket"
            rel="noreferrer"
          >
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
        <div className={styles.underline_details}>
          <img
            draggable="false"
            className={styles.founder_photo}
            src={michal_photo}
            alt="Photo of the founder Michal Bednar"
          />
          <div className={styles.name_and_role}>
            <p className={styles.founder_name}>Michal Bednar</p>
            <p className={styles.founder_role}>CEO at upTicket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
