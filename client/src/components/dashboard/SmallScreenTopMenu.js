import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./SmallScreenTopMenu.module.scss";
import { setIsMainContent } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SmallScreenTopMenu = ({ isMainContent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function logoutUser() {
    const response = await fetch(
      "https://upticket-server.herokuapp.com/api/logout"
    );

    if (response.status === 200) {
      localStorage.clear();
      navigate("/logout");
    }
  }

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
            <li onClick={() => dispatch(setIsMainContent(true))}>
              <FontAwesomeIcon
                style={{ color: isMainContent ? "#292b4d" : "" }}
                className={styles.dashboard_icon}
                icon={faTableColumns}
              />
            </li>
            <li onClick={() => dispatch(setIsMainContent(false))}>
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
              <a onClick={() => logoutUser()}>
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
