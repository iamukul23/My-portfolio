import React from "react";
import clsx from "clsx";
import styles from "./Photograohy.module.css";

const HoverCard = ({
  imageUrl,
}) => {
  return (
    <div className={clsx(styles.card, "group")}>
      <img
        src={imageUrl}
        className={clsx(styles.image)}
      />

      <div className={styles.gradientOverlay}>
      </div>

    
    </div>
  );
};

export default HoverCard;
