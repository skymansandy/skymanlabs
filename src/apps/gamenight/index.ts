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
  tagline: "All your games, in one place.",
  icon,
  screenshots: [shot1, shot2, shot3, shot4, shot5, shot6, shot7, shot8],
  play: "", // TODO: real Play Store URL once published (shows "Coming soon" until set)
  appStore: "", // TODO: real App Store URL once published (shows "Coming soon" until set)
  description:
    "GameNight is a local-first companion for board-game nights. It's a searchable home for game-agnostic Tools and self-contained Games — everything runs on-device, no account required.",
  features: [
    {
      title: "Tools for any game",
      detail: "Score keeper, dice, timers, team generator, and more.",
    },
    {
      title: "Games built in",
      detail: "Werewolf, Imposter, Party Prompts, and a growing set.",
    },
    {
      title: "Pin & launch in a tap",
      detail: "Keep your favourites one tap away.",
    },
    {
      title: "No account, fully offline",
      detail: "Everything runs on-device — no sign-up, ever.",
    },
  ],
  privacy: {
    effectiveDate: "26 June 2026",
    posture:
      "GameNight is local-first and runs entirely on your device. There is no account, no sign-up, and nothing you do in the app is sent to us.",
  },
};
