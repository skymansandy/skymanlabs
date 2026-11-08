import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getApp, guideSegment } from "@/apps";
import { SITE } from "@/site";
import { GuidePage } from "@/components/GuidePage";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps
    .filter((app) => app.guide && guideSegment(app) === "help")
    .map((app) => ({ app: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const app = getApp((await params).app);
  if (!app?.guide) return {};
  const path = `/${app.id}/help`;
  return {
    title: `${app.name} Help center`,
    description: `How to get started with ${app.name} by ${SITE.name}.`,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

export default async function HelpPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app?.guide || guideSegment(app) !== "help") notFound();

  return <GuidePage app={app} guide={app.guide} title={`${app.name} Help center`} />;
}
