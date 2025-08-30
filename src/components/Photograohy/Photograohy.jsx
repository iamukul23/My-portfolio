import React from "react";
import "../../App.css";
import clsx from "clsx";
import HoverCard from "./HoverCard";
import styles from "./Photograohy.module.css";
import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";
import Image4 from "../../assets/4.png";
import Image5 from "../../assets/4.png";

const cardData = [
  {
    id: 1,
    imageUrl: Image1,
  }, 
  {
    id: 2,
    imageUrl: Image2,
  },
  {
    id: 3,
    imageUrl: Image3,
  },
  {
    id: 4,
    imageUrl: Image4,
  },
  
];

const Photograohy = () => {
  return (
    <section className={clsx(styles.reviews, "container", "section")} id="portfolio">
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}>My Passion Beyond Code</h2>
        <span className={clsx(styles.section_subtitle)}>📷 Capturing Moments Through My Lens</span>
      </div>

      <div className={clsx(styles.pageWrapper)}>
        <main className={clsx(styles.main)}>

          <div className={clsx(styles.grid)}>
            {cardData.map((card) => (
              <HoverCard
                key={card.id}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </main>
      </div>
    </section>

  );
};

export default Photograohy;