import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/apps";
import { SITE } from "@/site";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps.filter((app) => app.faq?.length).map((app) => ({ app: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const app = getApp((await params).app);
  if (!app?.faq?.length) return {};
  const path = `/${app.id}/faq`;
  return {
    title: `${app.name} FAQ`,
    description: `Answers to common questions about ${app.name} by ${SITE.name}.`,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app?.faq?.length) notFound();

  // FAQPage structured data, so search can show the answers as rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: app.faq.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };

  return (
    <main className="legal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Link href={`/${app.id}`} className="legal-back">
        ← {app.name}
      </Link>

      <h1>{app.name} FAQ</h1>

      {app.faq.map((group) => (
        <section key={group.title} className="faq-group">
          <h2>{group.title}</h2>
          {group.items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>
      ))}

      <p className="faq-footer">
        Still stuck? Email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We usually reply
        within a day.
      </p>
    </main>
  );
}
