import React from "react";
import "../../App.css";
import clsx from "clsx";
import styles from "./Skills.module.css";

import { MdHtml, MdCss, MdJavascript, MdPhp } from "react-icons/md";
import { FaReact, FaBootstrap, FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const Infinite_scroll = () => {
  return (
    <>
      <div className={styles.infinity_scroll}>
        <div className={styles.wrapper}>
          <div className={clsx(styles.itemLeft, styles.item1)}>
            {" "}
            <MdHtml className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemLeft, styles.item2)}>
            {" "}
            <MdCss className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemLeft, styles.item3)}>
            {" "}
            <MdJavascript className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemLeft, styles.item4)}>
            {" "}
            <FaJava className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemLeft, styles.item5)}>
            {" "}
            <FaReact className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemLeft, styles.item6)}>
            {" "}
            <FaBootstrap className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemLeft, styles.item7)}>
            {" "}
            <RiTailwindCssFill className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemLeft, styles.item8)}>
            {" "}
            <MdPhp className={clsx(styles.roll_icon)} />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={clsx(styles.itemRight, styles.item1)}>
            {" "}
            <FaReact className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemRight, styles.item2)}>
            {" "}
            <MdHtml className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemRight, styles.item3)}>
            {" "}
            <FaBootstrap className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemRight, styles.item4)}>
            {" "}
            <MdPhp className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemRight, styles.item5)}>
            {" "}
            <MdCss className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemRight, styles.item6)}>
            {" "}
            <FaJava className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemRight, styles.item7)}>
            {" "}
            <RiTailwindCssFill className={clsx(styles.roll_icon)} />
          </div>
          <div className={clsx(styles.itemRight, styles.item8)}>
            {" "}
            <MdJavascript className={clsx(styles.roll_icon)} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Infinite_scroll;
