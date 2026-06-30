import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/apps";
import { SITE } from "@/site";
import { GuideTabs } from "@/components/GuideTabs";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps.filter((app) => app.guide).map((app) => ({ app: app.id }));
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
  if (!app?.guide) notFound();
  const { intro, paths, tips } = app.guide;

  return (
    <main className="legal guide">
      <Link href={`/${app.id}`} className="legal-back">
        ← {app.name}
      </Link>

      <h1>How to play {app.name}</h1>
      <p className="guide-intro">{intro}</p>

      <GuideTabs paths={paths} />

      {tips && tips.length > 0 ? (
        <section className="guide-path">
          <h2>Good to know</h2>
          <ul className="guide-tips">
            {tips.map((tip) => (
              <li key={tip.title}>
                <strong>{tip.title}</strong> — {tip.detail}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
