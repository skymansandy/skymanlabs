import type { MetadataRoute } from "next";
import { appSubPages, apps } from "@/apps";
import { SITE } from "@/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...apps.flatMap((app) => [
      `/${app.id}`,
      ...appSubPages(app).map((page) => page.href),
    ]),
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
