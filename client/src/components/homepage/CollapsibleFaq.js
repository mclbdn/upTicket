import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "./CollapsibleFaq.module.scss";

const CollapsibleFaq = ({ faqQuestion, faqAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.single_faq} ${isOpen ? styles.opened : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3>{faqQuestion}</h3>
      {isOpen ? (
        <FontAwesomeIcon icon={faMinus} className={styles.plus_icon} />
      ) : (
        <FontAwesomeIcon icon={faPlus} className={styles.plus_icon} />
      )}
      <p className={styles.faq_text}>{faqAnswer}</p>
    </div>
  );
};

export default CollapsibleFaq;
