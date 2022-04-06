import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./LeftMenu.module.scss";

const LeftMenu = ({
  logoutUser,
  children,
  setIsMainContent,
  isMainContent,
}) => {
  return (
    <div className={styles.bigger_screen_left_menu}>
      <a
        onClick={() => setIsMainContent(true)}
        style={{ color: isMainContent ? "#292b4d" : "" }}
      >
        <FontAwesomeIcon
          className={styles.dashboard_icon}
          icon={faTableColumns}
        />
        Dashboard
      </a>
      <a onClick={() => setIsMainContent(false)}>
        <FontAwesomeIcon className={styles.dashboard_icon} icon={faChartLine} />
        Report
      </a>
      <a>
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
