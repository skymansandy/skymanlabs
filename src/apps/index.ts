import type { AppEntry } from "./types";
import { strive } from "./strive";
import { gamenight } from "./gamenight";
import { fullhouse } from "./fullhouse";

/** The apps shown on the front page, in display order. */
export const apps: AppEntry[] = [strive, gamenight, fullhouse];

/** Home-page groups, in display order. Empty groups are hidden by the page. */
export const APP_GROUPS = [
  { key: "app", title: "Apps" },
  { key: "game", title: "Games" },
] as const;

/** Look up an app by its id / slug. */
export function getApp(id: string): AppEntry | undefined {
  return apps.find((app) => app.id === id);
}

export type {
  AppEntry,
  AppFeature,
  AppLink,
  AppIconSource,
  AppCategory,
  AppPrivacy,
} from "./types";
