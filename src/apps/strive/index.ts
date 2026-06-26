import type { AppEntry } from "../types";

// bundle id: com.skymanlabs.striveapp
export const strive: AppEntry = {
  id: "strive",
  name: "Strive",
  category: "app",
  tagline: "Most apps fight for your attention. This one gives it back.",
  icon: { monogram: "S" }, // placeholder — no asset yet
  play: "", // TODO: real Play Store URL once published (shows "Coming soon" until set)
  appStore: "", // TODO: real App Store URL once published (shows "Coming soon" until set)
  description:
    "Strive is an aspirational, redirect-style app blocker. The moment you open a distracting app, Strive steps in and surfaces your active goals — with direct shortcuts to the apps that actually move you forward.",
  features: [
    {
      title: "Redirect, don't just block",
      detail: "Intercepts distracting apps and points you back to what matters.",
    },
    {
      title: "Your goals, front and centre",
      detail: "Surfaces your active goals at the exact moment of distraction.",
    },
    {
      title: "One tap to aspiration",
      detail: "Direct shortcuts to the apps you actually want to be using.",
    },
    {
      title: "Android first",
      detail: "Built with Kotlin Multiplatform; iOS on the way.",
    },
  ],
  privacy: {
    effectiveDate: "26 June 2026",
    posture:
      "Strive runs entirely on your device. It has no account and does not send your personal data to us or anyone else.",
    permissions: [
      {
        name: "Usage access / Accessibility",
        reason:
          "To detect when you open an app you've chosen to block, so Strive can step in and surface your goals. This detection happens on your device and is never transmitted.",
      },
    ],
  },
};
