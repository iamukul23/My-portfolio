import clsx from "clsx";
import React from "react";
import "../../App.css";
import styles from "./Home.module.css";

const Social = () => {
  return (
    <div className={clsx(styles.home_social)}>
      <a
        href="https://www.behance.net/iamukul"
        className={clsx(styles.home_social_icon)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-behance"></i>
        {/* Behance */}
      </a>

      <a
        href="https://www.linkedin.com/in/cloudmukul/"
        className={clsx(styles.home_social_icon)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={clsx("uil uil-linkedin")}></i>
        {/* LinkedIn */}
      </a>

      <a
        href="https://github.com/iamukul23"
        className={clsx(styles.home_social_icon)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github"></i>
        {/* GitHub */}
      </a>
    </div>
  );
};

export default Social;
