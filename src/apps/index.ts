import type { AppEntry } from "./types";
import { encore } from "./encore";
import { gamenight } from "./gamenight";
import { fullhouse } from "./fullhouse";

/** The apps shown on the front page, in display order. */
export const apps: AppEntry[] = [encore, gamenight, fullhouse];

/** Home-page groups, in display order. Empty groups are hidden by the page. */
export const APP_GROUPS = [
  { key: "app", title: "Apps" },
  { key: "game", title: "Games" },
] as const;

/** Look up an app by its id / slug. */
export function getApp(id: string): AppEntry | undefined {
  return apps.find((app) => app.id === id);
}

/** The route segment an app's guide lives at: games say "how to play", apps "help". */
export function guideSegment(app: AppEntry): "howtoplay" | "help" {
  return app.category === "game" ? "howtoplay" : "help";
}

/** A sub-page of an app's detail page. `slug` is also its hash alias (`/encore#faq`). */
export interface AppSubPage {
  slug: string;
  label: string;
  href: string;
}

/**
 * The sub-pages an app has, in rail order. The single source for the rail links,
 * hash redirects and sitemap, so a page that exists is always linked and indexed.
 */
export function appSubPages(app: AppEntry): AppSubPage[] {
  const page = (slug: string, label: string) => ({
    slug,
    label,
    href: `/${app.id}/${slug}`,
  });
  const guide = guideSegment(app);
  return [
    app.guide ? page(guide, guide === "help" ? "Help center" : "How to play") : null,
    app.faq?.length ? page("faq", "FAQ") : null,
    app.privacy ? page("privacy", "Privacy Policy") : null,
    app.terms ? page("terms", "Terms of Use") : null,
    app.acknowledgements?.length ? page("acknowledgements", "Acknowledgements") : null,
  ].filter((p): p is AppSubPage => p !== null);
}

export type {
  AppEntry,
  AppFeature,
  AppGuide,
  AppGuidePath,
  AppGuideStep,
  AppLink,
  AppIconSource,
  AppCategory,
  AppPrivacy,
  AppTerms,
  AppFaqGroup,
  AppFaqItem,
  AppCredit,
} from "./types";
