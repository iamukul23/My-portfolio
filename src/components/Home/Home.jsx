import React from "react";
import "../../App.css";
import styles from "./Home.module.css";
import clsx from "clsx";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import ScrollDown from "./ScrollDown.jsx";

const Home = () => {
  return (
    <section className={clsx(styles.home)} id="home">
      <div className={clsx(styles.home_container, "container", "grid")}>
        <div className={clsx(styles.home_content, styles.blocks, "grid")}>
          <Social></Social>
          <div className={clsx(styles.home_img, styles.blocks)}></div>
          <Data className={styles.blocks}></Data>
        </div>
        <ScrollDown className={styles.blocks}></ScrollDown>
      </div>
    </section>
  );
};

export default Home;
