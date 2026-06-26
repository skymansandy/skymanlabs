import Link from "next/link";
import type { AppEntry } from "@/apps";
import { AppIcon } from "./AppIcon";

export function AppCard({ app }: { app: AppEntry }) {
  return (
    <Link href={`/${app.id}`} className="card">
      <AppIcon app={app} size={56} />
      <span className="card-text">
        <span className="app-name">{app.name}</span>
        {app.tagline ? <span className="app-tagline">{app.tagline}</span> : null}
      </span>
      <span className="card-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
