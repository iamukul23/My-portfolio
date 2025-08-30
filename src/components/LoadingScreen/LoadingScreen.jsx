import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

const greetings = [
  "• Hello",         // English
  "• नमस्ते",         // Hindi
  "• প্রণাম",         // Bengali
  "• Hola",          // Spanish
  "• Bonjour",       // French
  "• Ciao",          // Italian
  "• こんにちは",      // Japanese
  "• 안녕하세요",       // Korean
  "• مرحبا",          // Arabic
  "• Hallo"          // German
];

const LoadingScreen = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 200);

    if (index === greetings.length) {
      clearInterval(interval);
      setFadeOut(true);

      // after fade out transition ends (1s), call onFinish
      setTimeout(() => {
        onFinish();
      }, 600);
    }

    return () => clearInterval(interval);
  }, [index, onFinish]);

  return (
    <div
      className={`${styles.loaderWrapper} ${fadeOut ? styles.fadeOut : ''}`}
    >
      <h1 className={styles.greetingText}>
        {index < greetings.length ? greetings[index] : ''}
      </h1>
    </div>
  );
};

export default LoadingScreen;
