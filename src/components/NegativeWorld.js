import React from "react";
import GameCard from "./GameCard";
import Styles from "./NegativeWorld.module.css";
import TopGif from "../images/NegativeWorld Gif.gif";

const GameDescription =
  "What if there was a 2D puzzle game where " +
  "the jumps taken for granted were limited? The player plays as " +
  "'The Wanderer' traveling above the clouds to the reach to the mesosphere.";

const GoToSteam = () =>{
  window.open("https://store.steampowered.com/app/832130/Negative_World/","_blank");
}

const GoToItch = () =>{
  window.open("https://michaelktaylor.itch.io/negative-world", "_blank");
}

const NegativeWorld = () => {
  return (
    <React.Fragment>
      <GameCard
        title="Negative World"
        description={GameDescription}
        onSteam={true}
        SteamLink = {GoToSteam}
        onItch={true}
        ItchLink = {GoToItch}
        TopGif = {TopGif}
        style={Styles.textStyles}
        fadeAnim = "fade-right"
        footageBorder = {Styles.footage}
      />
    </React.Fragment>
  );
};

export default NegativeWorld;
