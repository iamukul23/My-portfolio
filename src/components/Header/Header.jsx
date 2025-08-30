import React from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import profileImg from "../../assets/logo1.png";
import "../../App.css";
const Header = () => {
  const [Toggle, showMenu] = React.useState(false);


  return (
    <header className={clsx(styles.header)}>
      <nav className={clsx(styles.nav, "container")}>
        <div className={clsx(styles.nav_logo)}>
          <img
            className={clsx(styles.logo)}
            src={profileImg}
            alt="My Photo"
            width="42"
          />
          <h1>@Mukul</h1>
        </div>

        <div className={Toggle ? clsx(styles.nav_menu, styles.show_menu) : clsx(styles.nav_menu)}>
          <ul className={clsx(styles.nav_list, styles.grid)}>
            <li className={clsx(styles.nav_item)}>
              <a
                className={clsx(styles.nav_link, styles.active_link)}
                href="#home"
              >
                <i className={clsx("uil", "uil-estate", styles.nav_icon)} ></i>
                Home
              </a>
            </li>
            <li className={clsx(styles.nav_item)}>
              <a className={clsx(styles.nav_link)} href="#about">
                <i className={clsx("uil", "uil-user", styles.nav_icon)}></i>
                About
              </a>
            </li>
            <li className={clsx(styles.nav_item)}>
              <a className={clsx(styles.nav_link)} href="#skills">
                <i className={clsx("uil", "uil-file-alt", styles.nav_icon)}></i>
                Skills
              </a>
            </li>
            <li>
              <a className={clsx(styles.nav_link)} href="#services">
                <i
                  className={clsx("uil", "uil-briefcase-alt", styles.nav_icon)}
                ></i>
                Services
              </a>
            </li>
            <li>
              <a className={clsx(styles.nav_link)} href="#portfolio">
                <i className={clsx("uil", "uil-scenery", styles.nav_icon)}></i>
                Project
              </a>
            </li>
            <li>
              <a className={clsx(styles.nav_link)} href="#contact">
                <i className={clsx("uil", "uil-envelope", styles.nav_icon)}></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className={clsx("uil", "uil-times", styles.nav_close)}
            onClick={() => showMenu(false)}
          ></i>
        </div>
        <div className={clsx(styles.nav_toggle)}>
          <i
            className={clsx("uil", "uil-apps", styles.nav_toggle)}
            onClick={() => showMenu(true)}
          ></i>
        </div>

      </nav>
    </header>
  );
};

export default Header;
