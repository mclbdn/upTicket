import React from "react";
import styles from "./SingleFeature.module.scss";

const SingleFeature = ({ featureIcon, featureName, featureText }) => {
  return (
    <div className={styles.single_feature}>
      <div className={styles.fa_gray_wrapper}>{featureIcon}</div>
      <p className={styles.feature_name}>{featureName}</p>
      <p className={styles.feature_text}>{featureText}</p>
    </div>
  );
};

export default SingleFeature;
