import React from "react";
import styles from "./LeftMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

const LeftMenu = ({ logoutUser, children }) => {
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
      {children}
    </div>
  );
};

export default LeftMenu;
