import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/apps";
import { AppIcon } from "@/components/AppIcon";
import { StoreBadge } from "@/components/StoreBadge";

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
  if (!app) return { title: "Not found — skymanlabs" };
  return {
    title: `${app.name} — skymanlabs`,
    description: app.tagline ?? app.description,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const app = getApp((await params).app);
  if (!app) notFound();

  const hasStore = app.play || app.appStore;

  return (
    <div className="detail">
      <aside className="rail">
        <Link href="/" className="rail-home">
          ← skymanlabs
        </Link>
        {app.links?.length ? (
          <nav className="rail-nav" aria-label="Useful links">
            {app.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rail-link"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </aside>

      <main className="detail-main">
        <article className="hero">
          <AppIcon app={app} size={88} />
          <div className="hero-body">
            <h1 className="hero-name">{app.name}</h1>
            {app.tagline ? <p className="hero-tagline">{app.tagline}</p> : null}
            {hasStore ? (
              <div className="badges">
                <StoreBadge store="play" href={app.play} />
                <StoreBadge store="appStore" href={app.appStore} />
              </div>
            ) : null}
          </div>
        </article>

        {app.description ? (
          <section className="section">
            <h2 className="section-title">About</h2>
            <p className="section-text">{app.description}</p>
          </section>
        ) : null}

        {app.features?.length ? (
          <section className="section">
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
