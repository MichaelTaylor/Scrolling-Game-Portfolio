import React, { useEffect } from "react";
import Styles from "./GameCard.module.css";
import PlatformGroup from "./PlatformGroup";
import Aos from "aos";
import "aos/dist/aos.css";

//aos animation documentation https://github.com/michalsnik/aos/tree/v2
const GameCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <React.Fragment>
      <div className={Styles.gameCard}>
        <h1 data-aos="fade" className={props.style}>{props.title}</h1>
        <div data-aos="fade" className={props.style}>{props.description}</div>

        <div data-aos= {props.fadeAnim} className={Styles.gifGroup}>
          <img src={props.TopGif} alt="loading..." className={props.footageBorder}/>
        </div>
        <PlatformGroup
          onSteam={props.onSteam}
          SteamLink={props.SteamLink}
          onGoG={props.onGoG}
          GoGLink={props.GoGLink}
          onItch={props.onItch}
          ItchLink={props.ItchLink}
          onSwitch={props.onSwitch}
          SwitchLink={props.SwitchLink}
          onXbox={props.onXbox}
          XboxLink={props.XboxLink}
          onPlayStation={props.onPlayStation}
          PlayStationLink={props.PlayStationLink}
        />
      </div>
    </React.Fragment>
  );
};

export default GameCard;
