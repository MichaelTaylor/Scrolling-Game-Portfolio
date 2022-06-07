import NegativeWorldGif from "../images/NegativeWorld Gif.gif";
import TonightWeRiotGif from "../images/TonightWeRiotFootage.gif";
import OutpostDeltaGif from "../images/Outpost Delta Gif.gif";

export const GameCardData = [
  {
    id: "1",
    title: "Negative World",
    description:
      "What if there was a 2D puzzle game where " +
      "the jumps taken for granted were limited? The player plays as " +
      "'The Wanderer' traveling above the clouds to the reach to the mesosphere.",
    gameFootage: NegativeWorldGif,
    platformInfo: {
      onSteam: true,
      SteamLink: "https://store.steampowered.com/app/832130/Negative_World/",
      onGoG: false,
      GoGLink: "",
      onItch: true,
      ItchLink: "https://michaelktaylor.itch.io/negative-world",
      onSwitch: false,
      SwitchLink: "",
      onXbox: false,
      XboxLink: "",
      onPlayStation: false,
      PlayStationLink: "",
    },
  },
  {
    id: "2",
    title: "Tonight We Riot",
    description:
      "Tonight We Riot doesn’t have just one hero. Instead, you play as " +
      "a movement of people whose well-being determines the success of " +
      "your revolution.",
    gameFootage: TonightWeRiotGif,
    platformInfo: {
      onSteam: true,
      SteamLink: "https://store.steampowered.com/app/290690/Tonight_We_Riot/",
      onGoG: true,
      GoGLink: "https://www.gog.com/game/tonight_we_riot",
      onItch: true,
      ItchLink: "https://meansinteractive.itch.io/tonight-we-riot",
      onSwitch: true,
      SwitchLink:
        "https://www.nintendo.com/games/detail/tonight-we-riot-switch/",
      onXbox: false,
      XboxLink: "",
      onPlayStation: false,
      PlayStationLink: "",
    },
  },
  {
    id: "3",
    title: "Outpost Delta",
    description:
      "Take on the role of Delta, the outpost’s " +
      "emergency defense, who along with her AI companion " +
      "must defend the space station against alien intruders.",
    gameFootage: OutpostDeltaGif,
    platformInfo: {
      onSteam: true,
      SteamLink: "https://store.steampowered.com/app/1099090/Outpost_Delta",
      onGoG: true,
      GoGLink: "https://www.gog.com/game/tonight_we_riot",
      onItch: false,
      ItchLink: "",
      onSwitch: true,
      SwitchLink: "https://nintendo.com/games/detail/outpost-delta-switch",
      onXbox: true,
      XboxLink:
        "https://www.xbox.com/en-us/games/store/outpost-delta/9nnhvs9t4g71",
      onPlayStation: true,
      PlayStationLink:
        "https://store.playstation.com/en-us/product/UP5806-CUSA19413_00-OPDELTAEFSP00000/",
    },
  },
];
