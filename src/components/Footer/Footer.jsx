import React from "react";
import styles from "./Footer.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={clsx(styles.footer, "section", "container")} id="footer">
      <div className={styles.footer_container}>
        <h1 className={styles.footer_title}> <a href="#home" className={styles.footer_link}>Mukul</a></h1>

        <ul className={styles.footer_list}>
          <li className={styles.footer_list_item}>
            <a href="#about" className={styles.footer_link}> About</a>
          </li>

          <li className={styles.footer_list_item}>
            <a href="#portfolio" className={styles.footer_link}> Projects</a>
          </li>
          <li className={styles.footer_list_item}>
            <a href="#reviews" className={styles.footer_link}> Reviews</a>
          </li>
        </ul>

        <div className={styles.footer_socials}>
          <a
            href="https://github.com/iamukul23" target="_blank"
            className={styles.footer_social_link}
          >
            <BsGithub className={styles.footer_social_icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/cloudmukul/" target="_blank"
            className={styles.footer_social_link}
          >
            <BsLinkedin className={styles.footer_social_icon} />
          </a>
          <a
            href="https://www.facebook.com/share/1VG4ofpW1E/" target="_blank"
            className={styles.footer_social_link}
          >
            <FaFacebook className={styles.footer_social_icon} />
          </a>
          <a
            href="https://www.twitter.com/iamukul23" target="_blank"
            className={styles.footer_social_link}
          >
            <FiTwitter className={styles.footer_social_icon} />
          </a>
        </div>
        <span className={clsx(styles.footer_copy, "footer__copy")}>
          <small>&copy; 2025 MUKUL, All rights reserved.</small>
        </span>

      </div>
    </footer>
  );
};

export default Footer;