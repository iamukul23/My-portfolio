import React from "react";
import "../../App.css";
import clsx from "clsx";
import HoverCard from "./HoverCard";
import styles from "./Portfolio.module.css";
import Image1 from "../../assets/111.png";
import Image2 from "../../assets/112.png";
import Image3 from "../../assets/113.png";
import Image4 from "../../assets/114.png";
import Image5 from "../../assets/115.png";
import Image6 from "../../assets/netflix.png";
// import Image6  from "../../assets/116.png";

const cardData = [
  {
    id: 1,
    title: "Red Connect",
    description: "A modern, full-stack Blood Donation Management System.",
    imageUrl: Image1,
    imageWidth: 400,
    imageHeight: 300,
    // dataAiHint: "quantum computing",
    githubUrl: "https://github.com/iamukul23/Red-Connect",
    liveUrl: "https://red-connect-nu.vercel.app/"
  },
  {
    id: 2,
    title: "EmailJS--API--Form",
    description: "A simple form integration using EmailJS API to send emails directly from your application without a backend.",
    imageUrl: Image4,
    imageWidth: 400,
    imageHeight: 500,
    // dataAiHint: "personalized medicine",
    githubUrl: "EmailJS--API-Form",
    liveUrl: "https://email-js-api-form-2xls.vercel.app/"
  },
  {
    id: 3,
    title: "Grocery-Store",
    description: "Exploring sustainable energy solutions for urban environments.",
    imageUrl: Image3,
    imageWidth: 400,
    imageHeight: 400,
    // dataAiHint: "sustainable energy",
    githubUrl: "https://github.com/iamukul23/Grocery-Store",
    liveUrl: "https://grocery-store-pi-one.vercel.app/"
  },
 
  // {
  //   id: 7,
  //   title: "Project Eta",
  //   description: "Creating accessible financial tools for emerging markets.",
  //   imageWidth: 400,
  //   imageHeight: 550,
  //   dataAiHint: "financial tools",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  // {
  //   id: 8,
  //   title: "Project Theta",
  //   description: "Advancing robotics for automated logistics and delivery.",
  //   imageWidth: 400,
  //   imageHeight: 250,
  //   dataAiHint: "robotics logistics",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // }
];

const Portfolio = () => {
  return (
    <section className={clsx(styles.reviews, "container", "section")} id="portfolio">
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}>Project Portfolio</h2>
        <span className={clsx(styles.section_subtitle)}>🧩 Showcase My Craft</span>
      </div>

      <div className={clsx(styles.pageWrapper)}>
        <main className={clsx(styles.main)}>

          <div className={clsx(styles.grid)}>
            {cardData.map((card) => (
              <HoverCard
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                imageWidth={card.imageWidth}
                imageHeight={card.imageHeight}
                dataAiHint={card.dataAiHint}
                githubUrl={card.githubUrl}
                liveUrl={card.liveUrl}
              />
            ))}
          </div>
        </main>
      </div>
    </section>

  );
};

export default Portfolio;