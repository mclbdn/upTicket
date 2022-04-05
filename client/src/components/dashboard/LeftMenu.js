import React from "react";
import styles from "./LeftMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

const LefMenu = ({ logoutUser }) => {
  return (
    <div className={styles.bigger_screen_left_menu}>
      <a href="">
        <FontAwesomeIcon
          className={styles.dashboard_icon}
          icon={faTableColumns}
        />
        Dashboard
      </a>
      <a href="">
        <FontAwesomeIcon className={styles.dashboard_icon} icon={faChartLine} />
        Report
      </a>
      <a href="">
        <FontAwesomeIcon className={styles.dashboard_icon} icon={faGear} />
        Settings
      </a>
      <a onClick={() => logoutUser()}>
        <FontAwesomeIcon
          className={styles.dashboard_icon}
          icon={faArrowRightFromBracket}
        />
        Logout
      </a>
      <div className={styles.bigger_screen_bottom_paragraph_wrapper}>
        <p className={styles.bigger_screen_bottom_paragraph}>
          created by{" "}
          <a href="https://github.com/mclbdn/" target="_blank" rel="noreferrer">
            @mclbdn
          </a>
        </p>
      </div>
    </div>
  );
};

export default LefMenu;
