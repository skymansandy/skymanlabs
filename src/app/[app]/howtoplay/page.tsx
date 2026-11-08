import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getApp, guideSegment } from "@/apps";
import { SITE } from "@/site";
import { GuidePage } from "@/components/GuidePage";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps
    .filter((app) => app.guide && guideSegment(app) === "howtoplay")
    .map((app) => ({ app: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const app = getApp((await params).app);
  if (!app?.guide) return {};
  const path = `/${app.id}/howtoplay`;
  return {
    title: `How to play ${app.name}`,
    description: `A step-by-step guide to playing ${app.name} by ${SITE.name}.`,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

export default async function HowToPlayPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app?.guide || guideSegment(app) !== "howtoplay") notFound();

  return <GuidePage app={app} guide={app.guide} title={`How to play ${app.name}`} />;
}
