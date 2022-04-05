import React from "react";
import styles from "./SmallScreenBottomParagraphWrapper.module.scss"

const SmallScreenBottomParagraphWrapper = () => {
  return (
    <div className={styles.bottom_paragraph_wrapper}>
      <p className={styles.bottom_paragraph}>
        created by{" "}
        <a href="https://github.com/mclbdn/" target="_blank" rel="noreferrer">
          @mclbdn
        </a>
      </p>
    </div>
  );
};

export default SmallScreenBottomParagraphWrapper;
