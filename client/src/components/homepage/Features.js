import React from "react";
import styles from "./Features.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEmpty, faDollar, faChartSimple, faEyeSlash, faScrewdriverWrench, faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import SingleFeature from "./SingleFeature";

const Features = () => {
  const featuresList = [
    {
      featureIcon: <FontAwesomeIcon icon={faHourglassEmpty} />,
      featureName: "Setup in no-time",
      featureText: "Start resolving tickets within less than 1 minute!",
    },
    {
      featureIcon: <FontAwesomeIcon icon={faDollar} />,
      featureName: "Free",
      featureText: "upTicket is a perfect solution for companies with limited resources.",
    },
    {
      featureIcon: <FontAwesomeIcon icon={faChartSimple} />,
      featureName: "Report-ready",
      featureText: "Generate reports right within your dashboard!",
    },
    {
      featureIcon: <FontAwesomeIcon icon={faEyeSlash} />,
      featureName: "Private",
      featureText: "We don’t track your data. And we never will.",
    },
    {
      featureIcon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
      featureName: "Efficient",
      featureText: "Have the most useful tools right at your fingerprints.",
    },
    {
      featureIcon: <FontAwesomeIcon icon={faEarthAmerica} />,
      featureName: "Community-driven",
      featureText: "upTicket is an open source project built by the community.",
    },
  ];

  return (
    <section className={styles.features_section}>
      <h2>Modern features for modern companies</h2>
      <p className={styles.under_header_para}>Use time-tested technologies and keep up with the fast-paced world</p>
      <div className={styles.tablet_layout}>
        {featuresList.map((feature) => {
          return <SingleFeature featureIcon={feature.featureIcon} featureName={feature.featureName} featureText={feature.featureText} />;
        })}
      </div>
    </section>
  );
};

export default Features;
