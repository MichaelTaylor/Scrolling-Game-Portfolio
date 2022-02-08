import React from "react";
import GameCard from "./GameCard";
import Footage from "../images/Outpost Delta Gif.gif";
import Styles from "./OutpostDelta.module.css";

const GameDescription =
  "Take on the role of Delta, the outpost’s " +
  "emergency defense, who along with her AI companion " +
  "must defend the space station against alien intruders.";

  const GoToSteam = () =>{
    window.open("https://store.steampowered.com/app/1099090/Outpost_Delta","_blank");
  }
  
  const GoToSwitch = () =>{
    window.open("https://nintendo.com/games/detail/outpost-delta-switch", "_blank");
  }

  const GoToXbox = () =>{
    window.open("https://www.xbox.com/en-us/games/store/outpost-delta/9nnhvs9t4g71", "_blank");
  }

  const GoToPlayStation = () =>{
    window.open("https://store.playstation.com/en-us/product/UP5806-CUSA19413_00-OPDELTAEFSP00000/", "_blank");
  }


const OutpostDelta = () => {
  return (
    <React.Fragment>
      <GameCard
        title="Outpost Delta"
        description={GameDescription}
        onSteam={true}
        SteamLink={GoToSteam}
        onSwitch={true}
        SwitchLink={GoToSwitch}
        onXbox={true}
        XboxLink={GoToXbox}
        onPlayStation={true}
        PlayStationLink={GoToPlayStation}
        style = {Styles.textStyles}
        TopGif = {Footage}
        fadeAnim = "fade-right"
        footageBorder = {Styles.footage}
      />
    </React.Fragment>
  );
};

export default OutpostDelta;
