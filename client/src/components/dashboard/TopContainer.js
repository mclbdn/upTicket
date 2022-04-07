import React from "react";
import { useSelector } from "react-redux";
import styles from "./TopContainer.module.scss";

const TopContainer = () => {
  const companyName = useSelector((state) => state.companyName);

  return (
    <div className={styles.bigger_screen_top_container}>
      <div className={styles.company_name_and_welcome}>
        <h2 className={styles.company_name}>{companyName}</h2>
        <h2 className={styles.bigger_screen_welcome}>
          Welcome to your dashboard! <span>🎉</span>
        </h2>
      </div>
      <div className={styles.username}>
        <p>John</p>
      </div>
    </div>
  );
};

export default TopContainer;
