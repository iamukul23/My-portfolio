import React from "react";
import clsx from "clsx";
import "../../App.css"; // <-- Add this line
import styles from "./Services.module.css";

//timeline annimation
import { useEffect, useRef, useState } from "react";
// import { section } from "framer-motion/client";
const timelineData = [
  {
    time: "🗓️ August 2022-August-2026",
    title: "Bachlor of technology",
    subtitle: "Artifical intellgence and Mahine Learning",
    description: [
      "8.3 CGPA ",
    ],
  },
  {
    time: "🗓️ March 2021 – March 2022",
    title: "Senior Secondary Education",
    subtitle: "HBSE",
    description: ["81%",
    ],
  },
  {
    time: "🗓️ Jan 2019 – May 2020",
    title: "Senior Secondary ",
    subtitle: "HBSE",
    description: [  " 80%",
    ],
  },
  // {
  //   time: "🗓️ Aug 2024 – Dec 2024",
  //   title: "React Native Developer",
  //   subtitle: "Personal",
  //   description: [
  //     "Have a healthy meal.",
  //     "Take a short break walk.",
  //     "Avoid work distractions.",
  //   ],
  // },
  // {
  //   time: "🗓️ Jan 2024 – Jul 2024",
  //   title: "UI/UX Designer",
  //   subtitle: "Freelance",
  //   description: [
  //      "Created wireframes and mockups.",
  //     "Conducted user testing.",
  //     "Delivered responsive interfaces.",
  //   ],
  // },
  // {
  //   time: "🗓️ Jun 2023 – Dec 2023",
  //   title: "Web Designer",
  //   subtitle: "Professional",
  //   description: [
  //    "Designed websites and landing pages.",
  //     "Maintained visual brand identity.",
  //     "Optimized assets for web.",
  //   ],
  // },
  // {
  //   time: "🗓️ Jan 2023 – May 2023",
  //   title: "Frontend Developer",
  //   subtitle: "Personal",
  //   description: [
  //    "Developed modern portfolio website.",
  //     "Used React.js & GSAP for animations.",
  //     "Showcased projects and resume.",
  //   ],
  // },
];

function TimelineItem({ event, isLast, index, scrollDirection }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLeft = index % 2 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div >

      <li ref={ref} className={clsx(styles.timelineItem)}>
        {/* Left Side */}
        {isLeft ? (
          <div
            className={`${styles.content} ${styles.left} ${
              isVisible ? styles.visible : styles.hiddenLeft
            }`}
          >
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.subtitle}>{event.subtitle}</p>
            <ul className={styles.description}>
              {event.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            className={`${styles.time} ${
              isVisible ? styles.visible : styles.hidden
            }`}
          >
            {event.time}
          </div>
        )}

        {/* Dot and Line */}
        <div className={styles.connector}>
          <div
            className={`${styles.dot} ${isVisible ? styles.activeDot : ""}`}
          />
          {!isLast && (
            <div
              className={`${styles.line} ${
                isVisible ? styles.visibleLine : styles.hiddenLine
              } ${scrollDirection === "down" ? styles.down : styles.up}`}
            />
          )}
        </div>

        {/* Right Side */}
        {!isLeft ? (
          <div
            className={`${styles.content} ${styles.right} ${
              isVisible ? styles.visible : styles.hiddenRight
            }`}
          >
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.subtitle}>{event.subtitle}</p>
            <ul className={styles.description}>
              {event.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            className={`${styles.time} ${
              isVisible ? styles.visible : styles.hidden
            }`}
          >
            {event.time}
          </div>
        )}
      </li>
    </div>
  );
}

export function Timeline() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <ul className={styles.timelineList}>
        {timelineData.map((event, index) => (
          <TimelineItem
            key={index}
            event={event}
            index={index}
            isLast={index === timelineData.length - 1}
            scrollDirection={scrollDirection}
          />
        ))}
      </ul>
    </div>
  );
}
