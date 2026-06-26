import type { AppEntry } from "../types";
import icon from "./icon.png";

// bundle id: com.skymanlabs.gamenight
export const gamenight: AppEntry = {
  id: "gamenight",
  name: "GameNight",
  tagline: "All your games, in one place.",
  icon,
  play: "#", // TODO: real Play Store URL once published
  appStore: "#", // TODO: real App Store URL once published
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
  links: [
    { label: "Privacy Policy", href: "#" }, // TODO: real privacy policy URL
    { label: "Support", href: "#" }, // TODO: support/contact URL or mailto:
  ],
};
