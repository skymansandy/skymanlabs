import type { AppEntry } from "../types";

// bundle id: com.skymanlabs.fullhouse
export const fullhouse: AppEntry = {
  id: "fullhouse",
  name: "Tambola",
  category: "game",
  tagline: "Host Tambola night, right from your phone.",
  icon: { monogram: "T" },
  play: "https://play.google.com/store/apps/details?id=com.skymanlabs.fullhouse",
  appStore: "", // TODO: real App Store URL once published (shows "Coming soon" until set)
  description:
    "Tambola (Housie) turns any phone into the caller for game night. Draw numbers with a tap or hands-free auto-call, hear every number announced aloud in your language, manage the prize pool and split it across patterns, and mark your own ticket as the caller plays. Local-first and offline — no account, no sign-up.",
  features: [
    {
      title: "Be the caller",
      detail: "Tap to draw, or switch on auto-call to run the game hands-free.",
    },
    {
      title: "Spoken numbers",
      detail: "Every call announced aloud, with a choice of voice and language.",
    },
    {
      title: "Prizes, sorted",
      detail: "Set a cash pool and split it across Early Five, lines, and Full House.",
    },
    {
      title: "Play along",
      detail: "Mark your own ticket as numbers are called, on the same device.",
    },
  ],
  privacy: {
    effectiveDate: "29 June 2026",
    posture:
      "Tambola is local-first and runs entirely on your device. There is no account, no sign-up, and the game state — tickets, called numbers, player names, and prize settings — stays on your device. We don't sell your data, show third-party ads, or track you across other apps.",
  },
};
