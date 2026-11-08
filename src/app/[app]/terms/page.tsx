import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/apps";
import { SITE } from "@/site";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps.filter((app) => app.terms).map((app) => ({ app: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const app = getApp((await params).app);
  if (!app?.terms) return {};
  const path = `/${app.id}/terms`;
  return {
    title: `${app.name} Terms of Use`,
    description: `Terms of use for ${app.name} by ${SITE.name}.`,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app?.terms) notFound();
  const { effectiveDate, appSpecific } = app.terms;
  const privacyHref = app.privacy ? `/${app.id}/privacy` : null;

  return (
    <main className="legal">
      <Link href={`/${app.id}`} className="legal-back">
        ← {app.name}
      </Link>

      <h1>{app.name} Terms of Use</h1>
      <p className="legal-date">Last updated: {effectiveDate}</p>

      <p>
        These terms cover your use of {app.name}, made by {SITE.name} (&quot;we&quot;,
        &quot;us&quot;). By installing or using the app you agree to them. If you
        don&apos;t agree, please don&apos;t use {app.name}.
      </p>

      {appSpecific?.map((clause) => (
        <section key={clause.title}>
          <h2>{clause.title}</h2>
          <p>{clause.body}</p>
        </section>
      ))}

      <h2>Using the app</h2>
      <p>
        We give you a personal, non-transferable licence to use {app.name}{" "}on
        devices you own or control, for your own non-commercial use. Please
        don&apos;t copy, modify, reverse engineer, resell or redistribute the app,
        or use it to break the law or harm anyone else.
      </p>

      <h2>Your data</h2>
      <p>
        What you enter in {app.name} is yours.
        {privacyHref ? (
          <>
            {" "}
            How we handle data is explained in the{" "}
            <Link href={privacyHref}>Privacy Policy</Link>, which is part of these
            terms.
          </>
        ) : null}
      </p>

      <h2>Our content</h2>
      <p>
        The app&apos;s name, design, code and original content belong to us or to
        the people we license them from. Open-source parts stay under their own
        licences.
      </p>

      <h2>App store terms</h2>
      <p>
        If you got {app.name}{" "}from Google Play or the App Store, that store&apos;s
        terms also apply. Any purchases are handled by the store, under its
        billing and refund rules. Apple and Google aren&apos;t responsible for the
        app or for supporting it.
      </p>

      <h2>No warranty</h2>
      <p>
        We work hard to keep {app.name}{" "}reliable, but it&apos;s provided &quot;as
        is&quot; and &quot;as available&quot;. To the extent the law allows, we
        don&apos;t promise it will always work without errors or interruptions, or
        that it fits any particular purpose.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, we aren&apos;t liable for indirect or
        consequential losses, or for loss of data, arising from your use of{" "}
        {app.name}. Nothing in these terms limits liability that can&apos;t be
        limited by law.
      </p>

      <h2>Changes and ending</h2>
      <p>
        We may update the app, change features, or stop offering it. We may also
        update these terms. When we do, we&apos;ll change the date above, and
        material changes will be announced in the app or on this page. You can
        stop using {app.name} at any time by uninstalling it.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India, and any dispute will be
        handled by the courts of India. If you live elsewhere, you keep any
        consumer rights your local law gives you.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </main>
  );
}
