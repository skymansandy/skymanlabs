import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/apps";
import { SITE } from "@/site";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps
    .filter((app) => app.acknowledgements?.length)
    .map((app) => ({ app: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const app = getApp((await params).app);
  if (!app?.acknowledgements?.length) return {};
  const path = `/${app.id}/acknowledgements`;
  return {
    title: `${app.name} Acknowledgements`,
    description: `The open-source projects and content ${app.name} by ${SITE.name} is built on.`,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

export default async function AcknowledgementsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app?.acknowledgements?.length) notFound();

  return (
    <main className="legal">
      <Link href={`/${app.id}`} className="legal-back">
        ← {app.name}
      </Link>

      <h1>Acknowledgements</h1>
      <p className="legal-date">
        {app.name}{" "}wouldn&apos;t exist without these projects. Thank you to
        everyone who builds and maintains them.
      </p>

      <ul>
        {app.acknowledgements.map((credit) => (
          <li key={credit.name}>
            <a href={credit.href} target="_blank" rel="noopener noreferrer">
              <strong>{credit.name}</strong>
            </a>{" "}
            ({credit.license}) — {credit.detail}
          </li>
        ))}
      </ul>
    </main>
  );
}
