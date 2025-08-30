import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const inactivityTimer = useRef(null);

  const isTouchDevice = () =>
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouchDevice()) {
      setShouldRender(false);
      return;
    }

    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;

      const computedCursor = getComputedStyle(e.target).cursor;
      const isSystemCursorVisible =
        computedCursor !== "none" &&
        computedCursor !== "default" &&
        computedCursor !== "";

      // ✅ Only show custom cursor when system one is hidden AND user is active
      setIsVisible(!isSystemCursorVisible);

      resetInactivityTimer();
    };

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setIsVisible(false); // 💤 Hide after 5s of no movement
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(inactivityTimer.current);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${!isVisible ? styles.hidden : ""}`}
    />
  );
};

export default CustomCursor;
