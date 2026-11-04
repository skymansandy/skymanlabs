import type { MetadataRoute } from "next";
import { apps } from "@/apps";
import { SITE } from "@/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...apps.flatMap((app) => [
      `/${app.id}`,
      ...(app.guide ? [`/${app.id}/howtoplay`] : []),
      ...(app.privacy ? [`/${app.id}/privacy`] : []),
    ]),
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
