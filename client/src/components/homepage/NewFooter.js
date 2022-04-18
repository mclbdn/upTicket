import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import check from "../../assets/check.svg";
import styles from "./NewFooter.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content_wrapper}>
        <div className={styles.links_sections}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
          </ul>
        </div>
        <div className={styles.links_sections}>
          <h3>Support</h3>
          <ul>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">API</a>
            </li>
          </ul>
        </div>
        <div className={styles.links_sections}>
          <h3>Misc.</h3>
          <ul>
            <li>
              <a href="https://github.com/mclbdn/upTicket" target="_blank">
                Star us on Github <FontAwesomeIcon icon={faGithub} style={{ color: "000" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.links_sections}>
          <p className={styles.logo_para}>
            <img src={check} alt="logo image" draggable="false" className={styles.logo_img} />
            upTicket
          </p>
          <ul className={styles.logo_ul}>
            <li>
              <p>version 2.0</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
