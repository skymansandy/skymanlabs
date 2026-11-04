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

// bundle id: com.skymanlabs.fullhouse
export const fullhouse: AppEntry = {
  id: "fullhouse",
  name: "Tambola",
  category: "game",
  tagline: "Host Tambola night, right from your phone.",
  icon,
  screenshots: [shot1, shot2, shot3, shot4, shot5, shot6, shot7, shot8],
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
  guide: {
    intro:
      "When you open Tambola you land on the home screen — a greeting over a sample ticket and a “Choose how to play” section with two cards. Tap Caller mode if you're hosting and calling numbers for the room, or Ticket mode to play along on your own phone. First time here? Take the quick 3-step tour offered on launch — you can replay it anytime from Settings.",
    paths: [
      {
        title: "Host the game — Caller mode",
        tab: "Caller mode",
        intro:
          "One phone becomes the caller for the whole room. You draw the numbers and everyone else plays on their tickets.",
        steps: [
          {
            screen: "Home",
            title: "Tap “Caller mode”",
            detail:
              "On the home screen, choose the Caller mode card (“Call numbers yourself”).",
          },
          {
            screen: "Choose your preference",
            title: "Pick caller-only or manage prizes",
            detail:
              "Select “Caller only” to just call numbers, or “Caller + manage prize” to run a cash pool. The Help (?) icon opens a quick “How Solo Caller works” refresher.",
          },
          {
            screen: "Prize pool",
            title: "Set up prizes (optional)",
            detail:
              "If you chose to manage prizes, set the total pool and the amount for each prize — Early Five, Top Line, Middle Line, Bottom Line and Full House are there by default. Use “Add prize” for custom ones, or “Auto-split” to divide the pool evenly. The “Allocated” line keeps you on budget.",
          },
          {
            screen: "Choose your preference",
            title: "Tap “Start calling”",
            detail:
              "When everything looks right, tap “Start calling” to open the live caller.",
          },
          {
            screen: "Caller Mode",
            title: "Call the numbers",
            detail:
              "Tap the big Call button to draw the next number — it shows as a ball and is announced aloud. Flip “Auto” on to call hands-free at a 3s, 5s or 8s pace. Tap the number ball to repeat the current call, or open the board to see what's been called and what's left.",
          },
          {
            screen: "Prizes",
            title: "Record the winners",
            detail:
              "When someone claims a win, tap the trophy “Prizes” icon, choose the prize, and enter the winner's name. Tambola tracks how many prizes are won and splits the pool for you.",
          },
          {
            screen: "Game Results",
            title: "Wrap up the round",
            detail:
              "After the Full House — or once every prize is claimed — you'll see “Game over”. Prize games open Game Results with the standings, where you can “Share result” or “Play again” for a fresh round.",
          },
        ],
      },
      {
        title: "Play along — Ticket mode",
        tab: "Ticket mode",
        intro:
          "Follow the caller on your own phone and daub your ticket as numbers are called.",
        steps: [
          {
            screen: "Home",
            title: "Tap “Ticket mode”",
            detail:
              "On the home screen, choose the Ticket mode card (“Play with a random ticket”).",
          },
          {
            screen: "Choose your ticket",
            title: "Shuffle to your lucky ticket",
            detail:
              "You're handed a random ticket. Tap “Shuffle for another” until you like it, then tap “Start playing”.",
          },
          {
            screen: "Ticket Mode",
            title: "Daub as numbers are called",
            detail:
              "As the caller announces each number, tap it on your ticket to mark it; tap again to undo. This is your personal marking companion — the caller's phone runs the actual draw.",
          },
        ],
      },
    ],
    tips: [
      {
        title: "Voice & language",
        detail:
          "Every call is announced aloud. Set the announce voice in Settings → “Announcement language” (or the in-game Game menu) — English, Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati and Kannada.",
      },
      {
        title: "Resume a game",
        detail:
          "If a game gets interrupted, Tambola offers “Resume your game?” the next time you open it — pick up right where you left off, or hold to discard.",
      },
      {
        title: "Make it yours",
        detail:
          "Settings lets you set an accent color, light or dark theme, accent intensity, haptics, and sound.",
      },
    ],
  },
  privacy: {
    effectiveDate: "29 June 2026",
    posture:
      "Tambola is local-first and runs entirely on your device. There is no account, no sign-up, and the game state — tickets, called numbers, player names, and prize settings — stays on your device. We don't sell your data, show third-party ads, or track you across other apps.",
  },
};
