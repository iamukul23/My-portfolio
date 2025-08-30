import React from "react";
import "../../App.css";
import clsx from "clsx";
import styles from "./Reviews.module.css"; // Adjust the path as necessary
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Data } from "./Data";

const Reviews = () => {
  return (
    <section className={clsx(styles.reviews, "container", "section")} id="reviews" >
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}>What People Say About Me?</h2>
        <span className={clsx(styles.section_subtitle)}>⭐️ Customer feedback highlights</span>
      </div>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className={clsx(styles.reviews_container)} id="reviews_container">
        {Data.map(({ id, image, title, subtitle, description }) => {
          return (
            <SwiperSlide className={clsx(styles.reviews_card)} key={id}>
              <div>
                <img
                  src={image}
                  alt=""
                  className={clsx(styles.reviews_img)}
                />
              </div>
              <div className={clsx(styles.reviews_data)}>
                <h3 className={clsx(styles.reviews_name)}>{title}</h3>
                <span className={clsx(styles.reviews_subtitle)}>
                  {subtitle}
                </span>
                <p className={clsx(styles.reviews_description)}>
                  {description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>
  );
};
export default Reviews;
