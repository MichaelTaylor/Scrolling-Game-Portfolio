import React, {useEffect} from "react";
import Styles from "./PlatformGroup.module.css";
import SteamLogo from "../images/Steam Logo.svg";
import GoGLogo from "../images/GoG Logo.svg";
import ItchLogo from "../images/Itch Logo.svg";
import SwitchLogo from "../images/Switch Logo.svg";
import XboxLogo from "../images/Xbox Logo.svg";
import PlayStationLogo from "../images/Playstation Logo.svg"
import Aos from "aos";
import "aos/dist/aos.css";

const anim = "fade-up";

const PlatformGroup = (props) => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={Styles.imageGroup}>
      {props.onSteam && (
        <img
          src={SteamLogo}
          alt=""
          onClick={props.SteamLink}
          className={Styles.imageButton}
          data-aos= {anim}
        />
      )}
      {props.onGoG && (
        <img
          src={GoGLogo}
          alt=""
          onClick={props.GoGLink}
          className={Styles.imageButton}
          data-aos={anim}
        />
      )}
      {props.onItch && (
        <img
          src={ItchLogo}
          alt=""
          onClick={props.ItchLink}
          className={Styles.imageButton}
          data-aos={anim}
        />
      )}
      {props.onSwitch && (
        <img
          src={SwitchLogo}
          alt=""
          onClick={props.SwitchLink}
          className={Styles.imageButton}
          data-aos={anim}
        />
      )}
      {props.onXbox && (
        <img
          src={XboxLogo}
          alt=""
          onClick={props.XboxLink}
          className={Styles.imageButton}
          data-aos={anim}
        />
      )}
      {props.onPlayStation && (
        <img
          src={PlayStationLogo}
          alt=""
          onClick={props.PlayStationLink}
          className={Styles.imageButton}
          data-aos={anim}
        />
      )}
    </div>
  );
};

export default PlatformGroup;
