import React from "react";
import clsx from "clsx";
import styles from "./Portfolio.module.css";
import { Eye, Github } from "lucide-react";

const HoverCard = ({
  title,
  description,
  imageUrl,
  imageHeight,
  imageWidth,
  dataAiHint,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className={clsx(styles.card, "group")}>
      <img
        src={imageUrl}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        data-ai-hint={dataAiHint}
        className={clsx(styles.image)}
      />

      <div className={styles.gradientOverlay}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>

      <div className={styles.hoverContent}>
        <h3 className={styles.hoverTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <Github size={16} />
            GitHub
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <Eye size={16} />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
