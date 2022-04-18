import React, { useState } from "react";
import styles from "./SingleQa.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const SingleQa = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={`${styles.single_qa} ${isOpen ? styles.opened : ""}`}>
      <div className={styles.q_and_icon}>
        <p>{q}</p>
        <div className={styles.fa_gray_wrapper}>
          {isOpen ? (
            <FontAwesomeIcon className={styles.fa_qa_icon} icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon className={styles.fa_qa_icon} icon={faArrowDown} />
          )}
        </div>
      </div>
      <div className={styles.answer}>{a}</div>
    </div>
  );
};

export default SingleQa;
