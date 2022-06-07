import React from "react";
import Styles from "./GameCard.module.css";
import PlatformGroup from "./PlatformGroup";

const GameCard = ({ title, description, footage, platformInfo }) => {
  return (
    <React.Fragment>
      <div className={Styles.gameCard}>
        <div className={Styles.textStyle}>
          <h1>{title}</h1>
          <h3 className={Styles.descriptionStyle}>{description}</h3>
        </div>

        <div className={Styles.gifGroup}>
          <img src={footage} alt="loading..." />
        </div>
        <PlatformGroup platformInfo={platformInfo} />
      </div>
    </React.Fragment>
  );
};

export default GameCard;
