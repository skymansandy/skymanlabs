import type { AppEntry } from "./types";
import { strive } from "./strive";
import { gamenight } from "./gamenight";

/** The apps shown on the front page, in display order. */
export const apps: AppEntry[] = [strive, gamenight];

/** Look up an app by its id / slug. */
export function getApp(id: string): AppEntry | undefined {
  return apps.find((app) => app.id === id);
}

export type { AppEntry, AppFeature, AppLink, AppIconSource } from "./types";
