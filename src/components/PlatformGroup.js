import React from "react";
import Styles from "./PlatformGroup.module.css";
import SteamLogo from "../images/Steam Logo.svg";
import GoGLogo from "../images/GoG Logo.svg";
import ItchLogo from "../images/Itch Logo.svg";
import SwitchLogo from "../images/Switch Logo.svg";
import XboxLogo from "../images/Xbox Logo.svg";
import PlayStationLogo from "../images/Playstation Logo.svg";

const PlatformGroup = ({ platformInfo }) => {
  const GoToSteam = () => {
    window.open(platformInfo.SteamLink, "_blank");
  };

  const GoToGoG = () => {
    window.open(platformInfo.GoGLink, "_blank");
  };

  const GoToItch = () => {
    window.open(platformInfo.ItchLink, "_blank");
  };

  const GoToSwitch = () => {
    window.open(platformInfo.SwitchLink, "_blank");
  };

  const GoToXbox = () => {
    window.open(platformInfo.XboxLink, "_blank");
  };

  const GoToPlayStation = () => {
    window.open(platformInfo.platformInfo, "_blank");
  };

  return (
    <div className={Styles.imageGroup}>
      {platformInfo.onSteam && (
        <img
          src={SteamLogo}
          alt=""
          onClick={GoToSteam}
          className={Styles.imageButton}
        />
      )}
      {platformInfo.onGoG && (
        <img
          src={GoGLogo}
          alt=""
          onClick={GoToGoG}
          className={Styles.imageButton}
        />
      )}
      {platformInfo.onItch && (
        <img
          src={ItchLogo}
          alt=""
          onClick={GoToItch}
          className={Styles.imageButton}
        />
      )}
      {platformInfo.onSwitch && (
        <img
          src={SwitchLogo}
          alt=""
          onClick={GoToSwitch}
          className={Styles.imageButton}
        />
      )}
      {platformInfo.onXbox && (
        <img
          src={XboxLogo}
          alt=""
          onClick={GoToXbox}
          className={Styles.imageButton}
        />
      )}
      {platformInfo.onPlayStation && (
        <img
          src={PlayStationLogo}
          alt=""
          onClick={GoToPlayStation}
          className={Styles.imageButton}
        />
      )}
    </div>
  );
};

export default PlatformGroup;
