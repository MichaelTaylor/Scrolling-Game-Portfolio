import React from "react";
import GameCard from "./GameCard";
import Styles from "./TonightWeRiot.module.css"
import Footage from "../images/TonightWeRiotFootage.gif";

const GameDescription =
  "Tonight We Riot doesn’t have just one hero. Instead, you play as " +
  "a movement of people whose well-being determines the success of " +
  "your revolution.";

const GoToSteam = () =>{
  window.open("https://store.steampowered.com/app/290690/Tonight_We_Riot/","_blank");
}

const GoToGoG = () =>{
  window.open("https://www.gog.com/game/tonight_we_riot", "_blank");
}

const GoToItch = () =>{
  window.open("https://meansinteractive.itch.io/tonight-we-riot", "_blank");
}

const GoToSwitch = () =>{
  window.open("https://www.nintendo.com/games/detail/tonight-we-riot-switch/", "_blank");
}

const TonightWeRiot = () => {
  return (
    <React.Fragment>
      <GameCard
        title="Tonight We Riot"
        description={GameDescription}
        onSteam={true}
        SteamLink = {GoToSteam}
        onGoG={true}
        GoGLink={GoToGoG}
        onItch={true}
        ItchLink={GoToItch}
        onSwitch={true}
        SwitchLink={GoToSwitch}
        style = {Styles.textStyles}
        TopGif = {Footage}
        fadeAnim = "fade-left"
        footageBorder = {Styles.footage}
      />
    </React.Fragment>
  );
};

export default TonightWeRiot;
