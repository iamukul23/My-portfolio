import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Scrollup.module.css";

const Scrollup = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={clsx(styles.scrollup, { [styles.show_scroll]: showScroll })}
    >
      <i className={clsx("uil", "uil-arrow-up", styles.scrollup_icon)}></i>
    </a>
  );
};

export default Scrollup;
