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

/** A single app. One self-contained module per app under src/apps/. */
export interface AppEntry {
  /** Stable id / slug — also the detail-page route (/[id]). */
  id: string;
  name: string;
  /** Short one-liner shown under the name. */
  tagline?: string;
  icon: AppIconSource;
  /** Google Play listing URL. Empty until published. */
  play?: string;
  /** Apple App Store listing URL. Empty until published. */
  appStore?: string;
  /** Longer paragraph for the detail page. */
  description?: string;
  /** Highlighted features for the detail page. */
  features?: AppFeature[];
  /** Useful links shown in the detail-page nav rail. */
  links?: AppLink[];
}
