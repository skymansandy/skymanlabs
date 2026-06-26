import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/apps";
import { SITE } from "@/site";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps.filter((app) => app.privacy).map((app) => ({ app: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const app = getApp((await params).app);
  if (!app?.privacy) return {};
  const path = `/${app.id}/privacy`;
  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy policy for ${app.name} by ${SITE.name}.`,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app?.privacy) notFound();
  const { effectiveDate, posture, permissions, thirdParties } = app.privacy;

  return (
    <main className="legal">
      <Link href={`/${app.id}`} className="legal-back">
        ← {app.name}
      </Link>

      <h1>{app.name} Privacy Policy</h1>
      <p className="legal-date">Last updated: {effectiveDate}</p>

      <h2>Overview</h2>
      <p>{posture}</p>

      <h2>Information we collect</h2>
      <p>
        We do not collect, store, or transmit any personal information.
        Everything you create in {app.name} stays on your device.
      </p>
      {thirdParties && thirdParties.length > 0 ? (
        <p>
          {app.name} uses the following third-party services, which may process
          limited data as described in their own policies:{" "}
          {thirdParties.join(", ")}.
        </p>
      ) : (
        <p>
          {app.name} does not use third-party analytics, advertising, or
          tracking SDKs.
        </p>
      )}

      {permissions && permissions.length > 0 ? (
        <>
          <h2>Permissions</h2>
          <p>{app.name} requests the following permissions:</p>
          <ul>
            {permissions.map((permission) => (
              <li key={permission.name}>
                <strong>{permission.name}</strong> — {permission.reason}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <h2>How your information is used</h2>
      <p>
        Because {app.name} keeps everything on your device, your information is
        used solely to provide the app&apos;s features locally. It never leaves
        your device through {app.name}.
      </p>

      <h2>Data sharing and selling</h2>
      <p>
        We do not share, sell, or rent your data, because we never collect it.
      </p>

      <h2>Data retention and deletion</h2>
      <p>
        Any data {app.name} stores lives on your device. Uninstalling the app
        removes it. There is nothing stored on our servers to delete.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        {app.name} is not directed at children under 13 and does not knowingly
        collect personal information from anyone.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as {app.name} evolves. Material changes will be
        reflected on this page with a new effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </main>
  );
}
