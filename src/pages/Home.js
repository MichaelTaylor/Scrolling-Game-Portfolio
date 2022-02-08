import React, { useState, useEffect } from "react";
import Styles from "./Home.module.css";

const Home = () => {
  const [showText, setShowText] = useState(false);

  const TextHandler = () => {
    setShowText(showText => !showText);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      TextHandler();
    }, 1500); //1000 = 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Styles.home}>
      {showText && <div className={Styles.fontStyle}>Scroll Down to Start</div>}
    </div>
  );
};

export default Home;
