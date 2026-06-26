import Link from "next/link";
import type { AppEntry } from "@/apps";
import { AppIcon } from "./AppIcon";
import { StoreBadge } from "./StoreBadge";

export function AppCard({ app }: { app: AppEntry }) {
  const hasStore = app.play || app.appStore;

  return (
    <article className="card">
      <Link href={`/${app.id}`} className="card-link">
        <AppIcon app={app} size={56} />
        <span className="card-text">
          <span className="app-name">{app.name}</span>
          {app.tagline ? (
            <span className="app-tagline">{app.tagline}</span>
          ) : null}
        </span>
        <span className="card-arrow" aria-hidden="true">
          →
        </span>
      </Link>

      {hasStore ? (
        <div className="badges">
          <StoreBadge store="play" href={app.play} />
          <StoreBadge store="appStore" href={app.appStore} />
        </div>
      ) : null}
    </article>
  );
}
