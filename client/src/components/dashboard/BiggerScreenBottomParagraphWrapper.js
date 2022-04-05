import React from "react";
import styles from "./BiggerScreenBottomParagraphWrapper.module.scss";

const BiggerScreenBottomParagraphWrapper = () => {
  return (
    <div className={styles.bigger_screen_bottom_paragraph_wrapper}>
      <p className={styles.bigger_screen_bottom_paragraph}>
        created by{" "}
        <a href="https://github.com/mclbdn/" target="_blank" rel="noreferrer">
          @mclbdn
        </a>
      </p>
    </div>
  );
};

export default BiggerScreenBottomParagraphWrapper;
