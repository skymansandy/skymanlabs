import type { AppEntry } from "../types";
import icon from "./icon.png";
import shot1 from "./screenshots/shot-1.webp";
import shot2 from "./screenshots/shot-2.webp";
import shot3 from "./screenshots/shot-3.webp";
import shot4 from "./screenshots/shot-4.webp";
import shot5 from "./screenshots/shot-5.webp";
import shot6 from "./screenshots/shot-6.webp";
import shot7 from "./screenshots/shot-7.webp";
import shot8 from "./screenshots/shot-8.webp";

// bundle id: com.skymanlabs.gamenight
export const gamenight: AppEntry = {
  id: "gamenight",
  name: "GameNight",
  category: "game",
  tagline: "Score keeper, party games & more — your all-in-one game night companion.",
  icon,
  screenshots: [shot1, shot2, shot3, shot4, shot5, shot6, shot7, shot8],
  play: "https://play.google.com/store/apps/details?id=com.skymanlabs.gamenight",
  appStore: "", // TODO: real App Store URL once published (shows "Coming soon" until set)
  description:
    "GameNight is the all-in-one companion for board games, card games, and party nights. Keep score, roll dice, flip a coin, run timers, spin a wheel, call Tambola, and split into fair teams — then jump straight into built-in party games like Truth or Dare, Would You Rather, Imposter, and Werewolf. No account, no sign-up, completely free, and works fully offline.",
  features: [
    {
      title: "One app, every tool",
      detail:
        "Score keeper, dice, coin flip, timers, spin wheel, team generator, and a full Tambola caller.",
    },
    {
      title: "Party games built in",
      detail:
        "Truth or Dare, Would You Rather, Imposter, and Werewolf — no setup, just play.",
    },
    {
      title: "Pin & launch in a tap",
      detail:
        "Keep favourite tools and games one tap away, and let Surprise Me pick what's next.",
    },
    {
      title: "Free, offline, no account",
      detail:
        "Everything runs on-device — no sign-up, no ads during play, works without internet.",
    },
  ],
  privacy: {
    effectiveDate: "26 June 2026",
    posture:
      "GameNight is local-first and runs entirely on your device. There is no account, no sign-up, and nothing you do in the app is sent to us.",
  },
};
