import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./LeftMenu.module.scss";
import { setIsMainContent } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const LeftMenu = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMainContent = useSelector((state) => state.isMainContent);

  async function logoutUser() {
    const response = await fetch("https://upticket.herokuapp.com/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "DELETE, POST, GET, OPTIONS",
        "ccess-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      },
    });

    if (response.status === 200) {
      localStorage.clear();
      navigate("/logout");
    }
  }

  return (
    <div className={styles.bigger_screen_left_menu}>
      <a onClick={() => dispatch(setIsMainContent(true))} style={{ color: isMainContent ? "#f2f4f7" : "" }}>
        <FontAwesomeIcon className={styles.dashboard_icon} icon={faTableColumns} />
        Dashboard
      </a>
      <a onClick={() => dispatch(setIsMainContent(false))}>
        <FontAwesomeIcon className={styles.dashboard_icon} icon={faChartLine} />
        Report
      </a>
      <a>
        <FontAwesomeIcon className={styles.dashboard_icon} icon={faGear} />
        Settings
      </a>
      <a onClick={() => logoutUser()}>
        <FontAwesomeIcon className={styles.dashboard_icon} icon={faArrowRightFromBracket} />
        Logout
      </a>
      {children}
    </div>
  );
};

export default LeftMenu;
