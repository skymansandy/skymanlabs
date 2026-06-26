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
  /** Extra custom links for the detail-page nav rail (beyond the standard ones). */
  links?: AppLink[];
  /** Privacy-policy content. Required for published apps. */
  privacy?: AppPrivacy;
}
