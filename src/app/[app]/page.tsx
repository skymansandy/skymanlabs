import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { appSubPages, apps, getApp, type AppLink } from "@/apps";
import { SITE } from "@/site";
import { AppIcon } from "@/components/AppIcon";
import { StoreBadge } from "@/components/StoreBadge";
import { Carousel } from "@/components/Carousel";
import { HashRedirect } from "@/components/HashRedirect";

type Params = { app: string };

export function generateStaticParams(): Params[] {
  return apps.map((app) => ({ app: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const app = getApp((await params).app);
  if (!app) return {};
  const path = `/${app.id}`;
  return {
    title: app.name,
    description: app.tagline ?? app.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${app.name} — ${SITE.name}`,
      description: app.tagline ?? app.description,
      url: path,
    },
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app) notFound();

  // In-page section anchors — only the sections this app actually renders.
  // Drives the "On this page" quick-nav in the rail and the section ids below.
  const sections = [
    app.description ? { id: "about", label: "About" } : null,
    app.features?.length ? { id: "features", label: "Features" } : null,
  ].filter((s): s is { id: string; label: string } => s !== null);

  const subPages = appSubPages(app);

  // Standard nav links every app gets, plus any custom ones from its module.
  const navLinks: AppLink[] = [
    ...subPages.map(({ label, href }) => ({ label, href })),
    { label: "Contact", href: `mailto:${SITE.email}`, external: true },
    ...(app.links ?? []),
  ];

  // Hash links for content on its own page (e.g. `#howtoplay`) redirect there.
  const hashRoutes: Record<string, string> = Object.fromEntries(
    subPages.map(({ slug, href }) => [slug, href]),
  );

  return (
    <div className="detail">
      <HashRedirect routes={hashRoutes} />
      <aside className="rail">
        <Link href="/" className="rail-home">
          ← skymanlabs
        </Link>
        {sections.length ? (
          <nav className="rail-nav rail-sections" aria-label="On this page">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rail-link"
              >
                {section.label}
              </a>
            ))}
          </nav>
        ) : null}
        <nav className="rail-nav" aria-label="Useful links">
          {navLinks.map((link) => {
            // Protocol-handler links (mailto:/tel:) hand off to the OS and must
            // not open a new tab — target="_blank" leaves a stranded blank tab.
            const isProtocol = /^(mailto:|tel:)/.test(link.href);
            const newTab = link.external && !isProtocol;
            return (
              <a
                key={link.label}
                href={link.href}
                className="rail-link"
                {...(newTab
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </aside>

      <main className="detail-main">
        <article className="hero">
          <AppIcon app={app} size={88} />
          <div className="hero-body">
            <h1 className="hero-name">{app.name}</h1>
            {app.tagline ? <p className="hero-tagline">{app.tagline}</p> : null}
            <div className="badges">
              <StoreBadge store="play" href={app.play} />
              <StoreBadge store="appStore" href={app.appStore} />
            </div>
          </div>
        </article>

        {app.screenshots?.length ? (
          <section className="section">
            <Carousel
              images={app.screenshots.map((src, i) => ({
                src,
                alt: `${app.name} screenshot ${i + 1}`,
              }))}
            />
          </section>
        ) : null}

        {app.description ? (
          <section className="section" id="about">
            <h2 className="section-title">About</h2>
            <p className="section-text">{app.description}</p>
          </section>
        ) : null}

        {app.features?.length ? (
          <section className="section" id="features">
            <h2 className="section-title">Features</h2>
            <ul className="features">
              {app.features.map((feature) => (
                <li key={feature.title} className="feature">
                  <span className="feature-title">{feature.title}</span>
                  {feature.detail ? (
                    <span className="feature-detail">{feature.detail}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </div>
  );
}
