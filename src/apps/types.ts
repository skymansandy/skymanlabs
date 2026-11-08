import type { StaticImageData } from "next/image";

/**
 * App icon source: either a statically-imported image, or a monogram letter
 * to render as a placeholder for apps without an asset yet.
 */
export type AppIconSource = StaticImageData | { monogram: string };

export interface AppFeature {
  title: string;
  detail?: string;
}

/** One numbered step within a how-to-play path. */
export interface AppGuideStep {
  /** In-app screen / area this step happens on, shown as a small label. */
  screen?: string;
  title: string;
  detail: string;
}

/** A distinct way to use the app (e.g. "Host as the caller"). */
export interface AppGuidePath {
  title: string;
  /** Short label for the tab control. Falls back to `title`. */
  tab?: string;
  intro?: string;
  steps: AppGuideStep[];
}

/** "How to play" guide content for an app's /howtoplay page. */
export interface AppGuide {
  /** Framing paragraph shown at the top of the guide. */
  intro: string;
  /** The main flows through the app, in display order. */
  paths: AppGuidePath[];
  /** Optional closing tips (settings, languages, resume, etc.). */
  tips?: { title: string; detail: string }[];
}

export interface AppLink {
  label: string;
  href: string;
  /** Open in a new tab (external resource). */
  external?: boolean;
}

/** Privacy-policy content for an app's /privacy page. */
export interface AppPrivacy {
  /** Human-readable effective date, e.g. "26 June 2026". */
  effectiveDate: string;
  /** One- or two-sentence privacy posture / overview. */
  posture: string;
  /** Device permissions the app requests, and why. Omit if none. */
  permissions?: { name: string; reason: string }[];
  /** Third-party services that receive data. Empty/omitted = none. */
  thirdParties?: string[];
  /**
   * What the app does collect, for apps that aren't collect-nothing. When set, the
   * policy itemises it and drops the "we collect nothing" wording.
   */
  collected?: { category: string; detail: string }[];
  /** What never leaves the device, even when `collected` is set. */
  onDevice?: string;
  /** How a user turns collection off. */
  optOut?: string;
  /** How long collected data is kept. */
  retention?: string;
  /** Overrides the default children's-privacy paragraph. */
  children?: string;
}

/** Terms-of-use content for an app's /terms page. */
export interface AppTerms {
  effectiveDate: string;
  /** Clauses specific to this app, shown before the general terms. */
  appSpecific?: { title: string; body: string }[];
}

/** One question on an app's /faq page. */
export interface AppFaqItem {
  question: string;
  answer: string;
}

/** A group of questions on the /faq page. */
export interface AppFaqGroup {
  title: string;
  items: AppFaqItem[];
}

/** A credit on an app's /acknowledgements page. */
export interface AppCredit {
  name: string;
  detail: string;
  license: string;
  href: string;
}

/** Grouping bucket on the home page. */
export type AppCategory = "app" | "game";

/** A single app. One self-contained module per app under src/apps/. */
export interface AppEntry {
  /** Stable id / slug — also the detail-page route (/[id]). */
  id: string;
  name: string;
  /** Which home-page group this belongs to. */
  category: AppCategory;
  /** Short one-liner shown under the name. */
  tagline?: string;
  icon: AppIconSource;
  /** Screenshots shown in the detail-page carousel. Co-located in the app module. */
  screenshots?: StaticImageData[];
  /** Google Play listing URL. Empty until published. */
  play?: string;
  /** Apple App Store listing URL. Empty until published. */
  appStore?: string;
  /** Longer paragraph for the detail page. */
  description?: string;
  /** Highlighted features for the detail page. */
  features?: AppFeature[];
  /**
   * Step-by-step guide. Games render it as /howtoplay ("How to play"), apps as
   * /help ("Help center").
   */
  guide?: AppGuide;
  /** Frequently asked questions, in groups. Rendered on /faq. */
  faq?: AppFaqGroup[];
  /** Terms of use. Rendered on /terms. */
  terms?: AppTerms;
  /** Open-source and content credits. Rendered on /acknowledgements. */
  acknowledgements?: AppCredit[];
  /** Extra custom links for the detail-page nav rail (beyond the standard ones). */
  links?: AppLink[];
  /** Privacy-policy content. Required for published apps. */
  privacy?: AppPrivacy;
}
