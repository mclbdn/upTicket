import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SmallScreenTopMenu.module.scss";

const SmallScreenTopMenu = ({ logoutUser, setIsMainContent, isMainContent }) => {
  return (
    <>
      <h2 className={styles.small_screen_welcome}>
        Welcome to your dashboard! <span>🎉</span>
      </h2>
      <hr className={styles.dashboard_divider} />
      <nav>
        <ul>
          <li>
            <div className={styles.username}>
              <p>John</p>
            </div>
          </li>
          <div className={styles.icons}>
            <li onClick={() => setIsMainContent(true)}>
              <FontAwesomeIcon
                style={{ color: isMainContent ? "#292b4d" : "" }}
                className={styles.dashboard_icon}
                icon={faTableColumns}
              />
            </li>
            <li onClick={() => setIsMainContent(false)}>
              <FontAwesomeIcon
                className={styles.dashboard_icon}
                icon={faChartLine}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.dashboard_icon}
                icon={faGear}
              />
            </li>
            <li>
              <a href="" onClick={() => logoutUser()}>
                {" "}
                <FontAwesomeIcon
                  className={styles.dashboard_icon}
                  icon={faArrowRightFromBracket}
                />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default SmallScreenTopMenu;
