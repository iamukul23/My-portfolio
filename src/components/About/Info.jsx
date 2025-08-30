import React from "react";
import styles from "./About.module.css";
import clsx from "clsx";
import "../../App.css";

const Info = () => {
  return (
    <div className={clsx(styles.about_info, "grid")}>
      <div className={styles.about_box}>
        <i className="bx bx-award"></i>
        <h3 className={styles.about_title}>Experience</h3>
        <span className={styles.about_subtitle}>2 months </span>
      </div>

      <div className={styles.about_box}>
        <i className="bx bx-briefcase"></i>
        <h3 className={styles.about_title}>Completed</h3>
        <span className={styles.about_subtitle}>6+ projects</span>
      </div>

      <div className={styles.about_box}>
        <i className="bx bx-support"></i>
        <h3 className={styles.about_title}>Support</h3>
        <span className={styles.about_subtitle}>Available 24/7</span>
      </div>
    </div>
  );
};

export default Info;
