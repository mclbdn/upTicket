import React from "react";
import styles from "./OffWhiteContainer.module.scss";

const OffWhiteContainer = ({ children }) => {
  return (
    <div className={styles.bigger_screen_off_white_container}>{children}</div>
  );
};

export default OffWhiteContainer;
