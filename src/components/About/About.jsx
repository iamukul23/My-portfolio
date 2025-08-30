import React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import styles from "./About.module.css";
import clsx from "clsx";
import profileImg from "../../assets/satya.png.jpg";
import Info from "./Info.jsx";
import useInView from "../hooks/useInView";

const About = () => {
  const [titleRef, titleVisible] = useInView();
  const [imgRef, imgVisible] = useInView();
  const [dataRef, dataVisible] = useInView();

  return (
    <section className={clsx(styles.about,  "section")} id="about">
      <div
        ref={titleRef}
        className={clsx(styles.section_titlebar, styles.fade_in, {
          [styles.in_view]: titleVisible,
        })}
      >
        <h2 className={styles.section_title}>About Me</h2>
        <span className={styles.section_subtitle}>My Introduction</span>
      </div>

      <div className={clsx(styles.about_container, "container" ,"grid")}>
        <img
          ref={imgRef}
          src={profileImg}
          alt="Profile"
          className={clsx(styles.about_img, styles.fade_in, {
            [styles.in_view]: imgVisible,
          })}
        />
        <div
          ref={dataRef}
          className={clsx(styles.about_data, styles.fade_in, {
            [styles.in_view]: dataVisible,
          })}
        >
          <Info />
          <p className={styles.about_description}>
            I’m a passionate web developer who loves building dynamic,
            responsive web applications. What began as a fascination with how
            websites work has grown into a fulfilling career. I constantly
            explore modern technologies, contribute to open-source, and embrace
            lifelong learning.
          </p>
          <a
            href="https://drive.google.com/file/d/10Q5LL86AN7Re8MPrnt2Pf4_lOSdAxiCs/view?usp=sharing"
            className={clsx(styles.button, styles.button_flex)}
            download
          >
            Download Resume <FiDownloadCloud />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
